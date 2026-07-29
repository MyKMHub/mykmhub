import type { Metadata } from "next";
import { PortfolioCaseStudy } from "@/components/portfolio/portfolio-case-study";
import { DOJ_ACCESSIBILITY_REDESIGN_CASE_STUDY as study } from "@/content/portfolio/doj-accessibility-redesign";

export const metadata: Metadata = {
  title: study.title,
  description: study.cardSummary,
};

export default function DojAccessibilityRedesignCaseStudyPage() {
  return <PortfolioCaseStudy study={study} />;
}
