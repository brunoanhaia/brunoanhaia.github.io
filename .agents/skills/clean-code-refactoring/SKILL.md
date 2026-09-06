---
name: clean-code-refactoring
description: Enforce Clean Code principles, focusing on high readability, early returns, and eliminating deep nesting. Use this skill when refactoring existing code or implementing complex business logic.
---

# Clean Code Refactoring Skill

This skill guides the creation and refactoring of code to ensure it meets strict Clean Code standards, focusing on long-term maintainability, TypeScript type safety, and readability.

## Code Quality Principles

### 1. Early Returns (Bouncer Pattern)
- Prioritize early returns (guard clauses) to handle edge cases, loading states, errors, or invalid inputs at the top of functions.
- Avoid unnecessary `else` blocks and nested conditions.

### 2. Flatten Nesting
- **Limit indentation**: Avoid more than 2 levels of indentation inside any function or component.
- Extract nested loops, complex switch/case branches, or nested conditions into small, descriptively named helper functions.

### 3. Explicit Conditionals
- Always use explicit curly brace blocks `{ ... }` for all `if`, `for`, and `while` statements. Never write single-line `if` statements without braces.

### 4. No Magic Values
- Extract numeric constants, timeout thresholds, and repeated strings into dedicated constants (e.g., `*.constants.ts` or module-level `const`).

### 5. Strict Literal Types
- Prefer specific union literal types (e.g., `'light' | 'dark'`, `'pending' | 'success' | 'error'`) over generic `string` or `number`.

### 6. Immutability by Default
- Prefer `const` over `let`. Use `let` only when variable re-assignment is strictly required. Never use `var`.
- Avoid mutating objects or arrays directly. Favor functional transformations (`map`, `filter`, `reduce`, object/array spread).

### 7. Meaningful Naming & Single Responsibility
- Variables and functions must reveal intent (e.g., `formatPeriodDate`, `useGitHubProfile` instead of generic `data`, `res`, `handle`).
- Each function, hook, or component should do one thing, do it well, and do it only.

### 8. Verification
- All refactored code must pass:
  ```bash
  npm run lint && npm test && npm run build
  ```
  with zero errors and zero warnings.
