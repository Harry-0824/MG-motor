# AGENTS.md

AI coding work in this repository must stay small, issue-driven, and scoped to the files requested by the issue or user.

## Project Profile

- Project: MG Motor brand showcase frontend.
- Stack: React 17, React Router DOM 5, Ant Design 5, styled-components 6, lucide-react.
- Build system: Create React App with `react-scripts`.
- Deployment target: Netlify.
- API integration: use `REACT_APP_API_URL` through `src/services/api.js`.
- Package manager: npm.

## Workflow Rules

- Start from a GitHub issue, PR comment, or explicit user request before changing code.
- Follow only the currently assigned GitHub Issue; do not infer scope from unrelated history.
- Start implementation from the Issue `Suggested Files`, then expand only when the Issue requires it.
- Keep each task narrow; avoid broad refactors or unrelated cleanup.
- Change only the files required for the task.
- Keep the final diff minimal and reviewable.
- Do not create extra markdown files unless explicitly requested.
- Do not add `WORKFLOW.md`, `TODO.md`, `PROJECT_BRIEF.md`, `ARCHITECTURE.md`, `NOTES.md`, or similar side documents unless the user asks for that exact file.
- Do not modify application code during documentation-only tasks.
- Do not modify `package.json` or lockfiles unless dependency work is explicitly requested.
- Do not add or upgrade dependencies unless explicitly requested by the issue.
- Do not commit `.env`, API keys, secrets, tokens, credentials, or local machine config.
- Do not migrate away from Create React App.
- Do not upgrade React Router or use React Router v6 APIs.
- Do not migrate routing, build tooling, or perform full-site redesigns unless explicitly requested.
- Do not change Netlify settings, `netlify.toml`, or other deployment config unless explicitly requested.
- Do not edit files under `public/media/` unless explicitly requested.

## Branch Strategy

- `main`: stable branch for reviewed work.
- `feature/*`: new user-facing behavior or application features.
- `fix/*`: bug fixes and regressions.
- `docs/*`: documentation-only changes.

## Post-Merge Cleanup Rules

After a PR is successfully merged, clean up the PR head branch when it is safe to do so.

Delete both:

- the remote PR branch
- the local PR branch

Only clean up branches that clearly belong to the merged PR and match these work branch patterns:

- `feature/*`
- `fix/*`
- `docs/*`

Do not delete:

- `main`
- `master`
- `develop`
- `release/*`
- `production/*`
- protected branches
- branches that are not clearly the merged PR head branch
- branches with unmerged or uncertain work

Recommended cleanup commands when safe:

```bash
git checkout main
git pull origin main
git branch -d <branch-name>
git push origin --delete <branch-name>
```

Do not use `git branch -D` unless the user explicitly approves a force delete.

If the environment or tool cannot delete the branch, report the exact branch name and the manual cleanup commands needed.

## UI and Design Rules

For UI-related changes, always read and follow `DESIGN.md`.

Do not introduce unrelated visual styles, new UI libraries, or broad redesigns unless explicitly requested by the GitHub Issue.

Each UI task should stay limited to the page, section, or component group described in the Issue.

Do not copy visual references pixel-by-pixel. Use them only as design direction and convert them into maintainable implementation.

## Development Commands

- `npm start`: run the local development server on port 3000.
- `npm run build`: create a production build.
- `npm test`: run the test suite.

## Code Conventions

- Use `.jsx` for React files.
- Prefer function components and React Hooks.
- Keep styled-components styles in each component directory's `styles.jsx` when following existing structure.
- Use React Router v5 patterns: `Switch`, `Route`, and related v5 APIs.
- Use `React.lazy()` and `Suspense` for page-level lazy loading when matching existing pages.
- Use `apiRequest()` from `src/services/api.js` for API calls; do not call `fetch` or `axios` directly from components.
- Follow existing styling patterns and theme variables for MG brand colors instead of hardcoding new color values.

## PR Checklist

- Confirm the diff matches the issue scope.
- Confirm no unrelated files changed.
- For documentation-only changes, verify by reading the rendered or raw markdown.
- In the PR description, explain what changed and how reviewers can check it.

## Docs-Only Validation Guidance

- For docs-only rule updates, no build/test command is required unless the issue explicitly asks for it.
- Validate with git diff checks that only the intended documentation files changed (for this repo task type, typically `AGENTS.md`).
