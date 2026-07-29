import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HCD engagement intake and triage",
  description:
    "A practical pattern for receiving, assessing, prioritizing, and routing human-centered design demand.",
};

const sections = [
  ["use", "When to use this pattern"],
  ["intake", "Minimum intake record"],
  ["triage", "Triage sequence"],
  ["priority", "Priority dimensions"],
  ["outcomes", "Explicit routing outcomes"],
  ["review", "Operating checks"],
] as const;

const intakeFields = [
  {
    name: "Decision or outcome",
    purpose:
      "What decision, commitment, or measurable outcome must this work inform?",
  },
  {
    name: "People affected",
    purpose:
      "Who uses, receives, supports, administers, or is excluded by the current experience?",
  },
  {
    name: "Current evidence",
    purpose:
      "What is known, inferred, disputed, missing, or already documented?",
  },
  {
    name: "Timing",
    purpose:
      "Which planning, procurement, design, implementation, or release decision creates the real deadline?",
  },
  {
    name: "Risk and obligations",
    purpose:
      "Which accessibility, privacy, safety, policy, ethical, operational, or reputational constraints apply?",
  },
  {
    name: "Owner and collaborators",
    purpose:
      "Who owns the outcome, can provide access, can make decisions, and must participate?",
  },
  {
    name: "Existing work",
    purpose:
      "Which research, services, systems, projects, standards, or prior decisions should this connect to?",
  },
] as const;

const priorityDimensions = [
  {
    title: "Consequence",
    text: "What happens to people, mission, compliance, cost, or trust if the decision proceeds without better evidence?",
  },
  {
    title: "Reach and equity",
    text: "How many people are affected, how often, and whether impacts fall disproportionately on underserved or excluded groups.",
  },
  {
    title: "Decision leverage",
    text: "Whether timely HCD work can still change the decision, requirement, design, implementation, or release.",
  },
  {
    title: "Evidence gap",
    text: "How consequential the unknowns are and whether existing evidence is current, representative, and sufficiently traceable.",
  },
  {
    title: "Readiness",
    text: "Whether owners, participants, access, data handling, decisions, and delivery partners are available to support responsible work.",
  },
  {
    title: "Effort and capacity",
    text: "The smallest responsible engagement, specialist skills, calendar time, and opportunity cost relative to other demand.",
  },
] as const;

export default function HcdEngagementIntakeTriagePage() {
  return (
    <article className="content-page">
      <header className="page-header">
        <p className="eyebrow">Pattern</p>
        <h1>HCD engagement intake and triage</h1>
        <p className="hero-summary">
          Create a visible front door for HCD demand, centered on the decision
          at stake rather than the artifact someone initially requests.
        </p>
        <div className="related-links" aria-label="Related resources">
          <Link href="/frameworks/hcd-operating-model-baseline">
            Review the operating model baseline
          </Link>
          <Link href="/toolkit">Return to the HCD Director Toolkit</Link>
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
            <h2 id="use-heading">When to use this pattern</h2>
            <p>
              Use it for new requests, major scope changes, research support,
              accessibility concerns, design reviews, and requests for HCD
              artifacts. It is especially useful when demand exceeds capacity
              or work currently arrives through personal relationships.
            </p>
            <p>
              Intake should be proportionate. A short, accessible conversation
              can create the initial record; the requester should not need to
              understand HCD terminology or complete a long form before the
              team will listen.
            </p>
          </section>

          <section id="intake" aria-labelledby="intake-heading">
            <p className="eyebrow">Shared record</p>
            <h2 id="intake-heading">Capture a minimum intake record</h2>
            <dl className="inline-definition-list">
              {intakeFields.map((field) => (
                <div key={field.name}>
                  <dt>
                    <strong>{field.name}</strong>
                  </dt>
                  <dd>{field.purpose}</dd>
                </div>
              ))}
            </dl>
            <p>
              Record the request in a shared location with an owner, received
              date, current state, next review, and links to connected evidence
              or efforts. Keep sensitive research and personal information out
              of general intake records.
            </p>
          </section>

          <section id="triage" aria-labelledby="triage-heading">
            <p className="eyebrow">Sequence</p>
            <h2 id="triage-heading">Triage before promising a deliverable</h2>
            <ol>
              <li>Clarify the decision and the people affected.</li>
              <li>Check for immediate accessibility, safety, privacy, or policy risk.</li>
              <li>Find existing evidence, related efforts, and prior decisions.</li>
              <li>Identify the latest point when evidence can still change the outcome.</li>
              <li>Assess priority using shared dimensions rather than one composite score.</li>
              <li>Define the smallest responsible engagement and required collaborators.</li>
              <li>Assign a routing outcome, owner, rationale, and next review date.</li>
              <li>Communicate the decision and preserve the intake record.</li>
            </ol>
          </section>

          <section id="priority" aria-labelledby="priority-heading">
            <p className="eyebrow">Prioritization</p>
            <h2 id="priority-heading">Compare demand across six dimensions</h2>
            <div className="design-system-grid">
              {priorityDimensions.map((dimension) => (
                <article className="design-system-card" key={dimension.title}>
                  <h3>{dimension.title}</h3>
                  <p>{dimension.text}</p>
                </article>
              ))}
            </div>
            <p>
              Do not hide judgment inside a mathematically precise-looking
              total. Record the evidence, assumptions, and tradeoffs behind the
              priority decision, including which dimensions outweighed others.
            </p>
          </section>

          <section id="outcomes" aria-labelledby="outcomes-heading">
            <p className="eyebrow">Routing</p>
            <h2 id="outcomes-heading">End triage with an explicit outcome</h2>
            <ul>
              <li><strong>Clarify:</strong> return for a missing decision, owner, access path, or constraint.</li>
              <li><strong>Advise:</strong> provide a short consultation, standard, pattern, or referral.</li>
              <li><strong>Discover:</strong> run focused research or problem framing before delivery commitments.</li>
              <li><strong>Embed:</strong> assign ongoing HCD support within a delivery effort.</li>
              <li><strong>Review:</strong> evaluate existing evidence, requirements, designs, or implementation.</li>
              <li><strong>Escalate:</strong> route material accessibility, ethics, privacy, safety, or governance risk.</li>
              <li><strong>Sequence:</strong> accept the need but schedule it against higher-priority work.</li>
              <li><strong>Decline:</strong> document why HCD engagement is not appropriate or feasible now.</li>
            </ul>
          </section>

          <section id="review" aria-labelledby="review-heading">
            <p className="eyebrow">Governance</p>
            <h2 id="review-heading">Review the intake system, not just requests</h2>
            <ul className="check-list">
              <li>Can people request help without knowing the right person?</li>
              <li>Are request and priority decisions visible to affected teams?</li>
              <li>Can urgent accessibility or safety risks bypass normal cadence?</li>
              <li>Are declined and deferred needs reconsidered when conditions change?</li>
              <li>Does intake reveal recurring capability, policy, or process gaps?</li>
              <li>Are lead time, demand, capacity, outcomes, and unmet need reviewed together?</li>
              <li>Can the organization explain why one engagement preceded another?</li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
