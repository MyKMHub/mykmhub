import type { PortfolioCaseStudy } from "./types";

export const MARCH_FOR_SCIENCE_REDESIGN_CASE_STUDY = {
  id: "case-study-march-for-science-redesign",
  slug: "march-for-science-site-redesign",
  effortId: "effort-march-for-science-redesign",
  title: "March for Science Site Redesign",
  cardSummary:
    "A UX and knowledge-management redesign that made participation easier, unified desktop and mobile experiences, surfaced current content, and reduced reliance on one site administrator.",
  client: "March for Science",
  year: "2019",
  role: "UX/KM Strategist and Site Designer",
  collaboration:
    "Interviewed stakeholders, consolidated and prioritized requirements, validated information architecture and page concepts, and iterated the Wix implementation with organizational leaders and users.",
  governance:
    "Stakeholder-validated HCD and distributed content stewardship for a volunteer-led nonprofit.",
  status: "published",
  visibility: "public",
  tags: ["ux", "knowledge-management", "information-architecture", "responsive-design"],
  figures: [
    {
      id: "responsive-site",
      src: "/portfolio/march-for-science-redesign/responsive-site-redesign.png",
      width: 1041,
      height: 686,
      title: "Standardized responsive information architecture",
      caption:
        "Global navigation, contextual local navigation, simplified content regions, and recurring participation actions were mapped across desktop and mobile layouts.",
      alt:
        "Annotated March for Science desktop and mobile layouts. The desktop diagram maps global navigation, contextual subnavigation, content, sharing tools, and prominent newsletter, shop, donate, and volunteer actions; the mobile view preserves the same structure.",
      presentation: "wide",
    },
    {
      id: "successes-carousel",
      src: "/portfolio/march-for-science-redesign/successes-carousel.png",
      width: 1657,
      height: 480,
      title: "Success-story presentation iteration",
      caption:
        "A dense paragraph concept became a focused carousel after leaders and users found the lighter presentation easier to engage with.",
      alt:
        "Design iteration from a large Champion Science for Good text panel to a compact carousel showing one organizational success at a time with previous and next controls.",
      presentation: "wide",
    },
    {
      id: "participation-actions",
      src: "/portfolio/march-for-science-redesign/participation-actions.png",
      width: 2362,
      height: 780,
      title: "Participation and support actions",
      caption:
        "Campaign overlays and persistent, visually distinct actions made donating, shopping, subscribing, and volunteering easier to find.",
      alt:
        "Two participation patterns: a campaign overlay asking visitors to gear up for the 2019 march, and a site layout highlighting Donate plus persistent Newsletter, Shop, Donate, and Volunteer buttons.",
      presentation: "wide",
    },
    {
      id: "centralized-content",
      src: "/portfolio/march-for-science-redesign/centralized-content.png",
      width: 1592,
      height: 1449,
      title: "Centralized content and resources",
      caption:
        "The site brought together downloadable resources, an organizational news blog, and current Facebook, Twitter, and Instagram activity.",
      alt:
        "March for Science content examples showing downloadable poster resources, a mobile news blog, and a desktop newsroom that displays Facebook, Twitter, and Instagram feeds in one location.",
      presentation: "wide",
    },
  ],
  sections: [
    {
      id: "situation",
      label: "Situation",
      title: "A successful social presence without a sustainable website",
      blocks: [
        {
          type: "paragraph",
          text:
            "The young, volunteer-led organization was effective on social media but needed its own website to become more relevant, usable, and viable for its varied stakeholders.",
        },
      ],
    },
    {
      id: "task",
      label: "Task",
      title: "Align stakeholder needs, UX practices, and content operations",
      blocks: [
        {
          type: "paragraph",
          text:
            "The assignment was to assess and redesign the site around known leadership concerns, UX good practices, and needs uncovered through stakeholder interviews—then validate the resulting structure and pages with the people who would use and maintain them.",
        },
      ],
    },
    {
      id: "process",
      label: "Process",
      title: "From stakeholder evidence to iterative delivery",
      blocks: [
        {
          type: "list",
          items: [
            { text: "Captured detailed stakeholder feedback and needs." },
            { text: "Consolidated, verified, and prioritized requirements." },
            { text: "Defined and validated the information architecture." },
            {
              text:
                "Created draft Wix pages in place of separate wireframes so stakeholders could react to realistic page behavior.",
            },
            { text: "Developed, validated, and iterated pages with stakeholders." },
          ],
        },
      ],
    },
    {
      id: "discoveries",
      label: "Key discoveries",
      title: "The content model and operating model both needed attention",
      blocks: [
        {
          type: "list",
          items: [
            {
              label: "Inconsistency",
              text:
                "The original site was organized unintuitively and behaved inconsistently across desktop and mobile layouts.",
            },
            {
              label: "Participation",
              text:
                "Donation, shopping, and volunteering were not prioritized even though the organization depended on them.",
            },
            {
              label: "Freshness",
              text:
                "The website appeared stale because current news lived primarily on social media.",
            },
            {
              label: "Credibility",
              text:
                "The site did not clearly demonstrate the organization’s successes and community relevance.",
            },
            {
              label: "Continuity",
              text:
                "One administrator maintained both structure and content, creating workload and continuity risk.",
            },
          ],
        },
      ],
    },
    {
      id: "architecture",
      label: "Information architecture",
      title: "A consistent experience across desktop and mobile",
      blocks: [
        {
          type: "paragraph",
          text:
            "The redesign standardized global navigation, introduced contextual local navigation, simplified content regions, and made participation actions persistent across responsive layouts.",
        },
        { type: "figure", figureId: "responsive-site" },
      ],
    },
    {
      id: "successes",
      label: "Design iteration",
      title: "Giving each organizational success room to be understood",
      blocks: [
        {
          type: "paragraph",
          text:
            "Leaders initially requested a paragraph-style successes section. A mockup revealed that the treatment felt too heavy, so feedback from leaders and users led to a carousel that reduced simultaneous content while giving each result individual focus.",
        },
        { type: "figure", figureId: "successes-carousel" },
      ],
    },
    {
      id: "participation",
      label: "Participation",
      title: "Making support opportunities difficult to miss",
      blocks: [
        {
          type: "paragraph",
          text:
            "Donation, shopping, newsletter, and volunteer opportunities became distinct and persistent actions, supplemented by timely campaign overlays.",
        },
        { type: "figure", figureId: "participation-actions" },
      ],
    },
    {
      id: "knowledge",
      label: "Knowledge management",
      title: "A one-stop source for current news and reusable resources",
      blocks: [
        {
          type: "paragraph",
          text:
            "The redesigned site centralized social feeds, added site-owned news sources, and improved access to existing resources such as downloadable poster graphics. Content providers could maintain their own material, reducing the workload and continuity risk concentrated in one administrator.",
        },
        { type: "figure", figureId: "centralized-content" },
      ],
    },
    {
      id: "result",
      label: "Result",
      title: "A more useful site with a more sustainable publishing model",
      blocks: [
        {
          type: "paragraph",
          text:
            "The resulting desktop and mobile experience made donation and volunteer paths easier to find, surfaced fresher content from across the organization’s web presence, and reduced future administrative effort through better structure and distributed stewardship.",
        },
      ],
    },
  ],
} satisfies PortfolioCaseStudy;
