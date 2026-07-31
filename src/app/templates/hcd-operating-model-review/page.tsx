import type { Metadata } from "next";
import { RelatedContent } from "@/components/related-content";
import { CopyTemplateButton } from "@/components/templates/copy-template-button";
import {
  HCD_OPERATING_MODEL_REVIEW_AREAS,
  HCD_OPERATING_MODEL_REVIEW_MARKDOWN,
} from "@/content/templates/hcd-operating-model-review";

export const metadata: Metadata = {
  title: "HCD operating model review and improvement plan",
  description:
    "A practical template for reviewing how an HCD operating model changes decisions, delivery, accessibility, outcomes, and learning.",
};

const sections = [
  ["use", "When to use this review"],
  ["prepare", "Prepare decision-ready evidence"],
  ["areas", "Review five connected areas"],
  ["interpret", "Find operating conditions"],
  ["improve", "Approve bounded improvements"],
  ["copy", "Copy the template"],
  ["quality", "Review quality checks"],
] as const;

export default function HcdOperatingModelReviewPage() {
  return (
    <article className="content-page">
      <header className="page-header">
        <p className="eyebrow">Template</p>
        <h1>HCD operating model review and improvement plan</h1>
        <p className="hero-summary">
          Evaluate whether the operating model changes decisions, delivery,
          accessibility, outcomes, and learning—then approve focused
          improvements without reducing organizational health to a score.
        </p>
      </header>

      <RelatedContent entryId="template-hcd-operating-model-review" />

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
            <h2 id="use-heading">When to use this review</h2>
            <p>
              Use it at an agreed operating-model review, after a material
              organizational or service change, when recurring exceptions show
              that controls do not fit the work, or when outcome evidence calls
              the current model into question.
            </p>
            <p>
              Review the operating system, not the performance of an individual
              practitioner. A model can contain the right words and still fail
              because authority, capacity, incentives, timing, or evidence do
              not support the intended behavior.
            </p>
          </section>

          <section id="prepare" aria-labelledby="prepare-heading">
            <p className="eyebrow">Preparation</p>
            <h2 id="prepare-heading">Bring evidence that can support a decision</h2>
            <ul>
              <li>Use the current operating agreement, previous decisions, and approved exceptions.</li>
              <li>Examine demand, capacity, routing, delay, rework, and decline patterns.</li>
              <li>Include research, accessibility, delivery, outcome, incident, and feedback evidence.</li>
              <li>Invite people who experience the model, including affected delivery partners and frequently excluded perspectives.</li>
              <li>Record missing evidence and disagreement rather than forcing consensus.</li>
            </ul>
          </section>

          <section id="areas" aria-labelledby="areas-heading">
            <p className="eyebrow">Connected review</p>
            <h2 id="areas-heading">Review five areas as one operating system</h2>
            <div className="design-system-grid">
              {HCD_OPERATING_MODEL_REVIEW_AREAS.map((area) => (
                <article className="design-system-card" key={area.title}>
                  <h3>{area.title}</h3>
                  <p>{area.prompt}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="interpret" aria-labelledby="interpret-heading">
            <p className="eyebrow">Interpretation</p>
            <h2 id="interpret-heading">Look for conditions, not maturity theater</h2>
            <p>
              Do not average unlike concerns into a single maturity score. A
              high aggregate can conceal an inaccessible service, weak decision
              authority, unsafe evidence handling, or a critical delivery gap.
              Describe the observed condition, evidence, people affected,
              confidence, and consequence of leaving it unchanged.
            </p>
          </section>

          <section id="improve" aria-labelledby="improve-heading">
            <p className="eyebrow">Action</p>
            <h2 id="improve-heading">Approve the smallest change that addresses the condition</h2>
            <ol>
              <li>Separate root operating conditions from their visible symptoms.</li>
              <li>Choose whether to continue, change, test, stop, or escalate.</li>
              <li>Name the agreement, control, authority, workflow, or resource affected.</li>
              <li>Assign one accountable owner and a decision or delivery date.</li>
              <li>Define evidence of completion, intended outcome, and possible adverse effects.</li>
              <li>Set the next measure and trigger for reviewing the change.</li>
            </ol>
          </section>

          <section id="copy" aria-labelledby="copy-heading">
            <p className="eyebrow">Reusable artifact</p>
            <h2 id="copy-heading">Copy the Markdown review</h2>
            <p>
              Adapt this structure to the organization’s authorized governance
              environment. Link to controlled evidence instead of copying
              sensitive research, personnel, security, or operational data into
              an unsuitable review document.
            </p>
            <CopyTemplateButton text={HCD_OPERATING_MODEL_REVIEW_MARKDOWN} />
            <pre className="template-code" tabIndex={0}>
              <code>{HCD_OPERATING_MODEL_REVIEW_MARKDOWN}</code>
            </pre>
          </section>

          <section id="quality" aria-labelledby="quality-heading">
            <p className="eyebrow">Guardrails</p>
            <h2 id="quality-heading">Check the review before approval</h2>
            <ul className="check-list">
              <li>Does the review support a named decision rather than only discussion?</li>
              <li>Are lived experience and unequal effects visible alongside operating metrics?</li>
              <li>Are accessibility failures prevented from disappearing inside an average?</li>
              <li>Are findings traceable to evidence, confidence, and limitations?</li>
              <li>Are recurring exceptions and workarounds treated as operating evidence?</li>
              <li>Does each approved change have authority, ownership, timing, and follow-up evidence?</li>
              <li>Will the operating agreement and connected guidance be updated when decisions require it?</li>
              <li>Can another person understand what changed and why?</li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
