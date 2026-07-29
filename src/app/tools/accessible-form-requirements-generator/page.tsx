import type { Metadata } from "next";
import { ToolPageHeader } from "@/components/tool-page-header";
import { AccessibleFormGenerator } from "@/components/tools/accessible-form-generator";
import { ACCESSIBLE_FORM_GENERATOR_TOOL as tool } from "@/content/tools/accessible-form-generator";

export const metadata: Metadata = {
  title: tool.title,
  description: tool.briefDescription,
};

export default function AccessibleFormGeneratorPage() {
  return (
    <article className="content-page tool-page">
      <ToolPageHeader
        title={tool.title}
        status={tool.statusLabel}
        lastVerified={tool.lastVerified}
        lastVerifiedLabel="July 28, 2026"
        description={tool.briefDescription}
        expandedDescription={tool.description}
        instructions="Choose a form component, configure its content and behavior, then generate and review the live pattern, semantic code, requirements, and test guidance."
        relatedLinks={[{
          href: "/case-studies/accessible-form-component-and-ux-requirements-generator",
          label: "Read the related portfolio case study",
        }]}
      />

      <AccessibleFormGenerator />

      <section className="tool-support" aria-labelledby="form-tool-accessibility-heading">
        <div>
          <p className="eyebrow">Accessibility</p>
          <h2 id="form-tool-accessibility-heading">Accessibility notes</h2>
          <ul>
            {tool.accessibilityNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>

        <details className="version-notes">
          <summary>Version notes</summary>
          {tool.versionNotes.map((release) => (
            <section key={release.version}>
              <h3>{release.version}</h3>
              <p>
                <time dateTime={release.date}>{release.date}</time>
              </p>
              <ul>
                {release.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </section>
          ))}
        </details>
      </section>
    </article>
  );
}
