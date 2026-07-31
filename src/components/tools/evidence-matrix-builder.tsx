"use client";

import { Button } from "@react-spectrum/s2/Button";
import { Picker, PickerItem } from "@react-spectrum/s2/Picker";
import { TextArea } from "@react-spectrum/s2/TextArea";
import { TextField } from "@react-spectrum/s2/TextField";
import { FormEvent, useEffect, useMemo, useState } from "react";

type Priority = "Low" | "Medium" | "High";
type Confidence = "Explicit" | "Inferred" | "None identified";

interface EvidenceRow {
  id: string;
  processId: string;
  processStep: string;
  evidence: string;
  source: string;
  pointOfContact: string;
  painPoint: string;
  priority: Priority;
  confidence: Confidence;
}

const STORAGE_KEY = "mykmhub-evidence-traceability-matrix";

const SAMPLE_ROWS: EvidenceRow[] = [
  {
    id: "sample-1",
    processId: "01",
    processStep: "Submit access request",
    evidence:
      "“I usually copy the same employee details into the request form and then send them again to the manager in email.”",
    source: "New-hire coordinator interview, 08:42",
    pointOfContact: "HR operations lead",
    painPoint:
      "Requesters enter the same information twice, increasing effort and the chance of inconsistent data.",
    priority: "High",
    confidence: "Explicit",
  },
  {
    id: "sample-2",
    processId: "02",
    processStep: "Check request completeness",
    evidence:
      "Seven of the 12 requests reviewed were returned because a start date, cost center, or system role was missing.",
    source: "Access-request audit, Q2 sample, rows 1–12",
    pointOfContact: "Service desk analyst",
    painPoint:
      "The form does not prevent incomplete requests, creating avoidable rework before review can begin.",
    priority: "High",
    confidence: "Explicit",
  },
  {
    id: "sample-3",
    processId: "03",
    processStep: "Obtain manager approval",
    evidence:
      "Approval time ranged from four hours to six business days; the longest cases each required a manual reminder.",
    source: "Workflow log analysis, 3–28 June",
    pointOfContact: "Identity and access manager",
    painPoint:
      "The lack of automatic reminders may be contributing to unpredictable approval times.",
    priority: "High",
    confidence: "Inferred",
  },
  {
    id: "sample-4",
    processId: "04",
    processStep: "Provision system access",
    evidence:
      "Analysts described opening the ticket, HR directory, role catalog, and each target system to complete one request.",
    source: "Service desk observation 02, 13:10–13:34",
    pointOfContact: "Senior access analyst",
    painPoint:
      "Provisioning requires repeated context switching across disconnected systems.",
    priority: "Medium",
    confidence: "Explicit",
  },
  {
    id: "sample-5",
    processId: "05",
    processStep: "Confirm access with requester",
    evidence:
      "Four of five observed tickets were closed after provisioning without confirmation that the employee could sign in.",
    source: "Ticket review, sample A, tickets 1042–1046",
    pointOfContact: "Service desk manager",
    painPoint:
      "Tickets may be closed before access is verified, allowing unresolved login problems to surface later.",
    priority: "Medium",
    confidence: "Inferred",
  },
  {
    id: "sample-6",
    processId: "06",
    processStep: "Review access after 90 days",
    evidence: "",
    source: "",
    pointOfContact: "Information security owner",
    painPoint:
      "None identified: the current research did not establish whether a 90-day access review occurs.",
    priority: "Low",
    confidence: "None identified",
  },
];

const EMPTY_FORM = {
  processId: "",
  processStep: "",
  evidence: "",
  source: "",
  pointOfContact: "",
  painPoint: "",
  priority: "Medium" as Priority,
  confidence: "Explicit" as Confidence,
};

function createId() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `entry-${Date.now()}`;
}

function escapeCsv(value: string) {
  return `"${value.replaceAll('"', '""')}"`;
}

