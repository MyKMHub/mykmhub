const RATIOS: Record<string, { openai: string; width: number; height: number }> = {
  "1:1": { openai: "1024x1024", width: 1024, height: 1024 },
  "16:9": { openai: "1536x864", width: 1440, height: 816 },
  "9:16": { openai: "864x1536", width: 816, height: 1440 },
  "4:5": { openai: "1024x1280", width: 1024, height: 1280 },
  "21:9": { openai: "2016x864", width: 1344, height: 576 },
  "4:3": { openai: "1280x960", width: 1152, height: 864 },
};

const QUALITIES = new Set(["low", "medium", "high"]);
const ENGINES = new Set(["openai", "gemini", "stable-diffusion"]);
type SupportedEngine = "openai" | "gemini" | "stable-diffusion";

function providerError(status: number, message?: string) {
  return Response.json(
    { error: message || "The image provider rejected the request." },
    { status: status >= 500 ? 502 : status },
  );
}

async function generateOpenAi(
  apiKey: string,
  prompt: string,
  ratio: (typeof RATIOS)[string],
  quality: string,
) {
  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-image-2",
      prompt,
      size: ratio.openai,
      quality,
      output_format: "png",
      n: 1,
    }),
    cache: "no-store",
  });
  const result = (await response.json()) as {
    data?: Array<{ b64_json?: string }>;
    error?: { message?: string };
  };
  if (!response.ok) return providerError(response.status, result.error?.message);

  const encoded = result.data?.[0]?.b64_json;
  if (!encoded) return providerError(502, "OpenAI returned no image.");
  return imageResponse(`data:image/png;base64,${encoded}`);
}

async function generateGemini(
  apiKey: string,
  prompt: string,
  aspectRatio: string,
  quality: string,
) {
  const imageSize = quality === "high" ? "2K" : quality === "low" ? "512px" : "1K";
  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/interactions",
    {
      method: "POST",
      headers: {
        "x-goog-api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gemini-3.1-flash-image",
        input: prompt,
        response_format: {
          type: "image",
          mime_type: "image/png",
          aspect_ratio: aspectRatio,
          image_size: imageSize,
        },
      }),
      cache: "no-store",
    },
  );
  const result = (await response.json()) as {
    output_image?: { data?: string; mime_type?: string };
    error?: { message?: string };
  };
  if (!response.ok) return providerError(response.status, result.error?.message);

  const encoded = result.output_image?.data;
  if (!encoded) return providerError(502, "Gemini returned no image.");
  return imageResponse(
    `data:${result.output_image?.mime_type || "image/png"};base64,${encoded}`,
  );
}

async function generateFlux(
  apiKey: string,
  prompt: string,
  ratio: (typeof RATIOS)[string],
) {
  const submission = await fetch(
    "https://api.bfl.ai/v1/flux-2-pro-preview",
    {
      method: "POST",
      headers: {
        "x-key": apiKey,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        prompt,
        width: ratio.width,
        height: ratio.height,
        output_format: "png",
      }),
      cache: "no-store",
    },
  );
  const task = (await submission.json()) as {
    polling_url?: string;
    detail?: string;
  };
  if (!submission.ok) return providerError(submission.status, task.detail);
  if (!task.polling_url) return providerError(502, "FLUX returned no polling URL.");

  const pollingUrl = new URL(task.polling_url);
  if (
    pollingUrl.protocol !== "https:" ||
    !(pollingUrl.hostname === "bfl.ai" || pollingUrl.hostname.endsWith(".bfl.ai"))
  ) {
    return providerError(502, "FLUX returned an invalid polling URL.");
  }

  for (let attempt = 0; attempt < 60; attempt += 1) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const poll = await fetch(pollingUrl, {
      headers: { "x-key": apiKey, accept: "application/json" },
      cache: "no-store",
    });
    const result = (await poll.json()) as {
      status?: string;
      result?: { sample?: string };
      detail?: string;
    };
    if (!poll.ok) return providerError(poll.status, result.detail);
    if (result.status === "Error" || result.status === "Failed") {
      return providerError(502, result.detail || "FLUX generation failed.");
    }
    if (result.status === "Ready" && result.result?.sample) {
      const image = await fetch(result.result.sample, { cache: "no-store" });
      if (!image.ok) return providerError(502, "Could not retrieve the FLUX image.");
      const encoded = Buffer.from(await image.arrayBuffer()).toString("base64");
      return imageResponse(
        `data:${image.headers.get("content-type") || "image/png"};base64,${encoded}`,
      );
    }
  }
  return providerError(504, "FLUX generation timed out. Try again.");
}

function imageResponse(image: string) {
  return Response.json(
    { image },
    { headers: { "Cache-Control": "no-store" } },
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "The request body must be valid JSON." }, { status: 400 });
  }

  const input = body as {
    prompt?: unknown;
    aspectRatio?: unknown;
    quality?: unknown;
    engine?: unknown;
    apiKey?: unknown;
  };
  const prompt = typeof input.prompt === "string" ? input.prompt.trim() : "";
  const aspectRatio =
    typeof input.aspectRatio === "string" ? input.aspectRatio : "1:1";
  const quality = typeof input.quality === "string" ? input.quality : "low";
  const engine =
    typeof input.engine === "string" ? input.engine : "openai";

  if (!prompt || prompt.length > 4000) {
    return Response.json(
      { error: "The prompt must contain between 1 and 4,000 characters." },
      { status: 400 },
    );
  }
  if (!RATIOS[aspectRatio] || !QUALITIES.has(quality) || !ENGINES.has(engine)) {
    return Response.json({ error: "Unsupported image parameters." }, { status: 400 });
  }

  const serverKeys: Record<SupportedEngine, string | undefined> = {
    openai: process.env.OPENAI_API_KEY,
    gemini: process.env.GEMINI_API_KEY,
    "stable-diffusion": process.env.BFL_API_KEY,
  };
  const supportedEngine = engine as SupportedEngine;
  const suppliedApiKey =
    typeof input.apiKey === "string" ? input.apiKey.trim() : "";
  const apiKey = suppliedApiKey || serverKeys[supportedEngine]?.trim() || "";
  if (!apiKey) {
    return Response.json(
      { error: `Add the API key for the selected provider to generate an image.` },
      { status: 401 },
    );
  }
  if (apiKey.length > 512 || /[\r\n]/.test(apiKey)) {
    return Response.json({ error: "The supplied API key is invalid." }, { status: 400 });
  }

  if (supportedEngine === "openai") {
    return generateOpenAi(apiKey, prompt, RATIOS[aspectRatio], quality);
  }
  if (supportedEngine === "gemini") {
    return generateGemini(apiKey, prompt, aspectRatio, quality);
  }
  return generateFlux(apiKey, prompt, RATIOS[aspectRatio]);
}
