---
name: react-clean-architecture
description: Develop React components with strict separation of concerns, utilizing custom hooks for logic and maintaining pure, declarative UI. Use this skill when building new UI features or managing React state.
---

# React Clean Architecture Skill

This skill dictates how React components and features should be architected in this portfolio to maximize reusability, performance, maintainability, and declarative simplicity.

## Core Architectural Rules

### 1. Logic Extraction into Custom Hooks
- Keep page and component render functions clean and declarative.
- Extract complex state management, data fetching, and side effects (`useEffect`) into dedicated Custom Hooks in `src/hooks/` (e.g., `useGitHubProfile`, `useDarkMode`).
- The component itself should primarily consume hook return values and render JSX.

### 2. Declarative JSX & Conditional Rendering
- Avoid nested ternary operators inside JSX (e.g., `condition ? (subCondition ? A : B) : C`).
- For multi-branch rendering:
  - Use early returns at the component level for full-page loading or error states.
  - Extract sub-components for alternative views.
  - Use simple single-level conditionals (`condition && <Element />`) or single ternary expressions.

### 3. State Management & Prop Drilling
- Global or cross-cutting state should be managed via React Context in `src/contexts/` and supplied via `AppProvider` (`src/providers/app.provider.tsx`).
- Avoid drilling props deeper than 2 levels; prefer component composition (`children` prop) or dedicated contexts.

### 4. Performance & Memoization
- Use `useMemo` and `useCallback` deliberately when computing expensive derived data or passing callback references to heavily optimized/memoized child components.
- Avoid premature optimization where simple inline computations suffice.

### 5. Verification
- Verify that changes compile and pass test suites cleanly:
  ```bash
  npm run lint && npm test && npm run build
  ```
