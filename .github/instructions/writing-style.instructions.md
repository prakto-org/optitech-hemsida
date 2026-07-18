---
description: "Use when writing or editing markdown content anywhere in content/: Neon voice, capitalization rules, linking, and fake example data conventions."
applyTo: "content/**/*.md"
---

# Writing style

## Voice

- US English spelling and grammar.
- Use contractions (it's, don't, you're) without sacrificing clarity.
- Active voice: "The software converts the file", not "The file is converted by the software."
- Address the reader as "you", but don't start every sentence with it.
- Choose simple words: "use", not "utilize". Keep sentences short; don't pad.
- Consistent terminology: pick one term per concept and stick to it (don't mix "dashboard" and "control panel").
- No emojis or exclamation marks.
- No em dashes; restructure the sentence instead.
- Link to the source instead of repeating information, and explain why the linked content matters.

## Capitalization

- Use lowercase wherever possible.
- Page titles use sentence case: "Create your first project".
- Feature names are lowercase by default; methodologies are capitalized (Continuous Integration, Continuous Deployment).
- Product names follow official capitalization: PostgreSQL, GitHub, npm, Vercel.
- UI text matches the interface exactly.

## Fake example data (never real user data)

- Emails: `@example.com` or `@domain.com`.
- Usernames: `example_username`, Zhang Kai, Alex Lopez, or Dana Smith.
- Passwords: `AbC123dEf`.
- Database names: `dbname`.
- Connection string format: `postgresql://[user]:[password]@[neon_hostname]/[dbname]`.
