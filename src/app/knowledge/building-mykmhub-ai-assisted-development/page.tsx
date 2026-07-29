import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Building MyKMHub through AI-assisted development",
  description:
    "A specification-led approach to combining human product judgment, accessibility, AI-assisted implementation, version control, validation, and organizational memory.",
};

const sections = [
  ["framing", "More deliberate than vibe coding"],
  ["roles", "Human and AI responsibilities"],
  ["workflow", "The delivery system"],
  ["accessibility", "Accessibility guardrails"],
  ["continuity", "The repository as memory"],
  ["value", "Where AI helps—and where it does not"],
  ["lessons", "Lessons so far"],
] as const;

export default function AiAssistedMyKMHubDevelopmentPage() {
  return (
    <article className="content-page">
      <header className="page-header">
        <p className="eyebrow">Practice note · 2026</p>
        <h1>Building MyKMHub through AI-assisted development</h1>
        <p className="hero-summary">
          A specification-led practice that combines human product judgment,
          accessible design, AI-assisted implementation, tested source control,
          and durable organizational memory.
        </p>
        <div className="related-links" aria-label="Related MyKMHub resources">
          <Link href="/design-system">Explore the Design System</Link>
          <Link href="/design-system/theme-lab">Open Theme Lab</Link>
          <a href="https://github.com/MyKMHub/mykmhub">
            Review the public repository
          </a>
        </div>
      </header>

      <div className="case-study-layout">
        <aside className="on-this-page" aria-labelledby="contents-heading">
          <h2 id="contents-heading">On this page</h2>
          <ol>
            {sections.map(([id, title]) => (
              <li key={id}>
                <a href={`#${id}`}>{title}</a>
              </li>
            ))}
          </ol>
        </aside>

        <div className="prose">
          <section id="framing" aria-labelledby="framing-heading">
            <p className="eyebrow">Framing</p>
            <h2 id="framing-heading">More deliberate than vibe coding</h2>
            <p>
              “Vibe coding” is a recognizable shorthand for creating software
              through conversation with AI. It does not fully describe this
              project. MyKMHub uses written specifications, reusable content
              models, accessibility requirements, design-system constraints,
              automated tests, Git history, and explicit publication checks.
            </p>
            <p>
              AI accelerates translation from intent to implementation. It does
              not own the product direction or determine whether the result is
              useful, accurate, accessible, or ready to publish.
            </p>
          </section>

          <section id="roles" aria-labelledby="roles-heading">
            <p className="eyebrow">Responsibilities</p>
            <h2 id="roles-heading">Human and AI responsibilities remain distinct</h2>
            <p>
              I define the purpose, content, information architecture,
              accessibility expectations, priorities, and acceptance decisions.
              Codex helps inspect the repository, propose and implement changes,
              run validation, maintain documentation, and operate the Git
              workflow.
            </p>
            <p>
              Review is collaborative and iterative. When an implementation
              technically follows a request but misrepresents the intended
              visual or conceptual model, the implementation is corrected—not
              defended merely because it passes a test.
            </p>
          </section>

          <section id="workflow" aria-labelledby="workflow-heading">
            <p className="eyebrow">Workflow</p>
            <h2 id="workflow-heading">A chain of independently verifiable states</h2>
            <ol>
              <li>Define or refine the requirement in project context.</li>
              <li>Inspect the repository before changing it.</li>
              <li>Implement against shared components and content models.</li>
              <li>Review the visible experience and interaction.</li>
              <li>Run lint, production build, and relevant browser tests.</li>
              <li>Commit a coherent source milestone.</li>
              <li>Push the commit to GitHub.</li>
              <li>Verify Vercel and the changed production route.</li>
            </ol>
            <p>
              Each transition matters. A local commit is not a GitHub update,
              and a GitHub update is not proof that production deployed
              successfully.
            </p>
          </section>

          <section id="accessibility" aria-labelledby="accessibility-heading">
            <p className="eyebrow">Guardrails</p>
            <h2 id="accessibility-heading">Accessibility is part of the implementation contract</h2>
            <p>
              Spectrum 2 supplies established components where viable. MyKMHub
              adds semantic page structure, keyboard access, visible focus,
              responsive behavior, appearance and reading preferences, and
              constrained theme controls with contrast checks.
            </p>
            <p>
              Automated WCAG checks are a regression baseline, not a substitute
              for keyboard, screen-reader, zoom, reflow, contrast, and usability
              review. A passing scan cannot establish that a design decision is
              understandable or appropriate.
            </p>
          </section>

          <section id="continuity" aria-labelledby="continuity-heading">
            <p className="eyebrow">Knowledge management</p>
            <h2 id="continuity-heading">The repository is also organizational memory</h2>
            <p>
              Product intent cannot live only in an AI conversation or editor
              session. The specification, roadmap, structured registries,
              operations guide, tool catalog, decisions, tests, and commit
              history preserve enough context to resume work with a different
              tool or on another device.
            </p>
            <p>
              Content is maintained once and surfaced through relationships.
              Tools, portfolio evidence, practice notes, efforts, procedures,
              and environments can remain distinct records without becoming
              disconnected copies.
            </p>
          </section>

          <section id="value" aria-labelledby="value-heading">
            <p className="eyebrow">Value and limits</p>
            <h2 id="value-heading">Where AI helps—and where it does not</h2>
            <p>
              AI is effective at repository analysis, implementation drafts,
              repetitive normalization, cross-linking, test creation,
              troubleshooting, and documenting operational knowledge while it
              is fresh.
            </p>
            <p>
              It remains vulnerable to plausible misunderstandings, misplaced
              visual layers, overconfident assumptions, and technically valid
              solutions that miss the user’s mental model. Direct inspection,
              explicit evidence, and human correction remain essential.
            </p>
          </section>

          <section id="lessons" aria-labelledby="lessons-heading">
            <p className="eyebrow">Lessons so far</p>
            <h2 id="lessons-heading">Treat the workflow as a governed system</h2>
            <ul>
              <li>Give the repository and specification authority over chat memory.</li>
              <li>Record decisions and operational lessons as they occur.</li>
              <li>Separate preview state, saved state, and deployed state.</li>
              <li>Verify the exact layer or interaction the user described.</li>
              <li>Keep alternate tools viable through standard files and Git.</li>
              <li>Never confuse automation speed with product certainty.</li>
            </ul>
            <p>
              This practice note will evolve as MyKMHub gains structured
              knowledge views, private administration, stronger backup and
              recovery, and measurable evidence about maintenance and
              publishing outcomes.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
