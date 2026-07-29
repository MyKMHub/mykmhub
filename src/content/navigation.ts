import { PUBLISHED_CONTENT } from "./registry";

export interface NavigationItem {
  label: string;
  href: `/${string}` | "/";
}

const NAVIGATION_LABELS: Readonly<Record<string, string>> = {
  home: "Home",
  tools: "Tools",
  portfolio: "Portfolio",
  "design-system": "Design System",
  knowledge: "Knowledge",
  "hcd-director-toolkit": "Toolkit",
};

export const PRIMARY_NAVIGATION: readonly NavigationItem[] = PUBLISHED_CONTENT.flatMap(
  (entry) =>
    entry.route && NAVIGATION_LABELS[entry.slug]
      ? [{ label: NAVIGATION_LABELS[entry.slug], href: entry.route }]
      : [],
);
