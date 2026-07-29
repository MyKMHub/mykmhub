# MyKMHub Context-Driven Knowledge Model

Status: Working foundation  
Last reviewed: July 29, 2026

## Purpose

MyKMHub should maintain a record once and surface it wherever it is useful.
This continues a KM pattern previously used across SharePoint lists and context
pages: structured records share metadata, a selected context filters the
records, and static orientation content can be added when a context needs more
than an automatically assembled view.

The enduring principle is:

> Enter information once, describe it consistently, and let context assemble
> the appropriate working view.

This model supports the current public site without requiring the future
private personal knowledge workspace or project tracker to be built now.

## Separate record type from context

A single context field should not mix what a record is, what it concerns, who
can see it, and whether action is required. MyKMHub should use distinct facets.

| Facet | Purpose | Examples |
| --- | --- | --- |
| Record type | What the record is | Tool, procedure, link, decision, event |
| Context/domain | What it concerns | Development, accessibility, KM, training |
| Effort | Body of work it belongs to | MyKMHub, DOJ modernization |
| Line of effort | Workstream within an effort | Theme development, content migration |
| Audience | Who it is for | Public visitor, administrator, project team |
| Access | Who may retrieve it | Public, private, sensitive |
| Lifecycle | Knowledge maturity | Draft, active, validated, superseded, archived |
| Action state | Delivery state when applicable | Backlog, planned, active, blocked, complete |
| Relationship | How records connect | Supports, uses, documents, replaces, related to |

The current public architecture only needs a subset: record type, context,
effort, relationships, access, lifecycle, and last-verified date.

## Record families

### Long-term knowledge

- notes and lessons learned;
- links and references;
- documents and templates;
- processes, procedures, subprocedures, and how-to guidance;
- decisions and supporting evidence;
- events;
- contacts and organizations;
- tools, systems, and environments;
- discussions or comments;
- contexts and saved views.

### Active work

- projects;
- tasks and subtasks;
- owners;
- due dates;
- backlog items;
- dependencies, risks, and blockers;
- status updates and executive summaries.

Knowledge and active work should relate without becoming the same record.
“Deploy MyKMHub” is a reusable procedure. “Deploy version 1.2” is a task that
uses that procedure.

## Context Hub pattern

A future authenticated Context Hub can use one reusable route and a context
selector to assemble:

1. static orientation and current information;
2. procedures, decisions, documents, links, notes, and lessons;
3. contacts, tools, systems, and environments;
4. events, discussions, and recent changes;
5. connected efforts, projects, tasks, and backlog items.

A context can later receive a tailored page while continuing to use the same
underlying records. Generic filtered views should come before unique pages.

## Historical context vocabulary

The earlier vocabulary remains useful source material but should not be
adopted as one undifferentiated field. Candidate navigation groupings include:

- **Operations:** administration, facilities, finance, logistics, and travel;
- **People:** contacts, newcomers, personnel, and duties;
- **Communications:** communications, discussions, and memos;
- **Knowledge:** KM, references, documents, and templates;
- **Ways of working:** policy, process, procedure, and training;
- **Continuity and protection:** COOP, medical, safety, and security;
- **Planning and delivery:** management, projects, tasks, and calendars;
- **Technical:** development, IT, systems, and maps.

These groupings are hypotheses for navigation and saved views. Real content
and retrieval needs should determine the final controlled vocabulary.

## Implementation boundary

Now:

- use structured records for public portfolio, tools, methods, resources,
  procedures, decisions, and operational links;
- preserve explicit relationships and access classifications;
- document the model and test it against real MyKMHub records.

Later:

- add authentication and permission-aware private records;
- add contacts, calendars, discussions, and personal source connectors;
- prototype the Context Hub;
- add an adjacent project, task, and backlog tracker;
- evaluate AI-assisted classification and relationship suggestions with human
  review.

The [resource registry](resources/environments.json) is the first small
implementation of this model. The [operations guide](OPERATIONS.md) is a
human-readable contextual view over those resources and related procedures.
