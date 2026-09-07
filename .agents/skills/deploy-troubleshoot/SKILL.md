---
name: deploy-troubleshoot
description: Troubleshooting guide and checklist for GitHub Pages deployment and GitHub Actions build issues.
---

# Deploy & CI Troubleshooting Guide

Use this runbook when deployments fail or the live site is inaccessible.

## 1. Site Shows White Screen or Raw TypeScript Files

- **Root Cause**: GitHub Pages is configured to serve from the wrong branch (e.g. `develop` instead of `gh-pages`).
  - When serving from `develop`, the browser tries to load `src/index.tsx` as raw MIME type `application/octet-stream`, resulting in a blank page.
- **Resolution**:
  1. Open GitHub repository settings: **Settings > Pages**.
  2. Under **Build and deployment > Source**, ensure `Deploy from a branch` is selected.
  3. Change the Branch to **`gh-pages`** and folder to **`/ (root)`**.
  4. Click **Save**.

## 2. GitHub Actions CI Failure on Push to `develop`

The workflow in `.github/workflows/build-release.yaml` runs on pushes to `develop` (using Node.js LTS `lts/*`):
1. `npm ci`
2. `npm run lint`
3. `npm test`
4. `npm run build`
5. Release bump via `commit-and-tag-version`
6. Deploy `dist/` to `gh-pages`

### Troubleshooting steps:
- **Build fails due to missing secrets**:
  - Ensure the following GitHub Secrets are configured in repository settings:
    - `FIREBASE_API_KEY`
    - `FIREBASE_AUTH_DOMAIN`
    - `FIREBASE_PROJECT_ID`
    - `FIREBASE_STORAGE_BUCKET`
    - `FIREBASE_MESSAGING_SENDER_ID`
    - `FIREBASE_APP_ID`
    - `FIREBASE_MEASUREMENT_ID`
- **Build fails on lint or test**:
  - Run `npm run lint` and `npm test` locally to reproduce and fix.
- **Pushing tags fails**:
  - Verify that the workflow has `permissions: contents: write` set in the YAML file.

## 3. CodeQL Configuration Note

CodeQL is configured via GitHub's **Default Setup** feature in **Settings > Code security and analysis**.
Do not create custom `.github/workflows/codeql.yml` workflows unless specifically needed, as it conflicts with Default Setup.
