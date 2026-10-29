# {{PROJECT_NAME}}

## Stack
{{FLAVOR}}. Next.js 16 App Router + React 19 + TS 6. See `docs/architecture/SDD.md`.

## Standard flow
analyze -> read docs/ -> read package.json + tsconfig.json -> plan -> work.

## Conventions
- Image tags: `sha-{SHORT_SHA}` (test), `prod-{SHA}` (prod).
- Release tags: `YYYYMMDD_{{PROJECT_NAME}}_Release`.
- Components: Server by default. `"use client"` is a scalpel, not a default.
- Tests: vitest (unit/RTL), playwright (smoke PR, integration main).
- Lint: `eslint .` (ESLint 10 flat config). Types strict + `noUncheckedIndexedAccess`.
- Commits: Conventional Commits.

## Deploy target
{{DEPLOY_TARGET}}

## Commands
- `/ship` — lint + typecheck + vitest + build + secret-scan
- `/deploy-test` — trigger test deploy
- `/add-adr` — new DECISIONS.md entry
- `/smoke` — playwright smoke locally

## Do not
- Add static AWS keys. Use OIDC.
- Ship `console.log` in production code.
- Use `any`. Use `unknown` + narrowing.
- Add telemetry SDKs. Banned by CI.
- Reach for CSS-in-JS. Tailwind or CSS modules only.
