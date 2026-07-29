import type { Metadata } from "next";
import { PortfolioCaseStudy } from "@/components/portfolio/portfolio-case-study";
import { ACCESSIBLE_FORM_GENERATOR_CASE_STUDY as study } from "@/content/portfolio/accessible-form-generator";

export const metadata: Metadata = {
  title: study.title,
  description: study.cardSummary,
};

export default function AccessibleFormGeneratorCaseStudyPage() {
  return <PortfolioCaseStudy study={study} />;
}
