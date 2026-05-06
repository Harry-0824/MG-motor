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
- Keep each task narrow; avoid broad refactors or unrelated cleanup.
- Change only the files required for the task.
- Do not create extra markdown files unless explicitly requested.
- Do not add `WORKFLOW.md`, `TODO.md`, `PROJECT_BRIEF.md`, `ARCHITECTURE.md`, `NOTES.md`, or similar side documents unless the user asks for that exact file.
- Do not modify application code during documentation-only tasks.
- Do not modify `package.json` or lockfiles unless dependency work is explicitly requested.
- Do not migrate away from Create React App.
- Do not upgrade React Router or use React Router v6 APIs.
- Do not edit files under `public/media/` unless explicitly requested.

## Branch Strategy

- `main`: stable branch for reviewed work.
- `feature/*`: new user-facing behavior or application features.
- `fix/*`: bug fixes and regressions.
- `docs/*`: documentation-only changes.

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
