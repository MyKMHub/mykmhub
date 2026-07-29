# MyKMHub

MyKMHub is a public-facing HCD Director toolkit and knowledge hub. It will provide practical tools, methods, frameworks, patterns, governance approaches, resources, and live applications for leading accessible human-centered work.

The authoritative working specification is [docs/MYKMHUB-PROJECT-SPEC.md](docs/MYKMHUB-PROJECT-SPEC.md).

To resume, run, publish, or troubleshoot the project, use the
[operations and continuity guide](docs/OPERATIONS.md). The
[context-driven KM model](docs/KM-CONTEXT-MODEL.md) documents how reusable
records, metadata, and contextual views should evolve. The
[tooling guide](docs/TOOLING.md) compares the current workflow with available
alternate methods.

## Technology

- Next.js 16 App Router
- React 19 and TypeScript
- Adobe Spectrum 2 through `@react-spectrum/s2`
- WCAG 2.2 AA accessibility baseline
- Playwright and axe-core for automated accessibility checks

## Local development

Install dependencies and start the development server:

```powershell
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```powershell
npm run lint
npm run build
npm run test:a11y
```

The automated accessibility check is a baseline, not a substitute for keyboard, screen-reader, zoom, reflow, contrast, and usability testing.

## Architecture

The App Router in `src/app` owns routes and layouts. Shared shell and accessibility components live in `src/components`.

Content is maintained independently in `src/content`:

- `types.ts` defines reusable content metadata.
- `entries/` contains canonical content objects.
- `efforts/` connects multiple perspectives on the same body of work.
- `portfolio/` stores normalized case-study records and content blocks.
- `tools/` stores tool status, accessibility, privacy, relationship, and
  version metadata.
- `relationships.ts` records how case studies, methods, knowledge, and tools
  relate without duplicating them.
- `registry.ts` exposes published public content.
- `navigation.ts` derives navigation only from published routes.

A route does not appear merely because it is planned. Future MVP areas become public only when they contain useful content.

The Knowledge area now contains a published practice note on building MyKMHub
through specification-led AI-assisted development. It is maintained as guidance
rather than a blog post or case study and is connected to the MyKMHub platform
effort, Design System, and Tools.

The HCD Director Toolkit is a contextual leadership view over existing methods,
tools, guidance, and portfolio evidence. It organizes useful pathways without
duplicating the underlying content records.

The About page explains Nathan Byrnes's connected HCD, accessibility, knowledge
management, and responsible-automation practice. It also makes the boundary
between the current public site and future authenticated capabilities explicit.

Phase 3 begins with an HCD operating model baseline: a substantive Director
framework covering mandate, intake, evidence, decision rights, delivery
integration, accessibility, measurement, and organizational learning.

Portfolio routes render through a shared case-study component. Tool directory
and detail pages read from the same normalized tool records, including
operational status and last-verification information.

## Accessibility and typography

The shell provides semantic landmarks, skip navigation, responsive behavior, visible focus treatment, and locally persisted preferences for text size, appearance, contrast, reduced motion, and link underlining.

Atkinson Hyperlegible Next is the initial reading and interface font. The architecture uses a shared font token so later validated reading-font preferences can apply consistently to site content and Spectrum controls.

## Current scope

Phase 1 established the accessible Spectrum 2 shell and scalable content architecture.

The Phase 2 portfolio foundation now includes two normalized perspectives on
the shared Navy HR modernization effort:

- the Tools Library;
- the Evidence-first Synthesis method;
- the strategic-impact case study on evidence-traceable automation;
- the broader operational-design case study on scaling automated HCD across
  Recruit Training Command and Quota Management.

The Evidence Traceability Matrix Builder remains a publicly explorable,
low-priority working draft for a future centralized team evidence log.

The Accessible Form Component & UX Requirements Generator is the first hybrid
Tool and Portfolio entry. Its canonical working application lives in Tools,
while its normalized Portfolio record documents the design context,
accessibility decisions, and outcomes without duplicating the application.

The AI Image Prompt Architect & Generator follows the same hybrid pattern. Its
working four-zone prompt builder translates visual intent for OpenAI, Gemini,
Midjourney, and Black Forest Labs FLUX. Direct generation accepts a
provider-specific OpenAI, Gemini, or BFL API key for the current request, or
the corresponding optional server credential. User keys are not persisted.
Midjourney prompt compilation remains available, but direct generation is not
represented because Midjourney does not provide a supported public API. Public
use of shared server credentials still requires authentication, rate limiting,
and cost controls. Portfolio documents the original product problem and future
Visual Intent Compiler concept.

The DOJ application redesign case study preserves the original navigation,
advanced-search, and workflow evidence while documenting the accessibility-led
research and phased modernization approach. Additional DOJ contributions remain
in the roadmap for later Career Archive ingestion.

The March for Science case study documents a combined UX and knowledge-management
redesign, including responsive information architecture, participation paths,
centralized current content, and a distributed publishing model for a
volunteer-led organization.

The Navy KPI Dashboard case study documents a 2025 decision-support concept
that organizes execution health, quality and delivery risk, impact, and
customer experience. Its displayed values are explicitly treated as
illustrative until operationally validated.

The RAVeN case study preserves a 2008 personal knowledge-management system that
unified 19 local and online source locations through context pages. A
private-by-default, permission-aware MyKMHub modernization is documented as a
future roadmap concept rather than represented as a working tool.

Authentication, private workspaces, multi-tenancy, billing, server-side research processing, and other future platform capabilities remain intentionally out of scope.
