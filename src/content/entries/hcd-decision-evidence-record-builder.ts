import type { ContentEntry } from "../types";

export const HCD_DECISION_EVIDENCE_RECORD_BUILDER_ENTRY = {
  id: "tool-hcd-decision-evidence-record-builder",
  slug: "hcd-decision-evidence-record-builder",
  title: "HCD Decision & Evidence Record Builder",
  summary:
    "Create a copy-ready Markdown record connecting a consequential decision to evidence, implications, authority, actions, and review conditions.",
  type: "tool",
  domains: [
    "human-centered-design",
    "knowledge-management",
    "governance",
    "accessibility",
  ],
  tags: ["decision-record", "traceability", "organizational-memory", "working-tool"],
  status: "published",
  visibility: "public",
  route: "/tools/hcd-decision-evidence-record-builder",
} satisfies ContentEntry;
