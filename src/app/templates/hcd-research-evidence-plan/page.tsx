import type { Metadata } from "next";
import { RelatedContent } from "@/components/related-content";
import { CopyTemplateButton } from "@/components/templates/copy-template-button";
import {
  HCD_RESEARCH_EVIDENCE_PLAN_MARKDOWN,
  HCD_RESEARCH_EVIDENCE_PRINCIPLES,
} from "@/content/templates/hcd-research-evidence-plan";

export const metadata: Metadata = {
  title: "HCD research and evidence plan",
  description:
    "A practical template for planning inclusive research, governed evidence, traceable interpretation, and accountable decision handoffs.",
};

const sections = [
  ["use", "When to use this plan"],
  ["frame", "Frame the decision"],
  ["principles", "Apply five planning principles"],
  ["participation", "Plan inclusive participation"],
  ["stewardship", "Govern evidence and data"],
  ["copy", "Copy the template"],
  ["review", "Review before research begins"],
] as const;

export default function HcdResearchEvidencePlanPage() {
  return (
    <article className="content-page">
      <header className="page-header">
        <p className="eyebrow">Template</p>
        <h1>HCD research and evidence plan</h1>
        <p className="hero-summary">
          Connect a consequential decision to inclusive participation,
          permitted evidence, traceable interpretation, responsible data
          handling, and an accountable delivery handoff.
        </p>
      </header>

      <RelatedContent entryId="template-hcd-research-evidence-plan" />

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
              Use it after intake identifies a meaningful evidence need and
              before recruitment, data access, fieldwork, analysis, or
              AI-assisted transformation begins. It is especially useful when
              a decision affects access, service outcomes, policy, delivery
              commitments, or people who may experience unequal burdens.
            </p>
            <p>
              Keep the first version proportional to the decision and risk.
              This template supports planning and review; it does not replace
              applicable legal, privacy, records, security, ethics, or
              accessibility authority.
            </p>
          </section>

          <section id="frame" aria-labelledby="frame-heading">
            <p className="eyebrow">Decision framing</p>
            <h2 id="frame-heading">Define what the evidence must change</h2>
            <ol>
              <li>Name the decision, accountable owner, and decision date.</li>
              <li>State the uncertainty, assumption, or material risk.</li>
              <li>Record what is already known and where it came from.</li>
              <li>Identify evidence that could change or stop the direction.</li>
              <li>Set boundaries so collection does not expand without review.</li>
            </ol>
          </section>

          <section id="principles" aria-labelledby="principles-heading">
            <p className="eyebrow">Connected planning</p>
            <h2 id="principles-heading">Apply five principles together</h2>
            <div className="design-system-grid">
              {HCD_RESEARCH_EVIDENCE_PRINCIPLES.map((principle) => (
                <article className="design-system-card" key={principle.title}>
                  <h3>{principle.title}</h3>
                  <p>{principle.prompt}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="participation" aria-labelledby="participation-heading">
            <p className="eyebrow">Inclusive research</p>
            <h2 id="participation-heading">Plan participation without treating access as an exception</h2>
            <ul>
              <li>Identify who is affected, missing, or likely to carry additional burden.</li>
              <li>Provide accessible recruitment, consent, materials, activities, and communication modes.</li>
              <li>Budget time and resources for accommodations and participant support.</li>
              <li>Record sampling limitations instead of generalizing beyond the evidence.</li>
              <li>Offer safe ways to decline, withdraw, or avoid disclosing sensitive information.</li>
            </ul>
          </section>

          <section id="stewardship" aria-labelledby="stewardship-heading">
            <p className="eyebrow">Responsible evidence</p>
            <h2 id="stewardship-heading">Set stewardship rules before collection</h2>
            <p>
              Document the minimum information needed, permitted systems,
              access roles, retention and deletion rules, and escalation path.
              If AI or automation will transform evidence, state the approved
              use, prohibited data, human review, source-preservation method,
              and how unsupported interpretations will be detected.
            </p>
          </section>

          <section id="copy" aria-labelledby="copy-heading">
            <p className="eyebrow">Reusable artifact</p>
            <h2 id="copy-heading">Copy the Markdown plan</h2>
            <p>
              Adapt this structure in an authorized, governed environment. Do
              not place participant data, credentials, sensitive operational
              details, or restricted evidence in an unsuitable system.
            </p>
            <CopyTemplateButton text={HCD_RESEARCH_EVIDENCE_PLAN_MARKDOWN} />
            <pre className="template-code" tabIndex={0}>
              <code>{HCD_RESEARCH_EVIDENCE_PLAN_MARKDOWN}</code>
            </pre>
          </section>

          <section id="review" aria-labelledby="review-heading">
            <p className="eyebrow">Readiness review</p>
            <h2 id="review-heading">Check the plan before research begins</h2>
            <ul className="check-list">
              <li>Is the decision owner prepared to act on the evidence?</li>
              <li>Are affected and frequently excluded people represented appropriately?</li>
              <li>Are participation activities and materials accessible?</li>
              <li>Are consent, privacy, security, retention, and access requirements approved?</li>
              <li>Can observations be distinguished from interpretation and recommendation?</li>
              <li>Will contradictory evidence and disagreement remain visible?</li>
              <li>Are limitations and acceptable confidence explicit?</li>
              <li>Does the plan end in a named decision, delivery, and knowledge handoff?</li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
