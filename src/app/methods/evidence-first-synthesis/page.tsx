import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Evidence-first synthesis",
  description:
    "A reusable method for connecting findings to sources, process context, confidence, and explicit evidence gaps.",
};

export default function EvidenceFirstSynthesisPage() {
  return (
    <article className="content-page method-page">
      <header className="page-header">
        <p className="eyebrow">Method</p>
        <h1>Evidence-first synthesis</h1>
        <p className="hero-summary">
          Preserve the path from source material to finding, decision, and
          action—without confusing automation with researcher judgment.
        </p>
        <div className="related-links" aria-label="Related content">
          <Link href="/tools/evidence-traceability-matrix-builder">
            Use the matrix builder
          </Link>
          <Link href="/case-studies/scaling-hcd-through-ai">
            See the method in practice
          </Link>
        </div>
      </header>

      <div className="prose method-content">
        <section aria-labelledby="when-heading">
          <p className="eyebrow">When to use it</p>
          <h2 id="when-heading">When research must connect to a complex operating context</h2>
          <p>
            Evidence-first synthesis is useful when findings must remain
            traceable across interviews, observations, policies, services,
            systems, or business-process steps. It is especially valuable when
            decisions will be reviewed, audited, challenged, or handed to
            another team.
          </p>
        </section>

        <section aria-labelledby="principles-heading">
          <p className="eyebrow">Principles</p>
          <h2 id="principles-heading">What must remain true</h2>
          <ol className="method-steps">
            <li>
              <h3>Preserve the source</h3>
              <p>
                Keep enough reference information to return to the original
                quotation, observation, document, or record.
              </p>
            </li>
            <li>
              <h3>Separate evidence from interpretation</h3>
              <p>
                Record what was observed before describing the pain point,
                implication, or recommendation derived from it.
              </p>
            </li>
            <li>
              <h3>Connect evidence to context</h3>
              <p>
                Map findings to the process step, policy, role, system, journey
                stage, or decision they help explain.
              </p>
            </li>
            <li>
              <h3>Make confidence explicit</h3>
              <p>
                Distinguish direct evidence from reasonable inference. Do not
                present both with equal certainty.
              </p>
            </li>
            <li>
              <h3>Represent absence honestly</h3>
              <p>
                “None identified” means the available research does not support
                a finding. It does not prove that no problem exists.
              </p>
            </li>
            <li>
              <h3>Keep humans accountable for synthesis</h3>
              <p>
                Automation can reconcile and organize evidence. Researchers
                remain responsible for interpretation, validation, ethics, and
                decisions.
              </p>
            </li>
          </ol>
        </section>

        <section aria-labelledby="workflow-heading">
          <p className="eyebrow">Workflow</p>
          <h2 id="workflow-heading">A minimum evidence-first workflow</h2>
          <ol>
            <li>Prepare and sanitize source material.</li>
            <li>Define the contextual structure before mapping findings.</li>
            <li>Extract evidence with stable source references.</li>
            <li>Describe supported findings separately from quotations.</li>
            <li>Assign confidence and priority using documented criteria.</li>
            <li>Mark unsupported areas explicitly.</li>
            <li>Review mappings with researchers and subject-matter experts.</li>
            <li>Use the matrix to create insights and future-state artifacts.</li>
          </ol>
        </section>

        <aside className="privacy-notice" aria-labelledby="governance-heading">
          <h2 id="governance-heading">Governance before automation</h2>
          <p>
            Determine what data may be processed, where it may be stored, who
            can access it, how long it is retained, and which decisions require
            human review. A technically convenient pipeline is not automatically
            an appropriate one.
          </p>
        </aside>

        <section aria-labelledby="quality-heading">
          <p className="eyebrow">Quality checks</p>
          <h2 id="quality-heading">Review before using the results</h2>
          <ul className="check-list">
            <li>Can every explicit finding be traced to a source?</li>
            <li>Are inference and direct evidence visibly distinguished?</li>
            <li>Are contradictory observations retained rather than averaged away?</li>
            <li>Are evidence gaps represented without being treated as proof?</li>
            <li>Have affected people or domain experts reviewed interpretations?</li>
            <li>Are accessibility, privacy, and policy constraints carried into recommendations?</li>
          </ul>
        </section>

        <aside className="next-step" aria-labelledby="method-next-heading">
          <h2 id="method-next-heading">Build a traceable matrix</h2>
          <p>
            Practice the method with sanitized information or the included
            synthetic sample.
          </p>
          <Link className="primary-link" href="/tools/evidence-traceability-matrix-builder">
            Open the matrix builder
          </Link>
        </aside>
      </div>
    </article>
  );
}
