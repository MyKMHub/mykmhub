import type { ContentEntry } from "../types";

export const HCD_OPERATING_AGREEMENT_ENTRY = {
  id: "template-hcd-operating-agreement",
  slug: "hcd-operating-agreement",
  title: "Minimum HCD operating agreement",
  summary:
    "A copy-ready agreement for defining an HCD capability's mandate, intake, evidence, decision rights, delivery integration, accessibility, measures, and review.",
  type: "template",
  domains: [
    "human-centered-design",
    "design-operations",
    "governance",
    "accessibility",
  ],
  tags: ["operating-agreement", "leadership", "governance", "accountability"],
  status: "published",
  visibility: "public",
  route: "/templates/hcd-operating-agreement",
  relatedEntryIds: [
    "framework-hcd-operating-model-baseline",
    "pattern-hcd-engagement-intake-triage",
    "pattern-hcd-delivery-checkpoints",
    "framework-accessibility-governance-baseline",
    "template-hcd-outcome-measurement-plan",
    "landing-hcd-director-toolkit",
  ],
} satisfies ContentEntry;
