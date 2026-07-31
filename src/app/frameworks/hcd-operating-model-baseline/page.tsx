import type { Metadata } from "next";
import { RelatedContent } from "@/components/related-content";

export const metadata: Metadata = {
  title: "HCD operating model baseline",
  description:
    "A practical framework for establishing how human-centered work is requested, governed, integrated, and measured.",
};

const capabilities = [
  {
    title: "Mandate and outcomes",
    question: "Why does the HCD capability exist, and what must it improve?",
    detail:
      "Name the organizational outcomes, user outcomes, service boundaries, and constraints the practice is accountable for influencing.",
  },
  {
    title: "Demand and prioritization",
    question: "How does work enter, and what receives attention first?",
    detail:
      "Use visible intake criteria, capacity assumptions, risk, reach, evidence needs, and decision deadlines rather than relying on proximity or urgency alone.",
  },
  {
    title: "Evidence lifecycle",
    question: "How does evidence become a finding, decision, and reusable record?",
    detail:
      "Define permitted sources, traceability, confidence, validation, retention, access, and the path from research evidence to delivery decisions.",
  },
  {
    title: "Decision rights",
    question: "Who recommends, decides, reviews, and resolves disagreement?",
    detail:
      "Clarify HCD, product, program, accessibility, technical, policy, and operational authority before difficult decisions expose ambiguity.",
  },
  {
    title: "Delivery integration",
    question: "Where does HCD change planning and implementation?",
    detail:
      "Connect discovery, requirements, design, acceptance criteria, implementation review, release decisions, and learning after launch.",
  },
  {
    title: "Accessibility and responsible practice",
    question: "Which obligations cannot be traded away silently?",
    detail:
      "Set accessibility, privacy, consent, ethics, inclusion, security, and human-review expectations as explicit delivery constraints.",
  },
  {
    title: "Measures and learning",
    question: "How will the organization know the practice is useful?",
    detail:
      "Combine experience, adoption, accessibility, delivery, risk, capacity, and organizational-learning evidence without reducing HCD value to activity counts.",
  },
] as const;

const sections = [
  ["use", "When to use this baseline"],
  ["capabilities", "Seven operating capabilities"],
  ["agreement", "Minimum operating agreement"],
  ["review", "Director review questions"],
  ["failure", "Warning signs"],
] as const;

export default function HcdOperatingModelBaselinePage() {
  return (
    <article className="content-page">
      <header className="page-header">
        <p className="eyebrow">Framework</p>
        <h1>HCD operating model baseline</h1>
        <p className="hero-summary">
          Establish how human-centered work enters the organization, becomes
          evidence, influences delivery, receives oversight, and demonstrates
          value.
        </p>
      </header>

      <RelatedContent entryId="framework-hcd-operating-model-baseline" />

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
              Use it when establishing an HCD capability, joining a new
              program, diagnosing inconsistent engagement, scaling across
              teams, or resetting a practice that produces artifacts without
              reliably changing decisions.
            </p>
            <p>
              This is a starting structure, not a universal organization
              chart. The appropriate roles, review depth, and documentation
              depend on mission, risk, regulation, delivery model, and team
              maturity.
            </p>
          </section>

          <section id="capabilities" aria-labelledby="capabilities-heading">
            <p className="eyebrow">Operating model</p>
            <h2 id="capabilities-heading">Seven capabilities that must connect</h2>
            <div className="design-system-grid">
              {capabilities.map((capability) => (
                <article className="design-system-card" key={capability.title}>
                  <h3>{capability.title}</h3>
                  <p>
                    <strong>{capability.question}</strong>
                  </p>
                  <p>{capability.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="agreement" aria-labelledby="agreement-heading">
            <p className="eyebrow">Working artifact</p>
            <h2 id="agreement-heading">Create a minimum operating agreement</h2>
            <p>
              Capture one reviewable page before building a detailed playbook.
              It should state:
            </p>
            <ul>
              <li>the mandate, desired outcomes, scope, and accountable owner;</li>
              <li>how requests enter, are assessed, prioritized, and declined;</li>
              <li>required evidence and accessibility checkpoints;</li>
              <li>decision roles and an escalation path for unresolved risk;</li>
              <li>where HCD connects to planning, delivery, and release;</li>
              <li>which records must be retained and who may access them;</li>
              <li>the measures reviewed, their cadence, and resulting actions;</li>
              <li>the date and evidence that will trigger the next model review.</li>
            </ul>
            <p>
              Treat the agreement as versioned operational knowledge. A model
              that exists only in presentations or individual memory cannot
              govern work consistently.
            </p>
          </section>

          <section id="review" aria-labelledby="review-heading">
            <p className="eyebrow">Leadership review</p>
            <h2 id="review-heading">Questions for a Director-level review</h2>
            <ul className="check-list">
              <li>Can teams explain when and why to involve HCD?</li>
              <li>Can leaders see demand, capacity, priority, and blocked work?</li>
              <li>Can a consequential finding be traced to appropriate evidence?</li>
              <li>Are decision rights clear when user, mission, policy, and delivery needs conflict?</li>
              <li>Do accessibility findings change requirements and acceptance decisions?</li>
              <li>Are teams learning after release, or only validating before it?</li>
              <li>Do measures show changed outcomes, reduced risk, or improved capability?</li>
              <li>Can another person continue the work from the retained record?</li>
            </ul>
          </section>

          <section id="failure" aria-labelledby="failure-heading">
            <p className="eyebrow">Warning signs</p>
            <h2 id="failure-heading">Look beyond the presence of HCD activity</h2>
            <ul>
              <li>Research begins after major commitments are already fixed.</li>
              <li>Requests depend on personal relationships instead of visible intake.</li>
              <li>Teams collect evidence but cannot trace decisions back to it.</li>
              <li>Accessibility is deferred to a final compliance review.</li>
              <li>Artifacts accumulate without owners, lifecycle, or reuse.</li>
              <li>Success is reported only as interviews, workshops, or deliverables completed.</li>
              <li>AI-generated synthesis is accepted without source review or accountable interpretation.</li>
            </ul>
            <p>
              These are operating-system problems. Adding another template or
              workshop may increase activity without correcting the conditions
              producing inconsistent outcomes.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
