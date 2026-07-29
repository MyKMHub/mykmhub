import type { PortfolioCaseStudy } from "./types";

export const PERSONAL_KNOWLEDGE_SYSTEM_CASE_STUDY = {
  id: "case-study-personal-knowledge-system",
  slug: "personal-knowledge-management-system",
  effortId: "effort-personal-knowledge-system",
  title: "RAVeN Personal Knowledge Management System",
  cardSummary:
    "A 2008 context-based interface that unified frequently used local and online information sources instead of relying on memory and disconnected bookmarks.",
  client: "Personal project for a UT Austin information architecture/design course",
  year: "2008",
  role: "Information Architect, UX Designer, and Developer",
  collaboration:
    "Defined personal content requirements, organized sources by context, designed the information architecture and page concepts, and implemented the system independently.",
  governance:
    "Historical personal prototype. Its visual style and legacy browser integrations are documented as period artifacts, not current design or security recommendations.",
  status: "published",
  visibility: "public",
  tags: ["personal-knowledge-management", "information-architecture", "historical", "prototype"],
  figures: [
    {
      id: "page-layout",
      src: "/portfolio/personal-knowledge-system/page-layout.png",
      width: 1711,
      height: 923,
      title: "Shared page-layout concept",
      caption:
        "The common shell separated identity and navigation from a full-width content area composed of containers for distinct sources or views.",
      alt:
        "Early page-layout diagram with a header containing a logo, site title, external links, breadcrumbs, and internal page links above a large content region intended to hold separate source containers.",
      presentation: "wide",
    },
    {
      id: "wireframes",
      src: "/portfolio/personal-knowledge-system/wireframes.png",
      width: 3638,
      height: 5763,
      title: "RAVeN page wireframes",
      caption:
        "The wireframes explored context-specific pages for local and remote documents, education, email, music, shopping, and system navigation.",
      alt:
        "A tall collection of early RAVeN wireframes exploring multiple context pages and arrangements of source panels within the shared site shell.",
      presentation: "portrait",
    },
    {
      id: "raven-system",
      src: "/portfolio/personal-knowledge-system/raven-system.png",
      width: 1684,
      height: 756,
      title: "RAVeN local-document workspace",
      caption:
        "The implemented Ready Access Virtual eNetwork displayed several local file locations together within one context page.",
      alt:
        "Historical RAVeN interface with red navigation for Home, local and remote documents, education, email, music, and shopping. Four panels simultaneously display document and desktop folders from two computers.",
      presentation: "wide",
    },
  ],
  sections: [
    {
      id: "context",
      label: "Historical context",
      title: "A 2008 response to fragmented personal information",
      blocks: [
        {
          type: "paragraph",
          text:
            "People regularly moved among local files, online services, school systems, email accounts, media libraries, and bookmarks. Memory was unreliable, while bookmarks pointed only to web locations and did not reveal the content behind them. The project explored a single interface for discovering already-known information by context.",
        },
      ],
    },
    {
      id: "goal",
      label: "Goal",
      title: "Centralize common sources without erasing their contexts",
      blocks: [
        {
          type: "paragraph",
          text:
            "The goal was to bring frequently used personal, home, and graduate-school information into one interface while preserving useful distinctions such as local versus remote documents, education, communication, media, and lists.",
        },
      ],
    },
    {
      id: "requirements",
      label: "Content requirements",
      title: "Mapping the personal information environment",
      blocks: [
        {
          type: "list",
          items: [
            {
              label: "Documents",
              text: "Local folders, remote work and school files, desktop locations, downloads, and music libraries.",
            },
            {
              label: "Communication",
              text: "Multiple email accounts in a shared view.",
            },
            {
              label: "Education",
              text: "Local course files and the University of Texas online repository.",
            },
            {
              label: "Lists",
              text: "A hosted shopping list, with tasks and calendar identified as future capabilities.",
            },
            {
              label: "Systems",
              text: "Frequently used logins and management links for devices, university services, and hosting.",
            },
          ],
        },
      ],
    },
    {
      id: "architecture",
      label: "Information architecture",
      title: "Context pages over one undifferentiated index",
      blocks: [
        {
          type: "paragraph",
          text:
            "The architecture defined Home, Local Documents, Remote Documents, Education, Email, Music, Shopping List, and Site Map pages, plus direct links to frequently managed systems. Each page could display several relevant locations together.",
        },
        { type: "figure", figureId: "page-layout" },
        { type: "figure", figureId: "wireframes" },
      ],
    },
    {
      id: "implementation",
      label: "Implementation",
      title: "Nine server-side pages spanning 19 source locations",
      blocks: [
        {
          type: "paragraph",
          text:
            "The implemented system was named Ready Access Virtual eNetwork, or RAVeN. It was built with Dreamweaver 8 plus hand-authored HTML and CSS and contained nine server-side pages, 19 source locations, and four hard-coded external links.",
        },
        {
          type: "list",
          items: [
            {
              label: "Documents",
              text: "Embedded Explorer views exposed local and remote folders through the browser capabilities available at the time.",
            },
            {
              label: "Email",
              text: "University of Texas, Gmail, and Yahoo accounts could be viewed on one screen.",
            },
            {
              label: "Education",
              text: "Local course files and university-hosted web material appeared within one context.",
            },
            {
              label: "Music and lists",
              text: "Desktop and file-server music could launch in Winamp, while Zoho hosted the shopping list.",
            },
          ],
        },
        { type: "figure", figureId: "raven-system" },
      ],
    },
    {
      id: "result",
      label: "Result",
      title: "A first personal knowledge environment",
      blocks: [
        {
          type: "paragraph",
          text:
            "RAVeN centralized home and graduate-school sources and made several locations visible within their relevant contexts. It reduced dependence on remembering paths or repeatedly opening separate systems to determine what information they contained.",
        },
      ],
    },
    {
      id: "reflection",
      label: "Reflection",
      title: "The integration idea endured beyond the technology",
      blocks: [
        {
          type: "paragraph",
          text:
            "The visual treatment and browser embedding reflect 2008 technology and are not representative of current design practice. The enduring idea is a source-aware interface that supports discovery across personal contexts—an idea that can now be revisited with secure connectors, semantic search, provenance, permissions, and accessible interaction.",
        },
      ],
    },
    {
      id: "future",
      label: "Future direction",
      title: "A private MyKMHub personal knowledge workspace",
      blocks: [
        {
          type: "paragraph",
          text:
            "A future MyKMHub tool could help an authenticated user find and work across authorized local and online content while keeping source, ownership, freshness, and access boundaries visible. This is a roadmap concept, not a currently working application.",
        },
      ],
    },
  ],
} satisfies PortfolioCaseStudy;
