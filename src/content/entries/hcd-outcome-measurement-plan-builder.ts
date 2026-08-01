import type { ContentEntry } from "../types";

export const HCD_OUTCOME_MEASUREMENT_PLAN_BUILDER_ENTRY = {
  id: "tool-hcd-outcome-measurement-plan-builder",
  slug: "hcd-outcome-measurement-plan-builder",
  title: "HCD Outcome Measurement & Learning Plan Builder",
  summary:
    "Create an outcome chain and balanced decision-ready measures, then generate a copy-ready Markdown learning plan.",
  type: "tool",
  domains: [
    "human-centered-design",
    "design-operations",
    "governance",
    "accessibility",
  ],
  tags: ["measurement", "outcomes", "learning", "evaluation", "working-tool"],
  status: "published",
  visibility: "public",
  route: "/tools/hcd-outcome-measurement-plan-builder",
} satisfies ContentEntry;
