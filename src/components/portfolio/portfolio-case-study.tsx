import Image from "next/image";
import Link from "next/link";
import { getEffortById } from "@/content/efforts/registry";
import type {
  PortfolioBlock,
  PortfolioCaseStudy as PortfolioCaseStudyRecord,
} from "@/content/portfolio/types";

function ContentBlock({
  block,
  study,
}: {
  block: PortfolioBlock;
  study: PortfolioCaseStudyRecord;
}) {
  if (block.type === "paragraph") {
    return <p>{block.text}</p>;
  }

  if (block.type === "list") {
    return (
      <ul>
        {block.items.map((item) => (
          <li key={`${item.label}-${item.text}`}>
            {item.label && <strong>{item.label}: </strong>}
            {item.text}
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "metrics") {
    return (
      <dl className="impact-list">
        {block.items.map((item) => (
          <div key={item.value}>
            <dt>{item.value}</dt>
            <dd>{item.description}</dd>
          </div>
        ))}
      </dl>
    );
  }

  const figure = study.figures.find((item) => item.id === block.figureId);
  if (!figure) return null;

  return (
    <figure
      className={
        figure.presentation === "portrait" ? "portrait-figure" : undefined
      }
    >
      <a href={figure.src}>
        <Image
          src={figure.src}
          width={figure.width}
          height={figure.height}
          alt={figure.alt}
          sizes="(max-width: 768px) 100vw, 760px"
        />
      </a>
      <figcaption>
        <strong>{figure.title}.</strong> {figure.caption} Activate the image to
        view it at full size.
      </figcaption>
    </figure>
  );
}

export function PortfolioCaseStudy({
  study,
}: {
  study: PortfolioCaseStudyRecord;
}) {
  const effort = study.effortId ? getEffortById(study.effortId) : undefined;

  return (
    <article className="content-page case-study">
      <header className="page-header">
        <p className="eyebrow">Case study · {study.year}</p>
        <h1>{study.title}</h1>
        <p className="hero-summary">{study.cardSummary}</p>
        <dl className="project-facts">
          <div>
            <dt>Client</dt>
            <dd>{study.client}</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>{study.role}</dd>
          </div>
          <div>
            <dt>Governance</dt>
            <dd>{study.governance.split(".")[0]}</dd>
          </div>
        </dl>
        {effort && (
          <aside className="effort-context" aria-labelledby="effort-heading">
            <div>
              <p className="eyebrow">Part of a larger effort</p>
              <h2 id="effort-heading">{effort.title}</h2>
              <p>{effort.summary}</p>
            </div>
            <div className="related-links" aria-label="Related effort content">
              <Link href="/methods/evidence-first-synthesis">
                Read the synthesis method
              </Link>
              <Link href="/tools/evidence-traceability-matrix-builder">
                Explore the evidence-log concept
              </Link>
            </div>
          </aside>
        )}
      </header>

      <div className="case-study-layout">
        <nav className="on-this-page" aria-label="On this page">
          <h2>On this page</h2>
          <ol>
            {study.sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="prose">
          {study.sections.map((section) => (
            <section
              id={section.id}
              aria-labelledby={`${section.id}-heading`}
              key={section.id}
            >
              <p className="eyebrow">{section.label}</p>
              <h2 id={`${section.id}-heading`}>{section.title}</h2>
              {section.blocks.map((block, index) => (
                <ContentBlock
                  block={block}
                  key={`${section.id}-${index}`}
                  study={study}
                />
              ))}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
