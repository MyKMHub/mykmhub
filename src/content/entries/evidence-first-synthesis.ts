import type { ContentEntry } from "../types";

export const EVIDENCE_FIRST_SYNTHESIS_ENTRY = {
  id: "method-evidence-first-synthesis",
  slug: "evidence-first-synthesis",
  title: "Evidence-first synthesis",
  summary:
    "A method for connecting findings to source evidence, process context, confidence, and explicit gaps without replacing researcher judgment.",
  type: "method",
  domains: ["human-centered-design", "research", "knowledge-management"],
  tags: ["synthesis", "traceability", "confidence", "governance"],
  status: "published",
  visibility: "public",
  route: "/methods/evidence-first-synthesis",
  effortId: "effort-navy-hr-modernization",
  relatedEntryIds: [
    "tool-evidence-traceability-matrix",
    "case-study-hcd-velocity-engine",
  ],
} satisfies ContentEntry;
