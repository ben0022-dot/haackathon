"use client";

import { useEffect, useRef, useState } from "react";
import { NEIGHBORHOODS } from "@/lib/neighborhoods";
import { MapPin, Check } from "lucide-react";
import styles from "./NeighborhoodPicker.module.css";

export default function NeighborhoodPicker({
  value,
  onChange,
  placeholder = "Choose a neighborhood",
  id,
  name,
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(0);
  const rootRef = useRef(null);

  const results = NEIGHBORHOODS.filter(
    (n) => n.toLowerCase().includes(query.toLowerCase()) || (value || "").toLowerCase() === n.toLowerCase(),
  );

  useEffect(() => {
    function onDocClick(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  function select(nameValue) {
    onChange(nameValue);
    setQuery("");
    setOpen(false);
  }

  return (
    <div className={styles.root} ref={rootRef}>
      <div className={styles.inputWrap}>
        <MapPin size={16} className={styles.icon} aria-hidden="true" />
        <input
          id={id}
          name={name}
          className={styles.input}
          type="text"
          value={open ? query : value || ""}
          placeholder={placeholder}
          autoComplete="off"
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          onChange={(e) => {
            setQuery(e.target.value);
            setHighlighted(0);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (!open && (e.key === "ArrowDown" || e.key === "Enter")) {
              setQuery("");
              setOpen(true);
              return;
            }
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setHighlighted((h) => Math.min(results.length - 1, h + 1));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setHighlighted((h) => Math.max(0, h - 1));
            } else if (e.key === "Enter") {
              e.preventDefault();
              if (open && results[highlighted]) select(results[highlighted]);
              else setOpen(true);
            } else if (e.key === "Escape") {
              setOpen(false);
            }
          }}
        />
      </div>

      {open && results.length > 0 && (
        <ul className={styles.menu} role="listbox">
          {results.map((n, i) => {
            const selected = value === n;
            return (
              <li key={n} role="option" aria-selected={selected}>
                <button
                  type="button"
                  className={`${styles.option} ${i === highlighted ? styles.optionHighlight : ""}`}
                  onMouseEnter={() => setHighlighted(i)}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => select(n)}
                >
                  <span>{n}</span>
                  {selected && <Check size={15} aria-hidden="true" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}