---
description: Roll the prod image by setting IMAGE_REF (docker-compose.prod.yml has no tag to edit).
argument-hint: "<image-ref or digest>"
---

1. Verify the image exists: `gh api /user/packages/container/${REPO}/versions`.
2. `docker-compose.prod.yml` reads `image: ${IMAGE_REF}`; there is no tag in the file. Set `IMAGE_REF=$ARGUMENTS` in the deploy environment (the `image-ref` input of `deploy-ec2-ssh.yml`, or `export IMAGE_REF=...` on the host per `docs/runbooks/rollback.md`).
3. Do not edit `docker-compose.prod.yml`; show what you would run, do not commit or deploy.
