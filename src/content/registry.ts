import { HOME_ENTRY } from "./entries/home";
import { TOOLS_ENTRY } from "./entries/tools";
import { EVIDENCE_MATRIX_TOOL_ENTRY } from "./entries/evidence-matrix-tool";
import { HCD_VELOCITY_CASE_STUDY_ENTRY } from "./entries/hcd-velocity-case-study";
import { EVIDENCE_FIRST_SYNTHESIS_ENTRY } from "./entries/evidence-first-synthesis";
import { PORTFOLIO_ENTRY } from "./entries/portfolio";
import type { ContentEntry } from "./types";

export const CONTENT_REGISTRY: readonly ContentEntry[] = [
  HOME_ENTRY,
  PORTFOLIO_ENTRY,
  TOOLS_ENTRY,
  EVIDENCE_MATRIX_TOOL_ENTRY,
  HCD_VELOCITY_CASE_STUDY_ENTRY,
  EVIDENCE_FIRST_SYNTHESIS_ENTRY,
];

export const PUBLISHED_CONTENT = CONTENT_REGISTRY.filter(
  (entry) => entry.status === "published" && entry.visibility === "public",
);

export function getPublishedEntryBySlug(slug: string) {
  return PUBLISHED_CONTENT.find((entry) => entry.slug === slug);
}
