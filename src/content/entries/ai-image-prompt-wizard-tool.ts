import type { ContentEntry } from "../types";

export const AI_IMAGE_PROMPT_WIZARD_TOOL_ENTRY = {
  id: "tool-ai-image-prompt-wizard",
  slug: "ai-image-prompt-wizard",
  title: "AI Image Prompt Wizard",
  summary:
    "Build and copy a structured image prompt through a guided, accessible workflow.",
  type: "tool",
  domains: ["artificial-intelligence", "human-centered-design", "accessibility"],
  tags: ["image-prompting", "working-tool", "model-independent"],
  status: "published",
  visibility: "public",
  route: "/tools/ai-image-prompt-wizard",
  effortId: "effort-ai-image-prompt-wizard",
  relatedEntryIds: ["case-study-ai-image-prompt-wizard"],
} satisfies ContentEntry;
