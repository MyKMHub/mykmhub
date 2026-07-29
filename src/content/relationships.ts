import type { ContentRelationship } from "./model";

export const CONTENT_RELATIONSHIPS = [
  {
    fromEntryId: "landing-hcd-director-toolkit",
    toEntryId: "method-evidence-first-synthesis",
    type: "related",
    label: "Evidence and synthesis leadership method",
  },
  {
    fromEntryId: "landing-hcd-director-toolkit",
    toEntryId: "tool-accessible-form-generator",
    type: "related",
    label: "Accessible delivery requirements tool",
  },
  {
    fromEntryId: "landing-hcd-director-toolkit",
    toEntryId: "guidance-ai-assisted-mykmhub-development",
    type: "related",
    label: "Governed AI-assisted delivery practice",
  },
  {
    fromEntryId: "guidance-ai-assisted-mykmhub-development",
    toEntryId: "landing-design-system",
    type: "explains",
    label: "Design-system and accessibility implementation context",
  },
  {
    fromEntryId: "guidance-ai-assisted-mykmhub-development",
    toEntryId: "landing-tools",
    type: "related",
    label: "Working applications produced through this development practice",
  },
  {
    fromEntryId: "tool-ai-image-prompt-wizard",
    toEntryId: "case-study-ai-image-prompt-wizard",
    type: "implements",
    label: "Design context and original product concept",
  },
  {
    fromEntryId: "tool-accessible-form-generator",
    toEntryId: "case-study-accessible-form-generator",
    type: "implements",
    label: "Design context and outcomes",
  },
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
