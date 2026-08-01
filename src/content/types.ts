export const CONTENT_TYPES = [
  "tool",
  "pattern",
  "method",
  "framework",
  "governance-model",
  "resource",
  "case-study",
  "template",
  "design-system-component",
  "guidance",
  "landing-page",
] as const;

export type ContentType = (typeof CONTENT_TYPES)[number];
export type ContentStatus = "draft" | "published" | "archived";
export type ContentVisibility = "public" | "private";

export interface ContentEntry {
  id: string;
  slug: string;
  title: string;
  summary: string;
  type: ContentType;
  domains: string[];
  tags: string[];
  status: ContentStatus;
  visibility: ContentVisibility;
  route?: `/${string}` | "/";
  externalUrl?: `https://${string}`;
  effortId?: string;
}
