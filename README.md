# SpaceMakers

**Local opportunity discovery for TVET graduates — Githogoro, Nairobi.**

SpaceMakers matches trained tradespeople with verified, localized gigs right in their neighbourhood — no agencies, no middlemen. It pairs a ranked job marketplace with an AI trade-advisor suite (chat, real-time voice, and Google Maps/Search grounding) to help graduates find, prepare for, and win local work.

**Challenge → Solution:** Youth unemployment is acute in Nairobi's lower-income communities. TVET graduates finish trade school with real, marketable skills, yet no reliable local channel connects them to earning opportunities — generic job boards are invisible to the gigs families and small businesses actually need. **SpaceMakers closes the loop between local demand ("I need an electrician this weekend") and verified local supply ("I trained, I'm two streets away, hire me").**

## 1. Validated challenge statement

Youth unemployment is acute in Nairobi's lower-income communities. In Githogoro, TVET graduates finish trade school with real, marketable skills — electrical, tailoring, catering, plumbing, ICT — yet there is **no reliable, local channel that connects them to earning opportunities**. Traditional job boards are generic, digital-only, and invisible to the local gigs that families and small businesses actually need: a house rewired, uniforms stitched, a wedding catered. The result: skilled graduates remain idle while money walks past their door.

**SpaceMakers closes the loop between local demand ("I need an electrician this weekend") and verified local supply ("I trained, I'm two streets away, hire me").**

## 2. Value proposition

- **For graduates** — Your skills + your location = your ranking. Stop competing nationally; get matched with verified, located, local work you can walk to — and build a profile that shows employers you're real.
- **For employers / households** — Post a gig and reach vetted, nearby, trained talent in under a minute. Apply directly through the platform without agencies or middlemen taking a cut.
- **For the community** — Money stays local, skills get used, and trust grows through verified listings and named tradespeople.

One-tap application, phone-contact handoff, zero onboarding cost, mobile-first — designed for how this market actually transacts.

## 3. Core features

**Marketplace**
- Firebase authentication (Email/Password + Google) with roles: GRADUATE, EMPLOYER, ADMIN. Sign-in requires a real account — no mock or demo bypass.
- Graduate profiles with skills, locations, experience levels, and a completion score.
- Match scoring (+50 matching skill, +30 same location, +20 verified) with a ranked **Dashboard**.
- Searchable, filterable **Opportunities** feed with pagination, plus a live **Demand Map** of gig density across 11 Nairobi neighbourhoods.
- One-tap **Applications** with duplicate prevention and status tracking (Pending → Reviewing → Accepted/Rejected → Completed).
- Employer job posting, applicant review/contact, and an **Admin** moderation queue that powers the verified badge.
- Password reset and email-verification flow (with resend) for account recovery and trust.

**AI Suite** (under `/ai`)
- **Career Chatbot** — multi-turn Gemini assistant with specialized roles: TVET career advice, employer talent scoping, and technical trade mentorship.
- **Real-Time Live Voice** — low-latency speech coaching powered by the Gemini 3.8 Live API, bridged through a Neon Function WebSocket endpoint (no API key in the browser).
- **Maps Grounding** — locate accredited TVET polytechnics, NITA testing centers, hardware suppliers, and workshops.
- **Search Grounding** — live market wages in KES, TVETA accreditation rules, and government youth programs.

## 4. MVP scope and exclusions

**In scope (MVP):**
- Roles, profiles, match scoring, searchable/verified opportunity feed, applications, employer posting, admin moderation, and seed data — as described above.
- Demand Map, AI chatbot, live voice, Maps/Search grounding, dark mode, mobile-first responsive UI.

**Excluded from this MVP:**
- Payments and escrow
- Ratings / reviews
- In-app chat or messaging (handoff is via phone link)
- Employer / graduate identity verification beyond admin-approved listings (trade-certification verification is on the roadmap)
- Notifications (email / push)
- Native mobile apps
- ATS features (applicant pipelines, CV parsing, interviews)

## 5. Assumptions to test

1. **Local beats generic** — Gig-seekers trust and prefer opportunities within walkable distance of their neighbourhood over distant job-board listings.
2. **Verification drives trust** — a visible "verified" badge materially increases the likelihood that graduates apply and employers attract applicants.
3. **Phone call is the closing step** — in this market, the transaction completes over a call (WhatsApp/phone), not through in-app messaging; the MVP handoff model is correct.
4. **TVET graduates are the supply** — there is a sufficient, ongoing flow of trained tradespeople in the area willing to list themselves.
5. **Employers post low-friction** — local employers and households will adopt a lightweight posting flow if it takes under a minute.
6. **Skills profile, not CV** — trade skills + location is a sufficient matching signal for the first hires (no CV needed).

## 6. Roadmap (post-MVP)

1. **Payments & escrow** — collect and release payment on gig completion (no middleman fees, but trusted settlement).
2. **Ratings & reviews** — post-gig feedback for both graduates and employers to compound trust.
3. **Trade-certification verification** — allow graduates to claim a verified badge via NITA/trade certs, reviewed by admins.
4. **In-app chat** — threaded messaging alongside the existing phone-handoff.
5. **Notifications** — email/push alerts for new matches, application status, and gig deadlines.

## 7. User journey (workflow)

