import type { ContentEntry } from "../types";

export const HCD_OPERATING_MODEL_REVIEW_ENTRY = {
  id: "template-hcd-operating-model-review",
  slug: "hcd-operating-model-review",
  title: "HCD operating model review and improvement plan",
  summary:
    "A copy-ready review for evaluating whether an HCD operating model changes decisions, delivery, accessibility, outcomes, and organizational learning.",
  type: "template",
  domains: [
    "human-centered-design",
    "design-operations",
    "governance",
    "accessibility",
    "knowledge-management",
  ],
  tags: ["operating-model", "review", "continuous-improvement", "leadership"],
  status: "published",
  visibility: "public",
  route: "/templates/hcd-operating-model-review",
  relatedEntryIds: [
    "framework-hcd-operating-model-baseline",
    "template-hcd-operating-agreement",
    "template-hcd-outcome-measurement-plan",
    "framework-accessibility-governance-baseline",
    "pattern-hcd-delivery-checkpoints",
    "template-hcd-decision-evidence-record",
    "landing-hcd-director-toolkit",
  ],
} satisfies ContentEntry;
