# {{PROJECT_NAME}} — dev cheat sheet

## Scripts

```bash
npm run dev               # Turbopack dev server
npm run build             # Production build (standalone output)
npm run lint              # next lint
npm run typecheck         # tsc --noEmit
npm run test              # vitest (unit)
npm run test:e2e:smoke    # playwright smoke project
npm run test:e2e          # playwright integration project
```

## Docker

```bash
docker compose up --build
docker compose -f docker-compose.yml -f docker-compose.prod.yml config
```

## Tagging

- `sha-{SHORT_SHA}` (test), `prod-{SHA}` (prod), `YYYYMMDD_{{PROJECT_NAME}}_Release`
