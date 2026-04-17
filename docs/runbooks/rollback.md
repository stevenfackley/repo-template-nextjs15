# Rollback

## EC2 (SSH)
SSH, `cd $EC2_APP_DIR`, `export IMAGE_REF=...@sha256:<last-good>`, `docker compose pull && up -d`, verify `/healthz`.

## K3s (Helm)
`helm rollback <release> <rev>` + `kubectl rollout status`.
