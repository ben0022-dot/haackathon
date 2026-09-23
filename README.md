# SpaceMakers

**Local opportunity discovery for TVET graduates — Githogoro, Nairobi.**

## 1. Validated challenge statement

Youth unemployment is acute in Nairobi's lower-income communities. In Githogoro, TVET graduates finish trade school with real, marketable skills — electrical, tailoring, catering, plumbing, ICT — yet there is **no reliable, local channel that connects them to earning opportunities**. Traditional job boards are generic, digital-only, and invisible to the local gigs that families and small businesses actually need: a house rewired, uniforms stitched, a wedding catered. The result: skilled graduates remain idle while money walks past their door.

**SpaceMakers closes the loop between local demand ("I need an electrician this weekend") and verified local supply ("I trained, I'm two streets away, hire me").**

## 2. Value proposition

- **For graduates** — Your skills + your location = your ranking. Stop competing nationally; get matched with verified, located, local work you can walk to — and build a profile that shows employers you're real.
- **For employers / households** — Post a gig and reach vetted, nearby, trained talent in under a minute. Apply directly through the platform without agencies or middlemen taking a cut.
- **For the community** — Money stays local, skills get used, and trust grows through verified listings and named tradespeople.

One-tap application, phone-contact handoff, zero onboarding cost, mobile-first — designed for how this market actually transacts.

## 3. MVP scope and exclusions

**In scope (MVP):**
- Firebase authentication (Email/Password + Google) with roles: GRADUATE, EMPLOYER, ADMIN
- Graduate profiles with skills, locations, experience levels, and a completion score
- Match scoring (+50 matching skill, +30 same location, +20 verified) with a ranked dashboard
- Searchable, filterable opportunity feed with pagination
- Applications with duplicate prevention and status tracking (Pending → Reviewing → Accepted/Rejected → Completed)
- Employer job posting and applicant review/contact
- Admin moderation queue: approve/reject pending opportunities (powers the verified badge)
- Seed data for demos; mobile-first responsive UI; dark mode

**Excluded from this MVP:**
- Payments and escrow
- Ratings / reviews
- In-app chat or messaging (handoff is via phone link)
- Employer / graduate identity verification beyond admin-approved listings
- Notifications (email / push)
- Native mobile apps
- ATS features (applicant pipelines, CV parsing, interviews)

## 4. Assumptions to test

1. **Local beats generic** — Gig-seekers trust and prefer opportunities within walkable distance of their neighbourhood over distant job-board listings.
2. **Verification drives trust** — a visible "verified" badge materially increases the likelihood that graduates apply and employers attract applicants.
3. **Phone call is the closing step** — in this market, the transaction completes over a call (WhatsApp/phone), not through in-app messaging; the MVP handoff model is correct.
4. **TVET graduates are the supply** — there is a sufficient, ongoing flow of trained tradespeople in the area willing to list themselves.
5. **Employers post low-friction** — local employers and households will adopt a lightweight posting flow if it takes under a minute.
6. **Skills profile, not CV** — trade skills + location is a sufficient matching signal for the first hires (no CV needed).

## 5. User journey (workflow)

1. **Sign up** — graduate / employer / admin creates an account (Email/Password or Google); a linked database profile is created.
2. **Build your profile** — graduates add name, location, bio, phone, and select skills with an experience level (Beginner / Intermediate / Advanced); a completion score guides them.
3. **Matched** — opportunities are scored against the profile (+50 skill, +30 location, +20 verified) and ranked on the **Dashboard**, best first.
4. **Discover** — the **Opportunities** page adds full-text search, filters (skill, location, type, verified) and pagination.
5. **Apply** — one-tap application with a short message; duplicates are blocked.
6. **Track** — the **Applications** page shows live status: Pending → Reviewing → Accepted/Rejected → Completed.
7. **Employer side** — post a gig (submitted **unverified**), then review, accept or reject applicants and contact them by phone.
8. **Admin moderation** — pending opportunities land in the **Admin dashboard**; approving flips the `verified` flag that drives the matching bonus.

## 6. Roles in the solution

| Role | Who it is |
| --- | --- |
| **GRADUATE** | TVET-trained tradesperson in the community (electrician, tailor, caterer, plumber, ICT...) |
| **EMPLOYER** | Local households, small businesses and shops posting work |
| **ADMIN** | Platform moderator verifying the legitimacy of listings |

## 7. Role functions

**GRADUATE**
- Create a skills + location profile
- Get ranked, verified opportunity matches
- Search and filter the opportunity feed
- Apply to opportunities (one tap, deduplicated)
- Track application status from Pending to Completed

**EMPLOYER**
- Post opportunities with type, payment, deadline and required skills (submitted unverified)
- View applicants across all their postings
- Accept, reject or set applicants to "reviewing"
- Contact applicants directly via phone

**ADMIN**
- Review the pending-opportunities queue
- Approve (→ verified) or reject (→ closed) listings
- Mainline access to all content

## 8. Tech stacks chosen

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router, React 19), JavaScript only |
| Styling | CSS Modules + a global design system — no UI framework, no Tailwind |
| Auth | Firebase Auth (Email/Password + Google), verified server-side via Firebase Admin SDK |
| Database | PostgreSQL (Prisma Postgres) |
| ORM | Prisma 7 with PostgreSQL driver adapter |
| API | Next.js Route Handlers (REST-style JSON) |
| Deployment | Vercel |

Key libraries: `firebase`, `firebase-admin`, `@prisma/client`, `@prisma/adapter-pg`, `pg`, `dotenv`.

---

## Repository layout

The Next.js application lives at the **repository root** (Vercel builds it automatically via framework detection).

| Path | Description |
| --- | --- |
| `src/app/` | Pages (`login`, `signup`, `dashboard`, `opportunities`, `applications`, `profile`, `employer`, `admin`) and API route handlers |
| `src/components/` | Navbar, cards, filters, skill badges, landing animations |
| `src/context/AuthContext.js` | Firebase auth state + profile provider |
| `src/lib/` | Firebase clients, auth guards, Prisma client, matching engine |
| `src/generated/prisma/` | Generated Prisma client (do not edit) |
| `src/styles/globals.css` | Design system (CSS variables, buttons, forms) |
| `prisma/` | `schema.prisma` (data model) + `seed.js` (demo data) |

## Development setup

```bash
npm install
cp .env.example .env.local   # fill in Firebase + DATABASE_URL credentials
npm run db:migrate           # apply Prisma migrations
npm run db:seed              # demo users, skills, opportunities, applications
npm run dev                  # → http://localhost:3000
```

Environment variables (see `.env.example`): the `NEXT_PUBLIC_FIREBASE_*` web config, the Firebase Admin SDK creds (`FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY` — keep the `\n` escapes), and `DATABASE_URL`.

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run db:migrate` | Apply Prisma migrations |
| `npm run db:seed` | Load demo data |

### Deploying on Vercel

- The repo root is the project root — Vercel auto-detects Next.js; a `vercel.json` is included and valid (no framework/output overrides needed). The seed-created Firebase accounts let demo users sign in on the deployed app.
- Add all env vars from `.env.example` in **Vercel → Project Settings → Environment Variables** (Production + Preview).
- On first run, the production database needs the schema applied: run `prisma migrate deploy` once (e.g. locally against the same `DATABASE_URL`, or in a one-off Vercel build/CLI step).

## Demo accounts

Seeded by `npm run db:seed` (password for all: `SpaceMakers@2026`):

- Graduate: `brian.demo@spacemakers.app`
- Employer: `eatery.demo@spacemakers.app`
- Admin: `admin.spacemakers@spacemakers.app`
