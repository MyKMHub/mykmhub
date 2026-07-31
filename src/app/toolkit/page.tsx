import type { Metadata } from "next";
import Link from "next/link";
import { ContentDiscovery } from "@/components/content-discovery";
import { PUBLISHED_CONTENT } from "@/content/registry";

export const metadata: Metadata = {
  title: "HCD Director Toolkit",
  description:
    "Connected methods, tools, guidance, and evidence for leading accessible human-centered work.",
};

const pathways = [
  {
    title: "Frame and govern the work",
    summary:
      "Set the operating context, preserve accountability, and keep research, accessibility, privacy, and delivery decisions visible.",
    links: [
      {
        label: "Establish an HCD operating model baseline",
        href: "/frameworks/hcd-operating-model-baseline",
      },
      {
        label: "Copy the minimum HCD operating agreement",
        href: "/templates/hcd-operating-agreement",
      },
      {
        label: "Use the engagement intake and triage pattern",
        href: "/patterns/hcd-engagement-intake-triage",
      },
      {
        label: "Establish an accessibility governance baseline",
        href: "/frameworks/accessibility-governance-baseline",
      },
      {
        label: "Use the evidence-first synthesis method",
        href: "/methods/evidence-first-synthesis",
      },
      {
        label: "Review AI-assisted development guardrails",
        href: "/knowledge/building-mykmhub-ai-assisted-development",
      },
    ],
  },
  {
    title: "Turn evidence into shared understanding",
    summary:
      "Connect source material, observations, interpretations, confidence, process context, and decisions without obscuring evidence gaps.",
    links: [
      {
        label: "Explore the evidence log concept",
        href: "/tools/evidence-traceability-matrix-builder",
      },
      {
        label: "See evidence-traceable automation in practice",
        href: "/case-studies/scaling-hcd-through-ai",
      },
      {
        label: "Copy the HCD decision and evidence record",
        href: "/templates/hcd-decision-evidence-record",
      },
    ],
  },
  {
    title: "Build accessible delivery patterns",
    summary:
      "Translate requirements into reusable interfaces and testable acceptance criteria while keeping accessibility in the implementation contract.",
    links: [
      {
        label: "Open the accessible form generator",
        href: "/tools/accessible-form-requirements-generator",
      },
      {
        label: "Inspect the live Design System",
        href: "/design-system",
      },
      {
        label: "Use HCD delivery checkpoints",
        href: "/patterns/hcd-delivery-checkpoints",
      },
    ],
  },
  {
    title: "Communicate outcomes and lessons",
    summary:
      "Use case-study evidence to explain decisions, delivery tradeoffs, organizational impact, and what should change next.",
    links: [
      { label: "Browse portfolio evidence", href: "/portfolio" },
      { label: "Read connected practice notes", href: "/knowledge" },
      {
        label: "Plan outcome measurement and learning",
        href: "/templates/hcd-outcome-measurement-plan",
      },
    ],
  },
] as const;

export default function HcdDirectorToolkitPage() {
  const discoveryEntries = PUBLISHED_CONTENT.filter(
    (entry) => entry.type !== "landing-page" && entry.route,
  ).map((entry) => ({
    id: entry.id,
    title: entry.title,
    summary: entry.summary,
    type: entry.type,
    domains: entry.domains,
    tags: entry.tags,
    route: entry.route!,
  }));

  return (
    <article className="content-page">
      <header className="page-header">
        <p className="eyebrow">HCD Director Toolkit</p>
        <h1>Lead the system around human-centered work</h1>
        <p className="hero-summary">
          A practical view across MyKMHub for framing work, connecting evidence,
          building accessible delivery patterns, and communicating outcomes.
        </p>
      </header>

      <section aria-labelledby="pathways-heading">
        <p className="eyebrow">Leadership pathways</p>
        <h2 id="pathways-heading">Start with the work you need to move forward</h2>
        <div className="design-system-grid">
          {pathways.map((pathway) => (
            <article className="design-system-card" key={pathway.title}>
              <h3>{pathway.title}</h3>
              <p>{pathway.summary}</p>
              <ul>
                {pathway.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="browse-heading">
        <div className="section-heading">
          <p className="eyebrow">Browse the system</p>
          <h2 id="browse-heading">Find a resource by need or context</h2>
          <p>
            Search the shared MyKMHub registry or narrow it by content type and
            practice context.
          </p>
        </div>
        <ContentDiscovery entries={discoveryEntries} />
      </section>

      <aside className="status-note" aria-labelledby="toolkit-model-heading">
        <p className="eyebrow">How this toolkit works</p>
        <h2 id="toolkit-model-heading">One resource, multiple useful contexts</h2>
        <p>
          The toolkit is a curated view over shared MyKMHub records. Methods,
          tools, guidance, and case studies remain distinct and are maintained
          once, while their relationships make them discoverable here.
        </p>
      </aside>
    </article>
  );
}
