# Implementation decisions (PRD vs codebase gaps)

This file records deliberate choices made while implementing the SpaceMakers PRD against the existing codebase. Where the PRD and the inherited code disagreed, I've noted which won and why.

## Design tokens
- The PRD names tokens `--color-bg`, `--color-surface`, `--color-ink`, `--color-ink-muted`, `--color-primary`, `--color-primary-dark`, `--color-accent`, `--color-success`, `--color-warning`, `--color-danger`, `--color-border`, `--color-btn-secondary-border`.
- We keep the codebase's shorter names (`--background`, `--surface`, `--text-primary`, `--text-secondary`, `--primary`, `--primary-dark`, `--accent`, `--success`, `--warning`, `--danger`, `--border`) to avoid touching ~20 CSS modules, but their hex values are aligned exactly to the PRD:
  - bg `#F7F5EF`, surface `#FFFFFF`, ink `#14231C`, ink-muted `#4B5A52`, primary `#1E7F4E`, primary-dark `#14532F`, accent `#E8A33D`, success `#2E9E5B`, warning `#D98C2B`, danger `#C0392B`, border `#E4E0D6`.
- Dark mode: removed the `@media (prefers-color-scheme: dark)` block. The PRD mandates a light palette everywhere, including dashboards.
- Radius: `--radius` now `12px`, `--radius-sm` `8px` (PRD 8–12px).
- Container max-width: `1120px` (PRD) instead of the old `960px`.

## Typography
- PRD requires Space Grotesk (headings) + Inter (body). Replaced the Geist fonts in `src/app/layout.js`. Body is 16px minimum; headings scale per PRD (H1 36–44, H2 28, H3 20).
- Sentence case everywhere: removed `text-transform: uppercase` from status pills; button labels use normal casing ("Post a gig", "Apply now").

## Navigation
- PRD spec 3.3 prescribes a horizontal top nav on desktop and a bottom tab bar on mobile for logged-in users. This **replaces** the collapsible sidebar (`AppShell`) that existed before. URLs are unchanged.

## Matching & location model
- Scoring per PRD §10: `skill_score = 50 * (matched / required)` (proportional, not binary; 0 when `required == 0`, which cannot happen because posting a gig requires ≥1 skill), `location_score` = 30 exact / 15 adjacent / 0 otherwise, `verification_bonus` = +20 for verified opportunities. Sorted by score desc, then newest.
- Neighborhoods are a **constrained canonical list** (11 Githogoro-area zones) kept in-code in `src/lib/neighborhoods.js` with a static adjacency map, replacing free-text Google-Places location input everywhere (profile + employer posting). Legacy seeded values like `"Githogoro, Nairobi"` are normalized via a known-suffix lookup, not substring matching.
- Adjacency is bidirectional and hand-maintained in `src/lib/neighborhoods.js`.

## Data model additions
- `User.emailVerified Boolean @default(false)` — syncs from Firebase when the profile is read/updated.
- `MatchExplanation` — caches the AI's 2–3 sentence explanation per `(graduateId, opportunityId)` so dashboard cards don't hit Gemini on every render.
- `SkillRequest` — employers' "other, please specify" skill suggestions; admin approves or merges into the canonical `Skill` list.
- No `Verification` table and no failed-artisan-review feedback model: rejections log the reason but don't persist it (keeps schema to PRD scope). Noted here as a consciously dropped nicety.

## Other notes
- Role is chosen at signup; there is a role-first card selector. No demo bypass in production; admin is seeded only.
- Payment/escrow, ratings/reviews, in-app chat, and notifications are explicitly out of scope per PRD; phone numbers are revealed only after an application is **ACCEPTED**.
- `avatarUrl` is a plain URL field (simplest MVP option) — no file upload backend.
- The homepage "live stats" are real `count()` queries with static fallbacks when the DB/mock is unavailable.