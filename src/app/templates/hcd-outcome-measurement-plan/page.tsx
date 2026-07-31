import type { Metadata } from "next";
import { RelatedContent } from "@/components/related-content";
import { CopyTemplateButton } from "@/components/templates/copy-template-button";
import {
  HCD_MEASUREMENT_DIMENSIONS,
  HCD_OUTCOME_MEASUREMENT_MARKDOWN,
} from "@/content/templates/hcd-outcome-measurement-plan";

export const metadata: Metadata = {
  title: "HCD outcome measurement and learning plan",
  description:
    "A practical template for measuring human-centered outcomes without reducing value to activity counts or unsupported attribution.",
};

const sections = [
  ["use", "When to use this plan"],
  ["chain", "Build an outcome chain"],
  ["dimensions", "Balance six evidence dimensions"],
  ["measure", "Define decision-ready measures"],
  ["copy", "Copy the template"],
  ["review", "Interpretation guardrails"],
] as const;

export default function HcdOutcomeMeasurementPlanPage() {
  return (
    <article className="content-page">
      <header className="page-header">
        <p className="eyebrow">Template</p>
        <h1>HCD outcome measurement and learning plan</h1>
        <p className="hero-summary">
          Define what should change, how evidence will be interpreted, and
          which decision the results must support—without confusing HCD
          activity with organizational impact.
        </p>
      </header>

      <RelatedContent entryId="template-hcd-outcome-measurement-plan" />

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
            <h2 id="use-heading">When to use this plan</h2>
            <p>
              Use it before committing to a substantial intervention, when
              defining a service or product outcome, when establishing an HCD
              capability, or when leaders need evidence to continue, change,
              scale, or stop an approach.
            </p>
            <p>
              Begin with the decision the measurement must inform. A dashboard
              without an owner, threshold, review cadence, or resulting action
              displays information but does not create a learning system.
            </p>
          </section>

          <section id="chain" aria-labelledby="chain-heading">
            <p className="eyebrow">Logic</p>
            <h2 id="chain-heading">Build an outcome chain before selecting metrics</h2>
            <ol>
              <li>State the current condition and the people affected.</li>
              <li>Name the intended experience and organizational outcomes.</li>
              <li>Describe the HCD contribution without claiming sole causation.</li>
              <li>Connect capability and activity to outputs, behavior, experience, and service effects.</li>
              <li>Record assumptions and evidence that could disconfirm the chain.</li>
              <li>Choose the smallest balanced set of measures needed for the decision.</li>
            </ol>
          </section>

          <section id="dimensions" aria-labelledby="dimensions-heading">
            <p className="eyebrow">Balanced evidence</p>
            <h2 id="dimensions-heading">Use six dimensions without forcing every metric</h2>
            <div className="design-system-grid">
              {HCD_MEASUREMENT_DIMENSIONS.map((dimension) => (
                <article className="design-system-card" key={dimension.title}>
                  <h3>{dimension.title}</h3>
                  <p>{dimension.prompt}</p>
                </article>
              ))}
            </div>
            <p>
              Select dimensions based on the decision and risk. Always examine
              accessibility and unequal effects when averages could hide
              materially different outcomes.
            </p>
          </section>

          <section id="measure" aria-labelledby="measure-heading">
            <p className="eyebrow">Operational definition</p>
            <h2 id="measure-heading">Make every measure decision-ready</h2>
            <p>For each measure, record:</p>
            <ul>
              <li>the question it helps answer and its precise definition;</li>
              <li>baseline, target, threshold, or comparison condition;</li>
              <li>source, collection method, population, and segmentation;</li>
              <li>owner, cadence, and the decision date it supports;</li>
              <li>limitations, alternative explanations, and data-quality risk;</li>
              <li>the action triggered when results meet, miss, or complicate expectations.</li>
            </ul>
          </section>

          <section id="copy" aria-labelledby="copy-heading">
            <p className="eyebrow">Reusable artifact</p>
            <h2 id="copy-heading">Copy the Markdown plan</h2>
            <p>
              Adapt this structure to a governed documentation, analytics, or
              work-management environment. Do not include personal or sensitive
              data unless that system and collection method are authorized.
            </p>
            <CopyTemplateButton text={HCD_OUTCOME_MEASUREMENT_MARKDOWN} />
            <pre className="template-code" tabIndex={0}>
              <code>{HCD_OUTCOME_MEASUREMENT_MARKDOWN}</code>
            </pre>
          </section>

          <section id="review" aria-labelledby="review-heading">
            <p className="eyebrow">Guardrails</p>
            <h2 id="review-heading">Interpret evidence before claiming impact</h2>
            <ul className="check-list">
              <li>Are activity and output counts clearly separated from outcomes?</li>
              <li>Are displayed values real, current, and labeled when illustrative?</li>
              <li>Could averages conceal accessibility or equity differences?</li>
              <li>Are qualitative findings preserved alongside quantitative measures?</li>
              <li>Could outside changes explain the observed result?</li>
              <li>Are adverse effects, workarounds, and non-adoption visible?</li>
              <li>Does each review produce a decision, action, or documented learning?</li>
              <li>Are reusable findings connected back to methods, patterns, and evidence?</li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
