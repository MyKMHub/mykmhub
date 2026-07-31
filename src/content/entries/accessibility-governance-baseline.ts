import type { ContentEntry } from "../types";

export const ACCESSIBILITY_GOVERNANCE_BASELINE_ENTRY = {
  id: "framework-accessibility-governance-baseline",
  slug: "accessibility-governance-baseline",
  title: "Accessibility governance baseline",
  summary:
    "A practical framework for making accessibility an owned, evidenced, and continuously managed delivery obligation.",
  type: "framework",
  domains: [
    "accessibility",
    "human-centered-design",
    "design-operations",
    "governance",
  ],
  tags: ["accessibility-governance", "accountability", "conformance", "risk"],
  status: "published",
  visibility: "public",
  route: "/frameworks/accessibility-governance-baseline",
  relatedEntryIds: [
    "framework-hcd-operating-model-baseline",
    "pattern-hcd-delivery-checkpoints",
    "tool-accessible-form-generator",
    "landing-design-system",
    "landing-hcd-director-toolkit",
  ],
} satisfies ContentEntry;
