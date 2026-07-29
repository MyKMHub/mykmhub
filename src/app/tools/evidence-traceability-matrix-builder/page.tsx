import type { Metadata } from "next";
import Link from "next/link";
import { EvidenceMatrixBuilder } from "@/components/tools/evidence-matrix-builder";

export const metadata: Metadata = {
  title: "Evidence Traceability Matrix Builder — Draft",
  description:
    "Explore a draft centralized HCD evidence-log concept for sharing evidence, interpretations, confidence, and ownership.",
  robots: { index: false, follow: false },
};

export default function EvidenceMatrixToolPage() {
  return (
    <article className="content-page tool-page">
      <header className="page-header">
        <p className="eyebrow">Working draft · Low priority</p>
        <h1>Evidence Traceability Matrix Builder</h1>
        <p className="hero-summary">
          Explore how a shared HCD evidence log could connect research to
          process steps, make confidence explicit, and give the team one
          evidence-backed view of decisions.
        </p>
        <div className="related-links" aria-label="Related content">
          <Link href="/methods/evidence-first-synthesis">Read the method</Link>
          <Link href="/case-studies/scaling-hcd-through-ai">
            View the case study
          </Link>
        </div>
      </header>

      <aside className="status-note" aria-labelledby="draft-heading">
        <h2 id="draft-heading">This is a proof of concept</h2>
        <p>
          The workflow is functional, but the product model is not finalized.
          Future work may add evidence owners or points of contact, attribution,
          disagreement and review workflows, change history, and authenticated
          team storage.
        </p>
      </aside>

      <aside className="privacy-notice" aria-labelledby="privacy-heading">
        <h2 id="privacy-heading">Use sanitized information only</h2>
        <p>
          This draft stores entries in this browser. Do not enter classified,
          controlled, personal, proprietary, or otherwise sensitive research
          data. Export or clear your work before using a shared device.
        </p>
      </aside>

      <EvidenceMatrixBuilder />
    </article>
  );
}
