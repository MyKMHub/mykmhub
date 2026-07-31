export const HCD_RESEARCH_EVIDENCE_PRINCIPLES = [
  {
    title: "Start with a decision",
    prompt:
      "Name the decision, decision owner, deadline, and uncertainty the evidence must reduce before selecting methods.",
  },
  {
    title: "Include affected people",
    prompt:
      "Plan for disabled people and differently situated groups whose needs, burdens, or outcomes averages could conceal.",
  },
  {
    title: "Govern the evidence",
    prompt:
      "Define permitted sources, consent, access, retention, attribution, and safeguards before collecting or transforming information.",
  },
  {
    title: "Preserve traceability",
    prompt:
      "Keep sources, observations, interpretations, confidence, disagreement, and validation distinct enough to review.",
  },
  {
    title: "Plan the handoff",
    prompt:
      "Identify how findings will become a decision record, delivery requirement, retained knowledge, or a documented evidence gap.",
  },
] as const;

export const HCD_RESEARCH_EVIDENCE_PLAN_MARKDOWN = `# HCD research and evidence plan

## Plan control
- Effort or request:
- Accountable decision owner:
- Research or evidence lead:
- Contributors and reviewers:
- Version and status:
- Decision deadline:
- Next review date:

## Decision and learning questions
- Decision this evidence must inform:
- Current uncertainty or risk:
- Primary learning questions:
- What is already known and from which sources:
- Evidence that could change or stop the planned direction:
- Questions explicitly outside this plan:

## People and participation
- People affected by the decision:
- Groups at risk of exclusion or disproportionate burden:
- Accessibility-inclusive recruitment and participation needs:
- Sampling approach and known limitations:
- Compensation, consent, and withdrawal approach:
- Accommodations, communication modes, and support:

## Evidence and methods
For each learning question:
- Method or permitted evidence source:
- Why it is appropriate:
- Participants, records, or other inputs:
- Collection or review procedure:
- Accessibility and usability of the research activity:
- Known bias, limitation, or competing explanation:
- Validation or triangulation approach:

## Privacy, safety, and stewardship
- Data minimization:
- Sensitive or restricted information:
- Authorized collection and processing environment:
- Access roles:
- Retention and deletion rule:
- De-identification or redaction:
- Incident or participant-harm escalation:
- AI or automation use, human review, and prohibited uses:

## Traceability and interpretation
- Source and evidence identifiers:
- Observation record:
- Interpretation and rationale:
- Confidence and supporting evidence:
- Contradictory evidence or disagreement:
- Validation status and reviewer:
- Unresolved evidence gaps:

## Decision and delivery handoff
- Synthesis output and owner:
- Decision record and approving authority:
- Requirements, acceptance criteria, or delivery checkpoint affected:
- Accessibility finding or exception path:
- Reusable knowledge and permitted audience:
- Action owner and due date:
- Follow-up evidence or measurement needed:
`;
