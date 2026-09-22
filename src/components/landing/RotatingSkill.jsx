"use client";

import { useEffect, useState } from "react";
import styles from "./RotatingSkill.module.css";

const TRADES = ["Electrician", "Tailor", "Plumber", "Caterer", "Carpenter", "Welder"];

export default function RotatingSkill() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TRADES.length);
    }, 1900);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={styles.rotor} aria-live="polite">
      {TRADES.map((word, i) => (
        <span key={word} className={`${styles.word} ${i === index ? styles.active : ""}`}>
          {word}
        </span>
      ))}
    </span>
  );
}