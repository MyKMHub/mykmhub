import type { PortfolioCaseStudy } from "./types";

export const NAVY_KPI_DASHBOARD_CASE_STUDY = {
  id: "case-study-navy-kpi-dashboard",
  slug: "navy-kpi-dashboard",
  effortId: "effort-navy-kpi-dashboard",
  title: "Navy KPI Dashboard",
  cardSummary:
    "A single-screen dashboard concept that translates execution, quality, delivery risk, impact, and customer experience into a leadership decision narrative.",
  client: "U.S. Navy N16 eCRM Line of Effort",
  year: "2025",
  role: "HCD Strategist, UX Designer, and Dashboard Architect",
  collaboration:
    "Structured the performance model, visual hierarchy, metric language, status framing, and impact summaries around cross-functional planning and leadership decisions.",
  governance:
    "Outcome-oriented performance framing. Displayed values are illustrative concept data and require validation before operational use.",
  status: "published",
  visibility: "public",
  tags: ["dashboard", "performance-management", "customer-experience", "decision-support"],
  figures: [
    {
      id: "dashboard-concept",
      src: "/portfolio/navy-kpi-dashboard/kpi-dashboard.png",
      width: 2002,
      height: 1132,
      title: "KPI dashboard concept",
      caption:
        "The 13 May 2025 concept organizes illustrative measures into Execution Health, Quality and Delivery, and Impact and CX. The values demonstrate the proposed information model; they are not presented as verified operational results.",
      alt:
        "Conceptual KPI dashboard divided into three zones. Execution Health shows planned versus actual points, velocity, and overdue work. Quality and Delivery shows bugs, defect-to-feature ratio, integration timing, and lead time. Impact and CX shows time saved, configuration risk, feedback, priority churn, and estimated value. Each measure includes status or trend context.",
      presentation: "wide",
    },
  ],
  sections: [
    {
      id: "overview",
      label: "Overview",
      title: "Framing performance across delivery, quality, and experience",
      blocks: [
        {
          type: "paragraph",
          text:
            "The concept brings technical delivery measures, quality and risk signals, and customer-experience outcomes into one leadership view. Visual hierarchy and short narrative summaries are intended to elevate operational risk, surface user impact, and connect delivery performance to mission outcomes.",
        },
      ],
    },
    {
      id: "goals",
      label: "Design goals",
      title: "Support decisions rather than merely report metrics",
      blocks: [
        {
          type: "list",
          items: [
            {
              text:
                "Provide a single-screen performance lens integrating delivery, quality, and experience.",
            },
            {
              text:
                "Make urgency, direction, and impact understandable at a glance.",
            },
            {
              text:
                "Support cross-functional planning and prioritization through clear segmentation and language.",
            },
            {
              text:
                "Encourage outcome-oriented conversations rather than isolated metric reporting.",
            },
          ],
        },
      ],
    },
    {
      id: "model",
      label: "Information model",
      title: "Three questions organize the dashboard",
      blocks: [
        {
          type: "list",
          items: [
            {
              label: "Execution Health",
              text: "Are we delivering what we said we would?",
            },
            {
              label: "Quality and Delivery",
              text: "What is hurting performance or creating risk?",
            },
            {
              label: "Impact and CX",
              text: "Is the work making a meaningful difference?",
            },
          ],
        },
        { type: "figure", figureId: "dashboard-concept" },
      ],
    },
    {
      id: "hierarchy",
      label: "Visual hierarchy",
      title: "A scan path from status to interpretation",
      blocks: [
        {
          type: "paragraph",
          text:
            "The three-zone layout reduces cognitive load by separating different decision contexts. Within each zone, consistent columns and spacing let leaders scan the metric, current value, status, trend, and interpretation without decoding a different pattern for every measure.",
        },
      ],
    },
    {
      id: "signals",
      label: "Status and trends",
      title: "Signals reinforce stability, watch conditions, and action needs",
      blocks: [
        {
          type: "paragraph",
          text:
            "Status icons and trend arrows add a second layer of meaning to labels such as Stable, Watch, Off Track, and Action Needed. The words carry the meaning; color and icon shape provide reinforcement rather than acting as the only status cue.",
        },
      ],
    },
    {
      id: "narrative",
      label: "Impact summaries",
      title: "Pairing measures with plain-language consequences",
      blocks: [
        {
          type: "paragraph",
          text:
            "Narrative summaries explain why a measure matters—for example, whether a form change saves user time, configuration choices create sustainment risk, or priority churn drops planned work. This makes the dashboard useful to leaders who do not share the delivery team’s metric vocabulary.",
        },
      ],
    },
    {
      id: "accessibility",
      label: "Accessibility considerations",
      title: "Meaning must remain available beyond color",
      blocks: [
        {
          type: "list",
          items: [
            {
              text:
                "Every status requires a visible text label in addition to color and iconography.",
            },
            {
              text:
                "A production implementation should preserve a logical reading order and expose table headers programmatically.",
            },
            {
              text:
                "Trend arrows require equivalent text such as increasing, decreasing, or stable.",
            },
            {
              text:
                "Interactive metric details require keyboard access, visible focus, and an accessible expanded state.",
            },
          ],
        },
      ],
    },
    {
      id: "value",
      label: "Strategic value",
      title: "Turning delivery data into a story of impact",
      blocks: [
        {
          type: "paragraph",
          text:
            "The concept reframes a complex delivery landscape around the questions leadership needs to answer: where work is stable, where intervention is needed, what risks are accumulating, and whether delivery is creating value for users and the mission.",
        },
      ],
    },
    {
      id: "validation",
      label: "Validation boundary",
      title: "A concept requiring operational and accessibility validation",
      blocks: [
        {
          type: "paragraph",
          text:
            "The dashboard image demonstrates the proposed structure using illustrative values. Before operational use, metric definitions, sources, thresholds, calculation ownership, refresh cadence, drill-down behavior, and accessibility would need validation with leaders, delivery teams, data owners, and users with disabilities.",
        },
      ],
    },
  ],
} satisfies PortfolioCaseStudy;
