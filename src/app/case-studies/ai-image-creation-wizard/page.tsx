import type { Metadata } from "next";
import { PortfolioCaseStudy } from "@/components/portfolio/portfolio-case-study";
import { AI_IMAGE_PROMPT_WIZARD_CASE_STUDY as study } from "@/content/portfolio/ai-image-prompt-wizard";

export const metadata: Metadata = {
  title: study.title,
  description: study.cardSummary,
};

export default function AiImagePromptWizardCaseStudyPage() {
  return <PortfolioCaseStudy study={study} />;
}
