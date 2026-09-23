"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import styles from "./ReviewForm.module.css";

const STAR_LABELS = {
  1: "Poor",
  2: "Fair",
  3: "Good",
  4: "Very good",
  5: "Excellent",
};

export default function ReviewForm({ applicationId, revieweeName, onSubmitted }) {
  const { user } = useAuth();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (rating < 1) {
      setError("Select a star rating first.");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      const token = await user.getIdToken();
      const res = await fetch(`/api/applications/${applicationId}/review`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ rating, comment }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Could not submit your review.");
        setSubmitting(false);
        return;
      }
      setDone(true);
      onSubmitted?.(data.review);
    } catch {
      setError("Could not submit your review.");
      setSubmitting(false);
    }
  }

  if (done) {
    return <p className="alert alert-success">Thank you — your review is in.</p>;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.stars} role="radiogroup" aria-label={`Rate ${revieweeName || "this user"}`}>
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            type="button"
            key={value}
            className={`${styles.starButton} ${value <= (hover || rating) ? styles.active : ""}`}
            onClick={() => setRating(value)}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(0)}
            aria-label={`${value} star${value > 1 ? "s" : ""} (${STAR_LABELS[value]})`}
            aria-pressed={value === rating}
          >
            <Star size={22} fill={value <= rating ? "currentColor" : "none"} />
          </button>
        ))}
        {rating > 0 && <span className={styles.label}>{STAR_LABELS[rating]}</span>}
      </div>

      <label className={styles.field}>
        <span className="field-label">{revieweeName ? `How was working with ${revieweeName}?` : "Leave a comment (optional)"}</span>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share a short review..."
          rows={2}
        />
      </label>

      {error && <p className="alert alert-error" role="alert">{error}</p>}

      <div>
        <button type="submit" className="btn btn-sm btn-primary" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit review"}
        </button>
      </div>
    </form>
  );
}