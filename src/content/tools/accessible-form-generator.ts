import type { ToolRecord } from "./types";

export const ACCESSIBLE_FORM_GENERATOR_TOOL = {
  id: "tool-accessible-form-generator",
  slug: "accessible-form-requirements-generator",
  title: "Accessible Form Component & UX Requirements Generator",
  briefDescription:
    "Configure a form pattern, preview it, and generate aligned UX, accessibility, development, testing, and semantic HTML guidance.",
  description:
    "A working beta that turns common form-component decisions into a live preview, implementation-ready guidance, and a semantic HTML starting point.",
  context: "Accessible form design, handoff, and quality assurance",
  route: "/tools/accessible-form-requirements-generator",
  contentStatus: "published",
  visibility: "public",
  operationalStatus: "limited",
  statusLabel: "Working beta",
  statusNote:
    "The core generator and 17 component patterns work. Generated guidance still requires product-specific review, and advanced scripted behaviors are not yet exported.",
  lastVerified: "2026-07-28",
  accessibilityNotes: [
    "Spectrum 2 controls are used for generator configuration.",
    "Every preview provides a visible, programmatically associated label.",
    "Required state, hints, field groups, and live counters use semantic markup.",
    "Generated guidance includes keyboard, focus, zoom, reflow, and error checks.",
  ],
  privacyNotes: [
    "The generator runs entirely in the current browser.",
    "Entered pattern text is not persisted or sent to a server.",
  ],
  relatedPortfolioRoutes: [
    "/case-studies/accessible-form-component-and-ux-requirements-generator",
  ],
  effortId: "effort-accessible-form-generator",
  versionNotes: [
    {
      version: "0.2 MyKMHub beta",
      date: "2026-07-28",
      notes: [
        "Ported the supplied prototype into React and Spectrum 2.",
        "Added 17 configurable form-component patterns.",
        "Added live semantic previews and HTML generation.",
        "Added normalized UX, accessibility, development, and test guidance.",
      ],
    },
    {
      version: "0.1 original prototype",
      date: "2025",
      notes: [
        "Established the USWDS and Section 508-aligned generator concept.",
        "Included live previews and HTML, CSS, JavaScript, and instruction exports.",
      ],
    },
  ],
} satisfies ToolRecord;
