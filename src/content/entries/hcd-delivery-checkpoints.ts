import type { ContentEntry } from "../types";

export const HCD_DELIVERY_CHECKPOINTS_ENTRY = {
  id: "pattern-hcd-delivery-checkpoints",
  slug: "hcd-delivery-checkpoints",
  title: "HCD delivery checkpoints",
  summary:
    "A reusable pattern for carrying evidence, accessibility, and accountable human-centered decisions through planning, implementation, release, and learning.",
  type: "pattern",
  domains: [
    "human-centered-design",
    "design-operations",
    "governance",
    "accessibility",
  ],
  tags: ["delivery", "checkpoints", "acceptance-criteria", "release"],
  status: "published",
  visibility: "public",
  route: "/patterns/hcd-delivery-checkpoints",
  relatedEntryIds: [
    "framework-hcd-operating-model-baseline",
    "template-hcd-decision-evidence-record",
    "template-hcd-outcome-measurement-plan",
    "tool-accessible-form-generator",
    "landing-hcd-director-toolkit",
  ],
} satisfies ContentEntry;
