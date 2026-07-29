import type { Metadata } from "next";
import Link from "next/link";
import { AiImagePromptWizard } from "@/components/tools/ai-image-prompt-wizard";
import { AI_IMAGE_PROMPT_WIZARD_TOOL as tool } from "@/content/tools/ai-image-prompt-wizard";

export const metadata: Metadata = {
  title: tool.title,
  description: tool.briefDescription,
};

export default function AiImagePromptWizardPage() {
  return (
    <article className="content-page tool-page">
      <header className="page-header">
        <p className="eyebrow">{tool.statusLabel}</p>
        <h1>{tool.title}</h1>
        <p className="hero-summary">
          {tool.description} See the{" "}
          <Link href="/case-studies/ai-image-creation-wizard">
            related portfolio case study
          </Link>{" "}
          for the design decisions and original context.
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
            <dd><time dateTime={tool.lastVerified}>July 29, 2026</time></dd>
          </div>
        </dl>
      </header>

      <aside className="status-note" aria-labelledby="prompt-scope-heading">
        <h2 id="prompt-scope-heading">Current scope</h2>
        <p>{tool.statusNote}</p>
      </aside>

      <AiImagePromptWizard />

      <section className="tool-support" aria-labelledby="prompt-accessibility-heading">
        <div>
          <p className="eyebrow">Accessibility and privacy</p>
          <h2 id="prompt-accessibility-heading">What this version supports</h2>
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
