import type { ContentEntry } from "../types";

export const TOOLS_ENTRY = {
  id: "landing-tools",
  slug: "tools",
  title: "Tools Library",
  summary:
    "Use practical tools for evidence-based human-centered design, knowledge management, accessibility, and organizational improvement.",
  type: "landing-page",
  domains: ["human-centered-design", "knowledge-management"],
  tags: ["tools-library", "public"],
  status: "published",
  visibility: "public",
  route: "/tools",
  relatedEntryIds: ["tool-evidence-traceability-matrix"],
} satisfies ContentEntry;
