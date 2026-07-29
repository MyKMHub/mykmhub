import type { ContentRelationship } from "./model";

export const CONTENT_RELATIONSHIPS = [
  {
    fromEntryId: "case-study-hcd-velocity-engine",
    toEntryId: "case-study-navy-hr-automated-hcd",
    type: "same-effort",
    label: "A broader operational-design perspective on the same effort",
  },
  {
    fromEntryId: "case-study-hcd-velocity-engine",
    toEntryId: "method-evidence-first-synthesis",
    type: "demonstrates",
    label: "Method used in this work",
  },
  {
    fromEntryId: "tool-evidence-traceability-matrix",
    toEntryId: "case-study-hcd-velocity-engine",
    type: "implements",
    label: "Related portfolio case study",
  },
] satisfies readonly ContentRelationship[];
