import Link from "next/link";
import RotatingSkill from "@/components/landing/RotatingSkill";
import LiveMatch from "@/components/landing/LiveMatch";
import Stats from "@/components/landing/Stats";
import styles from "./page.module.css";

const STEPS = [
  {
    num: "1",
    title: "Create your skill profile",
    text: "Sign up, add what you can do — electrical, tailoring, catering, plumbing — and where you are.",
  },
  {
    num: "2",
    title: "Discover nearby opportunities",
    text: "See verified jobs and gigs near you, matched to the skills you know how to do.",
  },
  {
    num: "3",
    title: "Apply and get connected",
    text: "Apply in one tap, then track your application until you get connected.",
  },
];

const EXAMPLES = [
  { skill: "Electrician", detail: "House wiring · Githogoro", note: "KES 2,500", verified: true, tile: "E" },
  { skill: "Tailor", detail: "School uniforms · Githogoro", note: "KES 600 / piece", verified: true, tile: "T" },
  { skill: "Caterer", detail: "Wedding catering · Runda", note: "KES 1,800 / day", verified: true, tile: "C" },
  { skill: "Plumber", detail: "Leak repairs · Muthaiga", note: "KES 1,500", verified: false, tile: "P" },
  { skill: "ICT technician", detail: "Shop setup · Gigiri", note: "KES 2,000", verified: true, tile: "I" },
  { skill: "Carpenter", detail: "Shelves & repairs · Githogoro", note: "KES 1,000 / day", verified: false, tile: "W" },
];

const MARQUEE = [
  "House wiring · Githogoro · KES 2,500",
  "School uniforms · Githogoro · KES 600 / piece",
  "Wedding catering · Runda · KES 1,800 / day",
  "Leak repairs · Muthaiga · KES 1,500",
  "ICT setup · Gigiri · KES 2,000",
  "Kitchen porter · Githogoro · KES 900 / day",
  "Gate welding · Gigiri · KES 3,000",
];

const STATS = [
  { value: 500, suffix: "+", label: "Trained graduates listed" },
  { value: 120, suffix: "+", label: "Verified local gigs" },
  { value: 8, suffix: " min", label: "Walk to your next gig" },
];

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <span className={styles.blobA} aria-hidden="true" />
        <span className={styles.blobB} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <p className={styles.eyebrow}>
                <span className={styles.dot} /> Githogoro · Nairobi
              </p>
              <h1>
                <span className={styles.rotorWrap}>
                  <RotatingSkill /> wanted
                </span>
                <span className={styles.hl}>in your neighbourhood.</span>
              </h1>
              <p className={styles.heroText}>
                Skilled people. Verified local work. One-tap applications that
                connect you with the job — not a faceless portal.
              </p>
              <div className={styles.ctas}>
                <Link href="/signup" className="btn btn-primary">
                  Find Opportunities
                </Link>
                <Link href="/signup?role=EMPLOYER" className="btn btn-secondary">
                  Post an Opportunity
                </Link>
              </div>
              <div className={styles.stats}>
                <Stats items={STATS} />
              </div>
            </div>
            <div className={styles.heroRight}>
              <LiveMatch />
            </div>
          </div>
        </div>

        <div className={styles.marquee} aria-hidden="true">
          <div className={styles.marqueeTrack}>
            {[...MARQUEE, ...MARQUEE].map((item, i) => (
              <span className={styles.marqueeItem} key={i}>
                <span className={styles.seam}>◆</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>
            How it works
            <span className={styles.sectionEm}> — three steps to your first gig</span>
          </h2>
          <div className={styles.steps}>
            {STEPS.map((step) => (
              <div className={styles.stepCard} key={step.num}>
                <span className={styles.stepNum}>{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>
            Live in your neighbourhood
            <span className={styles.sectionEm}> — and paid</span>
          </h2>
          <div className={styles.examples}>
            {EXAMPLES.map((ex) => (
              <div className={styles.exampleCard} key={ex.skill}>
                <div className={styles.exampleTop}>
                  <span className={styles.tile}>{ex.tile}</span>
                  {ex.verified ? (
                    <span className={styles.verifiedTag}>✓ Verified</span>
                  ) : (
                    <span className={styles.paidTag}>{ex.note}</span>
                  )}
                </div>
                <h3>{ex.skill}</h3>
                <p>
                  {ex.detail} · <strong>{ex.note}</strong>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.employerBlock}>
            <span className={styles.chip}>For employers</span>
            <h2>Need a skilled hand nearby?</h2>
            <p>
              Post an opportunity and reach trained, verified tradespeople in
              your area — without agencies or middlemen taking a cut.
            </p>
            <Link href="/signup?role=EMPLOYER" className="btn btn-primary">
              Post an Opportunity
            </Link>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>You can trust what you see</h2>
          <p className={styles.trustText}>
            Opportunities are reviewed and verified before being promoted to
            users. Look for the <span className={styles.verified}>✓ Verified</span>{" "}
            badge when you browse — it means real intent and a real lifetime of
            the work.
          </p>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={styles.sectionInner}>
          <h2>Your next gig is closer than you think.</h2>
          <p>Join SpaceMakers and turn your skills into income this week.</p>
          <div className={styles.ctas}>
            <Link href="/signup" className={`btn btn-primary ${styles.ctaPrimary}`}>
              Create your profile
            </Link>
            <Link href="/opportunities" className={`btn btn-secondary ${styles.ctaSecondary}`}>
              Browse opportunities
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}