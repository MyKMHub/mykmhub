import { PUBLISHED_CONTENT } from "./registry";
import { CONTENT_RELATIONSHIPS } from "./relationships";
import type { RelationshipType } from "./model";
import type { ContentEntry } from "./types";

export interface RelatedContentItem {
  entry: ContentEntry & { route: `/${string}` | "/" };
  relationshipType: RelationshipType;
  relationshipLabel: string;
}

export function getRelatedPublishedContent(
  entryId: string,
): RelatedContentItem[] {
  const entriesById = new Map(
    PUBLISHED_CONTENT.filter((entry) => entry.route).map((entry) => [
      entry.id,
      entry as ContentEntry & { route: `/${string}` | "/" },
    ]),
  );
  const related = new Map<string, RelatedContentItem>();

  for (const relationship of CONTENT_RELATIONSHIPS) {
    if (
      relationship.fromEntryId !== entryId &&
      relationship.toEntryId !== entryId
    ) {
      continue;
    }

    const relatedId =
      relationship.fromEntryId === entryId
        ? relationship.toEntryId
        : relationship.fromEntryId;
    const entry = entriesById.get(relatedId);

    if (entry) {
      related.set(relatedId, {
        entry,
        relationshipType: relationship.type,
        relationshipLabel: relationship.label ?? "Related resource",
      });
    }
  }

  const currentEntry = entriesById.get(entryId);
  for (const relatedId of currentEntry?.relatedEntryIds ?? []) {
    if (related.has(relatedId)) continue;

    const entry = entriesById.get(relatedId);
    if (entry) {
      related.set(relatedId, {
        entry,
        relationshipType: "related",
        relationshipLabel: "Related resource",
      });
    }
  }

  return [...related.values()];
}
