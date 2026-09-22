import Link from "next/link";
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
  { skill: "Electrician", detail: "House wiring · Githogoro" },
  { skill: "Tailor", detail: "School uniforms · Githogoro" },
  { skill: "Caterer", detail: "Wedding catering · Runda" },
  { skill: "Plumber", detail: "Residential repairs · Muthaiga" },
];

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Githogoro · Nairobi</p>
          <h1>
            Your skills deserve an opportunity.
          </h1>
          <p className={styles.heroText}>
            Find verified jobs and gigs near you, matched to what you know how to do.
          </p>
          <div className={styles.ctas}>
            <Link href="/signup" className="btn btn-primary">Find Opportunities</Link>
            <Link href="/signup?role=EMPLOYER" className="btn btn-secondary">Post an Opportunity</Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>How it works</h2>
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
          <h2 className={styles.sectionTitle}>Work you could find</h2>
          <div className={styles.examples}>
            {EXAMPLES.map((ex) => (
              <div className={styles.exampleCard} key={ex.skill}>
                <h3>{ex.skill}</h3>
                <p>{ex.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.employerBlock}>
            <h2>For employers</h2>
            <p>
              Need someone with the right skills? Post an opportunity and reach
              skilled people nearby.
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
            Opportunities can be reviewed and verified before being promoted to
            users. Look for the <span className={styles.verified}>✓ Verified</span>{" "}
            badge when you browse.
          </p>
        </div>
      </section>
    </main>
  );
}