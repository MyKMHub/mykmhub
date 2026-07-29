const RATIOS: Record<string, string> = {
  "1:1": "1024x1024",
  "16:9": "1536x864",
  "9:16": "864x1536",
  "4:5": "1024x1280",
  "21:9": "2016x864",
  "4:3": "1280x960",
};

const QUALITIES = new Set(["low", "medium", "high"]);

export async function POST(request: Request) {
  if (
    process.env.IMAGE_GENERATION_ENABLED !== "true" ||
    !process.env.OPENAI_API_KEY
  ) {
    return Response.json(
      {
        error:
          "Image generation is not configured. The prompt architect and copyable engine output remain available.",
      },
      { status: 503 },
    );
  }

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
  };
  const prompt = typeof input.prompt === "string" ? input.prompt.trim() : "";
  const aspectRatio =
    typeof input.aspectRatio === "string" ? input.aspectRatio : "1:1";
  const quality = typeof input.quality === "string" ? input.quality : "low";

  if (!prompt || prompt.length > 4000) {
    return Response.json(
      { error: "The prompt must contain between 1 and 4,000 characters." },
      { status: 400 },
    );
  }
  if (!RATIOS[aspectRatio] || !QUALITIES.has(quality)) {
    return Response.json({ error: "Unsupported image parameters." }, { status: 400 });
  }

  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-image-2",
      prompt,
      size: RATIOS[aspectRatio],
      quality,
      output_format: "png",
      n: 1,
    }),
  });
  const result = (await response.json()) as {
    data?: Array<{ b64_json?: string }>;
    error?: { message?: string };
  };

  if (!response.ok) {
    return Response.json(
      { error: result.error?.message || "The image provider rejected the request." },
      { status: response.status >= 500 ? 502 : response.status },
    );
  }

  const encoded = result.data?.[0]?.b64_json;
  if (!encoded) {
    return Response.json({ error: "The image provider returned no image." }, { status: 502 });
  }

  return Response.json({
    image: `data:image/png;base64,${encoded}`,
  });
}
