import type { EffortRecord } from "../model";

export const AI_IMAGE_PROMPT_WIZARD_EFFORT = {
  id: "effort-ai-image-prompt-wizard",
  title: "Guided AI image prompt creation",
  summary:
    "A product-design effort that reduces the expertise and trial-and-error required to express visual intent to image-generation systems.",
  client: "AI Image Creators",
  timeframe: "2026",
  governance: ["Accessibility-first interaction design", "Model-independent workflow"],
  contentEntryIds: [
    "case-study-ai-image-prompt-wizard",
    "tool-ai-image-prompt-wizard",
  ],
  tags: ["artificial-intelligence", "prompting", "accessibility", "product-design"],
} satisfies EffortRecord;
