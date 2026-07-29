import type { ContentEntry } from "../types";

export const PORTFOLIO_ENTRY = {
  id: "landing-portfolio",
  slug: "portfolio",
  title: "Portfolio",
  summary:
    "Case studies showing how human-centered design, accessibility, systems thinking, and design operations create measurable impact.",
  type: "landing-page",
  domains: ["human-centered-design", "design-operations"],
  tags: ["portfolio", "case-studies"],
  status: "published",
  visibility: "public",
  route: "/portfolio",
  relatedEntryIds: [
    "case-study-navy-hr-automated-hcd",
    "case-study-hcd-velocity-engine",
  ],
} satisfies ContentEntry;
