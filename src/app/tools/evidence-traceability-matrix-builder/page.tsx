import type { Metadata } from "next";
import { ToolPageHeader } from "@/components/tool-page-header";
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
      <ToolPageHeader
        title={tool.title}
        status={`${tool.statusLabel} · Low priority`}
        lastVerified={tool.lastVerified}
        lastVerifiedLabel="July 28, 2026"
        description={tool.briefDescription}
        expandedDescription={tool.description}
        instructions="Use sanitized information only. Add an evidence item, record its source and confidence, assign a point of contact, then review or export the shared log."
        relatedLinks={[
          {
            href: "/methods/evidence-first-synthesis",
            label: "Read the evidence-first synthesis method",
          },
          {
            href: "/case-studies/scaling-hcd-through-ai",
            label: "View the related portfolio case study",
          },
        ]}
      />

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
