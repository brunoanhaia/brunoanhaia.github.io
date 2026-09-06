---
name: dependency-update
description: Runbook for upgrading or adding dependencies safely, respecting project constraints and validation steps.
---

# Updating Dependencies Safely

Follow this procedure when bumping versions or adding new packages to this repository.

## 1. Safety Rules & Constraints

- **DO NOT read `package-lock.json`**: It is huge and will consume unnecessary context. Only inspect `package.json`.
- **TypeScript version**: Keep TypeScript strictly below version **7** (`^5.x` or `^6.x`). Avoid upgrading to TS 7 until ecosystem support is stable.
- **Node runtime**: Node is managed by nvm (`~/.nvm/versions/node/<version>/bin`). Always ensure Node is on PATH when executing npm commands.
- **Conventional Commits**: Commit messages must follow conventions, and Pull Request titles/descriptions must be in English.

## 2. Upgrade Workflow

1. Check current versions in `package.json`.
2. Inspect target package changelogs / releases for breaking changes.
3. Install or update:
   ```bash
   npm install <package>@<version>
   ```
4. Check for deprecation warnings or breaking changes in peer dependencies.

## 3. Mandatory Validation Checks

Execute all three checks sequentially:
```bash
npm run lint
npm test
npm run build
```

**Zero warnings and zero errors are strictly required** for all three steps before committing.

## 4. Submitting Changes

- Always sync branch with `develop` (`git pull origin develop`) before committing or opening a PR.
- Never push directly to `develop`.
- Branch name format: `chore/update-<dependency>` or `refactor/<dependency>-migration`.
- Open a PR with an English title and description explaining the upgrade and validation results.
