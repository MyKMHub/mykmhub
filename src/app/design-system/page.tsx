import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Design System",
  description:
    "MyKMHub foundations, components, patterns, accessibility standards, and experimental theme workspace.",
};

const SECTIONS = [
  {
    title: "Foundations",
    description:
      "Color, typography, spacing, focus, shape, elevation, and motion decisions that support the interface.",
  },
  {
    title: "Components",
    description:
      "Spectrum 2 controls and MyKMHub presentation components, including their states and accessibility requirements.",
  },
  {
    title: "Patterns",
    description:
      "Approved compositions for Tool headers, case studies, forms, tables, feedback, and application states.",
  },
  {
    title: "Accessibility",
    description:
      "Validated reading preferences, focus visibility, contrast, reflow, motion, semantics, and interaction guidance.",
  },
] as const;

export default function DesignSystemPage() {
  return (
    <article className="content-page design-system-page">
      <header className="page-header">
        <p className="eyebrow">Design system</p>
        <h1>One place for approved interface decisions</h1>
        <p className="hero-summary">
          MyKMHub uses Spectrum 2 as its component foundation and documents the
          smaller set of product-level decisions needed for consistent,
          accessible content and tools.
        </p>
      </header>

      <section aria-labelledby="system-sections-heading">
        <h2 id="system-sections-heading">System sections</h2>
        <div className="design-system-grid">
          {SECTIONS.map((section) => (
            <article className="design-system-card" key={section.title}>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
              <p className="field-description">
                Documentation will grow as decisions are validated.
              </p>
            </article>
          ))}
        </div>
      </section>

      <aside className="theme-lab-callout" aria-labelledby="theme-lab-heading">
        <div>
          <p className="eyebrow">Experimental workspace</p>
          <h2 id="theme-lab-heading">Theme Lab</h2>
          <p>
            Adjust guarded typography, focus, spacing, and shape tokens against
            representative components. Experiments affect only the preview.
          </p>
        </div>
        <Link className="primary-link" href="/design-system/theme-lab">
          Open Theme Lab
        </Link>
      </aside>
    </article>
  );
}
