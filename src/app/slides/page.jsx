"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./page.module.css";

const SLIDES = [
  {
    kicker: "0:00 – 0:35 · Team, user & context",
    title: "SpaceMakers",
    lead: "Local, verified gigs for trained artisans in Githogoro, Nairobi.",
    blurb:
      "Youth unemployment is acute in Nairobi's lower-income communities. TVET graduates finish trade school with marketable skills — electrical, tailoring, catering, plumbing — yet have no reliable local channel to earning opportunities.",
    pills: [
      ["Team", "SpaceMakers — construction + product + AI"],
      ["Primary user", "Brian, 22 — TVET-trained electrician in Githogoro"],
      ["Pilot context", "11 Githogoro-area neighbourhoods, Nairobi"],
      ["Task", "Close the loop between local demand and verified local supply"],
    ],
    notes: "Name the team, name the user, name the place, name the task.",
  },
  {
    kicker: "0:35 – 1:15 · Validated problem & evidence",
    title: "The skills are there. The channel isn't.",
    lead: "Trained graduates stay idle while money walks past their door.",
    problem:
      "Generic, digital-only job boards are invisible to the gigs families and small businesses actually need — a house rewired, uniforms stitched, a wedding catered. The transaction happens over phone and WhatsApp, neighbourhood by neighbourhood.",
    findings: [
      {
        title: "Finding 1 — Local beats generic",
        body: "Graduates and households prefer walkable, neighbourhood gigs over distant listings; location is a primary decision factor.",
      },
      {
        title: "Finding 2 — Verification drives trust",
        body: "A visible verified badge materially raises the chance graduates apply and employers attract applicants — unverified postings get fewer clicks.",
      },
    ],
    notes: "Give the difficulty, the root cause, and two concrete findings.",
  },
  {
    kicker: "1:15 – 2:45 · Live MVP walkthrough",
    title: "Scenario: a venue needs wiring by Friday",
    lead: "An eatery in Runda posts an urgent electrical gig. Brian lives two streets away — with a certificate and two years of experience.",
    steps: [
      ["Sign in", "Brian logs in with a real account — no demo bypass. His profile carries skills, location and level."],
      ["Get matched", "The dashboard ranks gigs: +50 matching skill, +30 same neighbourhood, +20 verified."],
      ["Apply", "One tap with a short message; duplicates are blocked."],
      ["Close the loop", "The employer accepts, the phone number unlocks, and the gig moves to complete."],
    ],
    notes: "Walk the first action to the result, live.",
  },
  {
    kicker: "2:45 – 3:15 · Failure & fallback",
    title: "And here's the honest failure",
    lead: "Trust has to be earned — so we front-load it.",
    build: [
      ["The failure", "The eatery's new employer tries to post a gig and hits a wall: their phone isn't verified. The posting is blocked."],
      ["The fallback", "One OTP later they're in — phone verification is the gate that keeps anonymous spam out and makes listings real."],
      ["The human path", "Once posted, the gig lands unverified with a 'Pending review' flag. A human admin moderates it and flips it to verified — the badge that powers the +20 match bonus."],
    ],
    notes: "Show one failure, its fallback, and the human-support path.",
  },
  {
    kicker: "3:15 – 3:55 · How it works behind the demo",
    title: "What's real, what's seeded",
    lead: "The core task runs on a live stack, end to end.",
    columns: [
      {
        title: "Functional & live",
        items: [
          "Firebase auth — real accounts, server-verified",
          "Neon Postgres + Prisma — profiles, gigs, applications",
          "Matching engine — +50 skill / +30 location / +20 verified",
          "Application lifecycle — Pending → Accepted → Completed",
          "AI suite — Gemini chatbot, search & Maps grounding",
          "Live voice coaching — Gemini 3.8 Live via Neon Function WebSocket (key stays server-side)",
        ],
      },
      {
        title: "Simulated / seeded",
        items: [
          "Demo users, gigs and applicants from seed data",
          "Demand-map density from seed + live counts",
          "No payments, no ratings, no in-app chat (phone handoff is the MVP closing step)",
        ],
      },
      {
        title: "Who verifies & operates",
        items: [
          "Admins moderate the pending queue and flip the verified badge",
          "Employer-confirmed details + human approval feed the trust layer",
          "Everything else is deterministic code",
        ],
      },
    ],
    notes: "Be explicit about what is functional vs simulated.",
  },
  {
    kicker: "3:55 – 4:30 · Testing & changes",
    title: "We tested it — and it taught us",
    lead: "The core task completes, but users tripped twice.",
    changes: [
      ["Who tested", "Team walkthroughs across all three roles with real seeded accounts: graduate, employer, admin."],
      ["Core task", "Locate → apply → review → contact completed end to end."],
      ["Failure #1", "Employers were asked for trade skills that aren't theirs and bailed on the form. We replaced it with 'What do you hire for?' plus company and role fields."],
      ["Failure #2", "Employers could wander into the graduate-only opportunities feed. We closed it with role-based redirects and an employer-specific dashboard."],
    ],
    notes: "Who tested, did the core task work, and what you changed.",
  },
  {
    kicker: "4:30 – 5:00 · Pilot readiness & limitations",
    title: "Ready to pilot — with eyes wide open",
    lead: "Githogoro + Runda, one week, one number.",
    rows: [
      ["Pilot location", "Githogoro and Runda across the 11 neighbourhoods"],
      ["Primary measure", "Verified gigs that convert to a phone contact and completion"],
      ["Biggest risk", "Trust without identity verification at scale — the human admin queue doesn't yet scale to hundreds of listings"],
      ["Next test", "Does the verified badge lift applications in the live pilot?"],
      ["Support needed", "Community partners to seed supply, a local admin moderator, Firebase accounts for pilot users"],
    ],
    notes: "Location, measure, risk, next test, the permission you need.",
  },
];

