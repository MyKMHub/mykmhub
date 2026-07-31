export const HCD_OPERATING_MODEL_REVIEW_AREAS = [
  {
    title: "Mandate and demand",
    prompt:
      "Are purpose, scope, ownership, intake, priority, capacity, routing, and decline decisions understood and consistently applied?",
  },
  {
    title: "Evidence and decisions",
    prompt:
      "Can consequential findings and decisions be traced to suitable evidence, confidence, limitations, authority, and unresolved disagreement?",
  },
  {
    title: "Delivery integration",
    prompt:
      "Does evidence change planning, requirements, design, acceptance, release, exceptions, and post-launch learning at useful times?",
  },
  {
    title: "Accessibility and responsibility",
    prompt:
      "Are disabled people included, barriers acted on, exceptions governed, and privacy, safety, and responsible-use controls operating throughout delivery?",
  },
  {
    title: "Outcomes and learning",
    prompt:
      "Do reviews distinguish activity from outcomes, expose unequal effects, produce decisions, and retain knowledge another person can use?",
  },
] as const;

export const HCD_OPERATING_MODEL_REVIEW_MARKDOWN = `# HCD operating model review and improvement plan

## Review control
- Operating model or agreement reviewed:
- Accountable owner:
- Review lead and participants:
- Evidence period:
- Review date:
- Version and status:
- Approving authority:
- Next review trigger or date:

## Review purpose and boundaries
- Decision this review must support:
- Scope included:
- Scope excluded:
- Material changes since the previous review:
- Known limitations or missing perspectives:
- People or groups affected by the operating model:

## Evidence considered
For each evidence source:
- Source and period:
- Owner and permitted audience:
- Question it helps answer:
- Confidence and limitations:
- Contradictory evidence or disagreement:

## Connected operating review
For each review area:
- Area: Mandate and demand | Evidence and decisions | Delivery integration | Accessibility and responsibility | Outcomes and learning
- Intended operating condition:
- Evidence of what is working:
- Evidence of friction, delay, exclusion, or risk:
- Recurring exception, workaround, or dependency:
- People or outcomes affected:
- Confidence and evidence gap:
- Continue, change, or stop recommendation:

## Cross-system findings
- Patterns appearing across multiple areas:
- Root conditions rather than visible symptoms:
- Conflicts between user, mission, policy, accessibility, and delivery needs:
- Risks requiring escalation or immediate control:
- Knowledge that should be retained or shared:

## Improvement decisions
For each approved action:
- Decision and rationale:
- Operating model, agreement, control, or practice affected:
- Accountable owner:
- Contributors:
- Due date or delivery checkpoint:
- Evidence of completion:
- Intended outcome and possible adverse effect:
- Follow-up measure and review trigger:

## Review conclusion
- Continue unchanged:
- Change now:
- Test before wider adoption:
- Stop or retire:
- Unresolved decision or evidence gap:
- Communication and publication plan:
- Approval and date:
`;
