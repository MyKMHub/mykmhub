import type { ContentEntry } from "../types";

export const EVIDENCE_MATRIX_TOOL_ENTRY = {
  id: "tool-evidence-traceability-matrix",
  slug: "evidence-traceability-matrix-builder",
  title: "Evidence Traceability Matrix Builder",
  summary:
    "Map sanitized research evidence to process steps, identify unsupported areas, and export an auditable synthesis matrix.",
  type: "tool",
  domains: ["human-centered-design", "research", "process-improvement"],
  tags: ["synthesis", "traceability", "evidence", "browser-local"],
  status: "published",
  visibility: "public",
  route: "/tools/evidence-traceability-matrix-builder",
  relatedEntryIds: [
    "case-study-hcd-velocity-engine",
    "method-evidence-first-synthesis",
  ],
} satisfies ContentEntry;
