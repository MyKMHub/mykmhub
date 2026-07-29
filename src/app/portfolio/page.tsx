import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SCALING_AUTOMATED_HCD_NAVY_HR } from "@/content/portfolio/scaling-automated-hcd-navy-hr";
import { SCALING_HCD_THROUGH_AI } from "@/content/portfolio/scaling-hcd-through-ai";
import { ACCESSIBLE_FORM_GENERATOR_CASE_STUDY } from "@/content/portfolio/accessible-form-generator";
import { AI_IMAGE_PROMPT_WIZARD_CASE_STUDY } from "@/content/portfolio/ai-image-prompt-wizard";
import { DOJ_ACCESSIBILITY_REDESIGN_CASE_STUDY } from "@/content/portfolio/doj-accessibility-redesign";
import { MARCH_FOR_SCIENCE_REDESIGN_CASE_STUDY } from "@/content/portfolio/march-for-science-redesign";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Case studies showing how human-centered design, accessibility, systems thinking, and design operations create measurable impact.",
};

const PORTFOLIO_ITEMS = [
  {
    study: MARCH_FOR_SCIENCE_REDESIGN_CASE_STUDY,
    href: "/case-studies/march-for-science-site-redesign",
    cover: MARCH_FOR_SCIENCE_REDESIGN_CASE_STUDY.figures[0],
  },
  {
    study: DOJ_ACCESSIBILITY_REDESIGN_CASE_STUDY,
    href: "/case-studies/doj-site-redesign-accessibility-usability",
    cover: DOJ_ACCESSIBILITY_REDESIGN_CASE_STUDY.figures[1],
  },
  {
    study: AI_IMAGE_PROMPT_WIZARD_CASE_STUDY,
    href: "/case-studies/ai-image-creation-wizard",
    cover: undefined,
  },
  {
    study: ACCESSIBLE_FORM_GENERATOR_CASE_STUDY,
    href:
      "/case-studies/accessible-form-component-and-ux-requirements-generator",
    cover: ACCESSIBLE_FORM_GENERATOR_CASE_STUDY.figures[0],
  },
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
            className={`portfolio-card${cover ? "" : " portfolio-card-text"}`}
            aria-labelledby={`${study.slug}-title`}
            key={study.id}
          >
            {cover && (
              <Link href={href} tabIndex={-1} aria-hidden="true">
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
