import type { PortfolioCaseStudy } from "./types";

export const DOJ_ACCESSIBILITY_REDESIGN_CASE_STUDY = {
  id: "case-study-doj-accessibility-redesign",
  slug: "doj-site-redesign-accessibility-usability",
  effortId: "effort-doj-application-modernization",
  title: "DOJ Application Redesign for Accessibility and Usability",
  cardSummary:
    "Modernizing a decade-old application through accessibility-led research, biweekly user forums, and phased redesigns of navigation, search, and workflow.",
  client: "U.S. Department of Justice",
  year: "2021–2024",
  role: "HCD/UX and Accessibility Design Lead",
  collaboration:
    "Partnered with existing users, customer leads, visually impaired users, a business analyst, and the development lead through biweekly design forums and technical-feasibility reviews.",
  governance:
    "Section 508 accessibility requirements and an iterative, user-centered delivery approach.",
  status: "published",
  visibility: "public",
  tags: ["accessibility", "section-508", "application-modernization", "user-research"],
  figures: [
    {
      id: "header-redesign",
      src: "/portfolio/doj-accessibility-redesign/header-redesign.png",
      width: 1404,
      height: 1888,
      title: "Navigation and header redesign",
      caption:
        "The large legacy header was replaced by a compact desktop navigation bar and a responsive zoom view that exposes the same destinations in a vertical menu.",
      alt:
        "Comparison of the original large desktop header, a slimmer redesigned navigation bar with labeled icon functions, and a vertical responsive navigation view for increased zoom.",
      presentation: "portrait",
    },
    {
      id: "advanced-search-redesign",
      src: "/portfolio/doj-accessibility-redesign/advanced-search-redesign.png",
      width: 1288,
      height: 1436,
      title: "Advanced search redesign",
      caption:
        "More than 270 options moved from one dropdown into contextual groups and subgroups within a guided search workspace.",
      alt:
        "Before-and-after advanced search comparison. The original uses a single Choose One dropdown; the redesign organizes search types into tabs and grouped query controls.",
      presentation: "portrait",
    },
    {
      id: "workflow-redesign",
      src: "/portfolio/doj-accessibility-redesign/workflow-redesign.png",
      width: 925,
      height: 924,
      title: "Incident workflow redesign",
      caption:
        "The redesign replaces an unstructured cluster of action buttons with a named workflow, visible current status, staged progress, and a More Actions control.",
      alt:
        "Before-and-after incident workflow. The old interface shows disconnected colored action buttons and an isolated status label; the new interface shows a Draft-to-Closed progress sequence with a primary next action.",
      presentation: "wide",
    },
  ],
  sections: [
    {
      id: "overview",
      label: "Overview",
      title: "Modernizing a decade-old application",
      blocks: [
        {
          type: "paragraph",
          text:
            "The application had substantial usability problems and lacked Section 508 compliance and accessibility support. The redesign aimed to modernize the interface, improve the end-to-end experience, and better serve people with disabilities.",
        },
      ],
    },
    {
      id: "research",
      label: "Research and collaboration",
      title: "Keeping users in the design loop",
      blocks: [
        {
          type: "paragraph",
          text:
            "Discovery combined feedback from existing users, customer leads, and visually impaired users. Biweekly forums brought users, customers, and the business analyst together to review iterations, provide immediate feedback, and adjust the direction.",
        },
        {
          type: "paragraph",
          text:
            "Designs were also reviewed regularly with the development lead so accessibility and usability improvements remained technically feasible within the existing application.",
        },
      ],
    },
    {
      id: "delivery",
      label: "Phased implementation",
      title: "Delivering immediate improvements while planning deeper change",
      blocks: [
        {
          type: "list",
          items: [
            {
              label: "Version 1",
              text:
                "Prioritized high-impact improvements that could be implemented rapidly, moved the product away from its outdated interface, and established a more accessible front-end foundation.",
            },
            {
              label: "Version 2",
              text:
                "Reserved more complex features for a later phase informed by the first rollout and continued user input.",
            },
          ],
        },
      ],
    },
    {
      id: "navigation",
      label: "Redesign 1",
      title: "A compact, responsive navigation model",
      blocks: [
        {
          type: "paragraph",
          text:
            "The original header consumed substantial screen space and became especially cumbersome when the application appeared inside another application. The redesign consolidated navigation into a slim bar and provided a vertical alternative for increased zoom.",
        },
        { type: "figure", figureId: "header-redesign" },
      ],
    },
    {
      id: "search",
      label: "Redesign 2",
      title: "Turning 270-plus search options into contextual choices",
      blocks: [
        {
          type: "paragraph",
          text:
            "The legacy advanced search required people to build queries from a dropdown containing more than 270 options. The redesign organized those options into contextual groups and subgroups, making multiple selections and the resulting query easier to understand.",
        },
        { type: "figure", figureId: "advanced-search-redesign" },
      ],
    },
    {
      id: "workflow",
      label: "Redesign 3",
      title: "Making status, progress, and available actions understandable",
      blocks: [
        {
          type: "paragraph",
          text:
            "The original workflow obscured the current stage, possible next actions, and which roles could perform them. The redesign exposes progress through the application, identifies the current state, emphasizes the next primary action, and groups secondary actions.",
        },
        { type: "figure", figureId: "workflow-redesign" },
      ],
    },
    {
      id: "outcome",
      label: "Outcome",
      title: "A more navigable and accessible first release",
      blocks: [
        {
          type: "paragraph",
          text:
            "Version 1 received positive feedback and improved navigation, speed, usability, and access for users with disabilities. The iterative structure created a path for continued functional and accessibility improvements based on direct user engagement.",
        },
      ],
    },
    {
      id: "reflection",
      label: "Why it matters",
      title: "Inclusive participation changed the product",
      blocks: [
        {
          type: "paragraph",
          text:
            "The work demonstrates how accessibility becomes stronger when it is treated as a design input rather than a final compliance check. Repeated collaboration with diverse users kept the application aligned with real needs while phased delivery made progress achievable.",
        },
      ],
    },
  ],
} satisfies PortfolioCaseStudy;
