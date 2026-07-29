# MyKMHub Roadmap

This roadmap records lower-priority work that should not expand the current phase prematurely. The project specification remains authoritative.

## Accessibility typography comparison

Create an Accessibility page that allows visitors to compare the five validated selectable reading fonts with common fonts that can make similar glyphs difficult to distinguish.

The comparison should include:

- Atkinson Hyperlegible Next;
- OpenDyslexic;
- system sans-serif;
- Source Serif 4;
- Source Code Pro;
- representative common fonts used only for comparison;
- ambiguous characters such as `1 l I 0 O B 8`, `rn`, and `m`;
- headings, paragraphs, numerals, punctuation, links, controls, and tabular content;
- explanation that individual reading needs vary and no single font guarantees WCAG conformance.

Before implementation, validate licensing, language coverage, available weights and styles, performance, reflow, zoom, control clipping, and compatibility with Spectrum components.

Priority: low. Revisit when the public Accessibility section is built.

## Centralized HCD evidence log

Retain the Evidence Traceability Matrix Builder as a private draft concept,
not a published tool. Its potential value is creating a shared, team-visible
evidence log so observations, interpretations, and competing views of reality
are committed to a common record rather than held by individual team members.

Before promotion beyond draft, validate:

- point of contact or evidence-owner fields;
- source, observation, interpretation, confidence, and decision fields;
- attribution, change history, disagreement, and review workflows;
- privacy, research consent, retention, and access controls;
- multi-user persistence rather than browser-local storage;
- export and interoperability requirements.

Priority: low.

## Contextual help and grounded AI content assistant

Add contextual help that can include an AI assistant capable of answering
questions about the current page, its associated effort, and the broader
MyKMHub content library.

The initial assistant should use retrieval-augmented generation rather than
answering from unconstrained model memory. Its minimum useful retrieval context
should include:

- the current page and visible section;
- structured metadata and help content for the current route;
- directly related portfolio items, tools, methods, knowledge entries, and
  efforts;
- the full published MyKMHub content index when the question requires broader
  site knowledge;
- content version and publication status so draft or private material is not
  exposed.

Expected experience:

- offer contextual prompts relevant to the current page;
- answer in plain language with links or citations to supporting MyKMHub
  content;
- distinguish sourced content from interpretation;
- state when the available content does not support an answer;
- preserve the user's page context when opening cited content;
- provide a non-AI contextual-help path for important guidance.

Accessibility requirements:

- complete keyboard operation and predictable focus management;
- screen-reader announcements that do not interrupt reading;
- user-controlled streaming or incremental responses;
- no reliance on color, animation, or a floating control alone;
- compatibility with text enlargement, reflow, reduced motion, forced colors,
  and selectable reading fonts;
- accessible conversation history, citations, loading states, and errors.

Privacy, safety, and governance requirements:

- do not send page feedback, form entries, tool workspace data, or other user
  content to a model without clear, specific consent;
- exclude private and draft content unless the authenticated user is authorized;
- defend retrieval and prompts against instruction injection in managed content;
- record the content sources and versions used for each answer;
- define retention, deletion, rate limiting, abuse prevention, and escalation;
- never present the assistant as a substitute for authoritative policy,
  accessibility testing, or professional judgment.

Implementation sequence:

1. Establish structured contextual help and stable content relationships.
2. Build a searchable published-content index with permission-aware retrieval.
3. Prototype page-scoped question answering with citations.
4. Expand retrieval to associated efforts and then the full public site.
5. Evaluate answer grounding, retrieval quality, accessibility, latency, cost,
   privacy, and failure behavior before wider release.

Priority: backlog. Revisit after the normalized content model, Knowledge area,
contextual help, feedback, authentication, and content-permission foundations
are stable.
