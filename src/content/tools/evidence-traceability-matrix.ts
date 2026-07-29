import type { ToolRecord } from "./types";

export const EVIDENCE_TRACEABILITY_MATRIX_TOOL = {
  id: "tool-evidence-traceability-matrix",
  slug: "evidence-traceability-matrix-builder",
  title: "Evidence Traceability Matrix Builder",
  briefDescription:
    "Record shared evidence, interpretations, confidence, and points of contact in one traceable log.",
  description:
    "A working proof of concept for centralizing team evidence so observations and competing interpretations are committed to a shared record rather than remaining with individual team members.",
  context: "HCD research synthesis and team alignment",
  route: "/tools/evidence-traceability-matrix-builder",
  contentStatus: "draft",
  visibility: "public",
  operationalStatus: "proof-of-concept",
  statusLabel: "Working proof of concept",
  statusNote:
    "The browser-local workflow works, but multi-user storage, review history, attribution, and access controls are not implemented.",
  lastVerified: "2026-07-28",
  accessibilityNotes: [
    "Keyboard-operable Spectrum 2 controls",
    "Visible labels and field descriptions",
    "Status messages announced to assistive technology",
    "Responsive table region with keyboard scrolling",
  ],
  privacyNotes: [
    "Data is stored only in the current browser.",
    "Use sanitized, non-sensitive information.",
  ],
  relatedPortfolioRoutes: ["/case-studies/scaling-hcd-through-ai"],
  effortId: "effort-navy-hr-modernization",
  versionNotes: [
    {
      version: "0.1 proof of concept",
      date: "2026-07-28",
      notes: [
        "Added process, evidence, confidence, priority, and point-of-contact fields.",
        "Added browser-local persistence and CSV export.",
        "Established the centralized team evidence-log concept.",
      ],
    },
  ],
} satisfies ToolRecord;
