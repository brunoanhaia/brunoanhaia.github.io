---
name: new-component
description: Guide to creating a reusable UI component under src/components/, following MUI 9 conventions and folder structure.
---

# Creating a Shared UI Component

Follow these instructions when creating a reusable component in this project.

## 1. Directory & File Structure

Create a subdirectory in `src/components/ui-<component-name>/`:

```text
src/components/ui-<component-name>/
├── ui-<component-name>.tsx         # Component implementation
├── ui-<component-name>.type.ts     # Component Props & Interfaces
├── ui-<component-name>.enum.ts     # (Optional) Enums if needed
├── ui-<component-name>.constants.ts# (Optional) Constants
└── index.ts                        # Barrel export file
```

## 2. Naming Conventions

- Folder name: kebab-case prefixed with `ui-` (e.g., `ui-badge`, `ui-card`).
- File names: match folder pattern (e.g., `ui-badge.tsx`, `ui-badge.type.ts`).
- Component function: PascalCase with `Ui` prefix (e.g., `UiBadge`).

## 3. MUI 9 Styling Rules

- **Strictly use the `sx` prop** for layout and custom styles:
  ```tsx
  // Correct:
  <Stack sx={{ alignItems: 'center', justifyContent: 'center', gap: 2 }}>
    ...
  </Stack>

  // Incorrect (legacy MUI system props removed in MUI 9):
  <Stack alignItems="center" justifyContent="center">
  ```
- Use theme tokens from `useTheme()` or `sx={(theme) => ({ color: theme.palette.text.primary })}` when referring to colors or spacing.

## 4. Barrel Export

In `index.ts`, re-export everything public:
```ts
export * from './ui-<component-name>';
export * from './ui-<component-name>.type';
```

## 5. Verification

Run ESLint, tests, and build:
```bash
npm run lint && npm test && npm run build
```
Ensure unused imports are cleaned up and types compile without errors.
