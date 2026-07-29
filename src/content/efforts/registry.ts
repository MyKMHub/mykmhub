import { NAVY_HR_MODERNIZATION_EFFORT } from "./navy-hr-modernization";
import { ACCESSIBLE_FORM_GENERATOR_EFFORT } from "./accessible-form-generator";
import { AI_IMAGE_PROMPT_WIZARD_EFFORT } from "./ai-image-prompt-wizard";
import { DOJ_APPLICATION_MODERNIZATION_EFFORT } from "./doj-application-modernization";
import { MARCH_FOR_SCIENCE_REDESIGN_EFFORT } from "./march-for-science-redesign";
import { NAVY_KPI_DASHBOARD_EFFORT } from "./navy-kpi-dashboard";
import { PERSONAL_KNOWLEDGE_SYSTEM_EFFORT } from "./personal-knowledge-system";

export const EFFORT_REGISTRY = [
  NAVY_HR_MODERNIZATION_EFFORT,
  ACCESSIBLE_FORM_GENERATOR_EFFORT,
  AI_IMAGE_PROMPT_WIZARD_EFFORT,
  DOJ_APPLICATION_MODERNIZATION_EFFORT,
  MARCH_FOR_SCIENCE_REDESIGN_EFFORT,
  NAVY_KPI_DASHBOARD_EFFORT,
  PERSONAL_KNOWLEDGE_SYSTEM_EFFORT,
] as const;

export function getEffortById(id: string) {
  return EFFORT_REGISTRY.find((effort) => effort.id === id);
}
