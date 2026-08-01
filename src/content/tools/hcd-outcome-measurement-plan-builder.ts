import type { ToolRecord } from "./types";

export const HCD_OUTCOME_MEASUREMENT_PLAN_BUILDER_TOOL = {
  id: "tool-hcd-outcome-measurement-plan-builder",
  slug: "hcd-outcome-measurement-plan-builder",
  title: "HCD Outcome Measurement & Learning Plan Builder",
  briefDescription:
    "Build an outcome chain and a balanced set of decision-ready measures, then generate a copy-ready Markdown learning plan.",
  description:
    "A browser-only Spectrum 2 workflow that operationalizes the published HCD outcome measurement and learning plan without treating activity counts as outcomes.",
  context: "Outcome measurement, evaluation, and organizational learning",
  route: "/tools/hcd-outcome-measurement-plan-builder",
  contentStatus: "published",
  visibility: "public",
  operationalStatus: "working",
  statusLabel: "Working tool",
  statusNote:
    "Builds a reviewable outcome chain and repeatable measure records. Teams remain responsible for collection authority, data quality, interpretation, and storage in an approved system.",
  lastVerified: "2026-08-01",
  accessibilityNotes: [
    "Spectrum 2 controls provide labeled keyboard-operable inputs and measure-dimension selection.",
    "Measures can be added and removed without drag-and-drop or pointer-only interaction.",
    "Status changes are announced, and each remove action identifies its measure.",
    "The form, measure cards, and Markdown output reflow with enlarged text and narrow viewports.",
  ],
  privacyNotes: [
    "Entered content remains in memory in the current browser tab and is not persisted or transmitted.",
    "Do not enter personal, classified, controlled, credential, client, or other sensitive information.",
    "Use only authorized sources and collection methods, especially when measures involve people or disaggregated populations.",
  ],
  versionNotes: [
    {
      version: "1.0",
      date: "2026-08-01",
      notes: [
        "Added a guided outcome-chain workflow aligned to the published template.",
        "Added repeatable measures across six balanced evidence dimensions.",
        "Added copy-ready Markdown generation with explicit interpretation and learning guardrails.",
      ],
    },
  ],
} satisfies ToolRecord;
