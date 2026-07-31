import type { MetadataRoute } from "next";
import { PUBLISHED_CONTENT } from "@/content/registry";
import { SITE_URL } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return PUBLISHED_CONTENT.flatMap((entry) =>
    entry.route ? [{ url: new URL(entry.route, SITE_URL).toString() }] : [],
  );
}
