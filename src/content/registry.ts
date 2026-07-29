import { HOME_ENTRY } from "./entries/home";
import type { ContentEntry } from "./types";

export const CONTENT_REGISTRY: readonly ContentEntry[] = [HOME_ENTRY];

export const PUBLISHED_CONTENT = CONTENT_REGISTRY.filter(
  (entry) => entry.status === "published" && entry.visibility === "public",
);

export function getPublishedEntryBySlug(slug: string) {
  return PUBLISHED_CONTENT.find((entry) => entry.slug === slug);
}
