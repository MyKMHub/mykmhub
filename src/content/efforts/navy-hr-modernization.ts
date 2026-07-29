import type { EffortRecord } from "../model";

export const NAVY_HR_MODERNIZATION_EFFORT = {
  id: "effort-navy-hr-modernization",
  title: "Navy HR modernization through human-centered design",
  summary:
    "A shared body of work spanning research synthesis, process alignment, strategic decision support, and AI-augmented HCD operations.",
  client: "U.S. Navy",
  timeframe: "2025",
  governance: ["OPNAVINST 1500.47D", "Section 508"],
  contentEntryIds: [
    "case-study-hcd-velocity-engine",
    "method-evidence-first-synthesis",
    "tool-evidence-traceability-matrix",
  ],
  tags: [
    "human-centered-design",
    "design-operations",
    "automation",
    "knowledge-management",
  ],
} satisfies EffortRecord;
