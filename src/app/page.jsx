import Link from "next/link";
import RotatingSkill from "@/components/landing/RotatingSkill";
import LiveMatch from "@/components/landing/LiveMatch";
import Stats from "@/components/landing/Stats";
import styles from "./page.module.css";

const STEPS = [
  {
    num: "1",
    title: "Create your profile",
    text: "List your skill, location, and experience so employers can find someone nearby who is ready to work.",
  },
  {
    num: "2",
    title: "Get matched locally",
    text: "See verified opportunities ranked by skill fit, local distance, and trust so the best jobs rise to the top.",
  },
  {
    num: "3",
    title: "Apply and get hired",
    text: "Send a one-tap application and move quickly into a phone call or WhatsApp conversation with the employer.",
  },
];

const EXAMPLES = [
  { skill: "Electrician", detail: "House wiring · Githogoro", note: "KES 2,500", verified: true, tile: "E" },
  { skill: "Tailor", detail: "School uniforms · Githogoro", note: "KES 600 / piece", verified: true, tile: "T" },
  { skill: "Caterer", detail: "Wedding prep · Runda", note: "KES 1,800 / day", verified: true, tile: "C" },
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
        <div className={styles.heroInner}>
          <div className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <p className={styles.eyebrow}>
                <span className={styles.dot} /> Githogoro · Nairobi
              </p>
              <h1>
                <span className={styles.rotorWrap}>
                  <RotatingSkill /> nearby
                </span>
                <span className={styles.hl}>Verified local jobs</span>
                <span className={styles.rotorWrap}>for skilled people.</span>
              </h1>
              <p className={styles.heroText}>
                SpaceMakers connects TVET graduates with nearby employers who need real work done —
                from electrical repairs to tailoring, catering, plumbing, and ICT support.
              </p>
              <div className={styles.ctas}>
                <Link href="/signup" className="btn btn-primary">
                  Browse jobs
                </Link>
                <Link href="/signup?role=EMPLOYER" className="btn btn-secondary">
                  Post a gig
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
          <h2 className={styles.sectionTitle}>How it works</h2>
          <p className={styles.sectionIntro}>
            From profile to paid work in just a few steps — built for how local jobs actually happen.
          </p>
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
          <h2 className={styles.sectionTitle}>Live in your neighbourhood</h2>
          <p className={styles.sectionIntro}>Jobs that match real skills and real local demand.</p>
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
          <h2 className={styles.sectionTitle}>Why local work matters</h2>
          <p className={styles.sectionIntro}>
            Traditional job boards are too generic for the way this market actually operates. SpaceMakers brings opportunity closer to the people who need it.
          </p>
          <div className={styles.featureGrid}>
            <article className={styles.featureCard}>
              <span className={styles.featureNum}>A</span>
              <h3>Built for walkable gigs</h3>
              <p>Graduates can see work they can realistically reach on foot or by short ride, instead of competing for distant jobs.</p>
            </article>
            <article className={styles.featureCard}>
              <span className={styles.featureNum}>B</span>
              <h3>Trust before contact</h3>
              <p>Verified listings reduce wasted time and improve confidence when a job needs someone ready to work today.</p>
            </article>
            <article className={styles.featureCard}>
              <span className={styles.featureNum}>C</span>
              <h3>Money stays local</h3>
              <p>Households, shops, and small businesses can hire nearby talent without agencies or hidden fees taking a cut.</p>
            </article>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Built for both sides of the market</h2>
          <p className={styles.sectionIntro}>Whether you need work or need workers, the product is designed around speed, trust, and local fit.</p>
          <div className={styles.audienceGrid}>
            <div className={styles.audienceCard}>
              <span className={styles.audienceTag}>Graduate</span>
              <h3>For skilled workers</h3>
              <p>Build a profile, get matched to nearby gigs, and apply in one tap without chasing scattered opportunities.</p>
            </div>
            <div className={styles.audienceCard}>
              <span className={styles.audienceTag}>Employer</span>
              <h3>For local employers</h3>
              <p>Post a request in minutes, review nearby applicants, and hire someone who is already trained and close by.</p>
            </div>
            <div className={styles.audienceCard}>
              <span className={styles.audienceTag}>Admin</span>
              <h3>For trusted moderation</h3>
              <p>Review listings, approve jobs, and keep the marketplace credible so users know which opportunities are real.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.employerBlock}>
            <span className={styles.chip}>For employers</span>
            <h2>Need a skilled hand nearby?</h2>
            <p>
              Post a gig in minutes and reach verified tradespeople in your area — without agencies or
              middlemen taking a cut.
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
            Opportunities are reviewed before they are shown to users. The <span className={styles.verified}>✓ Verified</span>{" "}
            badge signals real intent and a real local opportunity, not just another generic listing.
          </p>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={styles.sectionInner}>
          <h2>Your next gig is closer than you think.</h2>
          <p>Join SpaceMakers and turn skilled work into income this week.</p>
          <div className={styles.ctas}>
            <Link href="/signup" className={`btn btn-primary ${styles.ctaPrimary}`}>
              Create your profile
            </Link>
            <Link href="/opportunities" className={`btn btn-secondary ${styles.ctaSecondary}`}>
              Browse jobs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}