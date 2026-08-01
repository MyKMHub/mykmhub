import type { ContentEntry } from "../types";

export const KNOWLEDGE_ENTRY = {
  id: "landing-knowledge",
  slug: "knowledge",
  title: "Knowledge",
  summary:
    "Practice notes, lessons learned, guidance, and connected references for accessible human-centered work.",
  type: "landing-page",
  domains: [
    "human-centered-design",
    "knowledge-management",
    "accessibility",
    "ai",
  ],
  tags: ["practice-notes", "guidance", "lessons-learned"],
  status: "published",
  visibility: "public",
  route: "/knowledge",
} satisfies ContentEntry;
