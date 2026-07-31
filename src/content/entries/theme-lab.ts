import type { ContentEntry } from "../types";

export const THEME_LAB_ENTRY = {
  id: "design-system-theme-lab",
  slug: "theme-lab",
  title: "Theme Lab",
  summary:
    "Preview guarded local theme and accessibility preferences against live MyKMHub interface patterns.",
  type: "design-system-component",
  domains: ["accessibility", "design-systems"],
  tags: ["theme", "preferences", "contrast", "reduced-motion"],
  status: "published",
  visibility: "public",
  route: "/design-system/theme-lab",
  relatedEntryIds: ["landing-design-system"],
} satisfies ContentEntry;
