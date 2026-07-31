export const HCD_OPERATING_AGREEMENT_SECTIONS = [
  {
    title: "Agreement control",
    fields: [
      "Scope, accountable owner, approving authority, and contributors",
      "Status, version, effective date, next review, and change history",
      "Related strategy, policy, portfolio, service, and delivery records",
    ],
  },
  {
    title: "Mandate and outcomes",
    fields: [
      "Why the HCD capability exists and which people and services it supports",
      "User, mission, accessibility, delivery, and organizational outcomes",
      "Boundaries, obligations, assumptions, and work outside the mandate",
    ],
  },
  {
    title: "Demand and capacity",
    fields: [
      "How work enters and the minimum intake information",
      "Priority dimensions, routing outcomes, and decision authority",
      "Capacity assumptions, service levels, and treatment of unmet demand",
    ],
  },
  {
    title: "Evidence and knowledge",
    fields: [
      "Permitted sources, research safeguards, traceability, and confidence",
      "Required records, storage, access, retention, and publication rules",
      "How findings become requirements, decisions, and reusable knowledge",
    ],
  },
  {
    title: "Decision and delivery integration",
    fields: [
      "Who recommends, reviews, decides, accepts risk, and resolves disagreement",
      "Required checkpoints from framing through post-release learning",
      "Acceptance evidence, release conditions, exceptions, and escalation",
    ],
  },
  {
    title: "Accessibility and responsible practice",
    fields: [
      "Applicable commitments, standards, policies, and supported environments",
      "Accessibility, privacy, consent, ethics, inclusion, safety, and human-review controls",
      "Specialist participation, feedback, remediation, and exception governance",
    ],
  },
  {
    title: "Measures and model review",
    fields: [
      "Balanced outcome, accessibility, delivery, risk, capacity, and learning measures",
      "Owners, sources, cadence, thresholds, interpretation, and resulting actions",
      "Triggers and evidence for revising or retiring the operating agreement",
    ],
  },
] as const;

export const HCD_OPERATING_AGREEMENT_MARKDOWN = `# Minimum HCD operating agreement

## Agreement control
- Scope:
- Accountable owner:
- Approving authority:
- Contributors and reviewers:
- Status and version:
- Effective date:
- Next review:
- Related records:
- Change history:

## Mandate and outcomes
- Purpose of the HCD capability:
- People, services, and organizational areas supported:
- User and experience outcomes:
- Mission and service outcomes:
- Accessibility and inclusion outcomes:
- Delivery and organizational-capability outcomes:
- Boundaries, obligations, constraints, and assumptions:
- Work outside the mandate:

## Demand and capacity
- How requests enter:
- Minimum intake information:
- Priority dimensions:
- Routing outcomes and authority:
- Capacity assumptions and service expectations:
- How deferred, declined, and unmet demand remains visible:
- Urgent risk and escalation path:

## Evidence and knowledge
- Permitted evidence sources and research safeguards:
- Traceability and confidence expectations:
- Required records and stable identifiers:
- Storage, access, retention, and publication rules:
- How findings become requirements and decisions:
- How reusable knowledge is reviewed, connected, and maintained:

## Decision and delivery integration
- Recommendation, review, decision, and risk-acceptance roles:
- Disagreement and escalation path:
- Required delivery checkpoints:
- Minimum evidence at consequential decisions:
- Acceptance and release conditions:
- Exception approval and remediation controls:
- Post-release learning and follow-through:

## Accessibility and responsible practice
- Applicable commitments, standards, policies, and environments:
- Accessibility ownership and specialist participation:
- Privacy, consent, ethics, inclusion, safety, security, and human-review controls:
- Required evaluation methods and evidence:
- Accessible feedback and support path:
- Barrier remediation and exception governance:

## Measures and model review
For each material measure, record its definition, source, owner, cadence,
threshold, limitations, decision, and resulting action.

- Experience and user outcomes:
- Accessibility and unequal effects:
- Delivery and operational outcomes:
- Risk and remediation:
- Demand, capacity, and unmet need:
- Organizational capability and learning:
- Conditions that trigger operating-model review:
- Evidence and authority required to revise this agreement:
`;
