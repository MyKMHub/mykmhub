import type { Metadata } from "next";
import { PortfolioCaseStudy } from "@/components/portfolio/portfolio-case-study";
import { PERSONAL_KNOWLEDGE_SYSTEM_CASE_STUDY as study } from "@/content/portfolio/personal-knowledge-system";

export const metadata: Metadata = {
  title: study.title,
  description: study.cardSummary,
};

export default function PersonalKnowledgeManagementSystemPage() {
  return <PortfolioCaseStudy study={study} />;
}
