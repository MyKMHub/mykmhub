import type { PortfolioCaseStudy } from "./types";

export const AI_IMAGE_PROMPT_WIZARD_CASE_STUDY = {
  id: "case-study-ai-image-prompt-wizard",
  slug: "ai-image-creation-wizard",
  effortId: "effort-ai-image-prompt-wizard",
  title: "AI Image Creation Wizard",
  cardSummary:
    "A guided workflow that helps people express visual intent without first mastering prompt engineering or composition terminology.",
  client: "AI Image Creators",
  year: "2026",
  role:
    "Product Designer, HCD/UX Designer, Interaction Designer, and Front-End Prototyper",
  collaboration:
    "Defined the product concept, interaction flow, content model, accessibility behavior, and working front-end prototype.",
  governance:
    "Accessibility-first interaction design with an engine-independent prompt structure.",
  status: "published",
  visibility: "public",
  tags: ["artificial-intelligence", "image-prompting", "accessibility", "product-design"],
  application: {
    kind: "internal",
    label: "Open the working prompt wizard",
    href: "/tools/ai-image-prompt-wizard",
    accessibilityNotes:
      "The MyKMHub version uses Spectrum 2 controls and a keyboard-accessible six-step workflow.",
  },
  figures: [],
  sections: [
    {
      id: "problem",
      label: "The problem",
      title: "Image generators often assume hidden expertise",
      blocks: [
        {
          type: "paragraph",
          text:
            "Many image-generation interfaces expect people to already understand prompting, composition, lighting, style vocabulary, and model-specific constraints. That creates cognitive load and makes trial and error the default workflow.",
        },
      ],
    },
    {
      id: "goal",
      label: "Product goal",
      title: "Turn prompt creation into a guided design process",
      blocks: [
        {
          type: "paragraph",
          text:
            "The goal was to make visual intent easier to articulate through a structured sequence that teaches useful prompt patterns while producing something ready to reuse.",
        },
      ],
    },
    {
      id: "workflow",
      label: "The solution",
      title: "Six stages from subject to iteration",
      blocks: [
        {
          type: "list",
          items: [
            { label: "Subject and action", text: "Define the focal content and what it is doing." },
            { label: "Setting and mood", text: "Establish the environment and emotional tone." },
            { label: "Style and medium", text: "Choose a visual language and add meaningful style details." },
            { label: "Composition and lighting", text: "Describe framing, focus, depth, and illumination." },
            { label: "Quality and constraints", text: "Set detail expectations and common problems to avoid." },
            { label: "Seed and iteration", text: "Record stable references and what to change next." },
          ],
        },
      ],
    },
    {
      id: "features",
      label: "Key features",
      title: "Immediate feedback without model lock-in",
      blocks: [
        {
          type: "list",
          items: [
            { text: "A compiled prompt updates as source choices change." },
            { text: "Shortcuts cover blur, distortion, unwanted text, watermarks, anatomy errors, and visual clutter." },
            { text: "Seed references and iteration notes make experimentation easier to track." },
            { text: "The prompt can be copied into the image system appropriate to the project." },
          ],
        },
      ],
    },
    {
      id: "accessibility",
      label: "Accessibility",
      title: "A workflow designed to reduce interaction and cognitive barriers",
      blocks: [
        {
          type: "list",
          items: [
            { text: "Semantic structure and visible labels identify every control." },
            { text: "All workflow actions support keyboard use and visible focus." },
            { text: "Status changes are announced without unexpectedly moving focus." },
            { text: "Readable typography, strong contrast, and named steps support scanning and orientation." },
          ],
        },
      ],
    },
    {
      id: "implementation",
      label: "Implementation",
      title: "A local, engine-independent prototype",
      blocks: [
        {
          type: "paragraph",
          text:
            "The original prototype used vanilla HTML, Tailwind CSS, and JavaScript. The MyKMHub version modernizes the interaction with React and Spectrum 2 while keeping the prompt logic local and independent of a particular image-generation engine.",
        },
      ],
    },
    {
      id: "impact",
      label: "Impact",
      title: "More intentional prompts and faster learning",
      blocks: [
        {
          type: "list",
          items: [
            { text: "People can build prompts without memorizing a specialized syntax." },
            { text: "The workflow exposes reusable visual-design patterns rather than hiding them." },
            { text: "Structured iteration reduces repeated guessing and makes results easier to compare." },
          ],
        },
      ],
    },
    {
      id: "next",
      label: "Future concept",
      title: "From prompt assembler to visual intent compiler",
      blocks: [
        {
          type: "paragraph",
          text:
            "A future Visual Intent Compiler could identify conflicting choices, apply readability and composition rules, explain its recommendations, and translate stable intent into model-specific prompt formats.",
        },
      ],
    },
  ],
} satisfies PortfolioCaseStudy;
