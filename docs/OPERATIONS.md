# MyKMHub Operations and Continuity Guide

Status: Public-safe working runbook  
Last verified: July 29, 2026

This guide explains how to resume, run, validate, publish, and verify MyKMHub.
The machine-readable [environment and resource registry](resources/environments.json)
is the canonical directory of locations and relationships.

This repository is public. Do not add passwords, API keys, access tokens,
recovery codes, private contacts, billing details, or secret environment values.

## Resume work after time away

1. Open PowerShell, Codex, Cursor, or another terminal.
2. Change to the working directory:

   ```powershell
   cd C:\Projects\mykmhub
   ```

3. Read the current [project specification](MYKMHUB-PROJECT-SPEC.md) and
   [roadmap](ROADMAP.md).
4. Check the repository:

   ```powershell
   git status --short --branch
   git log --oneline --decorate -10
   git fetch origin
   git rev-list --left-right --count origin/main...main
   ```

5. Interpret the final two numbers as remote-only and local-only commits.
   `0 0` means local and GitHub histories match. `0 3` means three local
   commits still need to be pushed.
6. Review unfinished work and the latest commit before starting another change.
7. Start the local site and open [http://localhost:3000](http://localhost:3000).

## System and responsibility map

| Tool or location | Runs where | Role | Required? | Alternative |
| --- | --- | --- | --- | --- |
| `C:\Projects\mykmhub` | Local device | Current working source | Yes | Restore a clone from GitHub |
| Codex | Local workspace with cloud AI | Implementation, testing, and Git workflows | No | Cursor or manual development |
| Cursor | Local device | Manual editor and optional AI coding | No | Codex or another editor |
| PowerShell | Local device | Commands and diagnostics | No | Cursor terminal or another shell |
| Git | Local device | Commits, branches, and source history | Yes | Graphical Git client over the same repository |
| GitHub | Cloud | Remote source history and deployment source | Yes for current publishing | Another Git remote |
| Vercel | Cloud | Next.js builds and deployments | Yes for current hosting | Another compatible host |
| mykmhub.com | Public cloud | Production experience | Yes | Vercel deployment URL during diagnosis |
| Browser storage | Individual browser | Theme and accessibility preferences | No | Reset and reconfigure per browser |

Codex and Cursor are alternative interfaces over the same files. Neither is
the source of truth. Avoid changing the same file in both at the same time.
Cursor does not need to remain running while Codex works.

Vercel is not an alternative to Codex or Cursor. It hosts builds produced from
the GitHub repository.

## Important locations

- Working directory: `C:\Projects\mykmhub`
- Local site: [http://localhost:3000](http://localhost:3000)
- Production: [https://mykmhub.com](https://mykmhub.com)
- GitHub organization: [https://github.com/MyKMHub](https://github.com/MyKMHub)
- GitHub repository: [https://github.com/MyKMHub/mykmhub](https://github.com/MyKMHub/mykmhub)
- Vercel project: [https://vercel.com/my-kmh-ub/mykmhub](https://vercel.com/my-kmh-ub/mykmhub)
- Vercel domain settings: [https://vercel.com/my-kmh-ub/mykmhub/settings/domains](https://vercel.com/my-kmh-ub/mykmhub/settings/domains)
- Local Theme Lab: [http://localhost:3000/design-system/theme-lab](http://localhost:3000/design-system/theme-lab)
- Production Theme Lab: [https://mykmhub.com/design-system/theme-lab](https://mykmhub.com/design-system/theme-lab)

The registry should receive future high-value administrative locations so they
remain discoverable by context rather than buried in bookmarks.

## Run locally

Install dependencies when setting up a new clone or after dependencies change:

```powershell
npm install
```

Start development:

```powershell
npm run dev
```

Next.js normally uses port 3000. If another process uses it, the terminal may
offer 3001. Prefer finding and stopping an obsolete MyKMHub development process
instead of maintaining several accidental servers.

Press `Ctrl+C` in the terminal running the server to stop it. If the owning
process is detached, inspect the reported process identifier before using:

```powershell
taskkill /PID <verified-process-id> /F
```

Never terminate a process until its identifier and purpose have been verified.

## Validate a change

Use checks in proportion to the change:

```powershell
npm run lint
npm run build
npm run test:a11y
```

Also perform relevant manual checks:

- keyboard navigation and visible focus;
- light and dark appearances;
- zoom, reflow, and narrow viewport behavior;
- readable headings and landmarks;
- reduced motion or transparency where applicable;
- the actual workflow changed by the implementation.

Automated accessibility checks do not replace manual and assistive-technology
testing.

## Publish

The current publishing path is:

```text
Local files
  -> local Git commit
  -> push main to GitHub
  -> Vercel deployment
  -> mykmhub.com
```

Review and commit:

```powershell
git status --short
git diff --check
git diff
git add <reviewed-files>
git commit -m "Describe the milestone"
```

Synchronize and publish:

```powershell
git fetch origin
git rev-list --left-right --count origin/main...main
git push origin main
```

A local commit does not update GitHub. Vercel cannot deploy a commit that has
not been pushed.

Cursor, GitHub Desktop, or another Git client may perform the same commit and
push operations graphically. Confirm the destination branch and inspect the
same repository status afterward.

## Verify publication

1. Confirm local and remote revisions match:

   ```powershell
   git rev-parse HEAD
   git rev-parse origin/main
   ```

2. Open the [Vercel project](https://vercel.com/my-kmh-ub/mykmhub).
3. Confirm the production deployment uses the expected commit and completed
   successfully.
4. Open the changed route on [mykmhub.com](https://mykmhub.com).
5. Verify a distinctive part of the change. Do not rely only on the homepage,
   which may have a cached response.

## Diagnose “local is newer than production”

Check these transitions in order:

1. **Uncommitted:** `git status --short` lists changed files.
2. **Committed only locally:** the branch reports `ahead` of `origin/main`.
3. **Not deployed:** GitHub has the commit, but Vercel does not show a completed
   deployment for it.
4. **Deployment failed:** open the build logs in Vercel.
5. **Domain or cache issue:** the Vercel deployment URL is current but
   mykmhub.com is not.
6. **Browser-local state:** a theme or accessibility preference differs in the
   current browser.

Treat each transition as independently verifiable.

## Recovery boundaries

Git and GitHub protect source history. They do not by themselves back up:

- secrets or environment-variable values;
- future databases and private content;
- uploaded media stored outside Git;
- domain-registrar access;
- Vercel account recovery;
- browser-local preferences.

The [backup and recovery roadmap](ROADMAP.md#site-versions-backup-and-recovery)
defines the future layered recovery capability.

Maintain sensitive continuity information in a private repository, password
manager, or other approved secure system. This public guide may state that a
credential or recovery record exists and where it is managed, but must never
contain the secret value.

## Related knowledge

- [Project specification](MYKMHUB-PROJECT-SPEC.md)
- [Roadmap](ROADMAP.md)
- [Context-driven KM model](KM-CONTEXT-MODEL.md)
- [Environment and resource registry](resources/environments.json)

Future public content can derive an AI-assisted-development practice note from
this runbook without exposing private operational or recovery information.
