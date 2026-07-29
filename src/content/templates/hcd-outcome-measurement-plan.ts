export const HCD_MEASUREMENT_DIMENSIONS = [
  {
    title: "Experience",
    prompt:
      "Can people complete their goals effectively, efficiently, confidently, and with an acceptable experience?",
  },
  {
    title: "Accessibility and equity",
    prompt:
      "Can disabled people and differently situated groups achieve comparable outcomes without disproportionate burden?",
  },
  {
    title: "Behavior and adoption",
    prompt:
      "Are people using the intended path, completing key tasks, returning when appropriate, and avoiding harmful workarounds?",
  },
  {
    title: "Delivery and quality",
    prompt:
      "Did better evidence reduce ambiguity, rework, defects, cycle time, or late requirement changes?",
  },
  {
    title: "Mission, service, and risk",
    prompt:
      "Did the change improve service performance, decision quality, compliance, trust, safety, or exposure to material risk?",
  },
  {
    title: "Capability and learning",
    prompt:
      "Can teams reuse the evidence, pattern, skill, or operating knowledge and make better decisions without the original contributors?",
  },
] as const;

export const HCD_OUTCOME_MEASUREMENT_MARKDOWN = `# HCD outcome measurement and learning plan

## Plan control
- Outcome or decision:
- Accountable owner:
- Measurement lead:
- Related effort and decision records:
- Baseline period:
- Review cadence:
- Next decision date:

## Intended change
- People and context:
- Current condition:
- Intended user or stakeholder outcome:
- Intended mission, service, or organizational outcome:
- HCD contribution and other material influences:
- Assumptions:

## Outcome chain
- Capability or input:
- HCD activity:
- Immediate output:
- Expected behavior or experience change:
- Expected service or mission effect:
- Evidence that could disconfirm the chain:

## Balanced measures
For each measure:
- Dimension: Experience | Accessibility and equity | Behavior and adoption | Delivery and quality | Mission, service, and risk | Capability and learning
- Question the measure helps answer:
- Measure and operational definition:
- Baseline:
- Target or decision threshold:
- Source and collection method:
- Population, segment, or disaggregation:
- Owner and cadence:
- Limitations and possible unintended consequences:

## Interpretation and decision
- What changed:
- Confidence and alternative explanations:
- Unequal or unintended effects:
- Evidence gaps:
- Decision or action triggered:
- Owner and due date:

## Learning record
- What should continue:
- What should change:
- What should stop:
- Reusable evidence, pattern, or guidance:
- Next review trigger:
`;
