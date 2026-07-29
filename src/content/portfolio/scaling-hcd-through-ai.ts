import type { PortfolioCaseStudy } from "./types";

export const SCALING_HCD_THROUGH_AI = {
  id: "case-study-hcd-velocity-engine",
  slug: "scaling-hcd-through-ai",
  effortId: "effort-navy-hr-modernization",
  title:
    "Scaling HCD Through AI: Transforming Research Synthesis into Strategic Decision Support",
  cardSummary:
    "How an automated synthesis pipeline reclaimed 80% of an HCD team's production capacity and created space for strategic facilitation.",
  client: "U.S. Navy",
  year: "2025",
  role: "Design Operations & Strategy Lead",
  collaboration:
    'I worked directly with policy stakeholders, regulatory auditors, and the research team to bridge the gap between "policy-as-written" and "policy-as-lived." My role was to architect the synthesis engine while facilitating the human-centered workshops that drove the final design strategy.',
  governance:
    "OPNAVINST 1500.47D. The project required reconciling complex, regulated policy documentation with real-world user research to surface hidden process bottlenecks.",
  status: "published",
  visibility: "public",
  tags: ["synthesis", "traceability", "process-mapping", "portfolio"],
  figures: [
    {
      id: "synthesis-debt",
      src: "/case-studies/hcd-velocity-engine/synthesis-debt-bottleneck.png",
      width: 1467,
      height: 1062,
      title: "Figure 1: The Synthesis Debt Bottleneck",
      caption:
        "A snapshot of the initial, unreconciled 121-row Business Process Map, demonstrating the high-latency manual effort required to link regulatory documentation to raw transcript data.",
      alt: "A large, unreconciled 121-row Business Process Map showing process activities, roles, systems, and policy context.",
    },
    {
      id: "velocity-engine",
      src: "/case-studies/hcd-velocity-engine/velocity-engine-architecture.png",
      width: 1893,
      height: 892,
      title: "Figure 2: HCD Velocity Engine Architecture",
      caption:
        "A visualization of the pipeline logic. This automated engine replaced manual synthesis by normalizing terminology and programmatically mapping pain points to specific BPM identifiers.",
      alt: "A ten-stage HCD synthesis pipeline from source intake and normalization through process alignment, artifact creation, and packaging.",
      presentation: "wide",
    },
    {
      id: "traceability-matrix",
      src: "/case-studies/hcd-velocity-engine/evidence-traceability-matrix.png",
      width: 1803,
      height: 223,
      title: "Figure 3: Evidence Traceability Matrix",
      caption:
        "A snippet of the synthesis engine output. Each pain point is mapped to a specific BPM activity, supported by raw transcript evidence with timestamps, and weighted by an explicit priority and source-confidence score.",
      alt: "Two matrix rows connecting BPM activities 48 and 49 with pain points, timestamped transcript evidence, priority, justification, and source confidence.",
      presentation: "wide",
    },
    {
      id: "future-state-roadmap",
      src: "/case-studies/hcd-velocity-engine/future-state-roadmap.png",
      width: 568,
      height: 765,
      title: "Figure 4: Future-State Operational Roadmap Snippet",
      caption:
        "The final strategic deliverable. This To-Be map translates the synthesized findings into prioritized, actionable interventions, outlining the operational changes required to achieve a compliant, user-centered quota management model.",
      alt: "A future-state roadmap connecting strategic themes and current gaps to prioritized operational interventions.",
      presentation: "portrait",
    },
  ],
  sections: [
    {
      id: "overview",
      label: "Overview",
      title: "Moving from synthesis operators to strategy facilitators",
      blocks: [
        {
          type: "paragraph",
          text: 'In high-stakes environments like the U.S. Navy’s Learning Stack Quota Management, which plans training pipelines and sailor seat allocations, HCD teams often face "synthesis debt"—the crushing manual labor of reconciling raw research with process documentation. This bottleneck turns designers into documentarians, preventing them from driving strategic direction.',
        },
        {
          type: "paragraph",
          text: 'I led a strategic operational redesign by architecting an automated pipeline to handle the heavy lifting of aligning transcripts with our Process Map. By automating this synthesis, I reclaimed 80% of our team’s production capacity, allowing us to pivot from "Synthesis Operators" to "Strategy Facilitators" and move from raw data to a prioritized action plan in a single project cycle.',
        },
      ],
    },
    {
      id: "context",
      label: "Client or context",
      title: "Regulated policy met lived experience",
      blocks: [
        { type: "paragraph", text: "Client: U.S. Navy" },
        { type: "paragraph", text: "Year or timeframe: 2025" },
        {
          type: "paragraph",
          text: "Governance: OPNAVINST 1500.47D. The project required reconciling complex, regulated policy documentation with real-world user research to surface hidden process bottlenecks.",
        },
      ],
    },
    {
      id: "role",
      label: "Role and collaboration model",
      title: "Design operations, strategy, and facilitation",
      blocks: [
        { type: "paragraph", text: "Role: Design Operations & Strategy Lead." },
        {
          type: "paragraph",
          text: 'I worked directly with policy stakeholders, regulatory auditors, and the research team to bridge the gap between "policy-as-written" and "policy-as-lived." My role was to architect the synthesis engine while facilitating the human-centered workshops that drove the final design strategy.',
        },
      ],
    },
    {
      id: "challenge",
      label: "Challenge or problem",
      title: "Synthesis debt created a strategic ceiling",
      blocks: [
        {
          type: "paragraph",
          text: 'The team was trapped in "Synthesis Debt." We spent 80% of our capacity on the mechanical labor of formatting spreadsheets and cross-referencing thousands of transcript rows against a 121-step Business Process Map. This created a "strategic ceiling"—we were so busy documenting the problem that we had no bandwidth to facilitate the solution.',
        },
        { type: "figure", figureId: "synthesis-debt" },
      ],
    },
    {
      id: "inputs",
      label: "Inputs or research sources",
      title: "Research and operating context",
      blocks: [
        {
          type: "list",
          items: [
            { text: "Raw user interview transcripts." },
            { text: "121-row Business Process Map (BPM)." },
            { text: "Official policy documentation (OPNAVINST 1500.47D)." },
          ],
        },
      ],
    },
    {
      id: "workflow",
      label: "Workflow, process, or approach",
      title: "An automation-first HCD velocity engine",
      blocks: [
        {
          type: "paragraph",
          text: 'I architected an "HCD Velocity Engine"—an automation-first pipeline—that treated synthesis as a data-reconciliation challenge. By automating the alignment of transcripts to process steps, I moved the team away from manual spreadsheet manipulation and into direct artifact creation.',
        },
        { type: "figure", figureId: "velocity-engine" },
      ],
    },
    {
      id: "research",
      label: "Research methods and synthesis",
      title: "Evidence first, including where evidence was absent",
      blocks: [
        {
          type: "paragraph",
          text: 'We used evidence-first synthesis. The pipeline ingested transcripts and mapped them to specific BPM IDs. I introduced a "Source Confidence" metric: if the system found no evidence for a specific BPM step, it flagged the finding as "None Identified," ensuring all findings within our reports were rooted in high-fidelity data.',
        },
        { type: "figure", figureId: "traceability-matrix" },
      ],
    },
    {
      id: "decisions",
      label: "Design decisions, rationale, or logic",
      title: "Reserve the human touch for judgment",
      blocks: [
        {
          type: "paragraph",
          text: 'I chose to automate synthesis because the bottleneck was process, not volume. My rationale was that the "human touch" should be reserved for shaping insights, crafting personas, and designing the To-Be roadmap, not for mechanical data wrangling.',
        },
      ],
    },
    {
      id: "outputs",
      label: "Outputs and deliverables",
      title: "From data processing to artifact creation",
      blocks: [
        {
          type: "paragraph",
          text: 'By offloading the mechanical synthesis to our automated pipeline, the team pivoted from "data processing" to "artifact creation."',
        },
        {
          type: "list",
          items: [
            {
              label: "Experience & Journey Maps",
              text: "We visualized user friction against the 121-row BPM to identify specific, policy-driven bottlenecks.",
            },
            {
              label: "Data-Driven Personas",
              text: "Generated directly from synthesized transcript data, ensuring profiles were rooted in actual behavioral evidence.",
            },
            {
              label: "Audit-Ready Insights Report",
              text: 'Our central "Source of Truth," pre-linked to transcript evidence and policy citations for full transparency.',
            },
            {
              label: "To-Be Map (Strategic Roadmap)",
              text: "Our critical deliverable: a future-state operational roadmap outlining the prioritized design interventions required to bridge fragmented processes and a compliant, user-centered model.",
            },
          ],
        },
        { type: "figure", figureId: "future-state-roadmap" },
      ],
    },
    {
      id: "accessibility",
      label: "Accessibility considerations",
      title: "Accessibility was part of the strategic output",
      blocks: [
        {
          type: "paragraph",
          text: "In this regulatory environment, Section 508 compliance is a baseline, not an achievement. By offloading manual data reconciliation to the pipeline, I reclaimed the time necessary to integrate comprehensive accessibility guidance directly into our UX artifacts. Rather than treating accessibility as a compliance checkbox, I embedded technical requirements and inclusive-design guidance into our UX guidance, ensuring that our strategic insights were not only accessible to all users but also actionable for the development teams tasked with building them.",
        },
      ],
    },
    {
      id: "impact",
      label: "Measurable or observable impact",
      title: "A measurable shift in capacity and velocity",
      blocks: [
        {
          type: "metrics",
          items: [
            {
              value: "80% Capacity Gain",
              description: "Manual production time was reduced by 80%.",
            },
            {
              value: "Strategic Pivot",
              description:
                'The team transitioned from "Synthesis Operators" to "Strategy Facilitators."',
            },
            {
              value: "Velocity",
              description:
                "We produced the full suite of artifacts in a single project cycle, maintaining audit-ready documentation without manual maintenance.",
            },
          ],
        },
      ],
    },
    {
      id: "why-it-matters",
      label: "Why it matters",
      title: "Design architecture creates operational runway",
      blocks: [
        {
          type: "paragraph",
          text: 'This project proves that the future of HCD is Design Architecture. By automating the "synthesis debt," I created an operational runway that allowed my team to shift from documentation to strategic planning. We moved from simply delivering reports to actively shaping the business strategy at a senior level.',
        },
      ],
    },
    {
      id: "reflection",
      label: "Reflection",
      title: "Design leadership includes designing the workflow",
      blocks: [
        {
          type: "paragraph",
          text: 'The most important lesson was that "doing it all yourself" is a strategic failure. By building systems that allowed for high-fidelity, evidence-based data, I learned that design leadership is about architecting the workflow so your team has the space to produce high-impact, user-centered artifacts.',
        },
      ],
    },
  ],
} satisfies PortfolioCaseStudy;
