import type { ContentEntry } from "../types";

export const AI_IMAGE_PROMPT_WIZARD_TOOL_ENTRY = {
  id: "tool-ai-image-prompt-wizard",
  slug: "ai-image-prompt-wizard",
  title: "AI Image Prompt Architect & Generator",
  summary:
    "Build, translate, copy, and optionally preview an engine-aware image prompt through a guided accessible workflow.",
  type: "tool",
  domains: ["artificial-intelligence", "human-centered-design", "accessibility"],
  tags: ["image-prompting", "version-1.0", "engine-translation"],
  status: "published",
  visibility: "public",
  route: "/tools/ai-image-prompt-wizard",
  effortId: "effort-ai-image-prompt-wizard",
} satisfies ContentEntry;
