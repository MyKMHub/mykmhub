import { EVIDENCE_TRACEABILITY_MATRIX_TOOL } from "./evidence-traceability-matrix";
import { ACCESSIBLE_FORM_GENERATOR_TOOL } from "./accessible-form-generator";
import { AI_IMAGE_PROMPT_WIZARD_TOOL } from "./ai-image-prompt-wizard";
import { HCD_DECISION_EVIDENCE_RECORD_BUILDER_TOOL } from "./hcd-decision-evidence-record-builder";

export const TOOL_REGISTRY = [
  HCD_DECISION_EVIDENCE_RECORD_BUILDER_TOOL,
  ACCESSIBLE_FORM_GENERATOR_TOOL,
  AI_IMAGE_PROMPT_WIZARD_TOOL,
  EVIDENCE_TRACEABILITY_MATRIX_TOOL,
] as const;
