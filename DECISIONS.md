# Decisions

ADR log. Append-only.

## {{DATE}} — Initial stack: Next.js 15 + React 19

**Status:** accepted
**Context:** Greenfield web service. Need SSR, server actions, fast initial loads.
**Decision:** Next.js 15 App Router, React 19, TypeScript strict, vitest + playwright, `output: "standalone"` for small Docker image.
**Consequences:** No telemetry SDKs (CI-enforced). RSC-first, `"use client"` only where needed.

## 2026-09-08 — Dependabot sweep: vitest 4 → 5 (major)

**Status:** accepted (awareness-only stub per saved sweep policy)
**Context:** Dependabot #19 (testing group) bumped `vitest` 4.1.11 → 5.0.0; the lint/typecheck/unit lane was green on the PR head, so it was squash-merged as-is.
**Decision:** Take the major; the template's suite passed unchanged.
**Consequences:**
- `@vitest/coverage-v8` and `@vitest/mocker` must move with vitest — a lone coverage bump against the old vitest ERESOLVEs (StackAlchemist #360 is the failure shape).
- vitest 5 tracks Vite 8; the vitest-4 note about `ssr.resolve.conditions` still applies to scaffolds that customise resolution.
- Read the vitest 5 changelog before the next scaffold is cut; nothing in this template needed a config change, but consumer projects with custom reporters or workspace-style config may.
