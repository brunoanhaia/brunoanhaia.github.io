---
name: accessible-ui-components
description: Build React components with strict adherence to web accessibility standards (WAI-ARIA, WCAG). Use this skill when creating interactive UI elements like modals, menus, buttons, navigation links, and forms with MUI 9.
---

# Accessible UI Components Skill

This skill ensures that all UI components and page layouts are fully accessible, semantically correct, and operable via keyboard and assistive technologies (screen readers) in compliance with WCAG 2.1 AA.

## Accessibility Design Rules

### 1. Semantic HTML & Landmarks First
- Always prefer native semantic elements (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<button>`) over generic `<div>` or `<span>`.
- In MUI 9, utilize the `component` prop when applicable (e.g., `<Box component="nav">`, `<Typography component="h1">`).

### 2. Keyboard Navigation & Focus Management
- Ensure every interactive element can be reached and activated via keyboard (`Tab`, `Shift+Tab`, `Enter`, `Space`, `Escape`, arrow keys).
- Never remove focus rings completely without a distinct focus visible replacement. Ensure `sx={{ '&:focus-visible': { outline: '2px solid ...' } }}` provides high visibility.
- For dialogs, drawers, and menus, manage focus trapping and restore focus to the triggering element upon closure.

### 3. WAI-ARIA Roles, States & Properties
- Provide meaningful `aria-label` on all icon-only buttons (e.g., `<IconButton aria-label="Toggle dark mode">`).
- Use `aria-expanded` and `aria-controls` for collapsible menus and drawers.
- Use `aria-hidden="true"` on decorative icons and SVG elements so screen readers don't announce redundant or confusing names.
- Ensure dynamic status changes or announcements are surfaced with `role="status"` or `aria-live="polite"`.

### 4. Color & Contrast Standards
- Maintain at least a 4.5:1 contrast ratio for normal text and 3:1 for large text across both light and dark themes.
- Never rely solely on color to convey information (e.g., active links, status states); combine color with icons, underlines, or text labels.

## Verification Checklist
- [ ] Can the entire component/page be navigated using only the keyboard?
- [ ] Do all icon-only buttons have descriptive `aria-label` attributes?
- [ ] Are headings structured hierarchically (`h1` -> `h2` -> `h3`)?
- [ ] Does the element pass contrast checks in both light and dark themes?
