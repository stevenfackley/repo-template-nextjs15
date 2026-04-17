# Incident response

1. Declare — open `Ops incident` issue.
2. Stabilize — SEV-1: rollback first; SEV-2/3: gather logs.
3. Investigate — `docker logs`, `gh run list --status failure`.
4. Resolve — patch, test, deploy, verify `/healthz`.
5. Post-mortem within 48h.
