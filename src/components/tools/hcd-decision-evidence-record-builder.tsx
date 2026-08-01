"use client";

import { Button } from "@react-spectrum/s2/Button";
import { Picker, PickerItem } from "@react-spectrum/s2/Picker";
import { TextArea } from "@react-spectrum/s2/TextArea";
import { TextField } from "@react-spectrum/s2/TextField";
import { type FormEvent, useMemo, useState } from "react";

type DecisionStatus = "Proposed" | "Decided" | "Superseded" | "Archived";
type EvidenceConfidence = "High" | "Moderate" | "Low" | "Mixed";

interface DecisionRecordForm {
  title: string;
  stableId: string;
  status: DecisionStatus;
  owner: string;
  reviewDate: string;
  decision: string;
  affectedPeople: string;
  constraints: string;
  evidence: string;
  confidence: EvidenceConfidence;
  limitations: string;
  options: string;
  accessibilityImplications: string;
  selectedOption: string;
  rationale: string;
  authority: string;
  actions: string;
  measures: string;
  reviewTriggers: string;
}

const EMPTY_RECORD: DecisionRecordForm = {
  title: "",
  stableId: "",
  status: "Proposed",
  owner: "",
  reviewDate: "",
  decision: "",
  affectedPeople: "",
  constraints: "",
  evidence: "",
  confidence: "Moderate",
  limitations: "",
  options: "",
  accessibilityImplications: "",
  selectedOption: "",
  rationale: "",
  authority: "",
  actions: "",
  measures: "",
  reviewTriggers: "",
};

function recorded(value: string) {
  return value.trim() || "Not recorded";
}

function buildMarkdown(record: DecisionRecordForm) {
  return `# ${record.title.trim()}

## Record control
- Stable ID: ${recorded(record.stableId)}
- Status: ${record.status}
- Accountable owner: ${recorded(record.owner)}
- Next review: ${recorded(record.reviewDate)}

## Decision context
- Decision to make: ${record.decision.trim()}
- People, services, systems, and outcomes affected: ${recorded(record.affectedPeople)}
- Constraints and decision deadline: ${recorded(record.constraints)}

## Evidence considered
- Material evidence and source references: ${record.evidence.trim()}
- Confidence and representativeness: ${record.confidence}
- Limitations, contradictions, and evidence gaps: ${recorded(record.limitations)}

## Options and implications
- Options considered, including the current state: ${recorded(record.options)}
- Accessibility, privacy, safety, ethics, policy, and security implications: ${recorded(record.accessibilityImplications)}

## Decision and rationale
- Selected option: ${record.selectedOption.trim()}
- Evidence-based rationale: ${recorded(record.rationale)}
- Decision authority and approvals: ${recorded(record.authority)}

## Action and review
- Actions, owners, dates, and acceptance evidence: ${recorded(record.actions)}
- Measures of effectiveness: ${recorded(record.measures)}
- Review triggers: ${recorded(record.reviewTriggers)}
`;
}

