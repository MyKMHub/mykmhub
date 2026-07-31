import type { ContentEntry } from "../types";

export const HCD_RESEARCH_EVIDENCE_PLAN_ENTRY = {
  id: "template-hcd-research-evidence-plan",
  slug: "hcd-research-evidence-plan",
  title: "HCD research and evidence plan",
  summary:
    "A copy-ready plan for connecting a decision to inclusive research, permitted evidence, traceability, responsible data handling, and accountable handoffs.",
  type: "template",
  domains: [
    "human-centered-design",
    "research",
    "governance",
    "accessibility",
    "knowledge-management",
  ],
  tags: ["research-planning", "evidence", "ethics", "traceability"],
  status: "published",
  visibility: "public",
  route: "/templates/hcd-research-evidence-plan",
  relatedEntryIds: [
    "pattern-hcd-engagement-intake-triage",
    "method-evidence-first-synthesis",
    "template-hcd-decision-evidence-record",
    "framework-accessibility-governance-baseline",
    "framework-hcd-operating-model-baseline",
    "landing-hcd-director-toolkit",
  ],
} satisfies ContentEntry;
