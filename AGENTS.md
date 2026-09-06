# Project: brunoanhaia.github.io

Personal portfolio website for Bruno Anhaia, deployed to GitHub Pages.

## Tech Stack

| Layer          | Technology                                                     |
| :------------- | :------------------------------------------------------------- |
| Language       | TypeScript (keep on major version **5** or **6**; avoid **7**) |
| UI Framework   | React 19                                                       |
| Component Lib  | MUI (Material UI) 9 + Emotion                                  |
| Routing        | React Router 7 (`react-router-dom`)                            |
| Build Tool     | Vite 8 (uses native `resolve.tsconfigPaths`)                   |
| Linter         | ESLint 9 — Flat Config (`eslint.config.js`)                    |
| Formatter      | Prettier (`.prettierrc`)                                       |
| Test Runner    | Vitest 5 + Testing Library + jsdom                             |
| i18n           | i18next / react-i18next                                        |
| Analytics      | Firebase (config injected via Vite env vars at build time)     |
| Deployment     | GitHub Actions → `gh-pages` branch (via `peaceiris/actions-gh-pages`) |

## Project Structure

```
├── .agents/
│   └── skills/              # Modular runbooks & skill guides
├── .github/
│   └── workflows/
│       └── build-release.yaml # CI: install → lint → test → build → deploy to gh-pages
├── env/                     # Vite env files directory (envDir: './env')
├── public/                  # Static assets served as-is
├── src/
│   ├── components/          # Shared UI components (ui-<name> pattern)
│   ├── contexts/            # React Contexts (theme, github-profile)
│   ├── hooks/               # Custom hooks (e.g., use-dark-mode, use-github-profile)
│   ├── pages/               # Route pages (main, projects, education, work)
│   ├── providers/           # AppProvider — wraps theme + contexts
│   ├── types/               # Shared TypeScript types
│   ├── utils/               # Utility functions
│   ├── router.tsx           # React Router config with lazy-loaded routes
│   ├── i18n.ts              # i18next configuration
│   ├── index.tsx            # App entry point
│   └── app.tsx              # Root component with Suspense boundary
├── AGENTS.md                # Canonical AI agent instructions
├── README.md                # Project documentation
├── eslint.config.js         # ESLint 9 flat config
├── tsconfig.json            # TypeScript config with path aliases
├── vite.config.ts           # Vite 8 build config
└── package.json
```

## Path Aliases

Defined in `tsconfig.json` and resolved natively by Vite (`resolve.tsconfigPaths: true`):

| Alias            | Maps to            |
| :--------------- | :------------------ |
| `@src/*`         | `./src/*`           |
| `@components/*`  | `./src/components/*`|
| `@pages/*`       | `./src/pages/*`     |
| `@hooks/*`       | `./src/hooks/*`     |

## State Management

Global state uses **React Context** (no external state library). Recoil was previously used and has been fully removed.

- `GitHubProfileContext` — holds GitHub user/repo data fetched from the GitHub public API.
- `ThemeContext` — holds the current light/dark palette mode.
- Both are provided via `AppProvider` (`src/providers/app.provider.tsx`).

## Key Patterns & Architectural Decisions

- **Lazy routes**: All pages use React Router's `lazy` property for code splitting.
- **Manual chunks**: Vite rollup config splits `@firebase`, `react-router`, `react-dom`, and `i18next` into separate chunks.
- **MUI theming**: Component customizations use the `sx` prop, never MUI system props directly on elements (those were removed during the MUI 9 migration).
- **Component structure**: Each component lives in `src/components/ui-<name>/` with its main file, types, and a barrel `index.ts`.
- **Page structure**: Each page lives in `src/pages/<name>/` with `<name>-page.tsx`, `<name>-page.type.ts`, and a barrel `index.ts`.

## NPM Scripts

| Script      | Description                            |
| :---------- | :------------------------------------- |
| `npm run dev`     | Start Vite dev server             |
| `npm run build`   | TypeScript check + Vite production build |
| `npm run lint`    | ESLint with `--max-warnings 0`    |
| `npm test`        | Vitest (single run)               |
| `npm run preview` | Preview production build locally  |
| `npm run release` | Bump version via standard-version |

## CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/build-release.yaml`) triggers on pushes to `develop` (running on Node.js LTS `lts/*`):

