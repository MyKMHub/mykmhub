import type { ContentEntry } from "../types";

export const HCD_DECISION_EVIDENCE_RECORD_ENTRY = {
  id: "template-hcd-decision-evidence-record",
  slug: "hcd-decision-evidence-record",
  title: "HCD decision and evidence record",
  summary:
    "A compact, reusable template connecting a consequential decision to its evidence, owner, tradeoffs, accessibility implications, actions, and review trigger.",
  type: "template",
  domains: [
    "human-centered-design",
    "knowledge-management",
    "governance",
    "accessibility",
  ],
  tags: ["decision-record", "traceability", "continuity", "template"],
  status: "published",
  visibility: "public",
  route: "/templates/hcd-decision-evidence-record",
  relatedEntryIds: [
    "framework-hcd-operating-model-baseline",
    "pattern-hcd-engagement-intake-triage",
    "method-evidence-first-synthesis",
  ],
} satisfies ContentEntry;
