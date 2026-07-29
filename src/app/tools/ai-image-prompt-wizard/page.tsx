import type { Metadata } from "next";
import { ToolPageHeader } from "@/components/tool-page-header";
import { AiImagePromptWizard } from "@/components/tools/ai-image-prompt-wizard";
import { AI_IMAGE_PROMPT_WIZARD_TOOL as tool } from "@/content/tools/ai-image-prompt-wizard";

export const metadata: Metadata = {
  title: tool.title,
  description: tool.briefDescription,
};

export default function AiImagePromptWizardPage() {
  return (
    <article className="content-page tool-page">
      <ToolPageHeader
        title={tool.title}
        status={tool.statusLabel}
        lastVerified={tool.lastVerified}
        lastVerifiedLabel="July 29, 2026"
        description={tool.briefDescription}
        expandedDescription={tool.description}
        instructions="Define the subject, then select styling, composition, and output options. Review the compiled prompt, add the selected provider key, and generate or copy."
        relatedLinks={[{
          href: "/case-studies/ai-image-creation-wizard",
          label: "Read the related portfolio case study",
        }]}
      />

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
