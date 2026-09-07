# Project: brunoanhaia.github.io

Personal portfolio website for Bruno Anhaia, deployed to GitHub Pages.

## Tech Stack

| Layer          | Technology                                                     |
| :------------- | :------------------------------------------------------------- |
| Language       | TypeScript (keep on major version **5** or **6**; avoid **7**) |
| UI Framework   | React 19                                                       |
| Component Lib  | MUI (Material UI) 9 + Emotion                                  |
| Animation      | Motion (formerly Framer Motion) + Lenis Smooth Scroll          |
| Routing        | React Router 7 (`react-router-dom`)                            |
| Build Tool     | Vite 8 (uses native `resolve.tsconfigPaths`)                   |
| Linter         | ESLint 10 — Flat Config (`eslint.config.js`)                   |
| Formatter      | Prettier (`.prettierrc`)                                       |
| Test Runner    | Vitest 5 + Testing Library + jsdom                             |
| i18n           | i18next / react-i18next (bundled local JSON locales: EN & PT-BR)|
| Deployment     | GitHub Actions → `gh-pages` branch (via `peaceiris/actions-gh-pages`) |

## Project Structure

```
├── .agents/
│   └── skills/              # Modular runbooks & skill guides
├── .github/
│   └── workflows/
│       └── build-release.yaml # CI: install → lint → test → build → deploy to gh-pages
├── public/                  # Static assets served as-is (favicon.svg, manifest.json)
├── src/
│   ├── components/          # Shared UI components (ui-<name> pattern)
│   ├── contexts/            # React Contexts (theme, language, github-profile)
│   ├── hooks/               # Custom hooks (e.g., use-smooth-scroll, use-typing-animation)
│   ├── locales/             # Localized JSON translation files (en.json, pt-BR.json)
│   ├── pages/               # Route pages (home-page single-page container)
│   ├── sections/            # Modular page sections (hero, experience, education, projects, blog, footer)
│   ├── providers/           # AppProvider — wraps theme + language + contexts
│   ├── types/               # Shared TypeScript types
│   ├── utils/               # Utility functions
│   ├── theme.ts             # "Crafted Dark" & Clean Light theme design tokens
│   ├── projects.data.ts     # Curated featured projects data
│   ├── resume.data.ts       # Structured career and education history
│   ├── router.tsx           # React Router config
│   ├── i18n.ts              # i18next configuration
│   ├── index.tsx            # App entry point
│   └── app.tsx              # Root component
├── AGENTS.md                # Canonical AI agent instructions
├── README.md                # Project documentation
├── CHANGELOG.md             # Auto-generated project changelog
├── .versionrc.json          # commit-and-tag-version changelog configuration
├── eslint.config.js         # ESLint 10 flat config
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

Global state uses **React Context** (no external state library):

- `GitHubProfileContext` — holds GitHub user/repo data fetched from the GitHub public API.
- `ThemeContext` — holds the current light/dark palette mode.
- `LanguageContext` — holds the active language (`en` / `pt-BR`) and switches i18next runtime resources.
- All contexts are provided via `AppProvider` (`src/providers/app.provider.tsx`).

## Key Patterns & Architectural Decisions

- **Single-Page Architecture**: High-performance single page document with smooth scroll and deep-linking section anchors (`#hero`, `#experience`, `#education`, `#projects`, `#blog`).
- **Motion & Micro-Interactions**: Declarative viewport animations with `motion/react`, spring progress bar, and cursor spotlight highlights.
- **Synchronous Bundled i18n**: Translations are bundled as static JSON in `src/locales/` ensuring 100% offline resilience without external runtime database dependencies.
- **MUI 9 Theming**: Component customizations use the `sx` prop, never MUI system props directly on elements.
- **Component structure**: Each component lives in `src/components/ui-<name>/` with its main file, types, and a barrel `index.ts`.
- **Section structure**: Each section lives in `src/sections/<name>/` with its component and a barrel `index.ts`.

## NPM Scripts

| Script      | Description                            |
| :---------- | :------------------------------------- |
| `npm run dev`     | Start Vite dev server             |
| `npm run build`   | TypeScript check + Vite production build |
| `npm run lint`    | ESLint with `--max-warnings 0`    |
| `npm test`        | Vitest (single run)               |
| `npm run preview` | Preview production build locally  |
| `npm run release` | Bump version via commit-and-tag-version |

## CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/build-release.yaml`) triggers on pushes to `develop` and pull requests targeting `develop` (running on Node.js LTS `lts/*`):

1. **Verify Job** (`verify` — runs on PRs and pushes to `develop`):
   - `npm ci` — install dependencies
   - `npm run lint` — ESLint verification
   - `npm test` — Vitest unit tests execution
   - `npm run build` — TypeScript and Vite build compilation check

2. **Deploy Job** (`deploy` — runs **strictly on commits pushed to `develop`** after `verify` passes):
   - Checkout with full git history (`fetch-depth: 0`) and install dependencies (`npm ci`)
   - `commit-and-tag-version` patch bump, automatic `CHANGELOG.md` generation (configured via `.versionrc.json`), and push tags (committer: Bruno Anhaia)
   - `npm run build` — compiles assets and emits `dist/version.json` build metadata via Vite plugin
   - Deploy `dist/` to `gh-pages` branch via `peaceiris/actions-gh-pages` with custom commit message `deploy: v<version>` and author identity

---

## Rules for Agents

### Git Workflow

- **Never commit directly to `develop`**. Always create a feature/fix/docs/refactor branch and open a Pull Request.
- Use **Conventional Commits** (`feat:`, `fix:`, `refactor:`, `chore:`, `docs:`, `ci:`, `test:`).
- **PR titles and descriptions must be in English.**
- Branch naming: `<type>/<short-description>` (e.g., `refactor/foundation-theme-i18n`, `feat/hero-bento-grid`).
- **Keep branches up-to-date with `develop`**: Before opening or updating a Pull Request, always pull or rebase/merge the latest `origin/develop` into your branch.
- **Never submit or merge an out-of-sync PR**: Ensure that all unit tests (`npm test`), lint (`npm run lint`), and build (`npm run build`) pass against the latest `develop` state to prevent regressions.

### Code Quality

- All changes must pass `npm run lint`, `npm test`, and `npm run build` with **zero warnings and zero errors** before committing.
- Do not disable ESLint rules without justification.
- Unused imports are caught by `eslint-plugin-unused-imports` (configured as errors).

### Dependencies

- **Do NOT read `package-lock.json`** — it is very large and should never be loaded into context.
- **TypeScript must stay below version 7.** Use the latest 5.x or 6.x.
- When updating dependencies, check for breaking changes and compatibility before upgrading.
- Prefer removing deprecated libraries over keeping them.
