# MyKMHub Project Handoff / Working Specification

**Purpose:** Authoritative starting context for a new MyKMHub development thread.  
**Status:** Working specification. Items explicitly marked **Locked** are decisions. Items marked **Concept / TBD** remain open and should not be treated as requirements.

---

## 1. Product Vision

### Current purpose - **Locked**

**MyKMHub is a public-facing HCD Director's toolkit and knowledge hub.**

It should demonstrate and provide practical access to the methods, tools, frameworks, patterns, governance approaches, knowledge resources, and live applications useful for leading and executing human-centered work.

It is **not currently being built as an internal DEEPX tool**.

The architecture should, however, avoid preventing later use as:

- a private personal HCD/KM workspace;
- an authenticated organizational workspace;
- a separately deployed/forked organizational version.

Those are future possibilities, not v1 requirements.

### Positioning

MyKMHub should reflect the intersection of:

**Human-Centered Design + Knowledge Management + Accessibility + AI + Automation + Process Improvement**

The site should demonstrate these capabilities through actual implementation, not merely describe them.

---

# 2. Core Product Principles - **Locked**

### Accessibility first

Accessibility is part of the architecture, design system, components, patterns, content, and testing process.

**Formal baseline:** WCAG 2.2 AA.

**Goal:** Meet applicable AAA success criteria where practical and beneficial. Do not claim full WCAG AAA conformance unless the complete site has actually been evaluated against all applicable AAA criteria.

### Spectrum-first

Use **Adobe Spectrum 2 out of the box wherever practical**.

Do not customize established components or interaction patterns simply to differentiate MyKMHub visually.

Customization should have a reason, such as:

- demonstrated user need;
- accessibility improvement;
- workflow requirement;
- functional requirement;
- meaningful branding requirement.

### Spend HCD effort where it creates value

The rationale for choosing Spectrum 2 is itself part of the project's HCD/design-system story:

> Use a mature, proven, accessibility-focused design system for problems that are already well solved. Minimize unnecessary customization so design and engineering effort can focus on higher-value HCD decisions, workflows, research, accessibility, and outcomes specific to users and the product.

### Responsive/mobile-first

Use a **mobile-first responsive implementation** where appropriate.

Mobile must remain accessible and functional. Larger displays can progressively enhance information density for interfaces such as dashboards, tables, workflow visualizations, and Director-level tools.

Do not force complex desktop information structures into artificially simplified mobile designs when that harms usability.

### Build before cosmetically optimizing

Roll out useful functionality using Spectrum defaults first.

Evaluate the real application in context, then customize only where necessary.

---

# 3. Technology - **Locked**


| Area                | Decision              |
| ------------------- | --------------------- |
| Framework           | Next.js 16.2.12       |
| React design system | Adobe Spectrum 2      |
| Spectrum package    | `@react-spectrum/s2`  |
| Repository          | Git/GitHub            |
| Deployment          | Vercel                |
| Domain              | mykmhub.com           |
| Local project       | `C:\Projects\mykmhub` |


Do **not** introduce Radix, shadcn/ui, Ariakit, Tailwind component architecture, or another general component system unless Spectrum 2 has a demonstrated gap.

---

# 4. Current Technical State

Spectrum 2 has been successfully installed:

`npm install @react-spectrum/s2`

The application successfully renders a Spectrum 2 Button locally.

A Git commit/push was completed after the successful Spectrum integration.

### Current architecture

`layout.tsx` remains a Next.js Server Component.

Spectrum's Provider was moved into a separate Client Component:

`src/app/providers.tsx`

This resolved the Next.js Server Component `createContext` error.

The temporary homepage currently exists primarily to verify Spectrum 2 integration.

### Important prior issue

Do **not** use:

`@react-spectrum/s2/next`

That export was attempted earlier and failed because it was not present in the installed package.

`next.config.ts` was returned to its normal Next.js configuration afterward.

---

# 5. Infrastructure Already Established

### Git/GitHub

Repository initialized correctly inside:

`C:\Projects\mykmhub`

Git identity configured as:

**Name:** Nathan Byrnes  
**Email:** [nathanbyrnes@gmail.com](mailto:nathanbyrnes@gmail.com)

The repository was connected to GitHub and pushed successfully.

The GitHub organization/account capitalization was normalized to:

**MyKMHub**

### Vercel

GitHub repository connected to Vercel.

Automatic deployment is functioning.

### Domain

`mykmhub.com` is configured through Microsoft-managed DNS and Vercel.

