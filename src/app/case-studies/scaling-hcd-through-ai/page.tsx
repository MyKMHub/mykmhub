import type { Metadata } from "next";
import { PortfolioCaseStudy } from "@/components/portfolio/portfolio-case-study";
import { SCALING_HCD_THROUGH_AI as study } from "@/content/portfolio/scaling-hcd-through-ai";

export const metadata: Metadata = {
  title: study.title,
  description: study.cardSummary,
};

export default function HcdVelocityCaseStudyPage() {
  return <PortfolioCaseStudy study={study} />;
}
