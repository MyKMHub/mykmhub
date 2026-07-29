import type { Metadata } from "next";
import Link from "next/link";
import { PUBLISHED_CONTENT } from "@/content/registry";

export const metadata: Metadata = {
  title: "Knowledge",
  description:
    "Practice notes, lessons learned, and guidance for accessible human-centered work.",
};

export default function KnowledgePage() {
  const entries = PUBLISHED_CONTENT.filter(
    (entry) =>
      entry.type === "guidance" &&
      entry.route?.startsWith("/knowledge/"),
  );

  return (
    <article className="content-page">
      <header className="page-header">
        <p className="eyebrow">Knowledge</p>
        <h1>Practice notes and lessons learned</h1>
        <p className="hero-summary">
          Connected guidance drawn from building, evaluating, and operating
          accessible human-centered systems.
        </p>
      </header>

      <section aria-labelledby="knowledge-heading">
        <h2 id="knowledge-heading">Published knowledge</h2>
        <div className="design-system-grid">
          {entries.map((entry) => (
            <article className="design-system-card" key={entry.id}>
              <p className="eyebrow">Practice note</p>
              <h3>{entry.title}</h3>
              <p>{entry.summary}</p>
              {entry.route ? (
                <Link className="primary-link" href={entry.route}>
                  Read the practice note
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}
