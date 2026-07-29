import type { Metadata } from "next";
import { PortfolioCaseStudy } from "@/components/portfolio/portfolio-case-study";
import { MARCH_FOR_SCIENCE_REDESIGN_CASE_STUDY as study } from "@/content/portfolio/march-for-science-redesign";

export const metadata: Metadata = {
  title: study.title,
  description: study.cardSummary,
};

export default function MarchForScienceSiteRedesignPage() {
  return <PortfolioCaseStudy study={study} />;
}
