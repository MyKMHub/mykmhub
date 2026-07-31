import type { Metadata } from "next";
import { RelatedContent } from "@/components/related-content";

export const metadata: Metadata = {
  title: "HCD delivery checkpoints",
  description:
    "A practical pattern for integrating human-centered evidence and accessibility into planning, implementation, release, and learning.",
};

const sections = [
  ["use", "When to use this pattern"],
  ["contract", "Minimum delivery contract"],
  ["checkpoints", "Six delivery checkpoints"],
  ["evidence", "Evidence at each checkpoint"],
  ["exceptions", "Exceptions and unresolved risk"],
  ["review", "Operating checks"],
] as const;

const checkpoints = [
  {
    title: "1. Frame and commit",
    decision:
      "Is the problem, affected population, intended outcome, authority, and evidence need clear enough to begin?",
    evidence:
      "Approved intake, known constraints, existing evidence, open assumptions, accountable owner, and decision deadline.",
  },
  {
    title: "2. Define requirements",
    decision:
      "Have evidence and obligations become testable requirements rather than optional design advice?",
    evidence:
      "User and operational needs, accessibility requirements, acceptance criteria, edge cases, and traceable rationale.",
  },
  {
    title: "3. Review the proposed experience",
    decision:
      "Does the proposed direction address the prioritized needs before implementation becomes expensive to change?",
    evidence:
      "Design rationale, content and interaction states, research findings, accessibility review, feasibility input, and unresolved tradeoffs.",
  },
  {
    title: "4. Verify implementation",
    decision:
      "Does the implemented experience preserve the approved intent and work with representative users, technology, and assistive technology?",
    evidence:
      "Implementation review, automated and manual accessibility results, usability evidence, defect disposition, and requirement coverage.",
  },
  {
    title: "5. Decide release readiness",
    decision:
      "Are remaining risks understood, owned, time-bound, and acceptable to the person with authority to release?",
    evidence:
      "Acceptance results, unresolved issues, exception decisions, monitoring plan, support readiness, and rollback or mitigation conditions.",
  },
  {
    title: "6. Learn after release",
    decision:
      "What happened in use, what must change, and which knowledge should be retained for future work?",
    evidence:
      "Outcome measures, feedback, accessibility signals, support patterns, workarounds, incidents, decisions, and reusable lessons.",
  },
] as const;

export default function HcdDeliveryCheckpointsPage() {
  return (
    <article className="content-page">
      <header className="page-header">
        <p className="eyebrow">Pattern</p>
        <h1>HCD delivery checkpoints</h1>
        <p className="hero-summary">
          Keep evidence, accessibility, and accountable human-centered
          decisions connected to the work from initial commitment through
          release and learning.
        </p>
      </header>

      <RelatedContent entryId="pattern-hcd-delivery-checkpoints" />

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
              Use it when HCD findings must influence a product, service,
              policy, workflow, acquisition, or operational change delivered
              by multiple roles. It is especially useful when research,
              accessibility, design, engineering, and release decisions happen
              in separate tools or governance forums.
            </p>
            <p>
              Checkpoints are decision moments, not mandatory meetings or
              stage gates. Integrate them into the team&apos;s existing
              planning and delivery model, and scale the evidence required to
              the consequence, uncertainty, and reversibility of the decision.
            </p>
          </section>

          <section id="contract" aria-labelledby="contract-heading">
            <p className="eyebrow">Working agreement</p>
            <h2 id="contract-heading">Establish a minimum delivery contract</h2>
            <p>Before work accelerates, agree on:</p>
            <ul>
              <li>the outcome, people affected, constraints, and accountable owner;</li>
              <li>where evidence and accessibility change requirements and decisions;</li>
              <li>who recommends, reviews, accepts, and may approve an exception;</li>
              <li>the records and evidence required at each consequential decision;</li>
              <li>how unresolved findings enter the delivery backlog and remain visible;</li>
              <li>release, monitoring, rollback, and post-launch learning expectations.</li>
            </ul>
            <p>
              Put these expectations in the systems where delivery work is
              managed. A separate HCD checklist that does not affect
              requirements, ownership, or release decisions is easy to ignore.
            </p>
          </section>

          <section id="checkpoints" aria-labelledby="checkpoints-heading">
            <p className="eyebrow">Decision sequence</p>
            <h2 id="checkpoints-heading">Use six connected checkpoints</h2>
            <div className="design-system-grid">
              {checkpoints.map((checkpoint) => (
                <article className="design-system-card" key={checkpoint.title}>
                  <h3>{checkpoint.title}</h3>
                  <p>
                    <strong>Decision:</strong> {checkpoint.decision}
                  </p>
                  <p>
                    <strong>Minimum evidence:</strong> {checkpoint.evidence}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section id="evidence" aria-labelledby="evidence-heading">
            <p className="eyebrow">Traceability</p>
            <h2 id="evidence-heading">Carry evidence forward without copying everything</h2>
            <p>
              At each checkpoint, link to the governed source and record only
              what the decision needs: the question, finding or requirement,
              confidence and limitations, decision, authority, owner, and next
              review condition.
            </p>
            <ul>
              <li>Preserve the difference between observation, interpretation, requirement, and decision.</li>
              <li>Keep accessibility criteria specific enough to test manually and automatically where appropriate.</li>
              <li>Record changed or rejected recommendations and the rationale, not only the final direction.</li>
              <li>Update the source record when evidence changes rather than allowing disconnected copies to compete.</li>
              <li>Retain links from defects and acceptance results back to the requirement and evidence they evaluate.</li>
            </ul>
          </section>

          <section id="exceptions" aria-labelledby="exceptions-heading">
            <p className="eyebrow">Governance</p>
            <h2 id="exceptions-heading">Make exceptions explicit and temporary</h2>
            <p>
              An exception should identify the unmet requirement, affected
              people, evidence, consequence, compensating measure, accountable
              authority, owner, due date, and condition that triggers
              reconsideration. Schedule it as governed work rather than
              silently relabeling it as a future enhancement.
            </p>
            <p>
              Legal or policy review does not replace accessibility and user
              evaluation, and an automated test result does not establish that
              an experience is usable. Escalate when a release decision would
              accept material risk without the necessary authority or evidence.
            </p>
          </section>

          <section id="review" aria-labelledby="review-heading">
            <p className="eyebrow">Leadership review</p>
            <h2 id="review-heading">Check whether HCD can change delivery</h2>
            <ul className="check-list">
              <li>Can every material user need be traced to a requirement or decision?</li>
              <li>Do accessibility criteria cover content, interaction, states, and assistive technology?</li>
              <li>Are reviewers involved while change is still feasible?</li>
              <li>Do unresolved findings have an owner, priority, rationale, and review date?</li>
              <li>Can the release authority see user and accessibility risk alongside delivery risk?</li>
              <li>Does post-launch evidence change the backlog, operating model, or reusable guidance?</li>
              <li>Can another team understand what was decided and why without relying on individual memory?</li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
