import type { EffortRecord } from "../model";

export const ACCESSIBLE_FORM_GENERATOR_EFFORT = {
  id: "effort-accessible-form-generator",
  title: "Accessible form guidance and requirements generation",
  summary:
    "A product-design effort to align accessible form components, UX content, development requirements, and test expectations through one working source of truth.",
  client: "U.S. Navy",
  timeframe: "2025–2026",
  governance: ["Section 508", "WCAG", "USWDS-informed patterns"],
  contentEntryIds: [
    "case-study-accessible-form-generator",
    "tool-accessible-form-generator",
  ],
  tags: ["accessibility", "forms", "design-systems", "handoff"],
} satisfies EffortRecord;
