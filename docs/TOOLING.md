# MyKMHub Tooling and Alternative Workflows

Status: Public-safe working guide  
Last verified: July 29, 2026

The machine-readable [tool catalog](resources/tools.json) is the canonical
source for tool roles, locations, limitations, alternatives, and related
resources. This guide explains the practical distinctions.

## The repository is the continuity point

Codex, Cursor, PowerShell, and graphical Git clients are different interfaces
over the same local project. None of them should become the only place where
project intent or history exists.

```text
Development interface
  Codex | Cursor | manual editor
             |
             v
Local files at C:\Projects\mykmhub
             |
             v
Local Git history
             |
             v
GitHub main
             |
             v
Vercel deployment
             |
             v
mykmhub.com
```

The project specification, roadmap, operations guide, structured registries,
and Git history make the workflow recoverable when a particular editor or AI
tool is unavailable.

## Overlapping tools

### Codex and Cursor

| Consideration | Codex | Cursor |
| --- | --- | --- |
| Current MyKMHub role | Primary implementation collaborator | Optional editor and alternative AI workflow |
| Location | Local workspace with cloud AI service | Local application with cloud AI features |
| Strength | Repository-wide implementation, validation, and Git workflow | Direct manual browsing, editing, and integrated terminal |
| Must remain open? | Only while actively using it | No |
| Source of truth? | No | No |
| Main caution | Confirm commits are pushed when publication is expected | Avoid stale unsaved buffers during external edits |

Cursor can take over implementation when Codex is unavailable. It can edit the
same files, run the same scripts, and use the same Git repository. Before
switching tools:

1. save or close active editor buffers;
2. run `git status --short --branch`;
3. review the latest commit;
4. confirm whether local commits have been pushed.

### PowerShell, integrated terminals, and graphical Git

PowerShell is the directly verified command interface. Cursor's terminal can
run the same PowerShell commands. A graphical Git client can provide visual
commit and push operations, but the exact client installed on the device has
not been established as a project dependency.

Regardless of interface, verify Git itself:

```powershell
git status --short --branch
git log --oneline --decorate -10
git fetch origin
git rev-list --left-right --count origin/main...main
```

Do not assume that a graphical “commit” operation also pushed to GitHub.

### Git, GitHub, and Vercel

These tools are sequential layers, not substitutes.

| Layer | What it proves | What it does not prove |
| --- | --- | --- |
| Local Git commit | A recoverable local source milestone exists | GitHub or production received it |
| GitHub `main` | The remote source contains the commit | Vercel built it successfully |
| Vercel deployment | A build completed for a commit | The custom domain or browser cache shows it |
| mykmhub.com | The production route responds | Every workflow and browser preference is correct |

The most important operational lesson is:

> A local commit does not publish the site. GitHub must receive the commit
> before Vercel can deploy it.

## Preferred and alternate workflows

### Implement a change

Preferred:

1. Collaborate with Codex against `C:\Projects\mykmhub`.
2. Review the resulting files and behavior.
3. Run validation.
4. Commit and push through Codex/Git.

Alternate:

1. Open the repository in Cursor.
2. Inspect `git status` and the latest commit.
3. Edit manually or use Cursor AI.
4. Run the same validation scripts.
5. Commit and push through Cursor, PowerShell, or a verified Git client.

### Start and inspect locally

Preferred or alternate command interface:

```powershell
cd C:\Projects\mykmhub
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The terminal must remain
running for the local development server, but Cursor does not need to remain
open when the server was started elsewhere.

### Validate without Vercel

```powershell
npm run lint
npm run build
npm run test:a11y
```

A successful local production build provides hosting-independent evidence
that the source can compile. It does not publish or verify the domain.

### Publish and verify

```powershell
git fetch origin
git rev-list --left-right --count origin/main...main
git push origin main
```

Then verify:

1. the expected commit in the
   [GitHub repository](https://github.com/MyKMHub/mykmhub);
2. the matching production deployment in the
   [Vercel project](https://vercel.com/my-kmh-ub/mykmhub);
3. the changed route on [mykmhub.com](https://mykmhub.com).

## Local, cloud, and hybrid boundaries

| Boundary | Examples | Continuity concern |
| --- | --- | --- |
| Local | Working directory, Git, PowerShell, Cursor | Device loss and unpushed commits |
| Cloud | GitHub, Vercel, production domain | Account access, permissions, and service availability |
| Hybrid | Codex, Cursor AI, npm registry | Local source plus network-dependent capability |
| Browser-local | Theme and accessibility preferences | Not synchronized across browsers or devices |

GitHub protects pushed source history. It does not protect private secrets,
future databases, external media, browser preferences, registrar access, or
cloud account recovery.

## Tool-selection rule

Choose a tool based on the task rather than treating the newest interface as a
replacement for every layer:

- use Codex or Cursor to change source;
- use Git to record source history;
- use GitHub to preserve and share that history;
- use Vercel to build and host it;
- use the public site to verify the delivered experience;
- use the operations guide and registries to resume or recover the workflow.

## Related records

- [Operations and continuity guide](OPERATIONS.md)
- [Context-driven KM model](KM-CONTEXT-MODEL.md)
- [Environment and resource registry](resources/environments.json)
- [Tool catalog](resources/tools.json)
- [Project specification](MYKMHUB-PROJECT-SPEC.md)
