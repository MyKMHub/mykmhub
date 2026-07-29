import type { Metadata } from "next";
import { PUBLISHED_CONTENT } from "@/content/registry";

export const metadata: Metadata = {
  title: "A practical HCD Director toolkit",
};

export default function Home() {
  const home = PUBLISHED_CONTENT.find((entry) => entry.slug === "home");

  return (
    <article className="home">
      <header className="hero">
        <p className="eyebrow">HCD Director toolkit and knowledge hub</p>
        <h1>{home?.title ?? "Lead human-centered work with practical resources"}</h1>
        <p className="hero-summary">
          {home?.summary ??
            "MyKMHub brings together tools, methods, patterns, and guidance for leading accessible, human-centered work."}
        </p>
      </header>

      <section aria-labelledby="intersection-heading" className="content-section">
        <div>
          <p className="eyebrow">One connected practice</p>
          <h2 id="intersection-heading">Built around the work, not separate silos</h2>
        </div>
        <p>
          Human-centered design, knowledge management, accessibility, AI,
          automation, and process improvement often contribute to the same
          outcome. MyKMHub will maintain resources once and surface them in the
          contexts where they help.
        </p>
      </section>

      <section aria-labelledby="foundation-heading" className="principles">
        <div className="section-heading">
          <p className="eyebrow">Foundation</p>
          <h2 id="foundation-heading">Useful by design</h2>
        </div>
        <div className="principle-grid">
          <article>
            <h3>Accessibility first</h3>
            <p>
              WCAG 2.2 AA is the baseline, supported by semantic structure,
              keyboard access, responsive behavior, and user preferences.
            </p>
          </article>
          <article>
            <h3>Spectrum first</h3>
            <p>
              Adobe Spectrum 2 handles established interface patterns so effort
              can stay focused on user needs, workflows, and outcomes.
            </p>
          </article>
          <article>
            <h3>Connected content</h3>
            <p>
              Tools, methods, guidance, resources, and case studies will connect
              through shared metadata instead of being copied across sections.
            </p>
          </article>
        </div>
      </section>

      <aside className="status-note" aria-labelledby="status-heading">
        <h2 id="status-heading">The foundation is being built</h2>
        <p>
          This first release establishes the accessible site shell and scalable
          content architecture. New areas will appear only when they contain
          something useful.
        </p>
      </aside>
    </article>
  );
}