Both:

- `mykmhub.com`
- `www.mykmhub.com`

resolve correctly, with `www` ultimately using the canonical non-www domain.

Vercel reported valid configuration.

---

# 6. Accessibility Architecture - **Required**

Accessibility must be designed into the **site shell first**, not retrofitted later.

### Semantic structure

Use meaningful HTML/ARIA landmarks as appropriate:

- banner/header
- primary navigation
- main
- search
- complementary/aside
- content information/footer
- contextual navigation where appropriate

Avoid redundant or unnecessary landmarks.

Maintain:

- logical DOM order;
- logical reading order;
- logical keyboard focus order;
- valid heading hierarchy.

### Keyboard

Everything interactive must be keyboard operable.

Use Spectrum's native focus treatment by default.

Custom interactive components should use the same Spectrum focus treatment rather than introducing unrelated focus styling.

Focus should be conspicuous rather than subtle.

### Skip/bypass navigation

At minimum:

**Skip to main content**

as an early/first keyboard-focusable control.

It should become clearly visible when keyboard focused.

Also consider a discoverable mouse/touch-accessible **Jump to** mechanism for useful landmarks/page regions, especially on long Director-toolkit pages.

Do not clutter every page with unnecessary permanent skip controls.

### Responsiveness

Accessibility must hold across responsive states, including:

- reflow;
- zoom;
- text resizing;
- orientation;
- keyboard;
- touch;
- pointer;
- screen readers.

### Interaction principles

Do not make functionality dependent solely on:

- color;
- hover;
- dragging;
- fine pointer precision;
- animation/motion;
- spatial positioning.

Touch targets should be comfortably sized, preferably exceeding WCAG minimums.

---

# 7. User Accessibility Preferences - **Required Capability**

The site itself should eventually expose useful accessibility personalization.

Potential controls include:


| Preference                       | Direction                       |
| -------------------------------- | ------------------------------- |
| Text size                        | Required                        |
| System / Light / Dark            | Required                        |
| Increased contrast               | Required                        |
| Reduced motion                   | Required                        |
| Persistent link underlining      | Strong candidate                |
| Increased spacing/density        | Evaluate later                  |
| Alternate visualization palettes | Evaluate when needed            |
| Generic color-blind page filters | **Do not implement by default** |


Accessibility personalization must **not** be used as a substitute for an accessible default experience.

Color-blind accessibility should primarily come from correct design:

- never encode meaning using color alone;
- provide labels/icons/shapes/patterns as appropriate;
- validate semantic palettes;
- provide alternative visualization treatments where useful.

A generic page-wide color filter may distort images and semantic colors and should not be added without evidence that it improves accessibility.

Accessibility preferences can initially persist locally and could later attach to authenticated profiles.

---

# 8. Design System - **Locked Direction**

MyKMHub should include a **live Design System section**.

This is not intended to become a bespoke component-library project.

It documents and demonstrates the actual system MyKMHub uses.

### Initial structure

**Foundations**

- color;
- typography;
- spacing;
- responsive behavior;
- accessibility principles.

**Components**

- live Spectrum 2 components actually used by MyKMHub.

**Patterns**

- reusable combinations of components supporting common tasks.

Potential examples:

- search + filtering;
- forms and validation;
- progressive disclosure;
- confirmations;
- task/status displays;
- dashboard patterns;
- empty/error/loading states;
- workflows.

**Accessibility**

- baseline requirements;
- keyboard/focus behavior;
- contrast;
- responsive accessibility;
- personalization;
- testing expectations.

**Rationale**

- why Spectrum 2 was selected;
- why customization is intentionally limited;
- when customization is justified.

### Tailoring

Initial customization should be minimal, likely beginning with basic MyKMHub branding/accent choices.

Architecture should permit later controlled theme customization.

A future Design System UI could allow visitors/users to experiment with approved settings such as:

- accent/theme;
- light/dark/system;
- accessibility preferences;
- live component previews.

Do **not** build a complete design-system authoring application unless a future requirement justifies it.

---

# 9. Information Architecture Status

**Final IA is NOT locked.**

An earlier IA was developed and should be refined rather than discarded.

Concepts included:

- Home
- HCD Director Toolkit
- HCD Operations
- Governance
- Knowledge Management
- AI / AI-assisted HCD
- Accessibility
- Process Improvement
- Tools
- Design System
- Patterns
- Templates
- Portfolio / Case Studies
- Resources
- About / Career
- potentially work/task management

