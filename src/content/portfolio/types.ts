import type { ContentStatus, ContentVisibility } from "../types";

export interface PortfolioFigure {
  id: string;
  src: string;
  width: number;
  height: number;
  title: string;
  caption: string;
  alt: string;
  presentation?: "wide" | "portrait";
}

export type PortfolioBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: Array<{ label?: string; text: string }> }
  | { type: "figure"; figureId: string }
  | {
      type: "metrics";
      items: Array<{ value: string; description: string }>;
    };

export interface PortfolioSection {
  id: string;
  label: string;
  title: string;
  blocks: PortfolioBlock[];
}

export interface PortfolioApplication {
  kind: "internal" | "external";
  label: string;
  href: `/${string}` | `https://${string}`;
  accessibilityNotes?: string;
}

export interface PortfolioCaseStudy {
  slug: string;
  title: string;
  cardSummary: string;
  client: string;
  year: string;
  role: string;
  collaboration: string;
  governance: string;
  status: ContentStatus;
  visibility: ContentVisibility;
  tags: string[];
  figures: PortfolioFigure[];
  sections: PortfolioSection[];
  application?: PortfolioApplication;
}
