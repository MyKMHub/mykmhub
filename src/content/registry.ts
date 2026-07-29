import { HOME_ENTRY } from "./entries/home";
import { TOOLS_ENTRY } from "./entries/tools";
import { EVIDENCE_MATRIX_TOOL_ENTRY } from "./entries/evidence-matrix-tool";
import { HCD_VELOCITY_CASE_STUDY_ENTRY } from "./entries/hcd-velocity-case-study";
import { EVIDENCE_FIRST_SYNTHESIS_ENTRY } from "./entries/evidence-first-synthesis";
import { PORTFOLIO_ENTRY } from "./entries/portfolio";
import { NAVY_HR_AUTOMATED_HCD_CASE_STUDY_ENTRY } from "./entries/navy-hr-automated-hcd-case-study";
import { ACCESSIBLE_FORM_GENERATOR_CASE_STUDY_ENTRY } from "./entries/accessible-form-generator-case-study";
import { ACCESSIBLE_FORM_GENERATOR_TOOL_ENTRY } from "./entries/accessible-form-generator-tool";
import { AI_IMAGE_PROMPT_WIZARD_CASE_STUDY_ENTRY } from "./entries/ai-image-prompt-wizard-case-study";
import { AI_IMAGE_PROMPT_WIZARD_TOOL_ENTRY } from "./entries/ai-image-prompt-wizard-tool";
import { DOJ_ACCESSIBILITY_REDESIGN_CASE_STUDY_ENTRY } from "./entries/doj-accessibility-redesign-case-study";
import { MARCH_FOR_SCIENCE_REDESIGN_CASE_STUDY_ENTRY } from "./entries/march-for-science-redesign-case-study";
import { NAVY_KPI_DASHBOARD_CASE_STUDY_ENTRY } from "./entries/navy-kpi-dashboard-case-study";
import { PERSONAL_KNOWLEDGE_SYSTEM_CASE_STUDY_ENTRY } from "./entries/personal-knowledge-system-case-study";
import { DESIGN_SYSTEM_ENTRY } from "./entries/design-system";
import type { ContentEntry } from "./types";

export const CONTENT_REGISTRY: readonly ContentEntry[] = [
  HOME_ENTRY,
  PORTFOLIO_ENTRY,
  TOOLS_ENTRY,
  DESIGN_SYSTEM_ENTRY,
  EVIDENCE_MATRIX_TOOL_ENTRY,
  HCD_VELOCITY_CASE_STUDY_ENTRY,
  NAVY_HR_AUTOMATED_HCD_CASE_STUDY_ENTRY,
  ACCESSIBLE_FORM_GENERATOR_CASE_STUDY_ENTRY,
  ACCESSIBLE_FORM_GENERATOR_TOOL_ENTRY,
  AI_IMAGE_PROMPT_WIZARD_CASE_STUDY_ENTRY,
  AI_IMAGE_PROMPT_WIZARD_TOOL_ENTRY,
  DOJ_ACCESSIBILITY_REDESIGN_CASE_STUDY_ENTRY,
  MARCH_FOR_SCIENCE_REDESIGN_CASE_STUDY_ENTRY,
  NAVY_KPI_DASHBOARD_CASE_STUDY_ENTRY,
  PERSONAL_KNOWLEDGE_SYSTEM_CASE_STUDY_ENTRY,
  EVIDENCE_FIRST_SYNTHESIS_ENTRY,
];

export const PUBLISHED_CONTENT = CONTENT_REGISTRY.filter(
  (entry) => entry.status === "published" && entry.visibility === "public",
);

export function getPublishedEntryBySlug(slug: string) {
  return PUBLISHED_CONTENT.find((entry) => entry.slug === slug);
}
