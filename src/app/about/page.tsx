import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Nathan Byrnes and the purpose, practice, and current boundaries of MyKMHub.",
};

export default function AboutPage() {
  return (
    <article className="content-page">
      <header className="page-header">
        <p className="eyebrow">About MyKMHub</p>
        <h1>Making human-centered practice easier to use and carry forward</h1>
        <p className="hero-summary">
          I&apos;m Nathan Byrnes. I built MyKMHub to connect practical tools,
          methods, evidence, and lessons from work spanning human-centered
          design, accessibility, knowledge management, and organizational
          improvement.
        </p>
      </header>

      <section aria-labelledby="purpose-heading" className="content-section">
        <div>
          <p className="eyebrow">Purpose</p>
          <h2 id="purpose-heading">A working resource, not just a portfolio</h2>
        </div>
        <div className="prose">
          <p>
            Portfolio evidence explains the context and decisions behind the
            work. Tools let people use a capability. Methods and knowledge
            preserve practices that can be applied elsewhere. MyKMHub connects
            those views while maintaining each underlying record once.
          </p>
          <p>
            The goal is to make useful HCD practice more accessible,
            traceable, reusable, and easier for teams to sustain.
          </p>
        </div>
      </section>

      <section aria-labelledby="practice-heading">
        <p className="eyebrow">Practice</p>
        <h2 id="practice-heading">What shapes the work</h2>
        <div className="design-system-grid">
          <article className="design-system-card">
            <h3>Human evidence before assumptions</h3>
            <p>
              Keep findings connected to sources, context, confidence, and
              accountable human interpretation.
            </p>
          </article>
          <article className="design-system-card">
            <h3>Accessibility in the contract</h3>
            <p>
              Treat semantic structure, keyboard operation, reflow, contrast,
              and understandable interaction as delivery requirements.
            </p>
          </article>
          <article className="design-system-card">
            <h3>Knowledge designed for continuity</h3>
            <p>
              Preserve decisions, relationships, procedures, and lessons so
              work can continue beyond one person, tool, or conversation.
            </p>
          </article>
          <article className="design-system-card">
            <h3>Automation with accountable review</h3>
            <p>
              Use AI and automation to expand capacity while keeping product
              direction, validation, ethics, and publication decisions human.
            </p>
          </article>
        </div>
      </section>

      <section aria-labelledby="explore-heading">
        <p className="eyebrow">Explore</p>
        <h2 id="explore-heading">Choose the view that fits your purpose</h2>
        <div className="related-links" aria-label="Explore MyKMHub">
          <Link href="/toolkit">Use the HCD Director Toolkit</Link>
          <Link href="/tools">Open working tools</Link>
          <Link href="/portfolio">Review portfolio evidence</Link>
          <Link href="/knowledge">Read practice notes</Link>
          <Link href="/design-system">Inspect the Design System</Link>
        </div>
      </section>

      <aside className="status-note" aria-labelledby="boundary-heading">
        <p className="eyebrow">Current boundary</p>
        <h2 id="boundary-heading">Public foundation, deliberately evolving</h2>
        <p>
          MyKMHub currently publishes a public toolkit, portfolio, working
          applications, knowledge, and a live design system. Private knowledge
          workspaces, a structured Career Archive, and administrative
          publishing or recovery interfaces remain future capabilities that
          require authentication and appropriate data controls.
        </p>
        <Link
          className="primary-link"
          href="/knowledge/building-mykmhub-ai-assisted-development"
        >
          Read how MyKMHub is being built
        </Link>
      </aside>
    </article>
  );
}
