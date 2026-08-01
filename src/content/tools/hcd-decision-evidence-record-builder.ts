import type { ToolRecord } from "./types";

export const HCD_DECISION_EVIDENCE_RECORD_BUILDER_TOOL = {
  id: "tool-hcd-decision-evidence-record-builder",
  slug: "hcd-decision-evidence-record-builder",
  title: "HCD Decision & Evidence Record Builder",
  briefDescription:
    "Turn a consequential decision, its evidence, implications, authority, actions, and review conditions into a copy-ready Markdown record.",
  description:
    "A browser-only builder that operationalizes the HCD decision and evidence record template without storing or transmitting entered content.",
  context: "Decision traceability, governance, and organizational memory",
  route: "/tools/hcd-decision-evidence-record-builder",
  contentStatus: "published",
  visibility: "public",
  operationalStatus: "working",
  statusLabel: "Working tool",
  statusNote:
    "Generates a proportional Markdown decision record in the current browser. Teams remain responsible for evidence governance, approvals, and storage in an authorized system.",
  lastVerified: "2026-08-01",
  accessibilityNotes: [
    "Spectrum 2 controls provide labeled keyboard-operable inputs.",
    "Required fields are identified programmatically and validated before output is shown.",
    "Generated Markdown is available in a keyboard-scrollable text region and can be copied without selecting it manually.",
    "The form and output reflow into one column with enlarged text and narrow viewports.",
  ],
  privacyNotes: [
    "Entered content remains in memory in the current browser tab and is not persisted.",
    "Do not enter classified, controlled, personal, credential, client, or otherwise sensitive information.",
    "Move the reviewed output only into an organization-approved system with appropriate access and retention controls.",
  ],
  versionNotes: [
    {
      version: "1.0",
      date: "2026-08-01",
      notes: [
        "Added a Spectrum 2 workflow aligned to the published decision-record template.",
        "Added copy-ready Markdown generation with explicit evidence, uncertainty, accessibility, authority, action, and review fields.",
        "Kept all entered information browser-local and non-persistent.",
      ],
    },
  ],
} satisfies ToolRecord;
