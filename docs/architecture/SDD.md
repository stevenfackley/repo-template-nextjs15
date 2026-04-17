# {{PROJECT_NAME}} — System Design Document

## Stack
Next.js 15 (App Router, standalone output), React 19, TypeScript strict.
Deploy target: {{DEPLOY_TARGET}}.

## Rendering strategy
- Server Components by default.
- `"use client"` only for interactivity that can't be done server-side.
- Server Actions for mutations; never expose secrets to client components.

## Data
<!-- Stores, ORM, migrations. -->

## Object storage (opt-in)
- S3-compatible — Cloudflare R2 in prod, MinIO locally. Reached via `src/lib/storage.ts`.
- Env: `S3_ENDPOINT`, `S3_REGION=auto`, `S3_ACCESS_KEY_ID`, `S3_SECRET_ACCESS_KEY`, `S3_BUCKET`, `S3_FORCE_PATH_STYLE=true`, optional `S3_PUBLIC_BASE_URL`.
- `getStorage()` throws on first use when unconfigured — no runtime cost until a feature actually uses it.

## Auth
<!-- Pattern (Auth.js, Better Auth, custom JWT, etc). Session storage. -->

## Observability
Stdout JSON logs. No Application Insights / Sentry / Datadog (CI-enforced).

## Scaling
Standalone Node server behind a reverse proxy. Horizontal scale via container replicas.
