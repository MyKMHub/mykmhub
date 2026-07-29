"use client";

import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemTitle,
} from "@react-spectrum/s2/Accordion";
import { Button } from "@react-spectrum/s2/Button";
import { Checkbox, CheckboxGroup } from "@react-spectrum/s2/CheckboxGroup";
import { Picker, PickerItem } from "@react-spectrum/s2/Picker";
import { Slider } from "@react-spectrum/s2/Slider";
import { Switch } from "@react-spectrum/s2/Switch";
import { TextArea } from "@react-spectrum/s2/TextArea";
import { TextField } from "@react-spectrum/s2/TextField";
import { useMemo, useState } from "react";

type Engine = "openai" | "gemini" | "midjourney" | "stable-diffusion";
type Quality = "low" | "medium" | "high";

const OPTIONS = {
  traits: ["Young adult", "Elderly", "Android", "Cybernetic", "Armor", "Casualwear", "Formalwear", "Futuristic suit"],
  action: ["Standing", "Seated", "Running", "Dynamic action pose", "Looking at camera", "Profile view", "Floating", "Reclining"],
  scale: ["Solo subject", "Pair", "Group", "Crowd", "Miniature scale", "Towering giant"],
  setting: ["Minimalist studio", "Modern office", "Nordic forest", "Cyberpunk alleyway", "Sci-fi interior", "Fantasy castle", "Deep space station", "Abandoned ruins", "Tropical beach", "Volcanic cavern"],
  era: ["Golden hour", "Blue hour", "Dawn", "Midnight", "1980s synth era", "Cyberpunk future", "Medieval era", "1920s noir", "Victorian era", "Ancient Rome"],
  atmosphere: ["Dense fog", "Rain with wet reflections", "Heavy snowfall", "Volumetric haze", "Harsh direct sunlight", "Cinematic smoke", "Dust storm"],
  medium: ["Photography", "Digital art", "Oil painting", "Watercolor", "3D render", "Anime or manga", "Pencil sketch", "Charcoal drawing", "Vector illustration", "35mm film"],
  style: ["No added reference", "Vintage comic", "Vogue editorial", "Film noir", "Cinematic movie still", "Cyberpunk aesthetic", "Ukiyo-e woodblock", "Storybook animation"],
  framing: ["Extreme close-up", "Macro shot", "Portrait", "Medium shot", "Full body", "Wide establishing shot", "Aerial drone view"],
  angle: ["Eye-level", "Low-angle hero shot", "High-angle", "Bird's-eye view", "Worm's-eye view", "Dutch angle"],
  lens: ["24mm wide-angle", "50mm standard", "85mm portrait", "Macro lens", "Shallow depth of field", "Deep focus", "Tilt-shift lens", "Lens flare"],
  lighting: ["Key side lighting", "Rim light or backlit", "Top spotlight", "Ambient diffused light", "Underlighting", "Direct sunlight", "Soft studio light", "Volumetric rays"],
  palette: ["Natural color", "Warm tones", "Cool tones", "Monochromatic", "Pastels", "Muted earthy", "Teal and orange", "High-contrast primary"],
  materials: ["Glass", "Polished chrome", "Weathered leather", "Brushed steel", "Wet asphalt", "Matte ceramic", "Velvet", "Carbon fiber"],
  lettering: ["No specified style", "Neon tubing", "Bold serif", "Script cursive", "Chalk lettering", "Retro block", "Sci-fi UI typography"],
  overlays: ["HUD interface overlay", "Emblem badge", "Decorative border frame", "Minimal logo"],
  negatives: ["Text", "Watermark", "Signature", "Blur", "Extra limbs", "Low quality", "Clutter", "Deformed anatomy", "Cropped subject"],
} as const;

const ENGINES: Array<{ id: Engine; label: string }> = [
  { id: "openai", label: "OpenAI GPT Image" },
  { id: "gemini", label: "Google Gemini" },
  { id: "midjourney", label: "Midjourney v6 / v7" },
  { id: "stable-diffusion", label: "Black Forest Labs FLUX" },
];

const CREDENTIALS: Record<Exclude<Engine, "midjourney">, {
  label: string;
  description: string;
}> = {
  openai: {
    label: "OpenAI API key",
    description: "Used only for this OpenAI generation request. Optional when MyKMHub has an OpenAI server key.",
  },
  gemini: {
    label: "Google Gemini API key",
    description: "Used only for this Gemini generation request. Optional when MyKMHub has a Gemini server key.",
  },
  "stable-diffusion": {
    label: "Black Forest Labs API key",
    description: "Used only for this FLUX generation request. Optional when MyKMHub has a BFL server key.",
  },
};

