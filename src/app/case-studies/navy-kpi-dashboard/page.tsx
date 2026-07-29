import type { Metadata } from "next";
import { PortfolioCaseStudy } from "@/components/portfolio/portfolio-case-study";
import { NAVY_KPI_DASHBOARD_CASE_STUDY as study } from "@/content/portfolio/navy-kpi-dashboard";

export const metadata: Metadata = {
  title: study.title,
  description: study.cardSummary,
};

export default function NavyKpiDashboardPage() {
  return <PortfolioCaseStudy study={study} />;
}
