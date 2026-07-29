import type { Metadata } from "next";
import Link from "next/link";
import { EVIDENCE_MATRIX_TOOL_ENTRY as tool } from "@/content/entries/evidence-matrix-tool";

export const metadata: Metadata = {
  title: "Tools Library",
  description:
    "Practical tools and draft concepts for evidence-based human-centered design, accessibility, knowledge management, and organizational improvement.",
};

export default function ToolsPage() {
  return (
    <article className="content-page">
      <header className="page-header">
        <p className="eyebrow">Tools Library</p>
        <h1>Use the methods, not just the language</h1>
        <p className="hero-summary">
          MyKMHub tools turn reusable practices into accessible workflows.
          Mature tools and clearly labeled draft concepts can be explored here.
        </p>
      </header>

      <section aria-labelledby="evidence-tool-heading" className="tool-card">
        <div>
          <p className="eyebrow">Draft concept · Low priority</p>
          <h2 id="evidence-tool-heading">{tool.title}</h2>
          <p>{tool.summary}</p>
          <ul className="tag-list" aria-label="Tool characteristics">
            <li>Working proof of concept</li>
            <li>Runs in your browser</li>
            <li>No account required</li>
            <li>Accessible CSV export</li>
          </ul>
        </div>
        <Link className="primary-link" href={tool.route ?? "/"}>
          Explore the draft
        </Link>
      </section>
    </article>
  );
}
