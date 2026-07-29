import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPortfolioItems } from "@/content/portfolio/registry";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Case studies showing how human-centered design, accessibility, systems thinking, and design operations create measurable impact.",
};

export default function PortfolioPage() {
  const portfolioItems = getPortfolioItems();

  return (
    <article className="content-page">
      <header className="page-header">
        <p className="eyebrow">Portfolio</p>
        <h1>Design leadership demonstrated through outcomes</h1>
        <p className="hero-summary">
          Case studies connect context, evidence, decisions, deliverables, and
          measurable impact. Multiple perspectives may document different
          lessons from the same underlying effort.
        </p>
      </header>

      <div className="portfolio-list">
        {portfolioItems.map(({ study, route, cover }) => (
          <section
            className={`portfolio-card${cover ? "" : " portfolio-card-text"}`}
            aria-labelledby={`${study.slug}-title`}
            key={study.id}
          >
            {cover && (
              <Link href={route} tabIndex={-1} aria-hidden="true">
                <Image
                  src={cover.src}
                  width={cover.width}
                  height={cover.height}
                  alt=""
                  sizes="(max-width: 768px) 100vw, 520px"
                />
              </Link>
            )}
            <div>
              <p className="eyebrow">
                {study.client} · {study.year}
              </p>
              <h2 id={`${study.slug}-title`}>{study.title}</h2>
              <p>{study.cardSummary}</p>
              <Link className="primary-link" href={route}>
                Read the case study
              </Link>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
