---
name: token-usage-best-practices
description: Guidelines for AI coding agents to minimize token consumption, optimize context usage, and operate efficiently across sessions.
---

# Token Usage Best Practices Skill

This skill provides actionable principles for AI coding agents to preserve context window capacity, minimize latency, and operate with maximum efficiency.

## Core Principles

### 1. Targeted Tool Invocations
- **Selective file reading**: Avoid loading entire large files when only a section is relevant. Use line-range parameters (`StartLine`, `EndLine`) when viewing files.
- **Never inspect generated artifacts or lockfiles**: Do **not** read `package-lock.json`, minified bundles in `dist/`, or large binary files into context.
- **Focused grep & search**: Use targeted regex queries and include path filters rather than searching across the entire workspace unbounded.

### 2. Context Pruning & Concise Responses
- Keep explanations clear, actionable, and succinct. Avoid repeating entire files in conversation responses when small diffs or references suffice.
- Point to generated artifacts or code symbols with markdown links rather than re-summarizing full document contents.

### 3. Log & Command Output Management
- When executing terminal commands that might produce verbose output, pipe or limit the output where feasible, or focus on failure logs.
- Summarize task results cleanly instead of pasting raw terminal dumps.

### 4. Incremental Steps
- Decompose complex workflows into small, logically grouped steps.
- Commit changes incrementally with clear Conventional Commit messages.
