import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SCALING_HCD_THROUGH_AI as study } from "@/content/portfolio/scaling-hcd-through-ai";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Case studies showing how human-centered design, accessibility, systems thinking, and design operations create measurable impact.",
};

export default function PortfolioPage() {
  const cover = study.figures[1];

  return (
    <article className="content-page">
      <header className="page-header">
        <p className="eyebrow">Portfolio</p>
        <h1>Design leadership demonstrated through outcomes</h1>
        <p className="hero-summary">
          Case studies connect context, evidence, decisions, deliverables, and
          measurable impact. New work appears here only when its complete story
          is ready to publish.
        </p>
      </header>

      <section className="portfolio-card" aria-labelledby="hcd-velocity-title">
        <Link href="/case-studies/scaling-hcd-through-ai" tabIndex={-1} aria-hidden="true">
          <Image
            src={cover.src}
            width={cover.width}
            height={cover.height}
            alt=""
            sizes="(max-width: 768px) 100vw, 520px"
          />
        </Link>
        <div>
          <p className="eyebrow">{study.client} · {study.year}</p>
          <h2 id="hcd-velocity-title">{study.title}</h2>
          <p>{study.cardSummary}</p>
          <Link className="primary-link" href="/case-studies/scaling-hcd-through-ai">
            Read the case study
          </Link>
        </div>
      </section>
    </article>
  );
}
