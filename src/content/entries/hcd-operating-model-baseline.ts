import type { ContentEntry } from "../types";

export const HCD_OPERATING_MODEL_BASELINE_ENTRY = {
  id: "framework-hcd-operating-model-baseline",
  slug: "hcd-operating-model-baseline",
  title: "HCD operating model baseline",
  summary:
    "A practical framework for aligning mandate, intake, evidence, decision rights, delivery integration, accessibility, and measures of value.",
  type: "framework",
  domains: [
    "human-centered-design",
    "design-operations",
    "governance",
    "accessibility",
  ],
  tags: ["operating-model", "leadership", "governance", "measurement"],
  status: "published",
  visibility: "public",
  route: "/frameworks/hcd-operating-model-baseline",
  relatedEntryIds: [
    "landing-hcd-director-toolkit",
    "method-evidence-first-synthesis",
    "case-study-navy-hr-automated-hcd",
  ],
} satisfies ContentEntry;
