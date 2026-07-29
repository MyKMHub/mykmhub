import type { ContentStatus, ContentVisibility } from "../types";

export type ToolOperationalStatus =
  | "working"
  | "limited"
  | "temporarily-unavailable"
  | "proof-of-concept"
  | "draft"
  | "archived";

export interface ToolVersionNote {
  version: string;
  date: string;
  notes: string[];
}

export interface ToolRecord {
  id: string;
  slug: string;
  title: string;
  briefDescription: string;
  description: string;
  context: string;
  route: `/${string}`;
  contentStatus: ContentStatus;
  visibility: ContentVisibility;
  operationalStatus: ToolOperationalStatus;
  statusLabel: string;
  statusNote: string;
  lastVerified: string;
  accessibilityNotes: string[];
  privacyNotes?: string[];
  relatedPortfolioRoutes?: `/${string}`[];
  effortId?: string;
  versionNotes: ToolVersionNote[];
}