1. **Sign up** — graduate / employer / admin creates an account (Email/Password or Google); a linked database profile is created.
2. **Build your profile** — graduates add name, location, bio, phone, and select skills with an experience level (Beginner / Intermediate / Advanced); a completion score guides them.
3. **Verify your email** — a one-time verification keeps profiles authentic and enables account recovery.
4. **Matched** — opportunities are scored against the profile (+50 skill, +30 location, +20 verified) and ranked on the **Dashboard**, best first.
5. **Discover** — the **Opportunities** page adds full-text search, filters (skill, location, type, verified) and pagination; the **Demand Map** shows where gigs are concentrated.
6. **Apply** — one-tap application with a short message; duplicates are blocked.
7. **Track** — the **Applications** page shows live status: Pending → Reviewing → Accepted/Rejected → Completed.
8. **Employer side** — post a gig (submitted **unverified**), then review, accept or reject applicants and contact them by phone.
9. **Admin moderation** — pending opportunities land in the **Admin dashboard**; approving flips the `verified` flag that drives the matching bonus.
10. **AI support** — at any point, use the chatbot for career advice, voice mode for hands-free interview prep, and map/search grounding for rates and accreditation.

## 8. Roles in the solution

| Role | Who it is |
| --- | --- |
| **GRADUATE** | TVET-trained tradesperson in the community (electrician, tailor, caterer, plumber, ICT...) |
| **EMPLOYER** | Local households, small businesses and shops posting work |
| **ADMIN** | Platform moderator verifying the legitimacy of listings |

## 9. Role functions

**GRADUATE**
- Create a skills + location profile
- Get ranked, verified opportunity matches
- Search and filter the opportunity feed, and explore the Demand Map
- Apply to opportunities (one tap, deduplicated)
- Track application status from Pending to Completed
- Use the AI chatbot, live voice coach, and map/search grounding

**EMPLOYER**
- Post opportunities with type, payment, deadline and required skills (submitted unverified)
- View applicants across all their postings
- Accept, reject or set applicants to "reviewing"
- Contact applicants directly via phone

**ADMIN**
- Review the pending-opportunities queue
- Approve (→ verified) or reject (→ closed) listings
- Mainline access to all content

## 10. Tech stacks chosen

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router, React 19), JavaScript + minimal TypeScript config |
| Styling | CSS Modules + a global design system — no UI framework, no Tailwind |
| Auth | Firebase Auth (Email/Password + Google), verified server-side via Firebase Admin SDK |
| Database | PostgreSQL on Neon (Lakebase) with Prisma |
| ORM | Prisma with PostgreSQL driver adapter |
| API | Next.js Route Handlers (REST-style JSON) |
| AI | Gemini API (chat, search, maps grounding); Gemini 3.8 Live API for real-time voice |
| Voice bridge | Neon Function (`livevoice`) — WebSocket upgrade handling via `@neon/functions`, bundled with esbuild |
| Deployment | Vercel (app) + Neon Functions (voice WebSocket bridge) |

Key libraries: `firebase`, `firebase-admin`, `@prisma/client`, `@prisma/adapter-pg`, `pg`, `dotenv`, `@google/genai`, `@neon/functions`, `ws`.

---

## Repository layout

The Next.js application lives at the **repository root** (Vercel builds it automatically via framework detection).

| Path | Description |
| --- | --- |
| `src/app/` | Pages (`login`, `signup`, `dashboard`, `opportunities`, `demand-map`, `ai`, `applications`, `profile`, `employer`, `admin`) and API route handlers |
| `src/components/` | Navbar, cards, filters, skill badges, landing animations, AI UI (`ai/`) |
| `src/context/AuthContext.js` | Firebase auth state + profile provider |
| `src/lib/` | Firebase clients, auth guards, Prisma client, Gemini client, matching engine |
| `live/index.mjs` | Neon Function: Gemini 3.8 Live voice WebSocket bridge |
| `neon.ts` | Neon Function configuration (declares `livevoice` + env vars) |
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

Environment variables (see `.env.example`): the `NEXT_PUBLIC_FIREBASE_*` web config, the Firebase Admin SDK creds (`FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY` — keep the `\n` escapes), `DATABASE_URL`, `GEMINI_API_KEY`, and `NEXT_PUBLIC_LIVE_WS_URL` (see "Live voice" below).

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the dev server (`node server.mjs` — serves the live-voice WS bridge locally) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run db:migrate` | Apply Prisma migrations |
| `npm run db:seed` | Load demo data |

### Deploying on Vercel

- The repo root is the project root — Vercel auto-detects Next.js; a `vercel.json` is included and valid (no framework/output overrides needed).
- Add all env vars from `.env.example` in **Vercel → Project Settings → Environment Variables** (Production + Preview).
- On first run, the production database needs the schema applied: run `prisma migrate deploy` once (e.g. locally against the same `DATABASE_URL`, or in a one-off Vercel build/CLI step).

### Live voice (Neon Function bridge)

Real-time voice runs on a **Neon Function** because its WebSocket upgrade endpoint can't run inside Vercel's serverless runtime.

- Source lives in `live/index.mjs`; config in `neon.ts` (`@neon/config`), declaring the `livevoice` function with `GEMINI_API_KEY` and `FIREBASE_PROJECT_ID` env vars.
- The function verifies the caller's Firebase ID token, then proxies audio/text to the Gemini 3.8 Live API. No API key is exposed to the browser.
- Deploy the bundle (esbuild, Node 24 target) via the Neon API/CLI (`functions deploy`), and expose the resulting URL as `NEXT_PUBLIC_LIVE_WS_URL` in the Vercel environment (e.g. `wss://<branch>-livevoice.compute.<region>.neon.tech`).
- Locally, `server.mjs` proxies the same WebSocket path at `/api/live-ws`, so `NEXT_PUBLIC_LIVE_WS_URL` can be left unset during development.

## Demo accounts

Seeded by `npm run db:seed` (password for all: `Spacemakers@2026`):

- Graduate: `brian.demo@spacemakers.app`
- Employer: `eatery.demo@spacemakers.app`
- Admin: `empower@gmail.com` (Empower)

> Sign-in now requires a real account — the demo *quick-login* button was removed. These seeded accounts still work only if matching Firebase Auth records exist in your project.