import type { ToolRecord } from "./types";

export const AI_IMAGE_PROMPT_WIZARD_TOOL = {
  id: "tool-ai-image-prompt-wizard",
  slug: "ai-image-prompt-wizard",
  title: "AI Image Prompt Architect & Generator",
  briefDescription:
    "Build engine-aware image prompts through four progressive-disclosure zones and generate an optional configured preview.",
  description:
    "A guided workspace for translating visual intent into OpenAI, Gemini, Midjourney, or Stable Diffusion/FLUX prompt syntax, with structured parameters and optional server-side preview generation.",
  context: "AI image prompt architecture, translation, and generation",
  route: "/tools/ai-image-prompt-wizard",
  contentStatus: "published",
  visibility: "public",
  operationalStatus: "limited",
  statusLabel: "Working beta",
  statusNote:
    "The four-zone prompt architect, engine translation, manual override, copying, and parameter breakdown work. Preview generation requires a server API key plus an explicit feature flag and should remain disabled publicly until authentication and cost controls are in place.",
  lastVerified: "2026-07-29",
  accessibilityNotes: [
    "Spectrum 2 controls provide visible labels, keyboard operation, focus treatment, and accessible states.",
    "Four Spectrum 2 accordion zones use progressive disclosure to reduce cognitive load.",
    "Option groups are capped and every control has a visible label and keyboard behavior.",
    "Status messages announce copying, generation, manual override, and reset results without moving focus.",
    "Engine output and the structured parameter breakdown remain visible for review.",
  ],
  privacyNotes: [
    "Prompt content remains in the current browser session.",
    "Nothing entered in the tool is persisted.",
    "When preview generation is enabled and intentionally activated, the natural-language prompt is sent to the configured OpenAI image endpoint; selections and copied external-engine syntax are not stored.",
  ],
  relatedPortfolioRoutes: ["/case-studies/ai-image-creation-wizard"],
  effortId: "effort-ai-image-prompt-wizard",
  versionNotes: [
    {
      version: "0.3 engine-aware beta",
      date: "2026-07-29",
      notes: [
        "Expanded the workflow into four progressive-disclosure zones.",
        "Added OpenAI, Gemini, Midjourney, and Stable Diffusion/FLUX translation.",
        "Added editable compiled output and a structured parameter breakdown.",
        "Added gated server-side GPT Image 2 preview generation.",
      ],
    },
    {
      version: "0.2 MyKMHub modernization",
      date: "2026-07-28",
      notes: [
        "Rebuilt the workflow with React and Spectrum 2 controls.",
        "Kept the prompt workflow independent of any image-generation model.",
        "Added a persistent compiled preview, common negative constraints, and iteration notes.",
      ],
    },
    {
      version: "0.1 original prototype",
      date: "2026",
      notes: [
        "Established a six-stage guided prompt-building workflow.",
        "Used semantic HTML, Tailwind CSS, and vanilla JavaScript.",
      ],
    },
  ],
} satisfies ToolRecord;
