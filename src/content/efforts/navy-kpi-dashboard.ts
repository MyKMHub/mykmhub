import type { EffortRecord } from "../model";

export const NAVY_KPI_DASHBOARD_EFFORT = {
  id: "effort-navy-kpi-dashboard",
  title: "Navy eCRM performance and decision framing",
  summary:
    "A dashboard-design effort translating delivery, quality, risk, and customer-experience measures into a shared leadership view for prioritization and action.",
  client: "U.S. Navy N16 eCRM Line of Effort",
  timeframe: "2025",
  governance: ["Outcome-oriented performance framing", "Concept validation required"],
  contentEntryIds: ["case-study-navy-kpi-dashboard"],
  tags: ["dashboard", "performance-management", "customer-experience", "navy"],
} satisfies EffortRecord;
