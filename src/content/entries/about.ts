import type { ContentEntry } from "../types";

export const ABOUT_ENTRY = {
  id: "landing-about",
  slug: "about",
  title: "About MyKMHub",
  summary:
    "Why Nathan Byrnes is building an accessibility-first public toolkit that connects human-centered design, knowledge management, AI-assisted work, and organizational improvement.",
  type: "landing-page",
  domains: [
    "human-centered-design",
    "knowledge-management",
    "accessibility",
  ],
  tags: ["about", "practice", "platform"],
  status: "published",
  visibility: "public",
  route: "/about",
  effortId: "effort-mykmhub-platform",
} satisfies ContentEntry;
