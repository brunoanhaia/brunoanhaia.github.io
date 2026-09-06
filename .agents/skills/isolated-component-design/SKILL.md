---
name: isolated-component-design
description: Design highly reusable, pure UI components that are decoupled from application context. Use this skill when building foundational UI elements (buttons, cards, badges, chips, containers) under src/components/.
---

# Isolated Component Design Skill

This skill enforces Component-Driven Development (CDD), ensuring foundational UI components under `src/components/ui-<name>/` act as pure, decoupled functions of their props.

## Component Design Rules

### 1. Strict Decoupling
- A base UI component (e.g., `UiCard`, `UiBadge`) **must not** import global application state (like `GitHubProfileContext` or `ThemeContext` directly unless providing theme tokens via MUI) or perform network calls.
- Base components must rely 100% on explicit props for data, rendering configuration, and interaction callbacks.

### 2. Prop Interface Segregation
- Define clear, cohesive TypeScript interfaces in `ui-<name>.type.ts`.
- Avoid passing deep application domain entities when only primitive or subset values are needed to render.
- Provide sensible defaults for optional props.

### 3. Exhaustive State Mapping
- Handle all relevant visual states through props: `loading`, `disabled`, `active`, `selected`, `empty`, `error`.
- Use early returns or dedicated sub-components for alternative states (e.g., Skeleton loading placeholders) to keep the main JSX clean.

### 4. MUI 9 Styling Isolation
- Strictly use the `sx` prop for custom styles and layout. Do not use legacy system props directly on elements.
- Use theme callbacks `sx={(theme) => ({ ... })}` to access theme tokens rather than hardcoded hex colors.

### 5. Ref Forwarding
- Forward refs for interactive or focusable elements using `React.forwardRef` (or standard React 19 ref forwarding) so parent components can control focus or measure layout when necessary.

### 6. Verification
- Always verify with:
  ```bash
  npm run lint && npm test && npm run build
  ```
  Ensure zero warnings and zero errors.
