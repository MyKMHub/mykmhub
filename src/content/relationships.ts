import type { ContentRelationship } from "./model";

export const CONTENT_RELATIONSHIPS = [
  {
    fromEntryId: "method-evidence-first-synthesis",
    toEntryId: "template-hcd-decision-evidence-record",
    type: "implements",
    label: "Decision-level evidence and rationale record",
  },
  {
    fromEntryId: "pattern-hcd-engagement-intake-triage",
    toEntryId: "template-hcd-decision-evidence-record",
    type: "related",
    label: "Decision continuity after intake and routing",
  },
  {
    fromEntryId: "framework-hcd-operating-model-baseline",
    toEntryId: "template-hcd-decision-evidence-record",
    type: "implements",
    label: "Decision-rights and organizational-memory artifact",
  },
  {
    fromEntryId: "framework-hcd-operating-model-baseline",
    toEntryId: "pattern-hcd-engagement-intake-triage",
    type: "implements",
    label: "Demand and prioritization operating pattern",
  },
  {
    fromEntryId: "landing-hcd-director-toolkit",
    toEntryId: "pattern-hcd-engagement-intake-triage",
    type: "related",
    label: "HCD demand and routing pattern",
  },
  {
    fromEntryId: "landing-hcd-director-toolkit",
    toEntryId: "framework-hcd-operating-model-baseline",
    type: "related",
    label: "Director-level governance and operating model",
  },
  {
    fromEntryId: "framework-hcd-operating-model-baseline",
    toEntryId: "method-evidence-first-synthesis",
    type: "related",
    label: "Evidence lifecycle method",
  },
  {
    fromEntryId: "framework-hcd-operating-model-baseline",
    toEntryId: "case-study-navy-hr-automated-hcd",
    type: "demonstrates",
    label: "Operational-design example",
  },
  {
    fromEntryId: "landing-about",
    toEntryId: "landing-hcd-director-toolkit",
    type: "explains",
    label: "Public leadership toolkit and practice",
  },
  {
    fromEntryId: "landing-about",
    toEntryId: "guidance-ai-assisted-mykmhub-development",
    type: "explains",
    label: "MyKMHub development practice",
  },
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
