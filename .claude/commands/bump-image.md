---
description: Roll the image tag in docker-compose.prod.yml.
argument-hint: "<short-sha>"
---

1. Verify tag exists: `gh api /user/packages/container/${REPO}/versions`.
2. Replace `sha-[0-9a-f]+` in `docker-compose.prod.yml` with `sha-$ARGUMENTS`.
3. Show `git diff`, do not commit.
