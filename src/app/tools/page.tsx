import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedEntryBySlug } from "@/content/registry";

export const metadata: Metadata = {
  title: "Tools Library",
  description:
    "Practical tools for evidence-based human-centered design, accessibility, knowledge management, and organizational improvement.",
};

export default function ToolsPage() {
  const tool = getPublishedEntryBySlug("evidence-traceability-matrix-builder");

  return (
    <article className="content-page">
      <header className="page-header">
        <p className="eyebrow">Tools Library</p>
        <h1>Use the methods, not just the language</h1>
        <p className="hero-summary">
          MyKMHub tools turn reusable practices into accessible workflows. New
          tools appear here only when they are ready to do useful work.
        </p>
      </header>

      {tool && (
        <section aria-labelledby="available-tool-heading" className="tool-card">
          <div>
            <p className="eyebrow">Available now</p>
            <h2 id="available-tool-heading">{tool.title}</h2>
            <p>{tool.summary}</p>
            <ul className="tag-list" aria-label="Tool characteristics">
              <li>Runs in your browser</li>
              <li>No account required</li>
              <li>Accessible CSV export</li>
            </ul>
          </div>
          <Link className="primary-link" href={tool.route ?? "/"}>
            Open the tool
          </Link>
        </section>
      )}
    </article>
  );
}
