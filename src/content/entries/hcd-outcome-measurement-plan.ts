import type { ContentEntry } from "../types";

export const HCD_OUTCOME_MEASUREMENT_PLAN_ENTRY = {
  id: "template-hcd-outcome-measurement-plan",
  slug: "hcd-outcome-measurement-plan",
  title: "HCD outcome measurement and learning plan",
  summary:
    "A reusable template for connecting HCD work to experience, accessibility, behavior, delivery, risk, capability, and organizational outcomes.",
  type: "template",
  domains: [
    "human-centered-design",
    "design-operations",
    "governance",
    "accessibility",
  ],
  tags: ["measurement", "outcomes", "learning", "evaluation"],
  status: "published",
  visibility: "public",
  route: "/templates/hcd-outcome-measurement-plan",
} satisfies ContentEntry;
