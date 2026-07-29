import type { Metadata } from "next";
import Link from "next/link";
import { CopyTemplateButton } from "@/components/templates/copy-template-button";
import {
  HCD_DECISION_RECORD_MARKDOWN,
  HCD_DECISION_RECORD_SECTIONS,
} from "@/content/templates/hcd-decision-evidence-record";

export const metadata: Metadata = {
  title: "HCD decision and evidence record",
  description:
    "A reusable template for preserving the evidence, rationale, authority, implications, and review conditions behind consequential decisions.",
};

const sections = [
  ["use", "When to use this template"],
  ["structure", "Template structure"],
  ["copy", "Copy the template"],
  ["quality", "Quality checks"],
] as const;

export default function HcdDecisionEvidenceRecordPage() {
  return (
    <article className="content-page">
      <header className="page-header">
        <p className="eyebrow">Template</p>
        <h1>HCD decision and evidence record</h1>
        <p className="hero-summary">
          Preserve why a consequential decision was made, what evidence
          informed it, who had authority, which concerns remain, and when the
          organization should reconsider it.
        </p>
        <div className="related-links" aria-label="Related resources">
          <Link href="/methods/evidence-first-synthesis">
            Use evidence-first synthesis
          </Link>
          <Link href="/patterns/hcd-engagement-intake-triage">
            Review the intake and triage pattern
          </Link>
        </div>
      </header>

      <div className="case-study-layout">
        <aside className="on-this-page" aria-labelledby="contents-heading">
          <h2 id="contents-heading">On this page</h2>
          <ol>
            {sections.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ol>
        </aside>

        <div className="prose">
          <section id="use" aria-labelledby="use-heading">
            <p className="eyebrow">Purpose</p>
            <h2 id="use-heading">When to use this template</h2>
            <p>
              Use it when a decision materially affects people, accessibility,
              policy, delivery, operations, cost, or organizational learning;
              when the rationale may later be questioned; or when future teams
              need to know what changed and why.
            </p>
            <p>
              Keep it proportional. Routine reversible choices need less detail
              than high-risk, difficult-to-reverse decisions. Link to governed
              evidence rather than copying sensitive source material into the
              record.
            </p>
          </section>

          <section id="structure" aria-labelledby="structure-heading">
            <p className="eyebrow">Structure</p>
            <h2 id="structure-heading">Record six connected parts</h2>
            <div className="design-system-grid">
              {HCD_DECISION_RECORD_SECTIONS.map((section) => (
                <article className="design-system-card" key={section.title}>
                  <h3>{section.title}</h3>
                  <ul>
                    {section.fields.map((field) => (
                      <li key={field}>{field}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section id="copy" aria-labelledby="copy-heading">
            <p className="eyebrow">Reusable artifact</p>
            <h2 id="copy-heading">Copy the Markdown template</h2>
            <p>
              Paste this structure into a governed knowledge, documentation, or
              work-management system and adapt its metadata to local policy.
            </p>
            <CopyTemplateButton text={HCD_DECISION_RECORD_MARKDOWN} />
            <pre className="template-code" tabIndex={0}>
              <code>{HCD_DECISION_RECORD_MARKDOWN}</code>
            </pre>
          </section>

          <section id="quality" aria-labelledby="quality-heading">
            <p className="eyebrow">Review</p>
            <h2 id="quality-heading">Quality checks before closing the record</h2>
            <ul className="check-list">
              <li>Is the decision stated separately from its rationale?</li>
              <li>Can material claims be traced to an appropriate source?</li>
              <li>Are confidence, limitations, contradiction, and dissent visible?</li>
              <li>Were accessibility and affected people considered explicitly?</li>
              <li>Is authority clear, including approvals or escalation?</li>
              <li>Do actions have owners and observable acceptance evidence?</li>
              <li>Will changed conditions or new evidence trigger review?</li>
              <li>Can a future reader identify which decision superseded this one?</li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