export function EvidenceMatrixBuilder() {
  const [rows, setRows] = useState<EvidenceRow[]>([]);
  const [form, setForm] = useState(EMPTY_FORM);
  const [isLoaded, setIsLoaded] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    queueMicrotask(() => {
      if (saved) {
        try {
          setRows(JSON.parse(saved) as EvidenceRow[]);
        } catch {
          window.localStorage.removeItem(STORAGE_KEY);
        }
      }
      setIsLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (isLoaded) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(rows));
    }
  }, [isLoaded, rows]);

  const summary = useMemo(
    () => ({
      total: rows.length,
      explicit: rows.filter((row) => row.confidence === "Explicit").length,
      gaps: rows.filter((row) => row.confidence === "None identified").length,
    }),
    [rows],
  );

  function updateForm<Key extends keyof typeof EMPTY_FORM>(
    key: Key,
    value: (typeof EMPTY_FORM)[Key],
  ) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function addRow(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const row: EvidenceRow = { id: createId(), ...form };
    setRows((current) => [...current, row]);
    setForm(EMPTY_FORM);
    setMessage(`Added process step ${row.processId}.`);
  }

  function loadSample() {
    setRows(SAMPLE_ROWS);
    setMessage(`Loaded ${SAMPLE_ROWS.length} synthetic sample entries.`);
  }

  function clearRows() {
    setRows([]);
    setMessage("Cleared all entries from this browser.");
  }

  function removeRow(id: string) {
    setRows((current) => current.filter((row) => row.id !== id));
    setMessage("Removed one entry.");
  }

  function exportCsv() {
    const headers = [
      "Process ID",
      "Process step",
      "Evidence",
      "Source",
      "Evidence owner or point of contact",
      "Pain point",
      "Priority",
      "Source confidence",
    ];
    const lines = [
      headers.map(escapeCsv).join(","),
      ...rows.map((row) =>
        [
          row.processId,
          row.processStep,
          row.evidence,
          row.source,
          row.pointOfContact ?? "",
          row.painPoint,
          row.priority,
          row.confidence,
        ]
          .map(escapeCsv)
          .join(","),
      ),
    ];
    const blob = new Blob([`\uFEFF${lines.join("\r\n")}`], {
      type: "text/csv;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "evidence-traceability-matrix.csv";
    link.click();
    URL.revokeObjectURL(url);
    setMessage(`Exported ${rows.length} entries as CSV.`);
  }

  return (
    <section className="matrix-builder" aria-labelledby="builder-heading">
      <div className="tool-section-heading">
        <p className="eyebrow">Workspace</p>
        <h2 id="builder-heading">Build your matrix</h2>
        <p>
          Add one process-and-evidence relationship at a time. Record “None
          identified” when the research does not support a finding.
        </p>
      </div>

      <form className="matrix-form" onSubmit={addRow}>
        <fieldset>
          <legend>Process context</legend>
          <div className="form-grid form-grid-compact">
            <TextField
              label="Process ID"
              value={form.processId}
              onChange={(value) => updateForm("processId", value)}
              isRequired
            />
            <TextField
              label="Process step"
              value={form.processStep}
              onChange={(value) => updateForm("processStep", value)}
              isRequired
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>Research evidence</legend>
          <div className="form-grid">
            <TextArea
              label="Evidence or quotation"
              value={form.evidence}
              onChange={(value) => updateForm("evidence", value)}
              description="Leave blank only when confidence is None identified."
            />
            <TextField
              label="Source reference"
              value={form.source}
              onChange={(value) => updateForm("source", value)}
              description="For example: Interview 02, 14:20."
            />
            <TextField
              label="Evidence owner or point of contact"
              value={form.pointOfContact}
              onChange={(value) => updateForm("pointOfContact", value)}
              description="Who can clarify, validate, or follow up on this entry?"
            />
            <TextArea
              label="Pain point or finding"
              value={form.painPoint}
              onChange={(value) => updateForm("painPoint", value)}
              isRequired
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>Assessment</legend>
          <div className="form-grid form-grid-compact">
            <Picker
              label="Priority"
              selectedKey={form.priority}
              onSelectionChange={(key) => updateForm("priority", key as Priority)}
            >
              <PickerItem id="Low">Low</PickerItem>
              <PickerItem id="Medium">Medium</PickerItem>
              <PickerItem id="High">High</PickerItem>
            </Picker>
            <Picker
              label="Source confidence"
              selectedKey={form.confidence}
              onSelectionChange={(key) =>
                updateForm("confidence", key as Confidence)
              }
            >
              <PickerItem id="Explicit">Explicit</PickerItem>
              <PickerItem id="Inferred">Inferred</PickerItem>
              <PickerItem id="None identified">None identified</PickerItem>
            </Picker>
          </div>
        </fieldset>

        <div className="tool-actions">
          <Button type="submit" variant="accent">
            Add to matrix
          </Button>
          <Button type="button" variant="secondary" onPress={loadSample}>
            Load sample
          </Button>
        </div>
      </form>

      <p className="sr-status" aria-live="polite">
        {message}
      </p>

      <section className="matrix-results" aria-labelledby="matrix-heading">
        <div className="results-header">
          <div>
            <p className="eyebrow">Results</p>
            <h2 id="matrix-heading">Evidence matrix</h2>
          </div>
          <dl className="matrix-summary">
            <div>
              <dt>Total entries</dt>
              <dd>{summary.total}</dd>
            </div>
            <div>
              <dt>Explicit evidence</dt>
              <dd>{summary.explicit}</dd>
            </div>
            <div>
              <dt>Evidence gaps</dt>
              <dd>{summary.gaps}</dd>
            </div>
          </dl>
        </div>

        {rows.length === 0 ? (
          <div className="empty-state">
            <h3>No entries yet</h3>
            <p>Add an entry above or load the synthetic sample.</p>
          </div>
        ) : (
          <div className="table-scroll" tabIndex={0} role="region" aria-label="Evidence matrix table">
            <table>
              <caption>
                Research evidence mapped to process steps with priority and
                confidence
              </caption>
              <thead>
                <tr>
                  <th scope="col">Process</th>
                  <th scope="col">Finding and evidence</th>
                  <th scope="col">Assessment</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id}>
                    <td>
                      <strong>{row.processId}</strong>
                      <span>{row.processStep}</span>
                    </td>
                    <td>
                      <strong>{row.painPoint}</strong>
                      {row.evidence && <span>{row.evidence}</span>}
                      {row.source && <small>Source: {row.source}</small>}
                      {row.pointOfContact && (
                        <small>Point of contact: {row.pointOfContact}</small>
                      )}
                    </td>
                    <td>
                      <span>Priority: {row.priority}</span>
                      <span>Confidence: {row.confidence}</span>
                    </td>
                    <td>
                      <Button
                        size="S"
                        variant="negative"
                        fillStyle="outline"
                        onPress={() => removeRow(row.id)}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="tool-actions">
          <Button
            variant="primary"
            onPress={exportCsv}
            isDisabled={rows.length === 0}
          >
            Export CSV
          </Button>
          <Button
            variant="negative"
            fillStyle="outline"
            onPress={clearRows}
            isDisabled={rows.length === 0}
          >
            Clear all
          </Button>
        </div>
      </section>
    </section>
  );
}
