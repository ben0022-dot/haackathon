"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Stats.module.css";

function useCountUp(target) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const t0 = performance.now();
        const duration = 1300;
        const tick = (t) => {
          const p = Math.min((t - t0) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(Math.round(target * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return [ref, value];
}

function Stat({ value, suffix = "", prefix = "", label }) {
  const [ref, count] = useCountUp(value);
  return (
    <div className={styles.stat} ref={ref}>
      <span className={styles.value}>
        {prefix}
        {count}
        {suffix}
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export default function Stats({ items }) {
  return (
    <div className={styles.stats}>
      {items.map((item) => (
        <Stat key={item.label} {...item} />
      ))}
    </div>
  );
}