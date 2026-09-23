import Link from "next/link";
import { HeroSection } from "@/App";
import styles from "./page.module.css";
import {
  Sparkles,
  Bot,
  Radio,
  MapPin,
  Globe,
  ArrowRight,
  Compass,
  LayoutDashboard,
  Briefcase,
  UserCheck,
  Zap,
  ShieldCheck,
} from "lucide-react";

const STEPS = [
  {
    num: "1",
    title: "Create your skill profile",
    text: "Sign up as an artisan or employer. Add your TVET trade certifications, location, and daily rate.",
  },
  {
    num: "2",
    title: "Discover nearby opportunities",
    text: "Browse verified local gigs matched directly to your skills or explore high-demand zones on the live map.",
  },
  {
    num: "3",
    title: "Apply and get connected",
    text: "Apply with one tap, track progress on your personal dashboard, and get connected directly with zero middleman fees.",
  },
];

const EMPLOYER_STEPS = [
  {
    num: "1",
    title: "Post an opportunity",
    text: "Describe the work, choose your neighborhood, and pick the skills you need from our TVET trade list.",
  },
  {
    num: "2",
    title: "Review matched applicants",
    text: "We surface skilled tradespeople near you, ranked by fit, with honest profiles and experience levels.",
  },
  {
    num: "3",
    title: "Accept and connect",
    text: "Accept the right applicant to unlock their number, agree on price and dates directly — no agency fees.",
  },
];

const EXAMPLES = [
  { skill: "Electrician", detail: "House wiring · Githogoro", note: "KES 2,500 / day", verified: true, tile: "E" },
  { skill: "Tailor", detail: "School uniforms · Githogoro", note: "KES 600 / piece", verified: true, tile: "T" },
  { skill: "Caterer", detail: "Wedding catering · Runda", note: "KES 1,800 / day", verified: true, tile: "C" },
  { skill: "Plumber", detail: "Piping & Leak repairs · Muthaiga", note: "KES 1,500 / day", verified: true, tile: "P" },
  { skill: "Solar Technician", detail: "Inverter installation · Westlands", note: "KES 3,200 / day", verified: true, tile: "S" },
  { skill: "Welder", detail: "Security gates & grills · Ruiru", note: "KES 2,800 / day", verified: true, tile: "W" },
];