export default function SlidesPage() {
  const [index, setIndex] = useState(0);
  const touchStart = useRef(null);
  const total = SLIDES.length;

  const go = useCallback(
    (next) => setIndex(Math.max(0, Math.min(total - 1, next))),
    [total],
  );

  useEffect(() => {
    function onKey(e) {
      if (["ArrowRight", "PageDown", " ", "ArrowDown"].includes(e.key)) {
        e.preventDefault();
        go(index + 1);
      } else if (["ArrowLeft", "PageUp", "ArrowUp"].includes(e.key)) {
        e.preventDefault();
        go(index - 1);
      } else if (e.key === "Home") {
        go(0);
      } else if (e.key === "End") {
        go(total - 1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index, total]);

  const onTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    const delta = e.changedTouches[0].clientX - (touchStart.current ?? 0);
    if (Math.abs(delta) > 40) go(index + (delta < 0 ? 1 : -1));
    touchStart.current = null;
  };

  return (
    <main className={styles.deck} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className={styles.progress}>
        <span style={{ width: `${((index + 1) / total) * 100}%` }} />
      </div>

      {SLIDES.map((slide, i) => (
        <section
          key={i}
          className={`${styles.slide} ${i === index ? styles.active : ""}`}
          aria-hidden={i !== index}
        >
          <span className={styles.kicker}>{slide.kicker}</span>
          <h1>{slide.title}</h1>
          <p className={styles.lead}>{slide.lead}</p>

          {slide.blurb && <p className={styles.blurb}>{slide.blurb}</p>}

          {slide.pills && (
            <div className={styles.pills}>
              {slide.pills.map(([label, value]) => (
                <div key={label} className={styles.pill}>
                  <span>{label}</span>
                  {value}
                </div>
              ))}
            </div>
          )}

          {slide.problem && <p className={styles.problem}>{slide.problem}</p>}

          {slide.findings && (
            <div className={styles.grid2}>
              {slide.findings.map((f) => (
                <article key={f.title} className={styles.card}>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </article>
              ))}
            </div>
          )}

          {slide.steps && (
            <div className={styles.steps}>
              {slide.steps.map(([label, body], idx) => (
                <div key={label} className={styles.step}>
                  <span className={styles.stepNum}>{idx + 1}</span>
                  <div>
                    <strong>{label}</strong>
                    <p>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {slide.build && (
            <div className={styles.grid3}>
              {slide.build.map(([label, body]) => (
                <article key={label} className={styles.card}>
                  <h3>{label}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          )}

          {slide.columns && (
            <div className={styles.grid3}>
              {slide.columns.map((col) => (
                <article key={col.title} className={styles.card}>
                  <h3>{col.title}</h3>
                  <ul>
                    {col.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          )}

          {slide.changes && (
            <div className={styles.timeline}>
              {slide.changes.map(([label, body]) => (
                <div key={label} className={styles.change}>
                  <strong>{label}</strong>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          )}

          {slide.rows && (
            <div className={styles.rows}>
              {slide.rows.map(([label, body]) => (
                <div key={label} className={styles.row}>
                  <span>{label}</span>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          )}

          {slide.notes && <p className={styles.notes}>Talk track — {slide.notes}</p>}
        </section>
      ))}

      <footer className={styles.controls}>
        <button onClick={() => go(index - 1)} disabled={index === 0} aria-label="Previous slide">
          <ChevronLeft size={18} />
        </button>
        <div className={styles.dots}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={i === index ? styles.dotActive : ""}
              onClick={() => go(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <span className={styles.counter}>
          {index + 1} / {total}
        </span>
        <button onClick={() => go(index + 1)} disabled={index === total - 1} aria-label="Next slide">
          <ChevronRight size={18} />
        </button>
      </footer>
    </main>
  );
}