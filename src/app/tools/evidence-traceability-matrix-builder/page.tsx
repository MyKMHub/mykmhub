import type { Metadata } from "next";
import Link from "next/link";
import { EvidenceMatrixBuilder } from "@/components/tools/evidence-matrix-builder";

export const metadata: Metadata = {
  title: "Evidence Traceability Matrix Builder",
  description:
    "Map sanitized research evidence to process steps and export an auditable synthesis matrix.",
};

export default function EvidenceMatrixToolPage() {
  return (
    <article className="content-page tool-page">
      <header className="page-header">
        <p className="eyebrow">Live tool</p>
        <h1>Evidence Traceability Matrix Builder</h1>
        <p className="hero-summary">
          Connect research evidence to process steps, make confidence explicit,
          and identify where evidence is absent.
        </p>
        <div className="related-links" aria-label="Related content">
          <Link href="/methods/evidence-first-synthesis">Read the method</Link>
          <Link href="/case-studies/scaling-hcd-through-ai">
            View the case study
          </Link>
        </div>
      </header>

      <aside className="privacy-notice" aria-labelledby="privacy-heading">
        <h2 id="privacy-heading">Use sanitized information only</h2>
        <p>
          This tool stores entries in this browser. Do not enter classified,
          controlled, personal, proprietary, or otherwise sensitive research
          data. Export or clear your work before using a shared device.
        </p>
      </aside>

      <EvidenceMatrixBuilder />
    </article>
  );
}