Recent ideation suggests some of these should probably be **contexts/views rather than separate top-level silos**.

Do not redesign the IA prematurely.

---

# 10. Important Content Architecture Principle

Avoid forcing every resource into one hierarchical folder.

Distinguish:

### Content

Knowledge, methods, guidance, frameworks, references, case studies, career evidence.

### Tools

Things users can actually execute or interact with.

### Views/contexts

Ways those resources are surfaced for different purposes.

Example:

An AI-assisted research synthesis application might simultaneously be tagged:

**Tool + AI + HCD + Research + Portfolio**

It should be maintained once and surfaced in multiple contexts.

---

# 11. Reusable Content Model - **Direction, not finalized schema**

Likely content/object types:

- Tool
- Pattern
- Method
- Framework
- Governance/Operating Model
- Resource
- Case Study
- Template
- Design-System Component
- Guidance/Article

Potential shared metadata:

- Title
- Summary
- Type
- Domain/context
- Tags
- Visibility: public/private
- Status
- Related tools
- Related case studies
- Related methods
- Related resources
- External URL
- Live application route

This should enable contextual discovery without duplicate content.

---

# 12. Governance / Operating Models - **Concept**

Governance should not automatically become separate HCD, AI, KM, automation, accessibility, and process-improvement silos.

Explore a reusable governance/operating-model structure that can be applied across:

- HCD;
- AI;
- automation;
- KM;
- accessibility;
- process improvement.

This remains an IA/content-design question.

---

# 13. Tools Library - **High Priority**

MyKMHub should contain a **Tools Library** spanning relevant domains such as:

- HCD;
- AI;
- KM;
- accessibility;
- process improvement;
- automation.

Tools may be:

- applications hosted directly by MyKMHub;
- embedded/connected capabilities;
- external tools;
- curated links/resources.

Some existing portfolio projects should eventually become **live usable applications**.

---

# 14. Relationship Between Tools and Portfolio - **Strong Direction**

Avoid duplicating information.

A project can have two views:

### Tool

**Use it**

Focus on:

- purpose;
- inputs;
- outputs;
- instructions;
- live application.

### Case Study / Portfolio

**Why/how it was built**

Focus on:

- problem;
- context/research;
- insights;
- design decisions;
- iterations;
- accessibility;
- technical approach;
- outcomes;
- lessons learned.

The Tool and Case Study should reference the same underlying project rather than becoming independent copies.

Example actions:

**Open Tool | View Case Study | Related Methods**

---

# 15. Knowledge Hub / KM - **High Priority Concept**

The Knowledge Hub may eventually include:

- methods;
- standards;
- frameworks;
- external resources;
- tools;
- references;
- templates;
- curated bookmarks;
- contextual collections.

A future browser bookmark/favorites ingestion capability is desired.

Imported resources could support:

- tags;
- descriptions;
- context;
- categories;
- relationships;
- public/private visibility.

One resource could then automatically appear on multiple contextual pages without duplication.

---

# 16. Public vs. Private Architecture

### Public - current focus

The public site should provide useful Director-level resources rather than merely advertising them.

Examples:

- methods;
- frameworks;
- operating models;
- governance;
- tools;
- patterns;
- templates;
- resources;
- case studies;
- live design system.

### Private - future possibility

Potential future authenticated capabilities:

- personal/organizational KM;
- projects;
- research repositories;
- findings/insights;
- tasks/workflows;
- dashboards;
- alerts;
- organizational evidence;
- private bookmarks;
- AI synthesis;
- HCD portfolio management.

Design for this possibility without building it into v1.

**Important:** hidden URLs are not privacy. Future private functionality requires actual authentication and server-side authorization.

---

# 17. Career Archive - **Future / Not v1**

Potential future capability:

A structured source of truth for career history containing:

- roles;
- projects;
- accomplishments;
- systems;
- technologies;
- skills;
- contexts;
- evidence;
- metrics;
- keywords;
- portfolio relationships.

The desired model is:

**Career Archive → context/target selection → relevant evidence → generated output**

Potential outputs:

- tailored resumes;
- bios;
- interview preparation;
- project histories;
- capability statements;
- portfolio material;
- accomplishment inventories.

The longer-term objective is to migrate current custom GPT-based resume/career workflows into a more usable MyKMHub UI.

Do not prioritize this for v1.

---

# 18. AI Tools - **Future / Incremental**

Longer term, MyKMHub may provide a unified interface for capabilities currently implemented through:

