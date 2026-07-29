import type { ContentEntry } from "../types";

export const ACCESSIBLE_FORM_GENERATOR_TOOL_ENTRY = {
  id: "tool-accessible-form-generator",
  slug: "accessible-form-requirements-generator",
  title: "Accessible Form Component & UX Requirements Generator",
  summary:
    "Configure a form pattern, preview it, and generate aligned UX, accessibility, development, testing, and semantic HTML guidance.",
  type: "tool",
  domains: ["accessibility", "human-centered-design", "design-systems"],
  tags: ["forms", "requirements", "working-beta"],
  status: "published",
  visibility: "public",
  route: "/tools/accessible-form-requirements-generator",
  effortId: "effort-accessible-form-generator",
  relatedEntryIds: ["case-study-accessible-form-generator"],
} satisfies ContentEntry;
