import { ACCESSIBLE_FORM_GENERATOR_CASE_STUDY } from "./accessible-form-generator";
import { AI_IMAGE_PROMPT_WIZARD_CASE_STUDY } from "./ai-image-prompt-wizard";
import { DOJ_ACCESSIBILITY_REDESIGN_CASE_STUDY } from "./doj-accessibility-redesign";
import { MARCH_FOR_SCIENCE_REDESIGN_CASE_STUDY } from "./march-for-science-redesign";
import { NAVY_KPI_DASHBOARD_CASE_STUDY } from "./navy-kpi-dashboard";
import { PERSONAL_KNOWLEDGE_SYSTEM_CASE_STUDY } from "./personal-knowledge-system";
import { SCALING_AUTOMATED_HCD_NAVY_HR } from "./scaling-automated-hcd-navy-hr";
import { SCALING_HCD_THROUGH_AI } from "./scaling-hcd-through-ai";
import type { PortfolioCaseStudy } from "./types";

export interface PortfolioRegistryItem {
  study: PortfolioCaseStudy;
  route: `/case-studies/${string}`;
  coverFigureId?: string;
}

const PORTFOLIO_REGISTRY: PortfolioRegistryItem[] = [
  {
    study: PERSONAL_KNOWLEDGE_SYSTEM_CASE_STUDY,
    route: "/case-studies/personal-knowledge-management-system",
    coverFigureId: PERSONAL_KNOWLEDGE_SYSTEM_CASE_STUDY.figures[2].id,
  },
  {
    study: NAVY_KPI_DASHBOARD_CASE_STUDY,
    route: "/case-studies/navy-kpi-dashboard",
    coverFigureId: NAVY_KPI_DASHBOARD_CASE_STUDY.figures[0].id,
  },
  {
    study: MARCH_FOR_SCIENCE_REDESIGN_CASE_STUDY,
    route: "/case-studies/march-for-science-site-redesign",
    coverFigureId: MARCH_FOR_SCIENCE_REDESIGN_CASE_STUDY.figures[0].id,
  },
  {
    study: DOJ_ACCESSIBILITY_REDESIGN_CASE_STUDY,
    route: "/case-studies/doj-site-redesign-accessibility-usability",
    coverFigureId: DOJ_ACCESSIBILITY_REDESIGN_CASE_STUDY.figures[1].id,
  },
  {
    study: AI_IMAGE_PROMPT_WIZARD_CASE_STUDY,
    route: "/case-studies/ai-image-creation-wizard",
  },
  {
    study: ACCESSIBLE_FORM_GENERATOR_CASE_STUDY,
    route:
      "/case-studies/accessible-form-component-and-ux-requirements-generator",
    coverFigureId: ACCESSIBLE_FORM_GENERATOR_CASE_STUDY.figures[0].id,
  },
  {
    study: SCALING_AUTOMATED_HCD_NAVY_HR,
    route: "/case-studies/scaling-automated-hcd-in-navy-hr-modernization",
    coverFigureId: SCALING_AUTOMATED_HCD_NAVY_HR.figures[0].id,
  },
  {
    study: SCALING_HCD_THROUGH_AI,
    route: "/case-studies/scaling-hcd-through-ai",
    coverFigureId: SCALING_HCD_THROUGH_AI.figures[1].id,
  },
];

function mostRecentYear(year: string) {
  const years = year.match(/\d{4}/g)?.map(Number) ?? [0];
  return Math.max(...years);
}

export function getPortfolioItems() {
  return [...PORTFOLIO_REGISTRY]
    .filter(
      ({ study }) =>
        study.status === "published" && study.visibility === "public",
    )
    .sort(
      (a, b) =>
        mostRecentYear(b.study.year) - mostRecentYear(a.study.year),
    )
    .map((item) => ({
      ...item,
      cover: item.coverFigureId
        ? item.study.figures.find((figure) => figure.id === item.coverFigureId)
        : undefined,
    }));
}

export function getPortfolioItemByRoute(route: string) {
  return PORTFOLIO_REGISTRY.find((item) => item.route === route);
}
