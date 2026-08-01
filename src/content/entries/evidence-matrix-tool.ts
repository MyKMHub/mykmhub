import type { ContentEntry } from "../types";

export const EVIDENCE_MATRIX_TOOL_ENTRY = {
  id: "tool-evidence-traceability-matrix",
  slug: "evidence-traceability-matrix-builder",
  title: "Evidence Traceability Matrix Builder",
  summary:
    "A low-priority concept for a centralized team evidence log that records sources, interpretations, confidence, and a point of contact.",
  type: "tool",
  domains: ["human-centered-design", "research", "process-improvement"],
  tags: ["synthesis", "traceability", "evidence", "concept", "low-priority"],
  status: "draft",
  visibility: "public",
  route: "/tools/evidence-traceability-matrix-builder",
  effortId: "effort-navy-hr-modernization",
} satisfies ContentEntry;