const EMPTY_API_KEYS: Record<Engine, string> = {
  openai: "",
  gemini: "",
  midjourney: "",
  "stable-diffusion": "",
};

const ASPECTS = [
  { id: "1:1", label: "1:1 square" },
  { id: "16:9", label: "16:9 landscape" },
  { id: "9:16", label: "9:16 portrait" },
  { id: "4:5", label: "4:5 portrait" },
  { id: "21:9", label: "21:9 ultrawide" },
  { id: "4:3", label: "4:3 classic" },
] as const;

interface PromptState {
  engine: Engine;
  subject: string;
  traits: string[];
  action: string;
  scale: string;
  setting: string;
  settingCustom: string;
  era: string[];
  atmosphere: string[];
  medium: string;
  style: string;
  styleCustom: string;
  framing: string;
  angle: string;
  lens: string;
  lighting: string[];
  palette: string;
  paletteHex: string;
  materials: string[];
  typography: string;
  lettering: string;
  overlays: string[];
  reference: string;
  aspect: string;
  quality: Quality;
  negatives: string[];
  customNegative: string;
  cfg: number;
  seed: string;
  tile: boolean;
}

const INITIAL: PromptState = {
  engine: "openai",
  subject: "",
  traits: [],
  action: "Standing",
  scale: "Solo subject",
  setting: "Minimalist studio",
  settingCustom: "",
  era: [],
  atmosphere: [],
  medium: "Photography",
  style: "No added reference",
  styleCustom: "",
  framing: "Portrait",
  angle: "Eye-level",
  lens: "50mm standard",
  lighting: ["Soft studio light"],
  palette: "Natural color",
  paletteHex: "",
  materials: [],
  typography: "",
  lettering: "No specified style",
  overlays: [],
  reference: "",
  aspect: "1:1",
  quality: "low",
  negatives: ["Text", "Watermark", "Blur", "Low quality"],
  customNegative: "",
  cfg: 7,
  seed: "",
  tile: false,
};

function parts(values: Array<string | undefined>) {
  return values.map((value) => value?.trim()).filter(Boolean) as string[];
}

function compileNatural(form: PromptState) {
  const setting = form.settingCustom || form.setting;
  const style = form.styleCustom || (form.style === "No added reference" ? "" : form.style);
  const typography = form.typography
    ? `Include the exact text "${form.typography}"${form.lettering !== "No specified style" ? ` in ${form.lettering.toLowerCase()} lettering` : ""}.`
    : "";
  return [
    `${form.medium}. ${form.scale}. ${form.subject || "Describe the primary subject"}, ${parts([...form.traits, form.action]).join(", ")}.`,
    `Place the scene in ${setting}${form.era.length ? ` during ${form.era.join(" and ")}` : ""}${form.atmosphere.length ? ` with ${form.atmosphere.join(", ")}` : ""}.`,
    `${form.framing}, ${form.angle}, ${form.lens}. ${parts([...form.lighting, form.palette, form.paletteHex, style, ...form.materials]).join(", ")}.`,
    typography,
    form.overlays.length ? `Add ${form.overlays.join(", ")}.` : "",
    form.reference ? `Use this reference anchor for consistency: ${form.reference}.` : "",
    form.negatives.length || form.customNegative
      ? `Avoid ${parts([...form.negatives, form.customNegative]).join(", ").toLowerCase()}.`
      : "",
  ].filter(Boolean).join("\n\n");
}

function compilePrompt(form: PromptState) {
  const natural = compileNatural(form);
  if (form.engine === "midjourney") {
    const flags = [
      `--ar ${form.aspect}`,
      "--style raw",
      form.seed ? `--seed ${form.seed}` : "",
      form.reference ? `--sref ${form.reference}` : "",
      form.tile ? "--tile" : "",
    ].filter(Boolean).join(" ");
    return `${natural.replace(/\n\n/g, " ")} ${flags}`;
  }
  if (form.engine === "stable-diffusion") {
    const positive = parts([
      `(${form.subject || "primary subject"}:1.2)`,
      ...form.traits,
      form.action,
      form.settingCustom || form.setting,
      ...form.era,
      ...form.atmosphere,
      form.medium,
      form.styleCustom || form.style,
      form.framing,
      form.angle,
      form.lens,
      ...form.lighting,
      form.palette,
      form.paletteHex,
      ...form.materials,
      form.typography ? `text reading "${form.typography}"` : "",
      ...form.overlays,
    ]).join(", ");
    return [
      `Positive prompt:\n${positive}`,
      `Negative prompt:\n${parts([...form.negatives, form.customNegative]).join(", ").toLowerCase() || "none"}`,
      `Recommended parameters:\nCFG ${form.cfg}; 30 sampling steps; DPM++ 2M Karras${form.seed ? `; seed ${form.seed}` : ""}; aspect ratio ${form.aspect}.`,
    ].join("\n\n");
  }
  return natural;
}

