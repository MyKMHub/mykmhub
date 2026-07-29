import type { PortfolioCaseStudy } from "./types";

export const ACCESSIBLE_FORM_GENERATOR_CASE_STUDY = {
  id: "case-study-accessible-form-generator",
  slug: "accessible-form-component-and-ux-requirements-generator",
  effortId: "effort-accessible-form-generator",
  title: "Accessible Form Component & UX Requirements Generator",
  cardSummary:
    "A working generator that aligns accessible form previews, semantic HTML, UX requirements, development guidance, and test expectations.",
  client: "U.S. Navy",
  year: "2025",
  role: "Product Design, HCD/UX, and Accessibility Lead",
  collaboration:
    "Created the interaction model, plain-language patterns, accessibility behavior, validation rules, and implementation guidance used across UX, development, and testing.",
  governance:
    "Section 508 and WCAG accessibility requirements, informed by USWDS form conventions and cross-disciplinary handoff needs.",
  status: "published",
  visibility: "public",
  tags: ["accessibility", "forms", "requirements", "design-systems", "portfolio"],
  application: {
    kind: "internal",
    label: "Open the working generator",
    href: "/tools/accessible-form-requirements-generator",
    accessibilityNotes:
      "The MyKMHub version uses Spectrum 2 configuration controls and semantic native form previews.",
  },
  figures: [
    {
      id: "generator-overview",
      src: "/portfolio/accessible-form-generator/generator-overview.png",
      width: 4479,
      height: 3988,
      title: "Accessible form generator overview",
      caption:
        "The original prototype combined component configuration, live preview, generated code, and aligned UX, development, and test guidance.",
      alt: "A multi-step form generator interface showing component options, configuration fields, a live preview, and generated implementation guidance.",
      presentation: "wide",
    },
  ],
  sections: [
    {
      id: "overview",
      label: "What I made",
      title: "One source of truth for accessible form patterns",
      blocks: [
        {
          type: "list",
          items: [
            { text: "A form-component generator with a live preview." },
            { text: "Semantic HTML output for the selected field pattern." },
            {
              text: "Concise, aligned UX, accessibility, development, and test guidance.",
            },
          ],
        },
        { type: "figure", figureId: "generator-overview" },
      ],
    },
    {
      id: "role",
      label: "My role",
      title: "Product design, content, and accessibility behavior",
      blocks: [
        {
          type: "list",
          items: [
            { text: "Led Product Design, HCD/UX, and accessibility." },
            {
              text: "Wrote plain-language patterns for labels, hints, instructions, and errors.",
            },
            {
              text: "Defined semantic markup, ARIA relationships, keyboard behavior, validation, and testing rules.",
            },
          ],
        },
      ],
    },
    {
      id: "value",
      label: "Why it helps",
      title: "Faster handoffs with fewer accessibility gaps",
      blocks: [
        {
          type: "list",
          items: [
            { text: "Faster, more consistent form design across teams." },
            {
              text: "Fewer accessibility defects involving labels, errors, hints, and focus.",
            },
            {
              text: "Clearer handoffs because UX text, development specifications, and test steps describe the same pattern.",
            },
          ],
        },
      ],
    },
    {
      id: "accessibility",
      label: "Accessibility highlights",
      title: "Accessibility behavior shared across components",
      blocks: [
        {
          type: "list",
          items: [
            {
              text: "Always-visible labels; placeholders are never used as labels.",
            },
            {
              text: "Required indicators are visually present without polluting the accessible name, while the control still announces its required state.",
            },
            {
              text: "Hint, format, and error text appears below the field and is associated programmatically.",
            },
            {
              text: "Validation occurs on submit to avoid error messages while someone is still typing.",
            },
            {
              text: "The top error summary uses the field label and links back to the invalid field.",
            },
            {
              text: "Optional detailed instructions remain user-controlled and associated with the relevant field.",
            },
            {
              text: "Multiline fields provide a live character counter without repeatedly announcing static instructions.",
            },
          ],
        },
      ],
    },
    {
      id: "results",
      label: "Results",
      title: "A shared pattern for UX, development, and testing",
      blocks: [
        {
          type: "list",
          items: [
            { text: "Teams can generate accessible field patterns in minutes." },
            {
              text: "UX, development, and testing guidance derives from the same configuration.",
            },
            {
              text: "Aligned handoffs reduce ambiguity and accessibility rework.",
            },
          ],
        },
      ],
    },
    {
      id: "next",
      label: "What’s next",
      title: "Expand and validate the pattern library",
      blocks: [
        {
          type: "list",
          items: [
            { text: "Ready-made presets such as constrained date fields." },
            { text: "Optional USWDS token and class variants." },
            { text: "Generated validator unit tests." },
            { text: "Broader assistive-technology testing notes." },
            {
              text: "Advanced scripted behavior and complete CSS/JavaScript export.",
            },
          ],
        },
      ],
    },
  ],
} satisfies PortfolioCaseStudy;
