# SpaceMakers

A local opportunity-discovery platform for TVET graduates in **Githogoro, Nairobi**. Skilled graduates — electricians, tailors, plumbers, caterers — create profiles, get matched with verified local gigs, and apply in one tap. Employers post work and manage applicants; an admin verifies opportunities to keep the feed trustworthy.

Built for a 48-hour hackathon MVP.

---

## Tech Stack

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

## How it works (workflow)

1. **Sign up** — a graduate, employer, or admin creates an account (Email/Password or Google). A database profile row is created and linked to the Firebase UID.
2. **Build your profile** — graduates add their name, location, bio, phone, and select skills with an experience level (Beginner / Intermediate / Advanced). A **profile completion** score guides them.
3. **Matching** — opportunities are scored against the graduate's profile:
   - `+50` matching skill
   - `+30` same location (e.g. "Githogoro")
   - `+20` verified by admin
   
   Ranked matches appear on the **Dashboard**, best first.
4. **Discover** — the **Opportunities** page adds full-text search, filters (skill, location, type, verified only), and pagination.
5. **Apply** — one-tap applications with a short message; duplicates are blocked (`409`).
6. **Track** — the **Applications** page shows application status: Pending → Reviewing → Accepted / Rejected → Completed.
7. **Employer** — post a gig (submitted **unverified**), then review, accept, or reject applicants from the employer dashboard and contact them by phone.
8. **Admin moderation** — pending (unverified) opportunities land in the **Admin dashboard** for approval; approving flips the `verified` flag that powers the matching bonus.

**Security model:** every API call verifies the Firebase ID token (Firebase Admin SDK) server-side — the client never supplies a user ID. Role-based guards (`requireRole`) restrict opportunity creation, applicant review, and admin actions.

## Scope

**In scope (MVP):**

- Firebase authentication (email/password + Google) with three roles: GRADUATE, EMPLOYER, ADMIN
- Graduate profiles with skills, locations, and experience levels
- Match scoring and ranked dashboard
- Opportunity feed with search, filters, and pagination
- Applications with duplicate prevention and status tracking
- Employer job posting and applicant management
- Admin approval/rejection of opportunities ("verified" badge)
- Seed data for demos and mobile-first responsive UI

**Out of scope for this MVP:**

- Payments and in-app escrow
- Ratings / reviews
- In-app chat or messaging (contact is currently via phone link)
- Employer verification
- Notifications (email / push)
- Native mobile apps

---

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Environment variables

Copy `.env.example` to `.env.local` and fill in your credentials:

```bash
# Firebase web config (Firebase Console → Project settings → General)
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=...

# Firebase Admin SDK (Service account → Generate new private key; the private key keeps its \n escapes)
FIREBASE_PROJECT_ID=...
FIREBASE_CLIENT_EMAIL=...
FIREBASE_PRIVATE_KEY=...

# Prisma Postgres connection string
DATABASE_URL=postgresql://...
```

### 3. Database setup

```bash
npm run db:migrate   # apply schema migrations (creates tables/enums)
npm run db:seed      # demo users, skills, opportunities + applications
```

> The seed creates real Firebase Auth accounts (check your Firebase console) and links them to database profiles. If Firebase Auth isn't enabled on the project yet, enable **Email/Password** in Firebase Console → Build → Authentication, then re-run the seed.

### 4. Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Useful scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run db:migrate` | Apply Prisma migrations |
| `npm run db:seed` | Load demo data |

## Demo accounts

Seeded by `npm run db:seed` (password for all: `SpaceMakers@2026`):

| Role | Email |
| --- | --- |
| Graduate | `brian.demo@spacemakers.app` |
| Graduate | `wanjiku.demo@spacemakers.app` |
| Employer | `eatery.demo@spacemakers.app` |
| Employer | `hardware.demo@spacemakers.app` |
| Admin | `admin.spacemakers@spacemakers.app` |

## Project structure

```
src/
  app/
    page.jsx               Landing page
    login/ signup/         Auth pages
    dashboard/             Ranked matched opportunities
    opportunities/         Searchable, filterable feed (+ detail pages)
    applications/          Application tracking
    profile/               Skill/location profile editor
    employer/              Employer dashboard + "post opportunity" form
    admin/                 Opportunity moderation queue
    api/                   Route handlers (profile, skills, opportunities,
                           applications, admin)
  components/              Navbar, cards, filters, skill badges, loading states
  context/AuthContext.js   Firebase auth state + profile provider
  lib/                     Firebase clients, auth guards, Prisma, matching
  styles/globals.css       Design system (CSS variables, buttons, forms)
prisma/
  schema.prisma            Data model, enums
  seed.js                  Demo data
prisma.config.mjs          Prisma CLI config (env + seed command)
```