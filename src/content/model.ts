import type {
  ContentStatus,
  ContentType,
  ContentVisibility,
} from "./types";

export interface EffortRecord {
  id: string;
  title: string;
  summary: string;
  client?: string;
  timeframe?: string;
  governance?: string[];
  contentEntryIds: string[];
  tags: string[];
}

export type RelationshipType =
  | "same-effort"
  | "demonstrates"
  | "explains"
  | "implements"
  | "related";

export interface ContentRelationship {
  fromEntryId: string;
  toEntryId: string;
  type: RelationshipType;
  label?: string;
}

export interface KnowledgeRecord {
  id: string;
  slug: string;
  title: string;
  summary: string;
  type: Extract<ContentType, "guidance" | "resource">;
  status: ContentStatus;
  visibility: ContentVisibility;
  effortId?: string;
  tags: string[];
  route?: `/${string}`;
}
