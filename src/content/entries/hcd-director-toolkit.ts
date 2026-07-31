import type { ContentEntry } from "../types";

export const HCD_DIRECTOR_TOOLKIT_ENTRY = {
  id: "landing-hcd-director-toolkit",
  slug: "hcd-director-toolkit",
  title: "HCD Director Toolkit",
  summary:
    "Use connected methods, tools, guidance, and evidence to lead accessible human-centered work from research through governance and delivery.",
  type: "landing-page",
  domains: ["human-centered-design", "design-operations"],
  tags: ["director-toolkit", "contextual-view", "leadership"],
  status: "published",
  visibility: "public",
  route: "/toolkit",
  relatedEntryIds: [
    "framework-hcd-operating-model-baseline",
    "pattern-hcd-engagement-intake-triage",
    "template-hcd-decision-evidence-record",
    "template-hcd-outcome-measurement-plan",
    "pattern-hcd-delivery-checkpoints",
    "framework-accessibility-governance-baseline",
    "template-hcd-operating-agreement",
    "method-evidence-first-synthesis",
    "tool-accessible-form-generator",
    "guidance-ai-assisted-mykmhub-development",
    "landing-portfolio",
  ],
} satisfies ContentEntry;
