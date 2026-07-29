import type { ContentEntry } from "../types";

export const DESIGN_SYSTEM_ENTRY = {
  id: "landing-design-system",
  slug: "design-system",
  title: "MyKMHub Design System",
  summary:
    "Approved foundations, components, patterns, accessibility guidance, and an experimental theme workspace.",
  type: "landing-page",
  domains: ["design-systems", "accessibility", "human-centered-design"],
  tags: ["spectrum-2", "tokens", "components", "patterns", "theme-lab"],
  status: "published",
  visibility: "public",
  route: "/design-system",
} satisfies ContentEntry;