const MARQUEE = [
  "House wiring · Githogoro · KES 2,500 / day",
  "School uniforms · Githogoro · KES 600 / piece",
  "Wedding catering · Runda · KES 1,800 / day",
  "Leak repairs · Muthaiga · KES 1,500 / day",
  "Solar PV install · Westlands · KES 3,200 / day",
  "Gate welding · Gigiri · KES 3,000 / day",
  "Cabinet making · Parklands · KES 2,400 / day",
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* Ticker marquee of live Nairobi opportunities */}
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

      {/* Main Platform Navigation Hub: Clearly separates Landing, Dashboard, Map, and Auth */}
      <section className={styles.section} style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)", paddingTop: 36, paddingBottom: 36 }}>
        <div className={styles.sectionInner}>
          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 28px" }}>
            <span className="badge badge-skill" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
              <Zap size={14} /> Platform Core
            </span>
            <h2 className={styles.sectionTitle} style={{ fontSize: "1.7rem", marginBottom: 8 }}>
              Everything You Need in One Place
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
              Explore the core areas of SpaceMakers: browse gigs, analyze neighborhood demand, or enter your dedicated dashboard.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {/* Opportunities */}
            <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 20 }}>
              <div>
                <div style={{ width: 42, height: 42, borderRadius: 10, background: "var(--primary-soft)", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                  <Briefcase size={22} />
                </div>
                <h3 style={{ fontSize: "1.15rem", marginBottom: 6 }}>Opportunities Directory</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  Browse verified local jobs and gigs across Nairobi. Filter by TVET trade, neighborhood, and budget.
                </p>
              </div>
              <Link href="/opportunities" style={{ marginTop: 16, fontSize: "0.88rem", fontWeight: 700, color: "var(--primary)", display: "inline-flex", alignItems: "center", gap: 4 }}>
                Explore Open Gigs <ArrowRight size={14} />
              </Link>
            </div>

            {/* Demand Map */}
            <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 20, border: "2px solid var(--primary-soft)" }}>
              <div>
                <div style={{ width: 42, height: 42, borderRadius: 10, background: "var(--primary-soft)", color: "var(--primary-dark)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                  <Compass size={22} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                  <h3 style={{ fontSize: "1.15rem" }}>Interactive Demand Map</h3>
                  <span className="badge badge-skill" style={{ fontSize: "0.7rem", padding: "2px 6px" }}>Live Map</span>
                </div>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  Full-screen Google Map showing real-time gig density clusters, average artisan wages, and high-demand zones.
                </p>
              </div>
              <Link href="/demand-map" style={{ marginTop: 16, fontSize: "0.88rem", fontWeight: 700, color: "var(--primary)", display: "inline-flex", alignItems: "center", gap: 4 }}>
                Open Interactive Map <ArrowRight size={14} />
              </Link>
            </div>

            {/* Dashboard */}
            <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 20 }}>
              <div>
                <div style={{ width: 42, height: 42, borderRadius: 10, background: "#fef3c7", color: "#b45309", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                  <LayoutDashboard size={22} />
                </div>
                <h3 style={{ fontSize: "1.15rem", marginBottom: 6 }}>Personal Dashboard</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  Access your artisan or employer workspace. Manage applications, review skill matches, and update profile credentials.
                </p>
              </div>
              <Link href="/dashboard" style={{ marginTop: 16, fontSize: "0.88rem", fontWeight: 700, color: "var(--primary)", display: "inline-flex", alignItems: "center", gap: 4 }}>
                Go to Dashboard <ArrowRight size={14} />
              </Link>
            </div>

            {/* Sign In & Sign Up */}
            <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 20 }}>
              <div>
                <div style={{ width: 42, height: 42, borderRadius: 10, background: "var(--background)", color: "var(--text-primary)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                  <UserCheck size={22} />
                </div>
                <h3 style={{ fontSize: "1.15rem", marginBottom: 6 }}>Sign In / Register</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  Create an artisan or employer account to start finding work, posting gigs, and tracking your applications.
                </p>
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
                <Link href="/login" className="btn btn-secondary" style={{ padding: "6px 12px", fontSize: "0.82rem" }}>
                  Sign In
                </Link>
                <Link href="/signup" className="btn btn-primary" style={{ padding: "6px 14px", fontSize: "0.82rem" }}>
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demand Map Teaser Section with direct link to /demand-map */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32, alignItems: "center" }}>
            <div>
              <span className="badge badge-skill" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
                <Compass size={14} /> Geographic Trade Intelligence
              </span>
              <h2 className={styles.sectionTitle} style={{ marginBottom: 12 }}>
                Know Where the Gigs Are Before Leaving Home
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6, marginBottom: 20 }}>
                Don&apos;t travel blindly across town. Our dedicated Demand Map pinpoints live trade requirements across 11 Nairobi neighborhoods including Githogoro, Runda, Westlands, and Kasarani.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
                <div style={{ padding: "12px", borderRadius: 8, background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--primary)" }}>300+</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>Active Gigs Mapped</div>
                </div>
                <div style={{ padding: "12px", borderRadius: 8, background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--primary)" }}>11 Zones</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>Nairobi Metro Hubs</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/demand-map" className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <Compass size={16} /> Open Interactive Demand Map
                </Link>
                <Link href="/opportunities" className="btn btn-secondary">
                  View Opportunity List
                </Link>
              </div>
            </div>

            {/* Map Preview Graphic Card */}
            <div
              className="card"
              style={{
                padding: 24,
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>Nairobi Neighborhood Hubs</div>
                <span className="badge badge-verified">Live Updates</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 12px", borderRadius: 8, background: "var(--background)" }}>
                  <div>
                    <strong style={{ fontSize: "0.9rem" }}>Githogoro Hub</strong>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>Electrical, Masonry, Plumbing</div>
                  </div>
                  <span className="badge badge-skill">42 Gigs</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 12px", borderRadius: 8, background: "var(--background)" }}>
                  <div>
                    <strong style={{ fontSize: "0.9rem" }}>Runda & Muthaiga</strong>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>Carpentry, Catering, Solar PV</div>
                  </div>
                  <span className="badge badge-skill">28 Gigs</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 12px", borderRadius: 8, background: "var(--background)" }}>
                  <div>
                    <strong style={{ fontSize: "0.9rem" }}>Westlands & Parklands</strong>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>ICT, Commercial Wiring, Welding</div>
                  </div>
                  <span className="badge badge-skill">35 Gigs</span>
                </div>
              </div>
              <div style={{ marginTop: 18, textAlign: "center" }}>
                <Link href="/demand-map" style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--primary)", display: "inline-flex", alignItems: "center", gap: 4 }}>
                  Launch Full Map with Filters & Pins <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>
            How it works
            <span className={styles.sectionEm}> — for graduates and employers</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28, marginTop: 28 }}>
            <div>
              <Link href="/signup" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 12, fontSize: "0.9rem", fontWeight: 800, color: "var(--primary-dark)", textDecoration: "none" }}>
                <Briefcase size={16} /> For graduates &amp; artisans
              </Link>
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

            <div>
              <Link href="/signup?role=EMPLOYER" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 12, fontSize: "0.9rem", fontWeight: 800, color: "var(--accent-700, #b45326)", textDecoration: "none" }}>
                <UserCheck size={16} /> For employers
              </Link>
              <div className={styles.steps}>
                {EMPLOYER_STEPS.map((step) => (
                  <div className={styles.stepCard} key={step.num}>
                    <span className={styles.stepNum}>{step.num}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Honest trust section */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <span className="badge badge-skill" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
              <ShieldCheck size={14} /> Built on trust
            </span>
            <h2 className={styles.sectionTitle}>Honest about what we verify</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.7, marginBottom: 20 }}>
              We don&apos;t run background checks on tradespeople. Every graduate profile shows their
              experience level and trade skills clearly, and verified <i>opportunities</i> mean the
              employer confirmed their business details with us. What you see is what you get —
              decide with your eyes open.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
              <span className="badge badge-verified">Verified opportunity = employer confirmed their details</span>
              <span className="badge badge-skill">Every profile shows real skills &amp; experience level</span>
              <span className="badge">Zero middleman fees on both sides</span>
            </div>
          </div>
        </div>
      </section>

      {/* Live Sample Opportunities */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 12, marginBottom: 24 }}>
            <div>
              <h2 className={styles.sectionTitle} style={{ marginBottom: 4 }}>
                Live in your neighbourhood
                <span className={styles.sectionEm}> — and paid</span>
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                Recent opportunities verified on SpaceMakers.
              </p>
            </div>
            <Link href="/opportunities" className="btn btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              Browse All Opportunities <ArrowRight size={14} />
            </Link>
          </div>

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

      {/* AI Features Highlight */}
      <section className={styles.section} style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className={styles.sectionInner}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <span className="badge badge-skill" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <Sparkles size={14} /> Powered by Gemini
            </span>
          </div>
          <h2 className={styles.sectionTitle}>
            Trade Intelligence at Your Fingertips
            <span className={styles.sectionEm}> — Live AI for Kenyan Artisans</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginTop: 24 }}>
            <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--primary-soft)", color: "var(--primary-dark)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                  <Bot size={22} />
                </div>
                <h3 style={{ fontSize: "1.1rem", marginBottom: 6 }}>Multi-Turn Gemini Chatbot</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  Specialized roles for TVET career advice, employer scoping, and technical trade formulas.
                </p>
              </div>
              <Link href="/ai?tab=chat" style={{ marginTop: 14, fontSize: "0.85rem", fontWeight: 700, color: "var(--primary)", display: "inline-flex", alignItems: "center", gap: 4 }}>
                Chat with Assistant <ArrowRight size={14} />
              </Link>
            </div>

            <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--warning-soft)", color: "var(--warning)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                  <Radio size={22} />
                </div>
                <h3 style={{ fontSize: "1.1rem", marginBottom: 6 }}>Real-Time Live Voice</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  Hands-free voice coaching powered by Gemini 3.8 Live API. Practice trade interviews on site.
                </p>
              </div>
              <Link href="/ai?tab=voice" style={{ marginTop: 14, fontSize: "0.85rem", fontWeight: 700, color: "var(--primary)", display: "inline-flex", alignItems: "center", gap: 4 }}>
                Launch Voice Session <ArrowRight size={14} />
              </Link>
            </div>

            <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--primary-soft)", color: "var(--primary-dark)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                  <MapPin size={22} />
                </div>
                <h3 style={{ fontSize: "1.1rem", marginBottom: 6 }}>Google Maps Grounding</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  Locate accredited TVET polytechnics, NITA testing centers, hardware suppliers, and workshops.
                </p>
              </div>
              <Link href="/ai?tab=maps" style={{ marginTop: 14, fontSize: "0.85rem", fontWeight: 700, color: "var(--primary)", display: "inline-flex", alignItems: "center", gap: 4 }}>
                Explore Local Hubs <ArrowRight size={14} />
              </Link>
            </div>

            <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--surface)", color: "var(--primary)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                  <Globe size={22} />
                </div>
                <h3 style={{ fontSize: "1.1rem", marginBottom: 6 }}>Google Search Grounding</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  Live market wages in KES, TVETA accreditation rules, and government youth programs.
                </p>
              </div>
              <Link href="/ai?tab=search" style={{ marginTop: 14, fontSize: "0.85rem", fontWeight: 700, color: "var(--primary)", display: "inline-flex", alignItems: "center", gap: 4 }}>
                Check Market Rates <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* For Employers section */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.employerBlock}>
            <span className={styles.chip}>For employers</span>
            <h2>Need a skilled hand nearby?</h2>
            <p>
              Post an opportunity and reach trained, verified tradespeople in
              your area — without agencies or middlemen taking a cut.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/signup?role=EMPLOYER" className="btn btn-primary">
                Post an Opportunity
              </Link>
              <Link href="/login" className="btn btn-secondary">
                Employer Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA band */}
      <section className={styles.ctaBand}>
        <div className={styles.sectionInner}>
          <h2>Your next gig is closer than you think.</h2>
          <p>Join SpaceMakers and turn your TVET skills into income this week.</p>
          <div className={styles.ctas}>
            <Link href="/signup" className={`btn btn-primary ${styles.ctaPrimary}`}>
              Create your profile
            </Link>
            <Link href="/opportunities" className={`btn btn-secondary ${styles.ctaSecondary}`}>
              Browse opportunities
            </Link>
            <Link href="/dashboard" className={`btn btn-secondary ${styles.ctaSecondary}`}>
              Open Dashboard
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
