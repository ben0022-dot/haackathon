# SpaceMakers

**Local opportunity discovery for TVET graduates — Githogoro, Nairobi.**

Skilled graduates create profiles with their trades (electrical, tailoring, catering, plumbing, ICT...), get matched with verified local gigs, and apply in one tap. Employers post work and manage applicants; an admin verifies opportunities to keep the feed trustworthy.

Built for a 48-hour hackathon MVP with Next.js 16, Firebase Auth, PostgreSQL + Prisma.

## Repository layout

| Path | Description |
| --- | --- |
| `spacemakers/` | The full Next.js application — **see [`spacemakers/README.md`](spacemakers/README.md)** for tech stack, workflow, scope, setup, and demo accounts |

## Quick start

Inside `spacemakers/`:

```bash
npm install
cp .env.example .env.local   # fill in Firebase + DATABASE_URL credentials
npm run db:migrate
npm run db:seed
npm run dev                  # → http://localhost:3000
```

## Roles

- **Graduate** — builds a skills profile, gets ranked opportunity matches, applies and tracks applications.
- **Employer** — posts opportunities and reviews/accepts/rejects applicants.
- **Admin** — approves or rejects pending opportunities (powers the "verified" match bonus).

## Demo accounts

Seeded by `npm run db:seed` (password for all: `SpaceMakers@2026`):

- Graduate: `brian.demo@spacemakers.app`
- Employer: `eatery.demo@spacemakers.app`
- Admin: `admin.spacemakers@spacemakers.app`