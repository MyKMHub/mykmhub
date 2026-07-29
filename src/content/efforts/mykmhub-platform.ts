import type { EffortRecord } from "../model";

export const MYKMHUB_PLATFORM_EFFORT = {
  id: "effort-mykmhub-platform",
  title: "MyKMHub knowledge and portfolio platform",
  summary:
    "An accessibility-first public toolkit, portfolio, design system, and knowledge platform developed through a specification-led AI-assisted workflow.",
  client: "Personal platform",
  timeframe: "2026–present",
  governance: [
    "Accessibility-first implementation",
    "Spectrum-first component reuse",
    "Repository-backed specifications and continuity",
    "Human review before publication",
  ],
  contentEntryIds: [
    "guidance-ai-assisted-mykmhub-development",
    "landing-design-system",
    "landing-tools",
  ],
  tags: [
    "knowledge-management",
    "portfolio",
    "accessibility",
    "ai-assisted-development",
  ],
} satisfies EffortRecord;
