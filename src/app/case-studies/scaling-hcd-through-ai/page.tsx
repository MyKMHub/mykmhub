import type { Metadata } from "next";
import Image from "next/image";
import { SCALING_HCD_THROUGH_AI as study } from "@/content/portfolio/scaling-hcd-through-ai";
import type { PortfolioBlock } from "@/content/portfolio/types";

export const metadata: Metadata = {
  title: study.title,
  description: study.cardSummary,
};

function ContentBlock({ block }: { block: PortfolioBlock }) {
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
    <figure className={figure.presentation === "portrait" ? "portrait-figure" : undefined}>
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

export default function HcdVelocityCaseStudyPage() {
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
            <dd>OPNAVINST 1500.47D</dd>
          </div>
        </dl>
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
                <ContentBlock block={block} key={`${section.id}-${index}`} />
              ))}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
