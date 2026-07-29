# MyKMHub

MyKMHub is a public-facing HCD Director toolkit and knowledge hub. It will provide practical tools, methods, frameworks, patterns, governance approaches, resources, and live applications for leading accessible human-centered work.

The authoritative working specification is [docs/MYKMHUB-PROJECT-SPEC.md](docs/MYKMHUB-PROJECT-SPEC.md).

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

Portfolio routes render through a shared case-study component. Tool directory
and detail pages read from the same normalized tool records, including
operational status and last-verification information.

## Accessibility and typography

The shell provides semantic landmarks, skip navigation, responsive behavior, visible focus treatment, and locally persisted preferences for text size, appearance, contrast, reduced motion, and link underlining.

Atkinson Hyperlegible Next is the initial reading and interface font. The architecture uses a shared font token so later validated reading-font preferences can apply consistently to site content and Spectrum controls.

## Current scope

Phase 1 established the accessible Spectrum 2 shell and scalable content architecture.

The first Phase 2 portfolio slice includes:

- the Tools Library;
- the Evidence-first Synthesis method;
- the Scaling HCD Through Evidence-Traceable Automation case study.

The Evidence Traceability Matrix Builder remains a private, low-priority draft
concept for a future centralized team evidence log.


Authentication, private workspaces, multi-tenancy, billing, server-side research processing, and other future platform capabilities remain intentionally out of scope.
