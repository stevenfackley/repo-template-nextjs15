---
description: Append an ADR to DECISIONS.md.
argument-hint: "<title>"
---

Append a new entry to the **bottom** of `DECISIONS.md`, using today's date and `$ARGUMENTS` as the title. The log is append-only: never edit or delete an existing entry. To reverse an earlier decision, write a new one whose **Status** says it supersedes, and name the entry it replaces.

Match the format already in the file:

```
## YYYY-MM-DD — <title>

**Status:** accepted
**Context:** the situation that forced a choice, and the alternatives that were genuinely on the table
**Decision:** what was chosen, named concretely — files, columns, policies, flags
**Consequences:** what this now costs, rules out, or obliges someone to remember
```

Write the body yourself, from what this session actually established. Every claim must trace to something real: code you read, a command whose output you saw, a test you ran, or the user's own words. When a decision was verified against the running stack rather than assumed, say so — that is usually the sentence a future reader most needs, because it is the one they would otherwise spend an afternoon re-deriving.

Do **not** invent context, alternatives nobody weighed, or consequences you have not reasoned through. An ADR is a record, and a confident fabrication inside one is worse than no entry at all: it will be trusted years later by someone with no way left to check it. If a section has nothing real behind it, ask the user for that part instead of filling it in.

Keep it to what the code cannot say on its own. The diff already shows *what* changed; this file exists for *why*, and for the option that was rejected and would otherwise be proposed again next year.
