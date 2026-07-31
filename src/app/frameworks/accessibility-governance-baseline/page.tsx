import type { Metadata } from "next";
import { RelatedContent } from "@/components/related-content";

export const metadata: Metadata = {
  title: "Accessibility governance baseline",
  description:
    "A practical framework for assigning accessibility ownership, evidence, delivery controls, exceptions, and continuous monitoring.",
};

const sections = [
  ["use", "When to use this baseline"],
  ["commitment", "Define the commitment"],
  ["ownership", "Assign decision rights"],
  ["lifecycle", "Govern the lifecycle"],
  ["evidence", "Require sufficient evidence"],
  ["exceptions", "Control exceptions"],
  ["monitoring", "Monitor and improve"],
] as const;

const lifecycleControls = [
  {
    title: "Strategy and intake",
    text: "Identify affected populations, applicable obligations, known barriers, inclusion needs, and the authority responsible for accessibility outcomes.",
  },
  {
    title: "Procurement and dependencies",
    text: "Evaluate claims, conformance reports, demonstrations, support commitments, contract language, and the accessibility of third-party services before dependency lock-in.",
  },
  {
    title: "Requirements and design",
    text: "Translate obligations and user needs into testable content, interaction, visual, responsive, and assistive-technology acceptance criteria.",
  },
  {
    title: "Implementation",
    text: "Use accessible components and patterns, preserve semantic structure, review integrations, and prevent local customization from removing required behavior.",
  },
  {
    title: "Verification and release",
    text: "Combine automated checks, expert manual evaluation, assistive-technology testing, and representative user evidence in proportion to risk.",
  },
  {
    title: "Operations and change",
    text: "Provide accessible support and feedback paths, monitor barriers, retest material changes, remediate regressions, and keep public statements current.",
  },
] as const;

const roles = [
  {
    name: "Accountable leader",
    responsibility:
      "Sets the commitment, funds the capability, accepts material residual risk, and reviews systemic performance.",
  },
  {
    name: "Product or service owner",
    responsibility:
      "Owns accessible outcomes, requirements, prioritization, remediation, and release readiness.",
  },
  {
    name: "Accessibility specialist",
    responsibility:
      "Advises, evaluates, documents limitations, supports interpretation, and escalates material risk without becoming the sole owner of accessibility.",
  },
  {
    name: "Design, content, and engineering",
    responsibility:
      "Apply accessible patterns, preserve intent through implementation, test their work, and resolve findings within their disciplines.",
  },
  {
    name: "Research and HCD",
    responsibility:
      "Include disabled people responsibly, identify barriers and workarounds, and connect evidence to decisions without treating conformance as equivalent to usability.",
  },
  {
    name: "Procurement, legal, security, and operations",
    responsibility:
      "Apply their authority while preserving accessibility requirements, evidence, contractual remedies, support, and change controls.",
  },
] as const;

