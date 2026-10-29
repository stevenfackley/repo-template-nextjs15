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

## 2026-10-29 — Stack moved to Next.js 16 + TypeScript 6

**Status:** accepted (records a change already on `main`)
**Context:** The initial ADR names Next.js 15. `package.json` now pins `next` and `eslint-config-next` at `^16.2.4`, `typescript` at `^6.0.3` and `eslint` at `^10.2.0`; the lint script is `eslint .` (`next lint` is gone in Next 16). The docs still said Next.js 15 / TS 5.6.
**Decision:** The template scaffolds Next.js 16 + React 19 + TypeScript 6. The repo name (`nextjs15`) is historical. TypeScript majors stay held by the Dependabot ignore until typescript-eslint supports TS 7.
**Consequences:** CLAUDE.md, README.md, SDD.md and the Dockerfile header now say Next.js 16. Dependabot groups take minor/patch only, so the next Next.js major arrives as its own PR and gets its own ADR.
