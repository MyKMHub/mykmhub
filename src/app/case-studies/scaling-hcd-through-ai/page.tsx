import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Scaling HCD through evidence-traceable automation",
  description:
    "A case study on reducing manual synthesis time by 80% while preserving traceability and human judgment.",
};

const FIGURES = {
  bottleneck: {
    src: "/case-studies/hcd-velocity-engine/synthesis-debt-bottleneck.png",
    width: 1467,
    height: 1062,
  },
  architecture: {
    src: "/case-studies/hcd-velocity-engine/velocity-engine-architecture.png",
    width: 1893,
    height: 892,
  },
  matrix: {
    src: "/case-studies/hcd-velocity-engine/evidence-traceability-matrix.png",
    width: 1803,
    height: 223,
  },
  roadmap: {
    src: "/case-studies/hcd-velocity-engine/future-state-roadmap.png",
    width: 568,
    height: 765,
  },
} as const;

export default function HcdVelocityCaseStudyPage() {
  return (
    <article className="content-page case-study">
      <header className="page-header">
        <p className="eyebrow">Case study · 2025</p>
        <h1>Scaling HCD through evidence-traceable automation</h1>
        <p className="hero-summary">
          An automation-first synthesis pipeline reduced manual production time
          by 80%, giving an HCD team more capacity for strategic facilitation and
          future-state design.
        </p>
        <dl className="project-facts">
          <div>
            <dt>Context</dt>
            <dd>U.S. Navy learning-stack quota management</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>Design Operations and Strategy Lead</dd>
          </div>
          <div>
            <dt>Governance</dt>
            <dd>OPNAVINST 1500.47D</dd>
          </div>
        </dl>
        <div className="related-links" aria-label="Related content">
          <Link href="/tools/evidence-traceability-matrix-builder">
            Open the related tool
          </Link>
          <Link href="/methods/evidence-first-synthesis">Read the method</Link>
        </div>
      </header>

      <div className="case-study-layout">
        <nav className="on-this-page" aria-label="On this page">
          <h2>On this page</h2>
          <ol>
            <li><a href="#challenge">Challenge</a></li>
            <li><a href="#approach">Approach</a></li>
            <li><a href="#traceability">Traceability</a></li>
            <li><a href="#outputs">Outputs</a></li>
            <li><a href="#impact">Impact</a></li>
            <li><a href="#reflection">Reflection</a></li>
          </ol>
        </nav>

        <div className="prose">
          <section aria-labelledby="overview-heading">
            <p className="eyebrow">Overview</p>
            <h2 id="overview-heading">From synthesis operators to strategy facilitators</h2>
            <p>
              HCD teams in high-stakes environments can accumulate “synthesis
              debt”: the manual work of reconciling raw research, process
              documentation, and policy consumes the capacity needed to shape
              decisions. In this project, the team had to connect interview
              transcripts with a 121-step business process map and regulated
              policy context.
            </p>
            <p>
              I led an operational redesign that treated synthesis as an
              evidence-reconciliation problem. The resulting pipeline aligned
              source evidence to process identifiers while preserving timestamps,
              confidence, and explicit gaps.
            </p>
          </section>

          <section id="challenge" aria-labelledby="challenge-heading">
            <p className="eyebrow">Challenge</p>
            <h2 id="challenge-heading">Manual reconciliation created a strategic ceiling</h2>
            <p>
              Approximately 80% of the team’s production capacity was spent
              formatting spreadsheets and cross-referencing thousands of
              transcript rows against the process map. The team could document
              the problem, but had too little time to facilitate the solution.
            </p>
            <figure>
              <a href={FIGURES.bottleneck.src}>
                <Image
                  src={FIGURES.bottleneck.src}
                  width={FIGURES.bottleneck.width}
                  height={FIGURES.bottleneck.height}
                  alt="A large process-map spreadsheet before research evidence was reconciled"
                  sizes="(max-width: 768px) 100vw, 760px"
                />
              </a>
              <figcaption>
                <strong>Figure 1: The synthesis-debt bottleneck.</strong> The
                unreconciled 121-row process map illustrates the scale of the
                manual effort required to connect policy, activities, and
                transcript evidence. Activate the image to view it at full size.
              </figcaption>
            </figure>
          </section>

          <section id="approach" aria-labelledby="approach-heading">
            <p className="eyebrow">Approach</p>
            <h2 id="approach-heading">An automation-first HCD velocity engine</h2>
            <p>
              The pipeline normalized terminology, preserved timestamps and
              source references, extracted supported evidence, mapped pain
              points to process rows, and packaged the results into reusable
              artifacts. Human judgment remained responsible for interpreting
              findings, shaping insights, and designing the future-state roadmap.
            </p>
            <ul>
              <li>Raw interview transcripts</li>
              <li>Structured 121-row business process map</li>
              <li>Official policy documentation</li>
              <li>Evidence, priority, justification, and confidence metadata</li>
            </ul>
            <figure>
              <a href={FIGURES.architecture.src}>
                <Image
                  src={FIGURES.architecture.src}
                  width={FIGURES.architecture.width}
                  height={FIGURES.architecture.height}
                  alt="Ten-stage automated HCD synthesis pipeline from source intake through artifact packaging"
                  sizes="(max-width: 768px) 100vw, 760px"
                />
              </a>
              <figcaption>
                <strong>Figure 2: HCD velocity-engine architecture.</strong> The
                pipeline moved from source intake and readiness checks through
                normalization, evidence extraction, process alignment, artifact
                creation, and packaging.
              </figcaption>
            </figure>
          </section>

          <section id="traceability" aria-labelledby="traceability-heading">
            <p className="eyebrow">Research synthesis</p>
            <h2 id="traceability-heading">Evidence first, including when evidence was absent</h2>
            <p>
              Each finding was mapped to a process activity and its supporting
              source. A source-confidence field distinguished explicit evidence
              from interpretation. When no evidence supported a process step,
              the pipeline recorded “None identified” rather than manufacturing
              a finding.
            </p>
            <figure className="wide-figure">
              <a href={FIGURES.matrix.src}>
                <Image
                  src={FIGURES.matrix.src}
                  width={FIGURES.matrix.width}
                  height={FIGURES.matrix.height}
                  alt="Two evidence-matrix rows connecting process activities to quotes, priorities, justification, and confidence"
                  sizes="(max-width: 768px) 100vw, 900px"
                />
              </a>
              <figcaption>
                <strong>Figure 3: Evidence traceability matrix.</strong> Findings
                connect process activities to timestamped source evidence,
                priority, justification, and source confidence.
              </figcaption>
            </figure>
          </section>

          <section id="outputs" aria-labelledby="outputs-heading">
            <p className="eyebrow">Outputs</p>
            <h2 id="outputs-heading">Capacity shifted from processing to artifact creation</h2>
            <ul>
              <li>
                <strong>Experience and journey maps:</strong> friction visualized
                against the process map.
              </li>
              <li>
                <strong>Evidence-based personas:</strong> profiles grounded in
                synthesized behavioral evidence.
              </li>
              <li>
                <strong>Audit-ready insights report:</strong> findings linked to
                transcript evidence and policy citations.
              </li>
              <li>
                <strong>Future-state operational roadmap:</strong> prioritized
                interventions connecting fragmented processes to a compliant,
                human-centered model.
              </li>
            </ul>
            <figure className="portrait-figure">
              <a href={FIGURES.roadmap.src}>
                <Image
                  src={FIGURES.roadmap.src}
                  width={FIGURES.roadmap.width}
                  height={FIGURES.roadmap.height}
                  alt="Future-state roadmap relating strategic themes, current gaps, and recommended interventions"
                  sizes="(max-width: 768px) 100vw, 568px"
                />
              </a>
              <figcaption>
                <strong>Figure 4: Future-state operational roadmap.</strong> The
                final artifact translated synthesized findings into prioritized,
                actionable operational interventions.
              </figcaption>
            </figure>
          </section>

          <section aria-labelledby="accessibility-heading">
            <p className="eyebrow">Accessibility</p>
            <h2 id="accessibility-heading">Accessibility became part of the strategic output</h2>
            <p>
              Section 508 compliance was treated as a baseline. Reclaimed
              synthesis capacity was used to integrate accessibility requirements
              and inclusive-design guidance into UX artifacts so findings were
              both accessible to stakeholders and actionable for delivery teams.
            </p>
          </section>

          <section id="impact" aria-labelledby="impact-heading">
            <p className="eyebrow">Measured impact</p>
            <h2 id="impact-heading">One project cycle, 80% less manual production time</h2>
            <dl className="impact-list">
              <div>
                <dt>80%</dt>
                <dd>Reduction in manual production time during this project</dd>
              </div>
              <div>
                <dt>1 cycle</dt>
                <dd>Full artifact suite produced with audit-ready traceability</dd>
              </div>
              <div>
                <dt>Strategic pivot</dt>
                <dd>Team capacity moved from synthesis operation to facilitation</dd>
              </div>
            </dl>
          </section>

          <section id="reflection" aria-labelledby="reflection-heading">
            <p className="eyebrow">Reflection</p>
            <h2 id="reflection-heading">Design leadership includes designing the workflow</h2>
            <p>
              The central lesson was that doing all the mechanical work manually
              is not a mark of rigor. Leadership meant architecting a workflow
              that preserved evidence fidelity while giving the team room to
              interpret, facilitate, and design higher-impact outcomes.
            </p>
          </section>

          <aside className="next-step" aria-labelledby="next-step-heading">
            <h2 id="next-step-heading">Try the reusable practice</h2>
            <p>
              The public Evidence Traceability Matrix Builder applies the core
              evidence-to-process mapping pattern using browser-local,
              non-sensitive data.
            </p>
            <Link className="primary-link" href="/tools/evidence-traceability-matrix-builder">
              Open the matrix builder
            </Link>
          </aside>
        </div>
      </div>
    </article>
  );
}
