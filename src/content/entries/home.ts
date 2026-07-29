import type { ContentEntry } from "../types";

export const HOME_ENTRY = {
  id: "landing-home",
  slug: "home",
  title: "Lead human-centered work with practical resources",
  summary:
    "MyKMHub brings together tools, methods, patterns, and guidance for leading accessible, human-centered work across knowledge management, AI-enabled workflows, and organizational improvement.",
  type: "landing-page",
  domains: [
    "human-centered-design",
    "knowledge-management",
    "accessibility",
    "ai",
    "automation",
    "process-improvement",
  ],
  tags: ["director-toolkit", "public"],
  status: "published",
  visibility: "public",
  route: "/",
} satisfies ContentEntry;