function FieldPicker({ label, value, values, onChange }: { label: string; value: string; values: readonly string[]; onChange: (value: string) => void }) {
  return (
    <Picker label={label} selectedKey={value} onSelectionChange={(key) => onChange(String(key))}>
      {values.map((option) => <PickerItem id={option} key={option}>{option}</PickerItem>)}
    </Picker>
  );
}

function MultiOptions({ label, value, values, onChange }: { label: string; value: string[]; values: readonly string[]; onChange: (value: string[]) => void }) {
  return (
    <CheckboxGroup label={label} value={value} onChange={onChange}>
      {values.map((option) => <Checkbox value={option} key={option}>{option}</Checkbox>)}
    </CheckboxGroup>
  );
}

export function AiImagePromptWizard() {
  const [form, setForm] = useState<PromptState>(INITIAL);
  const [manualPrompt, setManualPrompt] = useState("");
  const [isManual, setIsManual] = useState(false);
  const [status, setStatus] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [image, setImage] = useState("");
  const [apiKeys, setApiKeys] = useState<Record<Engine, string>>(EMPTY_API_KEYS);
  const compiled = useMemo(() => compilePrompt(form), [form]);
  const previewPrompt = useMemo(() => compileNatural(form), [form]);
  const output = isManual ? manualPrompt : compiled;
  const seedSupported = form.engine === "midjourney" || form.engine === "stable-diffusion";

  function update<Key extends keyof PromptState>(key: Key, value: PromptState[Key]) {
    setForm((current) => ({ ...current, [key]: value }));
    if (isManual) setStatus("Selections changed. Restore the generated prompt to include them.");
  }

  async function copyPrompt() {
    if (!form.subject.trim()) {
      setStatus("Add a primary subject before copying.");
      return;
    }
    try {
      await navigator.clipboard.writeText(output);
      setStatus("Copied the formatted prompt.");
    } catch {
      setStatus("Could not copy automatically. Select and copy the prompt.");
    }
  }

  async function generateImage() {
    if (!form.subject.trim()) {
      setStatus("Add a primary subject before generating.");
      return;
    }
    if (form.engine === "midjourney") {
      await copyPrompt();
      setStatus("Copied the Midjourney prompt. Midjourney does not provide a supported direct-generation API for this integration.");
      return;
    }
    setIsGenerating(true);
    setImage("");
    setStatus("Generating an image. This may take a minute.");
    try {
      const response = await fetch("/api/tools/ai-image/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: isManual ? manualPrompt : previewPrompt,
          aspectRatio: form.aspect,
          quality: form.quality,
          engine: form.engine,
          apiKey: apiKeys[form.engine],
        }),
      });
      const result = (await response.json()) as { image?: string; error?: string };
      if (!response.ok || !result.image) throw new Error(result.error || "Image generation failed.");
      setImage(result.image);
      setStatus("Image generated. Review it against your intent and accessibility needs.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Image generation failed.");
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <div className="image-architect">
      <section className="architect-controls" aria-labelledby="architect-heading">
        <div>
          <p className="eyebrow">Prompt architect</p>
          <h2 id="architect-heading">Define visual intent in four zones</h2>
          <p>Start with the subject, then disclose only the controls needed for the target engine.</p>
        </div>

        <Picker
          label="Target engine"
          selectedKey={form.engine}
          onSelectionChange={(key) => update("engine", String(key) as Engine)}
        >
          {ENGINES.map((engine) => (
            <PickerItem id={engine.id} key={engine.id}>{engine.label}</PickerItem>
          ))}
        </Picker>
        <p className="field-description">
          {ENGINES.find((item) => item.id === form.engine)?.label}. The formatted output adapts to this engine; preview generation uses the configured MyKMHub image provider.
        </p>

        <Accordion defaultExpandedKeys={["subject"]} allowsMultipleExpanded density="compact">
          <AccordionItem id="subject">
            <AccordionItemTitle level={3}>1. Subject and environment</AccordionItemTitle>
            <AccordionItemPanel>
              <div className="architect-fields">
                <TextArea label="Primary subject" value={form.subject} onChange={(value) => update("subject", value)} isRequired description="Describe the central person, object, place, or idea." />
                <MultiOptions label="Traits and apparel" value={form.traits} values={OPTIONS.traits} onChange={(value) => update("traits", value)} />
                <FieldPicker label="Action or pose" value={form.action} values={OPTIONS.action} onChange={(value) => update("action", value)} />
                <FieldPicker label="Subject scale and quantity" value={form.scale} values={OPTIONS.scale} onChange={(value) => update("scale", value)} />
                <FieldPicker label="Location or setting" value={form.setting} values={OPTIONS.setting} onChange={(value) => update("setting", value)} />
                <TextField label="Custom setting" value={form.settingCustom} onChange={(value) => update("settingCustom", value)} description="Optional. Overrides the setting selection." />
                <MultiOptions label="Time or era" value={form.era} values={OPTIONS.era} onChange={(value) => update("era", value)} />
                <MultiOptions label="Weather and atmosphere" value={form.atmosphere} values={OPTIONS.atmosphere} onChange={(value) => update("atmosphere", value)} />
              </div>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem id="aesthetics">
            <AccordionItemTitle level={3}>2. Aesthetics, lighting, and camera</AccordionItemTitle>
            <AccordionItemPanel>
              <div className="architect-fields">
                <FieldPicker label="Artistic medium" value={form.medium} values={OPTIONS.medium} onChange={(value) => update("medium", value)} />
                <FieldPicker label="Style reference" value={form.style} values={OPTIONS.style} onChange={(value) => update("style", value)} />
                <TextField label="Custom style direction" value={form.styleCustom} onChange={(value) => update("styleCustom", value)} description="Optional. Overrides the style selection. Describe visual characteristics rather than naming a living artist." />
                <FieldPicker label="Shot framing" value={form.framing} values={OPTIONS.framing} onChange={(value) => update("framing", value)} />
                <FieldPicker label="Camera angle" value={form.angle} values={OPTIONS.angle} onChange={(value) => update("angle", value)} />
                <FieldPicker label="Lens, optics, and focus" value={form.lens} values={OPTIONS.lens} onChange={(value) => update("lens", value)} />
                <MultiOptions label="Lighting" value={form.lighting} values={OPTIONS.lighting} onChange={(value) => update("lighting", value)} />
                <FieldPicker label="Color palette" value={form.palette} values={OPTIONS.palette} onChange={(value) => update("palette", value)} />
                <TextField label="Palette hex codes" value={form.paletteHex} onChange={(value) => update("paletteHex", value)} description="Optional. For example: #0B1F3A, #FF6B4A." />
                <MultiOptions label="Surface materials" value={form.materials} values={OPTIONS.materials} onChange={(value) => update("materials", value)} />
              </div>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem id="overlays">
            <AccordionItemTitle level={3}>3. Overlays and reference consistency</AccordionItemTitle>
            <AccordionItemPanel>
              <div className="architect-fields">
                <TextField label="Exact in-image text" value={form.typography} onChange={(value) => update("typography", value)} description="Optional. Image models may still render text imperfectly; verify the result." />
                <FieldPicker label="Lettering style" value={form.lettering} values={OPTIONS.lettering} onChange={(value) => update("lettering", value)} />
                <MultiOptions label="Graphic overlays" value={form.overlays} values={OPTIONS.overlays} onChange={(value) => update("overlays", value)} />
                <TextField label="Reference image URL or anchor" value={form.reference} onChange={(value) => update("reference", value)} description="Used in copied engine syntax only. This version does not upload or transmit reference images." />
              </div>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem id="technical">
            <AccordionItemTitle level={3}>4. Technical engine parameters</AccordionItemTitle>
            <AccordionItemPanel>
              <div className="architect-fields">
                <Picker label="Aspect ratio" selectedKey={form.aspect} onSelectionChange={(key) => update("aspect", String(key))}>
                  {ASPECTS.map((option) => <PickerItem id={option.id} key={option.id}>{option.label}</PickerItem>)}
                </Picker>
                <FieldPicker label="Preview quality" value={form.quality} values={["low", "medium", "high"]} onChange={(value) => update("quality", value as Quality)} />
                {form.engine === "midjourney" ? (
                  <p className="field-description">
                    Midjourney does not provide a supported direct-generation API. MyKMHub will copy the compiled prompt for use in Midjourney and will not request a credential.
                  </p>
                ) : (
                  <TextField
                    label={CREDENTIALS[form.engine].label}
                    type="password"
                    value={apiKeys[form.engine]}
                    onChange={(value) => setApiKeys((current) => ({
                      ...current,
                      [form.engine]: value,
                    }))}
                    autoComplete="off"
                    description={`${CREDENTIALS[form.engine].description} The key is not saved by this tool.`}
                  />
                )}
                <MultiOptions label="Common exclusions" value={form.negatives} values={OPTIONS.negatives} onChange={(value) => update("negatives", value)} />
                <TextArea label="Other exclusions" value={form.customNegative} onChange={(value) => update("customNegative", value)} />
                {form.engine === "stable-diffusion" ? (
                  <Slider label="CFG guidance scale" minValue={1} maxValue={20} step={0.5} value={form.cfg} onChange={(value) => update("cfg", value)} />
                ) : (
                  <p className="field-description">CFG guidance is available only for Stable Diffusion and FLUX output.</p>
                )}
                {seedSupported ? (
                  <TextField label="Seed" value={form.seed} onChange={(value) => update("seed", value)} description="Optional reproducibility reference." />
                ) : (
                  <p className="field-description">Seeds are not exposed for this engine because they are not a reliable control in its current interface.</p>
                )}
                {form.engine === "midjourney" ? (
                  <Switch isSelected={form.tile} onChange={(value) => update("tile", value)}>Create a repeating tile</Switch>
                ) : (
                  <p className="field-description">Repeating tile syntax is available in Midjourney output.</p>
                )}
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </section>

      <aside className="architect-output" aria-labelledby="formatted-prompt-heading">
        <div>
          <p className="eyebrow">Compiled output</p>
          <h2 id="formatted-prompt-heading">Formatted prompt text</h2>
        </div>
        <TextArea
          label="Engine-ready prompt"
          value={isManual ? manualPrompt : compiled}
          onChange={(value) => {
            setManualPrompt(value);
            setIsManual(true);
            setStatus("Manual prompt override active. Selections remain unchanged.");
          }}
          description={isManual ? "Manual override is active. Restore the generated prompt to resynchronize with selections." : "Editing activates a manual override; selections are preserved."}
        />
        {isManual && <Button variant="secondary" onPress={() => { setIsManual(false); setManualPrompt(""); setStatus("Restored the prompt generated from selections."); }}>Restore generated prompt</Button>}
        <div className="tool-actions">
          <Button variant="secondary" onPress={copyPrompt}>Copy prompt</Button>
          <Button variant="accent" onPress={generateImage} isPending={isGenerating}>
            {form.engine === "midjourney" ? "Copy for Midjourney" : `Generate with ${ENGINES.find((item) => item.id === form.engine)?.label}`}
          </Button>
          <Button variant="negative" fillStyle="outline" onPress={() => { setForm(INITIAL); setManualPrompt(""); setIsManual(false); setImage(""); setApiKeys(EMPTY_API_KEYS); setStatus("Reset the image workspace and cleared all API keys."); }}>Reset</Button>
        </div>

        <section aria-labelledby="parameter-breakdown-heading">
          <h3 id="parameter-breakdown-heading">Parameter breakdown</h3>
          <dl className="parameter-breakdown">
            <div><dt>Engine</dt><dd>{ENGINES.find((item) => item.id === form.engine)?.label}</dd></div>
            <div><dt>Subject</dt><dd>{form.subject || "Not yet defined"}</dd></div>
            <div><dt>Medium</dt><dd>{form.medium}</dd></div>
            <div><dt>Composition</dt><dd>{form.framing}; {form.angle}; {form.lens}</dd></div>
            <div><dt>Output</dt><dd>{form.aspect}; {form.quality} preview quality</dd></div>
            <div><dt>Constraints</dt><dd>{parts([...form.negatives, form.customNegative]).join(", ") || "None"}</dd></div>
          </dl>
        </section>

        <section className="generation-result" aria-labelledby="generated-image-heading" aria-busy={isGenerating}>
          <h3 id="generated-image-heading">Generated preview</h3>
          {image ? (
            // The generated image has no reliable semantic description until the user reviews it.
            // A literal alt avoids falsely claiming visual details.
            // eslint-disable-next-line @next/next/no-img-element
            <img src={image} alt="AI-generated preview based on the current prompt. Review the image visually before creating descriptive alternative text." />
          ) : (
            <p>No image generated yet. Select an API-supported engine and add its key in Technical engine parameters, or use a configured MyKMHub provider. Generation may incur provider usage costs.</p>
          )}
        </section>
        <p className="sr-status" aria-live="polite">{status}</p>
      </aside>
    </div>
  );
}
