# Bruno Anhaia - Personal Portfolio

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Site-blue?logo=github)](https://brunoanhaia.github.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Personal portfolio and resume website of Bruno Anhaia, showcasing experience, education, projects, and skills. Built with modern React, TypeScript, and Material UI, deployed automatically via GitHub Pages.

Live website: **[https://brunoanhaia.github.io](https://brunoanhaia.github.io)**

---

## Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern UI framework with React Server Components readiness |
| **TypeScript (v5 / v6)** | Type-safe JavaScript |
| **Material UI (MUI) 9** | Component library with Emotion styling engine |
| **React Router 7** | Client-side routing with lazy-loaded code-splitting |
| **Vite 8** | Ultra-fast build tool and dev server |
| **Vitest 5** | Unit testing framework (with Testing Library & jsdom) |
| **ESLint 10** | Linting via Flat Config (`eslint.config.js`) |
| **i18next** | Internationalization (i18n) |
| **Firebase** | Cloud integration (Remote Config / Analytics) |
| **GitHub Actions** | Automated CI/CD pipeline deploying to `gh-pages` branch |

---

## Project Structure

```text
├── .agents/
│   └── skills/              # Modular runbooks & skill guides for AI agents
├── .github/
│   └── workflows/
│       └── build-release.yaml # CI/CD pipeline
├── env/                     # Vite env directory
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable UI components (ui-<name>/)
│   ├── contexts/            # React Contexts (Theme, GitHub Profile)
│   ├── hooks/               # Custom React hooks
│   ├── pages/               # Route pages (Main, Projects, Education, Work)
│   ├── providers/           # AppProvider (Theme + Context providers)
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Helper utilities
│   ├── router.tsx           # Route definitions with lazy loading
│   ├── i18n.ts              # i18n initialization
│   ├── index.tsx            # Application entry point
│   └── app.tsx              # Root component with Suspense boundary
├── AGENTS.md                # Canonical AI agent instructions and conventions
├── README.md                # Project documentation
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite build configuration
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js**: `v22.x` or higher (managed via [nvm](https://github.com/nvm-sh/nvm))
- **npm**: `v10.x` or higher

```bash
# Verify Node and npm version
node -v
npm -v
```

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/brunoanhaia/brunoanhaia.github.io.git
cd brunoanhaia.github.io
npm install
```

### Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| **Development** | `npm run dev` | Start local Vite dev server at `http://localhost:5173` |
| **Build** | `npm run build` | Run TypeScript check (`tsc`) and create production bundle in `dist/` |
| **Lint** | `npm run lint` | Run ESLint with zero-warning threshold |
| **Test** | `npm test` | Run test suite with Vitest |
| **Preview** | `npm run preview` | Locally preview the production build |
| **Release** | `npm run release` | Version bump & CHANGELOG.md generation via commit-and-tag-version |

---

## Development Guidelines

### Architecture & Patterns

- **Path Aliases**: Pre-configured in `tsconfig.json` and natively resolved by Vite:
  - `@src/*` &rarr; `./src/*`
  - `@components/*` &rarr; `./src/components/*`
  - `@pages/*` &rarr; `./src/pages/*`
  - `@hooks/*` &rarr; `./src/hooks/*`
- **State Management**: Lightweight state is handled via native **React Context** (`GitHubProfileContext`, `ThemeContext`).
- **MUI Styling**: Use the `sx` prop exclusively for styling. Avoid direct legacy system props on MUI components.
- **Code Splitting**: All pages in `src/router.tsx` are imported lazily to keep initial bundle size minimal.

### Contributing & Git Workflow

- **Branching**: Never commit directly to `develop`. Create a branch using the format `<type>/<short-description>`:
  - `feat/new-experience-card`
  - `fix/nav-bar-alignment`
  - `refactor/migrate-vitest`
  - `docs/update-readme`
- **Commits**: Follow [Conventional Commits](https://www.conventionalcommits.org/):
  - `feat:`, `fix:`, `refactor:`, `docs:`, `chore:`, `ci:`, `test:`
- **Pull Requests**:
  - Target branch: `develop`
  - Title and description must be in **English**.
  - Branches must be rebased/merged with the latest `origin/develop` before submission.
  - All automated checks (`npm run lint`, `npm test`, `npm run build`) must pass with **zero warnings and zero errors**.
  - Deployments to GitHub Pages and version releases occur **strictly upon push/merge into `develop`** (version bumped and tagged first, assets compiled with `version.json` build metadata, and deployed to `gh-pages`).

---

## AI Agent Integration

This repository follows universal AI coding agent standards. Any coding assistant (Antigravity, Claude Code, GitHub Copilot, Cursor, Windsurf, Amazon Q) automatically reads guidelines from:

- **[AGENTS.md](./AGENTS.md)** — Canonical instructions and technical rules.
- **`.agents/skills/`** — Procedural runbooks:
  - [New Page](.agents/skills/new-page/SKILL.md): Adding a route page and navbar link.
  - [New Component](.agents/skills/new-component/SKILL.md): Standard for reusable components.
  - [Dependency Update](.agents/skills/dependency-update/SKILL.md): Safe package updates.
  - [Deploy Troubleshooting](.agents/skills/deploy-troubleshoot/SKILL.md): Fixing GitHub Pages deployments.
  - [Accessible UI Components](.agents/skills/accessible-ui-components/SKILL.md): Web accessibility (WAI-ARIA, keyboard navigation, contrast).
  - [Clean Code Refactoring](.agents/skills/clean-code-refactoring/SKILL.md): Early returns, shallow nesting, explicit blocks, strict types.
  - [Isolated Component Design](.agents/skills/isolated-component-design/SKILL.md): Decoupled, pure UI component design.
  - [React Clean Architecture](.agents/skills/react-clean-architecture/SKILL.md): Custom hooks, declarative JSX, Context patterns.
  - [Token Usage Best Practices](.agents/skills/token-usage-best-practices/SKILL.md): Optimizing context and token consumption for agents.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details (or open source under MIT).
