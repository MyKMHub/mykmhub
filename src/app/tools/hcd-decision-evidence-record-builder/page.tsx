import type { Metadata } from "next";
import { RelatedContent } from "@/components/related-content";
import { ToolPageHeader } from "@/components/tool-page-header";
import { HcdDecisionEvidenceRecordBuilder } from "@/components/tools/hcd-decision-evidence-record-builder";
import { HCD_DECISION_EVIDENCE_RECORD_BUILDER_TOOL as tool } from "@/content/tools/hcd-decision-evidence-record-builder";

export const metadata: Metadata = {
  title: tool.title,
  description: tool.briefDescription,
};

export default function HcdDecisionEvidenceRecordBuilderPage() {
  return (
    <article className="content-page tool-page">
      <ToolPageHeader
        title={tool.title}
        status={tool.statusLabel}
        lastVerified={tool.lastVerified}
        lastVerifiedLabel="August 1, 2026"
        description={tool.briefDescription}
        expandedDescription={tool.description}
        instructions="Describe the decision, cite governed evidence, make implications and authority explicit, then generate and review a Markdown record."
      />

      <RelatedContent
        entryId={tool.id}
        heading="Connect the record to evidence and delivery practice"
      />

      <HcdDecisionEvidenceRecordBuilder />

      <section className="tool-support" aria-labelledby="decision-tool-accessibility-heading">
        <div>
          <p className="eyebrow">Accessibility and privacy</p>
          <h2 id="decision-tool-accessibility-heading">Use the output responsibly</h2>
          <ul>
            {[...tool.accessibilityNotes, ...(tool.privacyNotes ?? [])].map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>

        <details className="version-notes">
          <summary>Version notes</summary>
          {tool.versionNotes.map((release) => (
            <section key={release.version}>
              <h3>{release.version}</h3>
              <p><time dateTime={release.date}>{release.date}</time></p>
              <ul>
                {release.notes.map((note) => <li key={note}>{note}</li>)}
              </ul>
            </section>
          ))}
        </details>
      </section>
    </article>
  );
}