export default function AccessibilityGovernanceBaselinePage() {
  return (
    <article className="content-page">
      <header className="page-header">
        <p className="eyebrow">Framework</p>
        <h1>Accessibility governance baseline</h1>
        <p className="hero-summary">
          Make accessibility an owned and evidenced part of strategy,
          procurement, delivery, release, operations, and organizational
          learning.
        </p>
      </header>

      <RelatedContent
        entryId="framework-accessibility-governance-baseline"
        heading="Move from governance into delivery"
      />

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
            <h2 id="use-heading">When to use this baseline</h2>
            <p>
              Use it when establishing or reviewing a digital accessibility
              program, joining a new portfolio, procuring technology, scaling a
              design system, or correcting a process that discovers barriers
              only near release.
            </p>
            <p>
              This baseline supports governance design; it is not legal advice,
              a conformance claim, or a substitute for evaluating the
              applicable law, policy, standard, technology, and user context.
            </p>
          </section>

          <section id="commitment" aria-labelledby="commitment-heading">
            <p className="eyebrow">Policy to practice</p>
            <h2 id="commitment-heading">Define a commitment teams can act on</h2>
            <p>The operating commitment should identify:</p>
            <ul>
              <li>the products, services, content, internal systems, and procurements in scope;</li>
              <li>the standards and organizational policies that apply, including supported platforms and technologies;</li>
              <li>how disabled people participate in research, design, evaluation, and feedback;</li>
              <li>the minimum evidence required before consequential decisions and release;</li>
              <li>ownership, escalation, exception, remediation, and public-communication expectations;</li>
              <li>the capability, funding, and time teams receive to meet the commitment.</li>
            </ul>
            <p>
              Avoid promises that name a standard without explaining how work
              will be governed. A commitment is operational only when it
              changes requirements, resources, decisions, and accountability.
            </p>
          </section>

          <section id="ownership" aria-labelledby="ownership-heading">
            <p className="eyebrow">Accountability</p>
            <h2 id="ownership-heading">Assign decision rights across the system</h2>
            <dl className="inline-definition-list">
              {roles.map((role) => (
                <div key={role.name}>
                  <dt>
                    <strong>{role.name}</strong>
                  </dt>
                  <dd>{role.responsibility}</dd>
                </div>
              ))}
            </dl>
            <p>
              Name who can stop or condition a release, who may accept residual
              risk, and where unresolved disagreement goes. Accessibility
              specialists provide critical authority and evidence, but the
              organization must not transfer all accountability to them.
            </p>
          </section>

          <section id="lifecycle" aria-labelledby="lifecycle-heading">
            <p className="eyebrow">Operating controls</p>
            <h2 id="lifecycle-heading">Govern accessibility across the lifecycle</h2>
            <div className="design-system-grid">
              {lifecycleControls.map((control) => (
                <article className="design-system-card" key={control.title}>
                  <h3>{control.title}</h3>
                  <p>{control.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="evidence" aria-labelledby="evidence-heading">
            <p className="eyebrow">Assurance</p>
            <h2 id="evidence-heading">Require evidence appropriate to the decision</h2>
            <ul>
              <li>Record scope, environment, methods, assistive technology, results, limitations, evaluator, and date.</li>
              <li>Use automated testing for repeatable coverage, not as proof that an experience is accessible.</li>
              <li>Include keyboard, zoom, reflow, contrast, forced colors, reduced motion, semantics, focus, errors, and assistive-technology behavior as applicable.</li>
              <li>Evaluate complete tasks and states, not only isolated components or ideal paths.</li>
              <li>Separate standards conformance, usability, compatibility, and organizational acceptance decisions.</li>
              <li>Retain traceability from findings to requirements, defects, decisions, remediation, and verification.</li>
            </ul>
          </section>

          <section id="exceptions" aria-labelledby="exceptions-heading">
            <p className="eyebrow">Residual risk</p>
            <h2 id="exceptions-heading">Do not let exceptions become silent policy</h2>
            <p>
              Every exception should state the unmet requirement, affected
              people, evidence, impact, reason, compensating access,
              accountable authority, remediation owner, due date, and review
              trigger. It should be visible to support and operational teams
              and reconsidered when technology, evidence, or circumstances
              change.
            </p>
            <p>
              Track repeated exceptions as systemic evidence. Recurrence may
              indicate inadequate components, procurement controls, staffing,
              training, architecture, incentives, or decision authority—not a
              series of unrelated defects.
            </p>
          </section>

          <section id="monitoring" aria-labelledby="monitoring-heading">
            <p className="eyebrow">Continuous improvement</p>
            <h2 id="monitoring-heading">Measure capability and lived outcomes</h2>
            <ul className="check-list">
              <li>Can disabled people report barriers through an accessible, responsive channel?</li>
              <li>Are material findings assigned, prioritized, verified, and closed with evidence?</li>
              <li>Do teams detect regressions before users must report them?</li>
              <li>Are third-party accessibility claims checked throughout the relationship?</li>
              <li>Do recurring findings change components, standards, training, or governance?</li>
              <li>Can leaders see unresolved risk, remediation age, recurrence, and affected journeys?</li>
              <li>Are conformance statements and accessibility documentation current and supportable?</li>
              <li>Does evidence from disabled people influence portfolio and investment decisions?</li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
