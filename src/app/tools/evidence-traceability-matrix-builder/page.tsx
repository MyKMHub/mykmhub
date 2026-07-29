import type { Metadata } from "next";
import Link from "next/link";
import { EvidenceMatrixBuilder } from "@/components/tools/evidence-matrix-builder";
import { EVIDENCE_TRACEABILITY_MATRIX_TOOL as tool } from "@/content/tools/evidence-traceability-matrix";

export const metadata: Metadata = {
  title: `${tool.title} — Draft`,
  description: tool.briefDescription,
  robots: { index: false, follow: false },
};

export default function EvidenceMatrixToolPage() {
  return (
    <article className="content-page tool-page">
      <header className="page-header">
        <p className="eyebrow">{tool.statusLabel} · Low priority</p>
        <h1>{tool.title}</h1>
        <p className="hero-summary">{tool.description}</p>
        <div className="related-links" aria-label="Related content">
          <Link href="/methods/evidence-first-synthesis">Read the method</Link>
          <Link href="/case-studies/scaling-hcd-through-ai">
            View the related portfolio case study
          </Link>
        </div>
      </header>

      <aside className="status-note" aria-labelledby="draft-heading">
        <h2 id="draft-heading">This is a proof of concept</h2>
        <p>{tool.statusNote}</p>
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

      <section
        className="tool-support"
        aria-labelledby="accessibility-notes-heading"
      >
        <div>
          <p className="eyebrow">Accessibility</p>
          <h2 id="accessibility-notes-heading">Accessibility notes</h2>
          <ul>
            {tool.accessibilityNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>

        <details className="version-notes">
          <summary>Version notes</summary>
          {tool.versionNotes.map((release) => {
            const headingId = `version-${release.version.replaceAll(" ", "-")}`;
            return (
              <section key={release.version} aria-labelledby={headingId}>
                <h3 id={headingId}>{release.version}</h3>
                <p>
                  <time dateTime={release.date}>{release.date}</time>
                </p>
                <ul>
                  {release.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </section>
            );
          })}
        </details>
      </section>
    </article>
  );
}
