import { NAVY_HR_MODERNIZATION_EFFORT } from "./navy-hr-modernization";
import { ACCESSIBLE_FORM_GENERATOR_EFFORT } from "./accessible-form-generator";

export const EFFORT_REGISTRY = [
  NAVY_HR_MODERNIZATION_EFFORT,
  ACCESSIBLE_FORM_GENERATOR_EFFORT,
] as const;

export function getEffortById(id: string) {
  return EFFORT_REGISTRY.find((effort) => effort.id === id);
}
