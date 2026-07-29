import { NAVY_HR_MODERNIZATION_EFFORT } from "./navy-hr-modernization";
import { ACCESSIBLE_FORM_GENERATOR_EFFORT } from "./accessible-form-generator";
import { AI_IMAGE_PROMPT_WIZARD_EFFORT } from "./ai-image-prompt-wizard";
import { DOJ_APPLICATION_MODERNIZATION_EFFORT } from "./doj-application-modernization";

export const EFFORT_REGISTRY = [
  NAVY_HR_MODERNIZATION_EFFORT,
  ACCESSIBLE_FORM_GENERATOR_EFFORT,
  AI_IMAGE_PROMPT_WIZARD_EFFORT,
  DOJ_APPLICATION_MODERNIZATION_EFFORT,
] as const;

export function getEffortById(id: string) {
  return EFFORT_REGISTRY.find((effort) => effort.id === id);
}