export function HcdDecisionEvidenceRecordBuilder() {
  const [record, setRecord] = useState(EMPTY_RECORD);
  const [generated, setGenerated] = useState(false);
  const [message, setMessage] = useState("");
  const markdown = useMemo(() => buildMarkdown(record), [record]);

  function update<Key extends keyof DecisionRecordForm>(
    key: Key,
    value: DecisionRecordForm[Key],
  ) {
    setRecord((current) => ({ ...current, [key]: value }));
    setGenerated(false);
    setMessage("");
  }

  function generate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setGenerated(true);
    setMessage("Decision record generated. Review it before copying.");
  }

  async function copyMarkdown() {
    await navigator.clipboard.writeText(markdown);
    setMessage("Decision record copied as Markdown.");
  }

  function reset() {
    setRecord(EMPTY_RECORD);
    setGenerated(false);
    setMessage("Cleared the builder. No entered content was retained.");
  }

  return (
    <section className="decision-record-builder" aria-labelledby="builder-heading">
      <div className="tool-section-heading">
        <p className="eyebrow">Browser-only workspace</p>
        <h2 id="builder-heading">Build the decision record</h2>
        <p>
          Capture enough context for a future reviewer to understand the decision
          without copying sensitive source material into this browser.
        </p>
      </div>

      <aside className="privacy-notice" aria-labelledby="decision-privacy-heading">
        <h2 id="decision-privacy-heading">Use sanitized information only</h2>
        <p>
          Entries are not saved or sent to a server. Do not enter personal,
          classified, controlled, credential, client, or other sensitive content.
        </p>
      </aside>

      <form className="matrix-form" onSubmit={generate}>
        <fieldset>
          <legend>Record control</legend>
          <div className="form-grid">
            <TextField label="Decision title" value={record.title} onChange={(value) => update("title", value)} isRequired />
            <TextField label="Stable ID" value={record.stableId} onChange={(value) => update("stableId", value)} description="Use the identifier from your approved system, if one exists." />
            <Picker label="Status" selectedKey={record.status} onSelectionChange={(key) => update("status", key as DecisionStatus)}>
              {(["Proposed", "Decided", "Superseded", "Archived"] as const).map((status) => <PickerItem id={status} key={status}>{status}</PickerItem>)}
            </Picker>
            <TextField label="Accountable owner" value={record.owner} onChange={(value) => update("owner", value)} />
            <TextField label="Next review" value={record.reviewDate} onChange={(value) => update("reviewDate", value)} description="Use an unambiguous date or review condition." />
          </div>
        </fieldset>

        <fieldset>
          <legend>Decision context</legend>
          <div className="form-grid">
            <TextArea label="Decision to make" value={record.decision} onChange={(value) => update("decision", value)} isRequired />
            <TextArea label="People, services, systems, and outcomes affected" value={record.affectedPeople} onChange={(value) => update("affectedPeople", value)} />
            <TextArea label="Constraints and decision deadline" value={record.constraints} onChange={(value) => update("constraints", value)} />
          </div>
        </fieldset>

        <fieldset>
          <legend>Evidence and implications</legend>
          <div className="form-grid">
            <TextArea label="Material evidence and source references" value={record.evidence} onChange={(value) => update("evidence", value)} description="Reference governed sources; do not paste sensitive raw evidence." isRequired />
            <Picker label="Confidence and representativeness" selectedKey={record.confidence} onSelectionChange={(key) => update("confidence", key as EvidenceConfidence)}>
              {(["High", "Moderate", "Low", "Mixed"] as const).map((confidence) => <PickerItem id={confidence} key={confidence}>{confidence}</PickerItem>)}
            </Picker>
            <TextArea label="Limitations, contradictions, and evidence gaps" value={record.limitations} onChange={(value) => update("limitations", value)} />
            <TextArea label="Options considered, including the current state" value={record.options} onChange={(value) => update("options", value)} />
            <TextArea label="Accessibility, privacy, safety, ethics, policy, and security implications" value={record.accessibilityImplications} onChange={(value) => update("accessibilityImplications", value)} />
          </div>
        </fieldset>

        <fieldset>
          <legend>Decision, action, and review</legend>
          <div className="form-grid">
            <TextArea label="Selected option" value={record.selectedOption} onChange={(value) => update("selectedOption", value)} isRequired />
            <TextArea label="Evidence-based rationale" value={record.rationale} onChange={(value) => update("rationale", value)} />
            <TextArea label="Decision authority and approvals" value={record.authority} onChange={(value) => update("authority", value)} />
            <TextArea label="Actions, owners, dates, and acceptance evidence" value={record.actions} onChange={(value) => update("actions", value)} />
            <TextArea label="Measures of effectiveness" value={record.measures} onChange={(value) => update("measures", value)} />
            <TextArea label="Review triggers" value={record.reviewTriggers} onChange={(value) => update("reviewTriggers", value)} />
          </div>
        </fieldset>

        <div className="tool-actions">
          <Button type="submit" variant="accent">Generate record</Button>
          <Button type="button" variant="secondary" onPress={reset}>Clear</Button>
        </div>
      </form>

      <p className="sr-status" aria-live="polite">{message}</p>

      {generated ? (
        <section className="decision-record-output" aria-labelledby="output-heading">
          <p className="eyebrow">Generated artifact</p>
          <h2 id="output-heading">Review and copy the Markdown</h2>
          <p>
            Check claims, evidence references, authority, and sensitive information
            before moving this record into an approved system.
          </p>
          <div className="tool-actions">
            <Button variant="primary" onPress={copyMarkdown}>Copy Markdown</Button>
          </div>
          <pre className="template-code" tabIndex={0} aria-label="Generated decision record Markdown">
            <code>{markdown}</code>
          </pre>
        </section>
      ) : null}
    </section>
  );
}
