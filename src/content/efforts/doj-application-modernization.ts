import type { EffortRecord } from "../model";

export const DOJ_APPLICATION_MODERNIZATION_EFFORT = {
  id: "effort-doj-application-modernization",
  title: "DOJ application modernization and accessible UX",
  summary:
    "A multi-year body of work improving the accessibility, usability, and maintainability of Department of Justice digital applications through user engagement and iterative design.",
  client: "U.S. Department of Justice",
  timeframe: "2021–2024",
  governance: ["Section 508", "Accessibility-first HCD", "Iterative delivery"],
  contentEntryIds: ["case-study-doj-accessibility-redesign"],
  tags: ["accessibility", "application-modernization", "user-research", "doj"],
} satisfies EffortRecord;
