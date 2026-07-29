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
    "The four-zone prompt architect, engine translation, manual override, copying, parameter breakdown, and GPT Image preview generation work. A user can supply an OpenAI API key for the current request, or MyKMHub can use a server key.",
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
    "A user-supplied OpenAI API key is masked, sent only to the MyKMHub server for the current generation request, and is not saved by the tool.",
    "When generation is intentionally activated, the natural-language prompt is sent to OpenAI; selections and copied external-engine syntax are not stored.",
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
        "Added GPT Image 2 preview generation using either a one-request user key or an optional server key.",
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