- custom GPTs;
- Gemini Gems;
- future AI tools/agents.

Users should interact with the **capability**, rather than needing to understand which underlying AI platform implements it.

Potential future AI intelligence capability:

- relevant AI developments;
- concepts/trends;
- personalized areas of interest;
- potentially robotics developments.

Potential AI/robotics investment intelligence is a **later/private capability**, not v1.

---

# 19. Process Improvement

Business/process improvement should remain part of the MyKMHub conceptual model.

It naturally intersects with:

- HCD;
- KM;
- automation;
- AI;
- service design;
- workflow analysis;
- organizational improvement.

Do not automatically create it as an isolated silo.

---

# 20. Vibe Coding / AI-Assisted Development - **Future Content**

Potential future reference/playbook based on lessons learned developing MyKMHub:

- AI-assisted coding;
- requirements;
- design-system reuse;
- accessibility;
- Git/version control;
- validation;
- guardrails;
- lessons learned;
- where human judgment remains necessary.

This could become both content and portfolio evidence.

Not a v1 dependency.

---

# 21. Director Dashboard / Workflow - **Future**

Potential private or demonstration capability:

- tasks;
- workflows;
- alerts;
- insights;
- references;
- priorities;
- project visibility;
- HCD portfolio status.

Spectrum 2's existing components/patterns should be evaluated before custom task/workflow UI is created.

Live workflow/task patterns may eventually appear within the Design System and/or Portfolio even before a full dashboard exists.

---

# 22. Proposed MVP Boundary

Current recommended MVP:

### Public

- Home
- HCD Director Toolkit
- Tools Library
- Knowledge/Resources
- Live Design System
- Portfolio/Case Studies
- About

### Include enough real content to demonstrate

- at least one useful Director resource;
- at least one live tool;
- its corresponding case study;
- initial design-system documentation and live components/patterns.

### Do not fill navigation with empty future sections.

The underlying architecture can accommodate future capabilities without advertising unfinished functionality.

---

# 23. Recommended Development Strategy

Build **thin vertical slices**, not every page shell first.

Suggested sequence:

### Phase 1 - Foundation

Accessible Spectrum 2 site shell:

- semantic landmarks;
- responsive header/navigation;
- main;
- footer;
- skip navigation;
- focus behavior;
- accessibility foundations;
- initial preference architecture;
- scalable content structure.

### Phase 2 - Core public experience

Build:

1. Home
2. Tools Library
3. First live tool
4. Corresponding case study
5. Live Design System
6. HCD Director Toolkit landing experience
7. Knowledge/Resources
8. About

### Phase 3 - Content and capability expansion

Populate high-value Director resources and begin connecting:

**knowledge ↔ tools ↔ methods ↔ patterns ↔ portfolio**

### Phase 4+

Evaluate:

- private workspace;
- Career Archive;
- AI tool interfaces;
- bookmark ingestion;
- Director dashboard;
- AI intelligence;
- organizational deployments.

---

# 24. Homepage Direction - **Not yet designed**

Do **not** spend significant time designing bespoke header/hero aesthetics before seeing Spectrum 2 working with real content.

Potential positioning:

> **MyKMHub**  
> Practical tools, methods, patterns, and guidance for leading human-centered design, knowledge management, AI-enabled workflows, accessibility, and organizational improvement.

Potential primary pathways:

**Explore the Toolkit | Use Live Tools | Browse Methods & Patterns | View Case Studies**

These are working concepts, not locked copy.

---

# 25. Header / Site Shell Strategy - **Locked Approach, not locked design**

Define functional requirements first.

Initial header needs likely include:

- MyKMHub identity;
- primary navigation;
- accessibility/preferences;
- responsive/mobile navigation;
- search when sufficient content exists to justify it.

Do not pre-specify:

- custom header height;
- bespoke hover states;
- custom focus styling;
- elaborate shadows;
- arbitrary radii;
- decorative navigation behavior.

Use Spectrum-native behavior first, then evaluate.

---

# 26. Advisor / Decision-Making Requirement

During development, do **not** implement ideas mechanically.

Flag proposed decisions that may:

- reduce accessibility;
- conflict with WCAG;
- create unnecessary technical debt;
- undermine responsiveness;
- duplicate Spectrum functionality;
- complicate future public/private separation;
- create unnecessary maintenance;
- prematurely expand scope;
- harm scalability;
- conflict with previously established requirements.

Provide the tradeoffs and recommend the lower-complexity/higher-value alternative when appropriate.

