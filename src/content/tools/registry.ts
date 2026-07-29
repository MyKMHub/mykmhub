import { EVIDENCE_TRACEABILITY_MATRIX_TOOL } from "./evidence-traceability-matrix";
import { ACCESSIBLE_FORM_GENERATOR_TOOL } from "./accessible-form-generator";

export const TOOL_REGISTRY = [
  ACCESSIBLE_FORM_GENERATOR_TOOL,
  EVIDENCE_TRACEABILITY_MATRIX_TOOL,
] as const;
