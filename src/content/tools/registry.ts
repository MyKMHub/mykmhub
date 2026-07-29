import { EVIDENCE_TRACEABILITY_MATRIX_TOOL } from "./evidence-traceability-matrix";
import { ACCESSIBLE_FORM_GENERATOR_TOOL } from "./accessible-form-generator";
import { AI_IMAGE_PROMPT_WIZARD_TOOL } from "./ai-image-prompt-wizard";

export const TOOL_REGISTRY = [
  ACCESSIBLE_FORM_GENERATOR_TOOL,
  AI_IMAGE_PROMPT_WIZARD_TOOL,
  EVIDENCE_TRACEABILITY_MATRIX_TOOL,
] as const;
