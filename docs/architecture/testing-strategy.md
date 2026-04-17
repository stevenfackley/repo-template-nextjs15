# Testing strategy

## Unit (vitest)
Pure functions, hooks, React components with RTL + jsdom.

## Component/integration (vitest)
RTL against App Router routes via test harness.

## E2E smoke (playwright, `smoke` project)
Runs on PR. Health + home page.

## E2E integration (playwright, `integration` project)
Runs on `main`. Full scenarios; can be slow.

## Full nightly
Cron job — all projects + cross-browser.
