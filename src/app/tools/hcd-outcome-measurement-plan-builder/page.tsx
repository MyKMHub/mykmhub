import type { Metadata } from "next";
import { RelatedContent } from "@/components/related-content";
import { ToolPageHeader } from "@/components/tool-page-header";
import { HcdOutcomeMeasurementPlanBuilder } from "@/components/tools/hcd-outcome-measurement-plan-builder";
import { HCD_OUTCOME_MEASUREMENT_PLAN_BUILDER_TOOL as tool } from "@/content/tools/hcd-outcome-measurement-plan-builder";

export const metadata: Metadata = {
  title: tool.title,
  description: tool.briefDescription,
};

export default function HcdOutcomeMeasurementPlanBuilderPage() {
  return (
    <article className="content-page tool-page">
      <ToolPageHeader
        title={tool.title}
        status={tool.statusLabel}
        lastVerified={tool.lastVerified}
        lastVerifiedLabel="August 1, 2026"
        description={tool.briefDescription}
        expandedDescription={tool.description}
        instructions="Define the intended change and outcome chain, add the smallest balanced set of decision-ready measures, then generate and review the Markdown learning plan."
      />

      <RelatedContent
        entryId={tool.id}
        heading="Connect outcomes to decisions and leadership evidence"
      />

      <HcdOutcomeMeasurementPlanBuilder />

      <section className="tool-support" aria-labelledby="measurement-tool-accessibility-heading">
        <div>
          <p className="eyebrow">Accessibility and privacy</p>
          <h2 id="measurement-tool-accessibility-heading">Measure responsibly</h2>
          <ul>
            {[...tool.accessibilityNotes, ...(tool.privacyNotes ?? [])].map((note) => <li key={note}>{note}</li>)}
          </ul>
        </div>

        <details className="version-notes">
          <summary>Version notes</summary>
          {tool.versionNotes.map((release) => (
            <section key={release.version}>
              <h3>{release.version}</h3>
              <p><time dateTime={release.date}>{release.date}</time></p>
              <ul>{release.notes.map((note) => <li key={note}>{note}</li>)}</ul>
            </section>
          ))}
        </details>
      </section>
    </article>
  );
}
