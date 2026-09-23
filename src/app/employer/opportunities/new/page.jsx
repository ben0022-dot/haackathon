"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import LoadingState from "@/components/LoadingState";
import LocationSearch from "@/components/LocationSearch";
import styles from "./page.module.css";

const TYPE_OPTIONS = [
  { value: "GIG", label: "Gig" },
  { value: "JOB", label: "Job" },
  { value: "CONTRACT", label: "Contract" },
  { value: "APPRENTICESHIP", label: "Apprenticeship" },
  { value: "SERVICE_REQUEST", label: "Service request" },
];

const PAYMENT_TYPE_OPTIONS = [
  { value: "FIXED", label: "Fixed amount" },
  { value: "PER_DAY", label: "Per day" },
  { value: "PER_HOUR", label: "Per hour" },
  { value: "NEGOTIABLE", label: "Negotiable" },
];

export default function NewOpportunityPage() {
  const router = useRouter();
  const { user, profile, loading } = useAuth();

  const [skills, setSkills] = useState([]);
  const [selected, setSelected] = useState({});
  const [form, setForm] = useState({
    title: "",
    description: "",
    type: "GIG",
    location: "",
    payment: "",
    paymentType: "NEGOTIABLE",
    deadline: "",
  });
  const [message, setMessage] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && !user) router.push("/login");
  }, [loading, user, router]);

  useEffect(() => {
    if (!user) return;
    fetch("/api/skills", { headers: { Authorization: `Bearer ${user.accessToken}` } })
      .then((r) => r.json())
      .then((data) => setSkills(data.skills || []))
      .catch(() => setSkills([]));
  }, [user]);

  function toggleSkill(id) {
    setSelected((prev) => {
      const next = { ...prev };
      if (next[id]) delete next[id];
      else next[id] = true;
      return next;
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage(null);

    if (!form.title.trim() || !form.description.trim() || !form.location.trim()) {
      setMessage({ type: "error", text: "Title, description and location are required." });
      return;
    }
    if (Object.keys(selected).length === 0) {
      setMessage({ type: "error", text: "Select at least one required skill." });
      return;
    }

    let payment = form.payment;
    if (payment && isNaN(parseInt(payment, 10))) {
      setMessage({ type: "error", text: "Payment must be a number." });
      return;
    }
    if (payment === "") payment = null;
    else payment = parseInt(payment, 10);

    setSubmitting(true);
    try {
      const token = await user.getIdToken();
      const res = await fetch("/api/opportunities", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...form,
          payment,
          deadline: form.deadline ? new Date(form.deadline).toISOString() : null,
          skillIds: Object.keys(selected),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage({ type: "error", text: data.error || "Could not post the opportunity." });
        setSubmitting(false);
        return;
      }
      setMessage({
        type: "success",
        text: "Your opportunity has been submitted for verification.",
      });
      setSubmitting(false);
      setTimeout(() => router.push("/employer"), 1400);
    } catch {
      setMessage({ type: "error", text: "Could not post the opportunity." });
      setSubmitting(false);
    }
  }

  if (loading || !user) return <LoadingState message="Loading..." />;
  if (profile && profile.role !== "EMPLOYER" && profile.role !== "ADMIN") {
    return (
      <main className="container">
        <div className="empty-state card">
          <h3>Only employers can post opportunities.</h3>
          <p>Switch to an employer account to post opportunities.</p>
          <div style={{ marginTop: 16 }}>
            <Link href="/profile" className="btn btn-primary">Go to profile</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="container">
      <Link href="/employer" className="back-link">← Back to dashboard</Link>

      <div className="page-hero">
        <h1>Post an opportunity</h1>
        <p className="subtitle">
          Describe your need and we&apos;ll show it to skilled people nearby.
        </p>
      </div>

      <form className="form-card" onSubmit={handleSubmit} style={{ margin: "20px auto" }}>
        <div className="form-stack">
          <label className="field">
            <span className="field-label field-required">Opportunity title</span>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Need electrician for house wiring"
              required
            />
          </label>

          <label className="field">
            <span className="field-label field-required">Description</span>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="Describe the work, where, and what you expect..."
              required
            />
          </label>

          <label className="field">
            <span className="field-label field-required">Opportunity type</span>
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            >
              {TYPE_OPTIONS.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </label>

          <label className="field">
            <span className="field-label field-required">Required skills</span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {skills.map((skill) => (
                <button
                  type="button"
                  key={skill.id}
                  className={`skill-chip ${selected[skill.id] ? "selected" : ""}`}
                  onClick={() => toggleSkill(skill.id)}
                  aria-pressed={Boolean(selected[skill.id])}
                >
                  {skill.name}
                </button>
              ))}
            </div>
          </label>

          <label className="field">
            <span className="field-label field-required">Location</span>
            <LocationSearch
              value={form.location}
              onChange={(location) => setForm({ ...form, location })}
              placeholder="Githogoro, Nairobi"
              autoCompleteProps={{ required: true }}
            />
          </label>

          <div className={styles.row}>
            <label className="field">
              <span className="field-label">Payment (KES)</span>
              <input
                type="number"
                min="0"
                value={form.payment}
                onChange={(e) => setForm({ ...form, payment: e.target.value })}
                placeholder="2500"
              />
            </label>

            <label className="field">
              <span className="field-label">Payment type</span>
              <select
                value={form.paymentType}
                onChange={(e) => setForm({ ...form, paymentType: e.target.value })}
              >
                {PAYMENT_TYPE_OPTIONS.map((p) => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>
            </label>
          </div>

          <label className="field">
            <span className="field-label">Deadline</span>
            <input
              type="date"
              value={form.deadline}
              onChange={(e) => setForm({ ...form, deadline: e.target.value })}
            />
            <span className="field-hint">Optional. When do you need this done?</span>
          </label>

          {message && (
            <p
              className={`alert ${message.type === "success" ? "alert-success" : "alert-error"}`}
              role="alert"
            >
              {message.text}
            </p>
          )}

          <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>
            {submitting ? "Posting..." : "Post opportunity"}
          </button>
        </div>
      </form>
    </main>
  );
}