1. `npm ci` — install dependencies
2. `npm run lint` — ESLint verification
3. `npm test` — Vitest unit tests execution
4. `npm run build` — compile (Firebase secrets are injected as env vars from GitHub Secrets)
5. `standard-version` patch bump + push tags
6. Deploy `dist/` to `gh-pages` branch

**GitHub Pages** must be configured to serve from the `gh-pages` branch (root).

**CodeQL** is enabled via GitHub's Default Setup — no custom workflow is needed.

---

## Skills Available

Detailed procedural runbooks are located in `.agents/skills/`:

- **[New Page](file:///.agents/skills/new-page/SKILL.md)** — Step-by-step guide to adding a new route page in `src/pages/` and updating the router and navigation.
- **[New Component](file:///.agents/skills/new-component/SKILL.md)** — Conventions and guidelines for creating reusable UI components in `src/components/`.
- **[Dependency Update](file:///.agents/skills/dependency-update/SKILL.md)** — Safe procedure for updating npm dependencies without regressions or warnings.
- **[Deploy Troubleshooting](file:///.agents/skills/deploy-troubleshoot/SKILL.md)** — Debugging checklist for deployment issues on GitHub Pages.
- **[Accessible UI Components](file:///.agents/skills/accessible-ui-components/SKILL.md)** — Web accessibility (WAI-ARIA, keyboard navigation, contrast, screen readers) for React 19 & MUI 9.
- **[Clean Code Refactoring](file:///.agents/skills/clean-code-refactoring/SKILL.md)** — Clean Code rules (early returns, shallow nesting, explicit blocks, strict types, immutability).
- **[Isolated Component Design](file:///.agents/skills/isolated-component-design/SKILL.md)** — Component-Driven Development for pure, decoupled UI elements under `src/components/`.
- **[React Clean Architecture](file:///.agents/skills/react-clean-architecture/SKILL.md)** — Custom hooks for logic, declarative JSX, React Context usage, and separation of concerns.
- **[Token Usage Best Practices](file:///.agents/skills/token-usage-best-practices/SKILL.md)** — Context window and token optimization principles for AI coding agents.

---

## Rules for Agents

### Git Workflow

- **Never commit directly to `develop`**. Always create a feature/fix/docs/refactor branch and open a Pull Request.
- Use **Conventional Commits** (`feat:`, `fix:`, `refactor:`, `chore:`, `docs:`, `ci:`, `test:`).
- **PR titles and descriptions must be in English.**
- Branch naming: `<type>/<short-description>` (e.g., `refactor/migrate-vitest`, `fix/nav-bar-alignment`, `docs/agent-instructions`).
- **Keep branches up-to-date with `develop`**: Before opening or updating a Pull Request, always pull or rebase/merge the latest `origin/develop` into your branch.
- **Never submit or merge an out-of-sync PR**: Ensure that all unit tests (`npm test`), lint (`npm run lint`), and build (`npm run build`) pass against the latest `develop` state to prevent "works on my branch but breaks develop" regressions.

### Code Quality

- All changes must pass `npm run lint`, `npm test`, and `npm run build` with **zero warnings and zero errors** before committing.
- Do not disable ESLint rules without justification.
- Unused imports are caught by `eslint-plugin-unused-imports` (configured as errors).

### Dependencies

- **Do NOT read `package-lock.json`** — it is very large and should never be loaded into context.
- **TypeScript must stay below version 7.** Use the latest 5.x or 6.x.
- When updating dependencies, check for breaking changes and compatibility before upgrading.
- Prefer removing deprecated libraries over keeping them (e.g., Recoil was removed in favor of React Context).

### Environment & Tooling

- Node.js is managed via **nvm**. The binary is at `~/.nvm/versions/node/<version>/bin`.
- When running `node`, `npm`, or `npx` commands, ensure the nvm path is in `PATH`.
- Environment variables for Firebase are prefixed with `VITE_` and stored in GitHub Secrets (not committed to the repo).

### Documentation & Requirement Synchronization

- When any architectural decision, script, dependency constraint, or project requirement is modified:
  - Update `AGENTS.md` and `README.md` to reflect the change immediately.
  - Update the relevant runbooks under `.agents/skills/` so procedural guides stay consistent and accurate.
  - Never leave documentation or skills in an outdated or contradictory state.
