"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./LiveMatch.module.css";

const GIGS = [
  { title: "House wiring", skill: "Electrical", loc: "Githogoro", pay: "KES 2,500", verified: true },
  { title: "School uniforms", skill: "Tailoring", loc: "Githogoro", pay: "KES 600 / piece", verified: true },
  { title: "Wedding catering", skill: "Catering", loc: "Runda", pay: "KES 1,800 / day", verified: false },
  { title: "Leak repairs", skill: "Plumbing", loc: "Muthaiga", pay: "KES 1,500", verified: true },
];

function Breakdown({ label, delay, on }) {
  return (
    <div className={styles.bar}>
      <div className={styles.barHead}>
        <span>{label}</span>
        <span>{on ? "100%" : "—"}</span>
      </div>
      <div className={styles.barTrack}>
        <div
          className={styles.barFill}
          style={{ width: on ? "100%" : "4%", transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

export default function LiveMatch() {
  const [score, setScore] = useState(0);
  const [broken, setBroken] = useState(false);
  const [gig, setGig] = useState(0);

  useEffect(() => {
    const t0 = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min((t - t0) / 1400, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setScore(Math.round(94 * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const breakTimer = setTimeout(() => setBroken(true), 1800);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(breakTimer);
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setGig((g) => (g + 1) % GIGS.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  const current = GIGS[gig];

  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <span className={styles.live}>
          <span className={styles.pulse} />
          Live match
        </span>
        <span className={styles.headNote}>for your skills</span>
      </div>

      <div className={styles.scoreRow}>
        <span className={styles.score}>{score}</span>
        <span className={styles.percent}>% match</span>
      </div>

      <div className={styles.bars}>
        <Breakdown label="Skill match" delay={0} on={broken} />
        <Breakdown label="Same location" delay={140} on={broken} />
        <Breakdown label="Verified" delay={280} on={broken} />
      </div>

      <div className={styles.gig} key={current.title}>
        <span className={styles.emblem}>{current.skill.charAt(0)}</span>
        <div className={styles.gigBody}>
          <h4>{current.title}</h4>
          <p>
            {current.skill} · {current.loc} · {current.pay}
          </p>
        </div>
      </div>

      <div className={styles.foot}>
        <span className={`${styles.verifiedBadge} ${current.verified ? "" : styles.hidden}`}>
          ✓ Verified
        </span>
        <span className={styles.apply}>Apply in 1 tap</span>
      </div>
    </div>
  );
}