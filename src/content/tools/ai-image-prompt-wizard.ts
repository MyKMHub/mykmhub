import type { ToolRecord } from "./types";

export const AI_IMAGE_PROMPT_WIZARD_TOOL = {
  id: "tool-ai-image-prompt-wizard",
  slug: "ai-image-prompt-wizard",
  title: "AI Image Prompt Wizard",
  briefDescription:
    "Build a structured, model-independent image prompt through six guided stages.",
  description:
    "A guided workspace for turning visual intent into a reusable image prompt without requiring advanced prompting or composition knowledge.",
  context: "AI image prompt planning and iteration",
  route: "/tools/ai-image-prompt-wizard",
  contentStatus: "published",
  visibility: "public",
  operationalStatus: "limited",
  statusLabel: "Working prompt helper",
  statusNote:
    "Prompt planning, preview, copying, and iteration notes work in the browser. This tool does not generate images or connect to an AI model.",
  lastVerified: "2026-07-28",
  accessibilityNotes: [
    "Spectrum 2 controls provide visible labels, keyboard operation, focus treatment, and accessible states.",
    "The workflow is divided into six named steps to reduce cognitive load.",
    "Status messages announce copying, navigation, and reset results without moving focus.",
    "The compiled prompt remains visible for review while source fields are edited.",
  ],
  privacyNotes: [
    "Prompt content remains in the current browser session.",
    "Nothing entered in the tool is persisted or sent to a server or AI model.",
  ],
  relatedPortfolioRoutes: ["/case-studies/ai-image-creation-wizard"],
  effortId: "effort-ai-image-prompt-wizard",
  versionNotes: [
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
