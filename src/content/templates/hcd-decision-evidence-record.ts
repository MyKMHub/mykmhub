export const HCD_DECISION_RECORD_SECTIONS = [
  {
    title: "Record control",
    fields: [
      "Decision title and stable ID",
      "Status: proposed, decided, superseded, or archived",
      "Accountable decision owner",
      "Contributors and reviewers",
      "Decision date, effective date, and next review",
      "Related effort, intake, research, requirement, and delivery records",
    ],
  },
  {
    title: "Decision context",
    fields: [
      "Decision that must be made",
      "People, services, systems, and outcomes affected",
      "Constraints and decision deadline",
      "What happens if no decision is made",
    ],
  },
  {
    title: "Evidence considered",
    fields: [
      "Source or stable reference",
      "Supported finding",
      "Confidence and representativeness",
      "Limitations, contradictions, and evidence gaps",
      "Date collected or last verified",
    ],
  },
  {
    title: "Options and implications",
    fields: [
      "Options considered, including maintaining the current state",
      "User, mission, operational, technical, cost, and timing implications",
      "Accessibility, privacy, safety, ethical, policy, and security implications",
      "Dependencies, reversibility, and material risks",
    ],
  },
  {
    title: "Decision and rationale",
    fields: [
      "Selected option",
      "Rationale tied to evidence and stated outcomes",
      "Assumptions and uncertainty",
      "Dissenting views and unresolved concerns",
      "Authority used and required approvals",
    ],
  },
  {
    title: "Action and review",
    fields: [
      "Actions, owners, dates, and acceptance evidence",
      "Communication and documentation updates",
      "Measures that will indicate the decision is working",
      "Review triggers, including new evidence or changed conditions",
      "Superseding decision and change history",
    ],
  },
] as const;

export const HCD_DECISION_RECORD_MARKDOWN = `# HCD decision and evidence record

## Record control
- Decision title:
- Stable ID:
- Status: Proposed
- Accountable owner:
- Contributors and reviewers:
- Decision date:
- Effective date:
- Next review:
- Related records:

## Decision context
- Decision to make:
- People, services, systems, and outcomes affected:
- Constraints and decision deadline:
- Consequence of no decision:

## Evidence considered
For each material source:
- Source or stable reference:
- Supported finding:
- Confidence and representativeness:
- Limitations, contradictions, and evidence gaps:
- Collected or last verified:

## Options and implications
For each option, including the current state:
- Option:
- User and mission implications:
- Operational, technical, cost, and timing implications:
- Accessibility, privacy, safety, ethics, policy, and security:
- Dependencies, reversibility, and risks:

## Decision and rationale
- Selected option:
- Evidence-based rationale:
- Assumptions and uncertainty:
- Dissenting views and unresolved concerns:
- Decision authority and approvals:

## Action and review
- Actions, owners, dates, and acceptance evidence:
- Communication and documentation updates:
- Measures of effectiveness:
- Review triggers:
- Superseding decision and change history:
`;
