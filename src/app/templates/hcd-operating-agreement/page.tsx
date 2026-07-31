import type { Metadata } from "next";
import { RelatedContent } from "@/components/related-content";
import { CopyTemplateButton } from "@/components/templates/copy-template-button";
import {
  HCD_OPERATING_AGREEMENT_MARKDOWN,
  HCD_OPERATING_AGREEMENT_SECTIONS,
} from "@/content/templates/hcd-operating-agreement";

export const metadata: Metadata = {
  title: "Minimum HCD operating agreement",
  description:
    "A copy-ready agreement for defining how an HCD capability is mandated, governed, integrated, measured, and reviewed.",
};

const sections = [
  ["use", "When to use this agreement"],
  ["prepare", "Prepare the agreement"],
  ["structure", "Seven connected sections"],
  ["copy", "Copy the agreement"],
  ["review", "Approval and review checks"],
] as const;

export default function HcdOperatingAgreementPage() {
  return (
    <article className="content-page">
      <header className="page-header">
        <p className="eyebrow">Template</p>
        <h1>Minimum HCD operating agreement</h1>
        <p className="hero-summary">
          Turn an HCD operating model into one versioned agreement that teams
          can use to request, govern, deliver, evaluate, and continue
          human-centered work.
        </p>
      </header>

      <RelatedContent entryId="template-hcd-operating-agreement" />

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
            <h2 id="use-heading">When to use this agreement</h2>
            <p>
              Use it when creating an HCD capability, beginning work with a new
              portfolio or program, aligning several delivery teams, or
              correcting inconsistent demand, evidence, accessibility, and
              decision practices.
            </p>
            <p>
              Keep the initial agreement short enough to review and use. Link
              to policies, role definitions, standards, procedures, and
              detailed playbooks rather than copying them into a document that
              becomes difficult to maintain.
            </p>
          </section>

          <section id="prepare" aria-labelledby="prepare-heading">
            <p className="eyebrow">Preparation</p>
            <h2 id="prepare-heading">Build it with the people who must act on it</h2>
            <ol>
              <li>Identify the accountable leader and the decisions the agreement must govern.</li>
              <li>Bring together HCD, product, delivery, accessibility, operations, policy, privacy, security, and other relevant authority.</li>
              <li>Use current demand, delays, findings, exceptions, incidents, and outcome evidence to expose operating gaps.</li>
              <li>Agree on the minimum viable controls before documenting an ideal future organization.</li>
              <li>Test the draft against one real request and one consequential delivery decision.</li>
              <li>Approve, publish, communicate, and assign the first review date and evidence owner.</li>
            </ol>
          </section>

          <section id="structure" aria-labelledby="structure-heading">
            <p className="eyebrow">Structure</p>
            <h2 id="structure-heading">Connect seven operating sections</h2>
            <div className="design-system-grid">
              {HCD_OPERATING_AGREEMENT_SECTIONS.map((section) => (
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
            <h2 id="copy-heading">Copy the Markdown agreement</h2>
            <p>
              Adapt this structure in a governed knowledge or documentation
              environment. Preserve ownership, version, effective date, review
              date, and change history wherever it is maintained.
            </p>
            <CopyTemplateButton text={HCD_OPERATING_AGREEMENT_MARKDOWN} />
            <pre className="template-code" tabIndex={0}>
              <code>{HCD_OPERATING_AGREEMENT_MARKDOWN}</code>
            </pre>
          </section>

          <section id="review" aria-labelledby="review-heading">
            <p className="eyebrow">Governance</p>
            <h2 id="review-heading">Approve an operating system, not aspirations</h2>
            <ul className="check-list">
              <li>Can a person outside HCD understand when and how to engage?</li>
              <li>Are priority, capacity, and unmet demand visible?</li>
              <li>Can evidence be traced through requirements and decisions?</li>
              <li>Are authority, disagreement, escalation, and risk acceptance explicit?</li>
              <li>Does accessibility affect procurement, requirements, acceptance, and release?</li>
              <li>Do records support continuity without exposing sensitive information?</li>
              <li>Do measures lead to decisions rather than reporting activity alone?</li>
              <li>Is there an owner, date, evidence set, and authority for the next review?</li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
