---
name: new-page
description: Guide to adding a new route page in this portfolio, including routing, lazy loading, layout, MUI styling, and navigation links.
---

# Creating a New Page

Follow these steps when creating a new page route in this repository.

## 1. Directory & File Structure

Create a dedicated directory under `src/pages/<page-name>/`:

```text
src/pages/<page-name>/
├── <page-name>-page.tsx       # Main page component
├── <page-name>-page.type.ts   # Props and specific types for the page
└── index.ts                   # Barrel export
```

## 2. Page Component Pattern

Follow standard patterns from existing pages (e.g. `src/pages/main/` or `src/pages/projects/`):

- Name the component using PascalCase ending in `Page` (e.g., `SkillsPage`).
- Use MUI components with the `sx` prop for styling. **Never pass direct system props** like `<Box m={2}>` or `<Stack alignItems="center">` directly on tags without `sx`.
- Export both the component and types via `index.ts`:
  ```ts
  export * from './<page-name>-page';
  export * from './<page-name>-page.type';
  ```

## 3. Registering the Route in `src/router.tsx`

1. Add the path constant in `pageNameConstants`:
   ```ts
   const pageNameConstants = {
     // ...
     newPage: '/new-page',
   };
   ```
2. Add lazy dynamic import in `pagesMap`:
   ```ts
   const pagesMap = {
     // ...
     [pageNameConstants.newPage]: () => import('@src/pages/new-page').then((m) => ({ Component: m.NewPage })),
   };
   ```
3. Add child route in `createBrowserRouter`:
   ```ts
   {
     path: 'new-page',
     lazy: pagesMap[pageNameConstants.newPage],
   }
   ```

## 4. Adding Navigation (Optional)

If the page needs to appear in the navigation bar:
- Update `src/menu.config.ts` with the new route link, icon, and title token.

## 5. Verification

Always verify before committing:
```bash
npm run lint && npm test && npm run build
```
Ensure zero warnings and zero errors.