---

# 27. Current Decision Log


| Decision                               | Status                                       |
| -------------------------------------- | -------------------------------------------- |
| Public HCD Director toolkit            | **Locked**                                   |
| Private capability                     | Future architectural allowance               |
| Next.js                                | **Locked**                                   |
| Vercel                                 | **Locked**                                   |
| GitHub                                 | **Locked**                                   |
| Spectrum 2                             | **Locked**                                   |
| Spectrum-first / OOB-first             | **Locked**                                   |
| Radix/shadcn/Ariakit                   | Not part of current architecture             |
| Bespoke design system                  | Rejected unless future evidence justifies it |
| Live Design System                     | **Required**                                 |
| Patterns within Design System          | **Yes**                                      |
| Minimal initial branding customization | **Yes**                                      |
| Future controlled theme customization  | Architectural allowance                      |
| WCAG 2.2 AA                            | **Required minimum**                         |
| Applicable AAA                         | Target where practical/beneficial            |
| Accessibility personalization          | **Required capability**                      |
| Semantic landmarks                     | **Required**                                 |
| Skip to main                           | **Required**                                 |
| Mouse/touch landmark navigation        | Evaluate/use where beneficial                |
| Spectrum focus treatment               | Default                                      |
| Mobile-first responsive engineering    | **Principle**                                |
| Final IA                               | **Not locked**                               |
| Tools Library                          | High priority                                |
| Knowledge Hub                          | High priority                                |
| Portfolio + live-tool relationship     | Strong direction                             |
| Career Archive                         | Future                                       |
| GPT/Gem unified UI                     | Future                                       |
| Bookmark ingestion                     | Future                                       |
| Director dashboard                     | Future                                       |
| AI trend intelligence                  | Future                                       |
| AI/robotics investment intelligence    | Later/private                                |


---

# 28. Immediate Next Task

**Build the Phase 1 accessible Spectrum 2 site shell.**

Do not resume design-system evaluation.

Do not spend time refining branding first.

Do not start building future private capabilities.

The immediate implementation should establish:

**responsive structure + landmarks + navigation + skip navigation + main + footer + accessibility foundation + scalable architecture**

using Spectrum 2 defaults wherever viable.

Then evaluate the actual rendered site before deciding what needs customization.

---

# 29. Future Commercialization / PKM Platform - **Architectural Allowance Only**

MyKMHub may eventually evolve into a commercial **Personal Knowledge Management (PKM) platform**. This is a potential future direction, not a current product requirement or commitment.

A future MyKMHub could allow individual users to maintain and interact with their own:

- knowledge and resources;
- bookmarks/references;
- tools and AI capabilities;
- projects and workflows;
- contextual collections/views;
- dashboards, alerts, and insights;
- private, shared, organizational, and public information.

This possibility reinforces several architectural principles that should be preserved now where doing so does not materially increase v1 complexity:

### Generic data model

Do not architect core entities specifically around one individual's data. Prefer reusable concepts such as Resource, Tool, Project, Collection, Person, Method, Tag, and related generic entities.

### Separation of platform and content

MyKMHub's application architecture should not be inseparable from the current owner's HCD content. Current public content is one implementation/use of the platform architecture.

### Visibility and permissions

Avoid assumptions that all information will always be public. Future content may require public, private, shared, or organizational visibility.

Actual private functionality must eventually use authentication and server-side authorization. Hidden routes are not considered private.

### Multi-user / multi-tenant awareness

Avoid architectural choices that would unnecessarily prevent future individual accounts or organizational deployments.

**Do not build multi-tenancy, authentication, billing, subscription management, or other commercial SaaS infrastructure during the current MVP solely to accommodate this possibility.**

### Branding

Preserve **MyKMHub** as the broader platform/brand rather than defining the brand exclusively as an HCD portfolio or Director toolkit.

The current public HCD Director toolkit is the initial implementation of MyKMHub, not necessarily the permanent boundary of the product.

### Development rule

**Architectural allowance does not equal MVP scope.**

Continue building the current public HCD Director toolkit according to the existing MVP plan. Future PKM commercialization should influence current decisions only when preserving the option is inexpensive and does not materially complicate delivery.  
  
-------------------------

**New-thread instruction:** Treat this document as the current MyKMHub baseline. Preserve distinctions between **Locked**, **Concept**, **Future**, and **TBD**. Do not infer that brainstorming items are approved requirements. When a new decision conflicts with this baseline, identify the conflict before changing direction.