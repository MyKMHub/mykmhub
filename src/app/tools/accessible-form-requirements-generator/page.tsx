import type { Metadata } from "next";
import Link from "next/link";
import { AccessibleFormGenerator } from "@/components/tools/accessible-form-generator";
import { ACCESSIBLE_FORM_GENERATOR_TOOL as tool } from "@/content/tools/accessible-form-generator";

export const metadata: Metadata = {
  title: tool.title,
  description: tool.briefDescription,
};

export default function AccessibleFormGeneratorPage() {
  return (
    <article className="content-page tool-page">
      <header className="page-header">
        <p className="eyebrow">{tool.statusLabel}</p>
        <h1>{tool.title}</h1>
        <p className="hero-summary">
          {tool.description} See the{" "}
          <Link href="/case-studies/accessible-form-component-and-ux-requirements-generator">
            related portfolio case study
          </Link>{" "}
          for the design context and outcomes.
        </p>
        <dl className="tool-facts">
          <div>
            <dt>Status</dt>
            <dd>{tool.statusLabel}</dd>
          </div>
          <div>
            <dt>Context</dt>
            <dd>{tool.context}</dd>
          </div>
          <div>
            <dt>Last verified</dt>
            <dd>
              <time dateTime={tool.lastVerified}>July 28, 2026</time>
            </dd>
          </div>
        </dl>
      </header>

      <aside className="status-note" aria-labelledby="beta-heading">
        <h2 id="beta-heading">Beta scope</h2>
        <p>{tool.statusNote}</p>
      </aside>

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
