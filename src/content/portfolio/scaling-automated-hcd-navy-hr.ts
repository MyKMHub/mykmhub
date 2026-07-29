import type { PortfolioCaseStudy } from "./types";

export const SCALING_AUTOMATED_HCD_NAVY_HR = {
  id: "case-study-navy-hr-automated-hcd",
  slug: "scaling-automated-hcd-in-navy-hr-modernization",
  effortId: "effort-navy-hr-modernization",
  title: "Scaling Automated HCD in Navy HR Modernization",
  cardSummary:
    "How an AI-augmented HCD workflow expanded insight coverage, aligned research with business processes, and created reusable artifacts across two Navy modernization initiatives.",
  client: "U.S. Navy N16 — Personnel and Training",
  year: "2025",
  role: "HCD Strategist",
  collaboration:
    "Collaborated with Line of Effort leads, analysts, project stakeholders, and design partners across research synthesis, business-process alignment, artifact development, and graphics handoff.",
  governance:
    "Navy HR modernization operating context. Accessibility and Section 508 requirements informed both deliverables and the future workflow direction.",
  status: "published",
  visibility: "public",
  tags: [
    "human-centered-design",
    "ai-augmented-workflows",
    "process-mapping",
    "research-synthesis",
    "portfolio",
  ],
  figures: [
    {
      id: "mural-workspace",
      src: "/portfolio/navy-hr-modernization/mural-workspace.png",
      width: 1996,
      height: 1094,
      title: "Figure B: Structured Mural workspace",
      caption:
        "Discovery inputs, BPM alignment, templates, in-progress artifacts, final deliverables, and graphics handoff were separated so teams could interpret ownership and work state.",
      alt: "A structured Mural workspace separating discovery inputs, business-process alignment, templates, work in progress, final artifacts, and graphics handoff.",
      presentation: "wide",
    },
    {
      id: "original-bpm",
      src: "/portfolio/navy-hr-modernization/original-bpm.png",
      width: 1120,
      height: 186,
      title: "Figure C1: Original BPM source",
      caption:
        "The original Business Process Map source artifact before conversion into an analysis-ready format.",
      alt: "A wide Business Process Map source artifact with activities arranged across roles and workflow stages.",
      presentation: "wide",
    },
    {
      id: "bpm-alignment",
      src: "/portfolio/navy-hr-modernization/bpm-alignment.png",
      width: 1467,
      height: 1062,
      title: "Figure C2: AI-assisted BPM alignment",
      caption:
        "The converted output connected pain points, objectives, and process activities to HCD artifacts and improvement opportunities.",
      alt: "A structured process spreadsheet connecting business-process activities with roles, systems, pain points, objectives, and improvement opportunities.",
      presentation: "wide",
    },
    {
      id: "structured-extraction",
      src: "/portfolio/navy-hr-modernization/structured-extraction.jpg",
      width: 1625,
      height: 1251,
      title: "Figure E: Structured extraction output",
      caption:
        "The extraction output scaled transcript analysis and fed prioritized, quote-grounded insights into maps and team collaboration spaces.",
      alt: "A structured research extraction containing transcript evidence, pain points, priority, process relationships, and synthesis fields.",
      presentation: "wide",
    },
    {
      id: "decision-support-workflow",
      src: "/portfolio/navy-hr-modernization/decision-support-workflow.png",
      width: 1893,
      height: 892,
      title: "Figure F: End-to-end HCD decision-support workflow",
      caption:
        "The workflow converted stakeholder interviews, BPMs, and policy documentation into prioritized recommendations, future-state designs, and actionable deliverables.",
      alt: "A ten-stage HCD decision-support workflow from source intake through normalization, evidence extraction, process alignment, artifact creation, and delivery.",
      presentation: "wide",
    },
    {
      id: "terminology-output",
      src: "/portfolio/navy-hr-modernization/terminology-output.png",
      width: 916,
      height: 802,
      title: "Figure G: Terminology output",
      caption:
        "A shared terminology artifact supported consistent understanding across the delivery team.",
      alt: "A terminology reference that defines project-specific terms for shared team understanding.",
    },
  ],
  sections: [
    {
      id: "overview",
      label: "Overview",
      title: "An AI-augmented workflow for scalable HCD",
      blocks: [
        {
          type: "paragraph",
          text: "I designed and led an AI-augmented Human-Centered Design workflow that turned long-form stakeholder interviews into validated, prioritized insights and reusable UX artifacts for Navy modernization efforts. Across Recruit Training Command and Quota Management initiatives, the approach expanded insight coverage, improved BPM-to-HCD alignment, and created a more scalable process for generating personas, maps, recommendations, and supporting design materials.",
        },
      ],
    },
    {
      id: "role",
      label: "Role and collaboration",
      title: "Improving both delivery outcomes and the HCD workflow",
      blocks: [
        {
          type: "paragraph",
          text: "I served as an HCD Strategist, but my work extended beyond a typical project role. I independently initiated and led development of an AI-augmented HCD pipeline that extracts stakeholder insights, maps them to business processes, and supports artifact generation for analysts and designers. This work was not assigned as a standalone effort. It emerged from my drive to improve both Navy-facing outcomes and the internal HCD workflow itself.",
        },
        {
          type: "paragraph",
          text: "I collaborated across the delivery chain with Line of Effort leads, analysts, project stakeholders, and design partners. My work supported downstream artifact development, BPM alignment, and graphics handoff, which required connecting research synthesis, service logic, and deliverable structure into one repeatable workflow. I also redesigned the Mural layout to separate in-progress work from finalized outputs and create a clearer handoff area for graphics production.",
        },
        { type: "figure", figureId: "mural-workspace" },
      ],
    },
    {
      id: "challenge",
      label: "The challenge",
      title: "Limited access, compressed timelines, and late UX involvement",
      blocks: [
        {
          type: "paragraph",
          text: "The Navy uses HCD to improve training and HR systems that affect sailors and support staff. However, teams often face limited access to users, compressed timelines, and a delivery model that can place UX too late in the process by prioritizing engineering-oriented To-Be BPMs before UX input. These conditions make it difficult to capture enough user insight early, translate research into structured artifacts, and keep outputs traceable and scalable.",
        },
        {
          type: "paragraph",
          text: "Long-form interviews are also labor-intensive to process manually. Valuable pain points may be under-captured, inconsistently structured, or delivered too slowly to shape the work. After beginning a graduate certificate program in AI and machine learning, I started experimenting with how large language models and automation frameworks could accelerate and scale HCD work without losing nuance.",
        },
      ],
    },
    {
      id: "research",
      label: "Research methods and synthesis",
      title: "Quote-grounded synthesis connected to operating processes",
      blocks: [
        {
          type: "paragraph",
          text: "This work combined qualitative research analysis with structured synthesis and artifact generation. I used AI-assisted workflows to parse long-form stakeholder interviews, identify explicit and inferred pain points, validate findings against direct quotes, and map insights to BPM activities and HCD artifact structures. The outputs supported As-Is and To-Be framing, opportunity identification, persona development, and experience-map writing.",
        },
        {
          type: "paragraph",
          text: "The goal was not simply to extract more findings, but to make them more usable. I structured the workflow to prioritize issues, connect them to BPM activities, and translate them into deliverables that other team members could immediately use.",
        },
        { type: "figure", figureId: "original-bpm" },
        { type: "figure", figureId: "bpm-alignment" },
        {
          type: "table",
          caption:
            "Figure D: Example quote-validated extraction output connecting pain points to BPM activities and source interviews",
          columns: [
            "Order",
            "BPM activity",
            "Pain point",
            "Source evidence",
            "Priority",
            "Justification",
          ],
          rows: [
            [
              "11",
              "Submit SIP to Resource Sponsors",
              "Funding approval disconnect delays quota availability",
              '"The resource sponsor might not agree that 50,000 is the right number, or they just can’t afford that." (8:24)',
              "1",
              "The resource sponsor’s decision directly affects how many quotas are available, creating downstream bottlenecks.",
            ],
            [
              "22",
              "Load CeTARS Quotas based on Plan Values",
              "Quotas loaded to full class size even when funding covers fewer seats",
              '"We would load quotas to all eight of the seats, even though only four are technically required or paid for." (9:57)',
              "2",
              "The mismatch between quota allocation and funding creates inefficiency and potential overutilization.",
            ],
            [
              "30",
              "Approve or Deny Training Request",
              "Quota approval depends on manual checks for prerequisites and eligibility",
              '"You have to check. First of all, do they match the quota? You make sure they have the prereqs." (18:15)',
              "3",
              "Manual validation introduces variability, slows the process, and creates risks of mismatch or missed approvals.",
            ],
          ],
        },
        { type: "figure", figureId: "structured-extraction" },
        { type: "figure", figureId: "decision-support-workflow" },
        { type: "figure", figureId: "terminology-output" },
      ],
    },
    {
      id: "iteration-rtc",
      label: "Design iteration 1",
      title: "Recruit Training Command",
      blocks: [
        {
          type: "paragraph",
          text: "Recruit Training Command was the first initiative where I expanded the team’s HCD work using AI-assisted methods. When I joined the HCD team, manual discovery had largely concluded, and the original Line of Effort lead had documented 11 pain points and opportunities.",
        },
        {
          type: "paragraph",
          text: "After transitioning into the lead role, I expanded and refined that work using AI-assisted analysis to strengthen improvement recommendations, clarify stakeholder needs, and better align findings with BPMs. By the end of the effort, the total number of actionable improvements had grown to 44, supported by personas, journey maps, and experience maps. I also initiated a small set of low- and high-fidelity wireframes to support downstream UX work, even though wireframes were not required.",
        },
      ],
    },
    {
      id: "iteration-qm",
      label: "Design iteration 2",
      title: "Quota Management",
      blocks: [
        {
          type: "paragraph",
          text: "Quota Management was the first initiative where I applied the full transcript-driven system from the start. By this point, I had built a multi-batch, multi-step AI pipeline capable of parsing long-form interviews, extracting specified and inferred pain points, validating findings, and linking them to BPM activities and artifact structures.",
        },
        {
          type: "paragraph",
          text: "From a single stakeholder interview, the system surfaced nearly 300 pain points over a few hours. To prevent overload and preserve focus, I configured the workflow to prioritize and deliver only the top 30 issues per interview. Each insight was tied to BPM activities and mapped into artifact structures such as As-Is, To-Be, and Opportunities.",
        },
        {
          type: "paragraph",
          text: "I also improved the delivery model itself. I redesigned the Mural layout to clearly separate in-progress work from finalized artifacts and created a dedicated handoff zone for graphics production, clarified through a walkthrough with design partners. This improved not only what the system produced, but how other teams could interpret and use it.",
        },
      ],
    },
    {
      id: "accessibility",
      label: "Accessibility considerations",
      title: "Making the workflow usable beyond AI specialists",
      blocks: [
        {
          type: "paragraph",
          text: "Accessibility influenced both the case-study presentation and the long-term workflow direction. More broadly, I approached this as a usability and access problem for internal teams as well as end users. A future direction is a wizard-style interface that would let teams without AI or prompt-engineering expertise use the workflow.",
        },
      ],
    },
    {
      id: "deliverables",
      label: "Deliverables",
      title: "Reusable artifacts and a clearer delivery system",
      blocks: [
        {
          type: "paragraph",
          text: "The workflow supported personas, journey maps, experience maps, recommendations, and wireframes. It formalized how insights map to BPM and artifact structures, improved Mural organization for clarity and handoff, and created a repeatable process for generating content used by designers and analysts.",
        },
        {
          type: "list",
          items: [
            { text: "Transcript curation and terminology standardization" },
            { text: "Prioritized, quote-grounded recommendations" },
            { text: "Personas, journey maps, and experience maps" },
            { text: "As-Is, To-Be, and opportunity framing" },
            { text: "Low- and high-fidelity wireframes" },
            { text: "Cross-team Mural organization and graphics handoff" },
          ],
        },
      ],
    },
    {
      id: "impact",
      label: "Measurable impact",
      title: "Greater scale, throughput, and repeatability",
      blocks: [
        {
          type: "metrics",
          items: [
            {
              value: "11 → 44",
              description:
                "Recruit Training Command grew from 11 documented pain points and opportunities to 44 actionable improvements.",
            },
            {
              value: "Nearly 300",
              description:
                "The Quota Management workflow captured nearly 300 pain points from one stakeholder interview.",
            },
            {
              value: "Top 30",
              description:
                "The workflow automatically prioritized the 30 most important issues per interview to keep outputs useful.",
            },
            {
              value: "10×",
              description:
                "The case study recorded a tenfold increase in insight capture compared with manual review.",
            },
          ],
        },
        {
          type: "paragraph",
          text: "Beyond volume, the workflow improved BPM-to-HCD alignment, standardized experience-map writing and persona drafting, and reduced turnaround time through AI batching while maintaining traceable, quote-validated insights.",
        },
      ],
    },
    {
      id: "recognition",
      label: "Recognition",
      title: "Proactive delivery across Lines of Effort",
      blocks: [
        {
          type: "paragraph",
          text: "Stakeholders across project management, analytics, and dashboard teams noted that my outputs often arrived before tasks were formally assigned. I also proactively automated the Execution Planning reporting format when it was announced, delivering before other teams had begun. Colleagues across Lines of Effort praised the initiative and delivery speed, including leads and former partners to whom I had transitioned work.",
        },
      ],
    },
    {
      id: "why-it-matters",
      label: "Why it matters",
      title: "Scaling access to meaningful design",
      blocks: [
        {
          type: "paragraph",
          text: "This project was about more than efficiency. It was about scaling access to meaningful design in an environment where timelines are compressed, user access is limited, and UX can enter too late in the lifecycle. I was helping improve experiences for sailors and support staff while redesigning the HCD workflow so teams could extract insight faster, structure it better, and hand it off more clearly.",
        },
        {
          type: "paragraph",
          text: "That dual focus is what makes the project distinctive: it improved both the service outputs and the internal system used to produce them. It demonstrates how design, research synthesis, and AI-assisted workflow thinking can work together to create a scalable and repeatable HCD practice in complex organizations.",
        },
      ],
    },
    {
      id: "reflection",
      label: "Reflection",
      title: "Better interfaces begin with better systems for insight",
      blocks: [
        {
          type: "paragraph",
          text: "This work reinforced a principle that continues to shape how I design: meaningful UX improvement does not come only from better interfaces, but from better systems for generating and applying insight. By automating repetitive synthesis tasks, improving traceability from interview to artifact, and clarifying how work moves across the pipeline, I increased both the scale and usefulness of HCD outputs.",
        },
        {
          type: "paragraph",
          text: "My long-term goal is to make that capability easier for others to use, so the value of structured HCD is not limited to teams with dedicated specialists or advanced AI knowledge.",
        },
      ],
    },
  ],
} satisfies PortfolioCaseStudy;
