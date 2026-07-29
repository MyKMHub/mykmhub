import type { ContentRelationship } from "./model";

export const CONTENT_RELATIONSHIPS = [
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
