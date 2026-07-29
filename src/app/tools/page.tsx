import type { Metadata } from "next";
import Link from "next/link";
import { TOOL_REGISTRY } from "@/content/tools/registry";

export const metadata: Metadata = {
  title: "Tools Library",
  description:
    "Practical tools and clearly identified working concepts for human-centered design, accessibility, and knowledge management.",
};

export default function ToolsPage() {
  return (
    <article className="content-page">
      <header className="page-header">
        <p className="eyebrow">Tools Library</p>
        <h1>Use the methods, not just the language</h1>
        <p className="hero-summary">
          Explore active applications and working concepts. Status, limitations,
          and the last verification date are shown so you know what to expect
          before opening a tool.
        </p>
      </header>

      <section aria-labelledby="tool-directory-heading">
        <div className="section-heading">
          <p className="eyebrow">Directory</p>
          <h2 id="tool-directory-heading">Available tools and concepts</h2>
        </div>
        <div
          className="table-scroll tool-directory"
          tabIndex={0}
          role="region"
          aria-label="Tools directory table"
        >
          <table>
            <caption>
              MyKMHub tools, their context, operational status, and verification
              date
            </caption>
            <thead>
              <tr>
                <th scope="col">Tool</th>
                <th scope="col">Context</th>
                <th scope="col">Description</th>
                <th scope="col">Status</th>
                <th scope="col">Last verified</th>
              </tr>
            </thead>
            <tbody>
              {TOOL_REGISTRY.map((tool) => (
                <tr key={tool.id}>
                  <th scope="row">
                    <Link href={tool.route}>{tool.title}</Link>
                  </th>
                  <td>{tool.context}</td>
                  <td>{tool.briefDescription}</td>
                  <td>
                    <strong>{tool.statusLabel}</strong>
                    <small>{tool.statusNote}</small>
                  </td>
                  <td>
                    <time dateTime={tool.lastVerified}>
                      {new Intl.DateTimeFormat("en-US", {
                        dateStyle: "medium",
                        timeZone: "UTC",
                      }).format(new Date(tool.lastVerified))}
                    </time>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </article>
  );
}
