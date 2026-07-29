import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioCaseStudy } from "@/components/portfolio/portfolio-case-study";
import {
  getPortfolioItemBySlug,
  getPortfolioRouteParams,
} from "@/content/portfolio/registry";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getPortfolioRouteParams();
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getPortfolioItemBySlug(slug);
  if (!item) return {};

  return {
    title: item.study.title,
    description: item.study.cardSummary,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const item = getPortfolioItemBySlug(slug);
  if (!item) notFound();

  return <PortfolioCaseStudy study={item.study} />;
}
