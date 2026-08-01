"use client";

import { Button } from "@react-spectrum/s2/Button";
import { Picker, PickerItem } from "@react-spectrum/s2/Picker";
import { TextArea } from "@react-spectrum/s2/TextArea";
import { TextField } from "@react-spectrum/s2/TextField";
import { type FormEvent, useMemo, useRef, useState } from "react";
import { HCD_MEASUREMENT_DIMENSIONS } from "@/content/templates/hcd-outcome-measurement-plan";

type MeasurementDimension = (typeof HCD_MEASUREMENT_DIMENSIONS)[number]["title"];

interface PlanFields {
  title: string;
  owner: string;
  reviewCadence: string;
  nextDecisionDate: string;
  peopleAndContext: string;
  currentCondition: string;
  intendedOutcome: string;
  organizationalOutcome: string;
  contribution: string;
  activity: string;
  output: string;
  expectedChange: string;
  expectedEffect: string;
  disconfirmingEvidence: string;
  interpretationGuardrails: string;
  learningActions: string;
}

interface MeasureFields {
  id: number;
  dimension: MeasurementDimension;
  question: string;
  definition: string;
  baseline: string;
  threshold: string;
  source: string;
  population: string;
  ownerCadence: string;
  limitations: string;
}

const EMPTY_PLAN: PlanFields = {
  title: "",
  owner: "",
  reviewCadence: "",
  nextDecisionDate: "",
  peopleAndContext: "",
  currentCondition: "",
  intendedOutcome: "",
  organizationalOutcome: "",
  contribution: "",
  activity: "",
  output: "",
  expectedChange: "",
  expectedEffect: "",
  disconfirmingEvidence: "",
  interpretationGuardrails: "",
  learningActions: "",
};

function emptyMeasure(id: number): MeasureFields {
  return {
    id,
    dimension: "Experience",
    question: "",
    definition: "",
    baseline: "",
    threshold: "",
    source: "",
    population: "",
    ownerCadence: "",
    limitations: "",
  };
}

function recorded(value: string) {
  return value.trim() || "Not recorded";
}

function buildMarkdown(plan: PlanFields, measures: MeasureFields[]) {
  const measureMarkdown = measures
    .map(
      (measure, index) => `### Measure ${index + 1}: ${measure.dimension}
- Question the measure helps answer: ${measure.question.trim()}
- Measure and operational definition: ${measure.definition.trim()}
- Baseline: ${recorded(measure.baseline)}
- Target or decision threshold: ${recorded(measure.threshold)}
- Source and collection method: ${measure.source.trim()}
- Population, segment, or disaggregation: ${recorded(measure.population)}
- Owner and cadence: ${recorded(measure.ownerCadence)}
- Limitations and possible unintended consequences: ${recorded(measure.limitations)}`,
    )
    .join("\n\n");

  return `# ${plan.title.trim()}

## Plan control
- Accountable owner: ${recorded(plan.owner)}
- Review cadence: ${recorded(plan.reviewCadence)}
- Next decision date: ${recorded(plan.nextDecisionDate)}

## Intended change
- People and context: ${recorded(plan.peopleAndContext)}
- Current condition: ${plan.currentCondition.trim()}
- Intended user or stakeholder outcome: ${plan.intendedOutcome.trim()}
- Intended mission, service, or organizational outcome: ${recorded(plan.organizationalOutcome)}
- HCD contribution and other material influences: ${recorded(plan.contribution)}

## Outcome chain
- HCD activity: ${recorded(plan.activity)}
- Immediate output: ${recorded(plan.output)}
- Expected behavior or experience change: ${recorded(plan.expectedChange)}
- Expected service or mission effect: ${recorded(plan.expectedEffect)}
- Evidence that could disconfirm the chain: ${recorded(plan.disconfirmingEvidence)}

## Balanced measures
${measureMarkdown}

## Interpretation and decision
- Interpretation guardrails and alternative explanations: ${recorded(plan.interpretationGuardrails)}

## Learning record
- Continue, change, stop, or reuse: ${recorded(plan.learningActions)}
`;
}

