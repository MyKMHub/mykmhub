import type { Metadata } from "next";
import { PortfolioCaseStudy } from "@/components/portfolio/portfolio-case-study";
import { SCALING_AUTOMATED_HCD_NAVY_HR as study } from "@/content/portfolio/scaling-automated-hcd-navy-hr";

export const metadata: Metadata = {
  title: study.title,
  description: study.cardSummary,
};

export default function NavyHrAutomatedHcdCaseStudyPage() {
  return <PortfolioCaseStudy study={study} />;
}
