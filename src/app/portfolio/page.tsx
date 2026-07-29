import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SCALING_AUTOMATED_HCD_NAVY_HR } from "@/content/portfolio/scaling-automated-hcd-navy-hr";
import { SCALING_HCD_THROUGH_AI } from "@/content/portfolio/scaling-hcd-through-ai";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Case studies showing how human-centered design, accessibility, systems thinking, and design operations create measurable impact.",
};

const PORTFOLIO_ITEMS = [
  {
    study: SCALING_AUTOMATED_HCD_NAVY_HR,
    href: "/case-studies/scaling-automated-hcd-in-navy-hr-modernization",
    cover: SCALING_AUTOMATED_HCD_NAVY_HR.figures[0],
  },
  {
    study: SCALING_HCD_THROUGH_AI,
    href: "/case-studies/scaling-hcd-through-ai",
    cover: SCALING_HCD_THROUGH_AI.figures[1],
  },
] as const;

export default function PortfolioPage() {
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
        {PORTFOLIO_ITEMS.map(({ study, href, cover }) => (
          <section
            className="portfolio-card"
            aria-labelledby={`${study.slug}-title`}
            key={study.id}
          >
            <Link href={href} tabIndex={-1} aria-hidden="true">
              <Image
                src={cover.src}
                width={cover.width}
                height={cover.height}
                alt=""
                sizes="(max-width: 768px) 100vw, 520px"
              />
            </Link>
            <div>
              <p className="eyebrow">
                {study.client} · {study.year}
              </p>
              <h2 id={`${study.slug}-title`}>{study.title}</h2>
              <p>{study.cardSummary}</p>
              <Link className="primary-link" href={href}>
                Read the case study
              </Link>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