export function HcdOutcomeMeasurementPlanBuilder() {
  const [plan, setPlan] = useState(EMPTY_PLAN);
  const [measures, setMeasures] = useState<MeasureFields[]>([emptyMeasure(1)]);
  const [generated, setGenerated] = useState(false);
  const [message, setMessage] = useState("");
  const nextMeasureId = useRef(2);
  const markdown = useMemo(() => buildMarkdown(plan, measures), [measures, plan]);

  function updatePlan<Key extends keyof PlanFields>(key: Key, value: PlanFields[Key]) {
    setPlan((current) => ({ ...current, [key]: value }));
    setGenerated(false);
    setMessage("");
  }

  function updateMeasure<Key extends keyof Omit<MeasureFields, "id">>(
    id: number,
    key: Key,
    value: MeasureFields[Key],
  ) {
    setMeasures((current) =>
      current.map((measure) =>
        measure.id === id ? { ...measure, [key]: value } : measure,
      ),
    );
    setGenerated(false);
    setMessage("");
  }

  function addMeasure() {
    const id = nextMeasureId.current;
    nextMeasureId.current += 1;
    setMeasures((current) => [...current, emptyMeasure(id)]);
    setGenerated(false);
    setMessage(`Added measure ${measures.length + 1}.`);
  }

  function removeMeasure(id: number) {
    const index = measures.findIndex((measure) => measure.id === id);
    setMeasures((current) => current.filter((measure) => measure.id !== id));
    setGenerated(false);
    setMessage(`Removed measure ${index + 1}.`);
  }

  function generate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setGenerated(true);
    setMessage("Measurement and learning plan generated. Review it before copying.");
  }

  async function copyMarkdown() {
    await navigator.clipboard.writeText(markdown);
    setMessage("Measurement and learning plan copied as Markdown.");
  }

  function reset() {
    setPlan(EMPTY_PLAN);
    setMeasures([emptyMeasure(1)]);
    nextMeasureId.current = 2;
    setGenerated(false);
    setMessage("Cleared the builder. No entered content was retained.");
  }

  return (
    <section className="measurement-plan-builder" aria-labelledby="measurement-builder-heading">
      <div className="tool-section-heading">
        <p className="eyebrow">Browser-only workspace</p>
        <h2 id="measurement-builder-heading">Build the measurement and learning plan</h2>
        <p>
          Start with the outcome and decision, then define only the balanced
          measures needed to learn, continue, change, scale, or stop.
        </p>
      </div>

      <aside className="privacy-notice" aria-labelledby="measurement-privacy-heading">
        <h2 id="measurement-privacy-heading">Use authorized, sanitized information only</h2>
        <p>
          Entries are not saved or transmitted. Do not enter sensitive data, and
          do not plan collection from people without appropriate authority,
          notice, consent, access controls, and retention rules.
        </p>
      </aside>

      <form className="matrix-form" onSubmit={generate}>
        <fieldset>
          <legend>Plan control and intended change</legend>
          <div className="form-grid">
            <TextField label="Plan title" value={plan.title} onChange={(value) => updatePlan("title", value)} isRequired />
            <TextField label="Accountable owner" value={plan.owner} onChange={(value) => updatePlan("owner", value)} />
            <TextField label="Review cadence" value={plan.reviewCadence} onChange={(value) => updatePlan("reviewCadence", value)} />
            <TextField label="Next decision date" value={plan.nextDecisionDate} onChange={(value) => updatePlan("nextDecisionDate", value)} />
            <TextArea label="People and context" value={plan.peopleAndContext} onChange={(value) => updatePlan("peopleAndContext", value)} />
            <TextArea label="Current condition" value={plan.currentCondition} onChange={(value) => updatePlan("currentCondition", value)} isRequired />
            <TextArea label="Intended user or stakeholder outcome" value={plan.intendedOutcome} onChange={(value) => updatePlan("intendedOutcome", value)} isRequired />
            <TextArea label="Intended mission, service, or organizational outcome" value={plan.organizationalOutcome} onChange={(value) => updatePlan("organizationalOutcome", value)} />
            <TextArea label="HCD contribution and other material influences" value={plan.contribution} onChange={(value) => updatePlan("contribution", value)} description="Describe contribution without claiming sole causation." />
          </div>
        </fieldset>

        <fieldset>
          <legend>Outcome chain</legend>
          <div className="form-grid">
            <TextArea label="HCD activity" value={plan.activity} onChange={(value) => updatePlan("activity", value)} />
            <TextArea label="Immediate output" value={plan.output} onChange={(value) => updatePlan("output", value)} />
            <TextArea label="Expected behavior or experience change" value={plan.expectedChange} onChange={(value) => updatePlan("expectedChange", value)} />
            <TextArea label="Expected service or mission effect" value={plan.expectedEffect} onChange={(value) => updatePlan("expectedEffect", value)} />
            <TextArea label="Evidence that could disconfirm the chain" value={plan.disconfirmingEvidence} onChange={(value) => updatePlan("disconfirmingEvidence", value)} />
          </div>
        </fieldset>

        <section className="measure-builder" aria-labelledby="measures-heading">
          <div className="tool-section-heading">
            <p className="eyebrow">Balanced evidence</p>
            <h3 id="measures-heading">Define decision-ready measures</h3>
            <p>
              Include accessibility and unequal effects whenever averages could
              conceal materially different outcomes.
            </p>
          </div>

          {measures.map((measure, index) => (
            <fieldset className="measure-card" key={measure.id}>
              <legend>Measure {index + 1}</legend>
              <div className="form-grid">
                <Picker label={`Measure ${index + 1} dimension`} selectedKey={measure.dimension} onSelectionChange={(key) => updateMeasure(measure.id, "dimension", key as MeasurementDimension)}>
                  {HCD_MEASUREMENT_DIMENSIONS.map((dimension) => <PickerItem id={dimension.title} key={dimension.title}>{dimension.title}</PickerItem>)}
                </Picker>
                <TextArea label={`Measure ${index + 1} question`} value={measure.question} onChange={(value) => updateMeasure(measure.id, "question", value)} isRequired />
                <TextArea label={`Measure ${index + 1} operational definition`} value={measure.definition} onChange={(value) => updateMeasure(measure.id, "definition", value)} isRequired />
                <TextField label={`Measure ${index + 1} baseline`} value={measure.baseline} onChange={(value) => updateMeasure(measure.id, "baseline", value)} />
                <TextField label={`Measure ${index + 1} target or decision threshold`} value={measure.threshold} onChange={(value) => updateMeasure(measure.id, "threshold", value)} />
                <TextArea label={`Measure ${index + 1} source and collection method`} value={measure.source} onChange={(value) => updateMeasure(measure.id, "source", value)} isRequired />
                <TextArea label={`Measure ${index + 1} population, segment, or disaggregation`} value={measure.population} onChange={(value) => updateMeasure(measure.id, "population", value)} />
                <TextField label={`Measure ${index + 1} owner and cadence`} value={measure.ownerCadence} onChange={(value) => updateMeasure(measure.id, "ownerCadence", value)} />
                <TextArea label={`Measure ${index + 1} limitations and possible unintended consequences`} value={measure.limitations} onChange={(value) => updateMeasure(measure.id, "limitations", value)} />
              </div>
              <Button type="button" variant="negative" fillStyle="outline" onPress={() => removeMeasure(measure.id)} isDisabled={measures.length === 1}>
                Remove measure {index + 1}
              </Button>
            </fieldset>
          ))}

          <Button type="button" variant="secondary" onPress={addMeasure}>Add another measure</Button>
        </section>

        <fieldset>
          <legend>Interpretation and learning</legend>
          <div className="form-grid">
            <TextArea label="Interpretation guardrails and alternative explanations" value={plan.interpretationGuardrails} onChange={(value) => updatePlan("interpretationGuardrails", value)} />
            <TextArea label="What should continue, change, stop, or be reused" value={plan.learningActions} onChange={(value) => updatePlan("learningActions", value)} />
          </div>
        </fieldset>

        <div className="tool-actions">
          <Button type="submit" variant="accent">Generate plan</Button>
          <Button type="button" variant="secondary" onPress={reset}>Clear</Button>
        </div>
      </form>

      <p className="sr-status" aria-live="polite">{message}</p>

      {generated ? (
        <section className="decision-record-output" aria-labelledby="measurement-output-heading">
          <p className="eyebrow">Generated artifact</p>
          <h2 id="measurement-output-heading">Review and copy the Markdown</h2>
          <p>
            Verify collection authority, operational definitions, sources,
            unequal effects, and alternative explanations before using the plan.
          </p>
          <div className="tool-actions">
            <Button variant="primary" onPress={copyMarkdown}>Copy Markdown</Button>
          </div>
          <pre className="template-code" tabIndex={0} aria-label="Generated outcome measurement and learning plan Markdown">
            <code>{markdown}</code>
          </pre>
        </section>
      ) : null}
    </section>
  );
}
