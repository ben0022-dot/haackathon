"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import LoadingState from "@/components/LoadingState";
import NeighborhoodPicker from "@/components/NeighborhoodPicker";
import { profileCompletion } from "@/lib/matching";
import styles from "./page.module.css";

const LEVELS = ["BEGINNER", "INTERMEDIATE", "ADVANCED"];

export default function ProfilePage() {
  const router = useRouter();
  const { user, profile, loading, refreshProfile } = useAuth();

  const [skills, setSkills] = useState([]);
  const [selected, setSelected] = useState({});
  const [form, setForm] = useState({ name: "", phone: "", bio: "", companyName: "", jobTitle: "", location: "", avatarUrl: "" });
  const [message, setMessage] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!loading && !user) router.push("/login");
  }, [loading, user, router]);

  useEffect(() => {
    if (loading || !user || profile) return;
    refreshProfile();
  }, [loading, user, profile, refreshProfile]);

  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    async function loadSkills() {
      try {
        const token = await user.getIdToken();
        const res = await fetch("/api/skills", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (!cancelled) setSkills(data.skills || []);
      } catch {
        if (!cancelled) setSkills([]);
      }
    }
    loadSkills();
    return () => {
      cancelled = true;
    };
  }, [user]);

  const [previousProfile, setPreviousProfile] = useState(null);
  if (profile && profile !== previousProfile) {
    setPreviousProfile(profile);
    setForm({
      name: profile.name || "",
      phone: profile.phone || "",
      bio: profile.bio || "",
      companyName: profile.companyName || "",
      jobTitle: profile.jobTitle || "",
      location: profile.location || "",
      avatarUrl: profile.avatarUrl || "",
    });
    const initial = {};
    (profile.skills || []).forEach((us) => {
      initial[us.skillId] = us.experienceLevel;
    });
    setSelected(initial);
  }

  function toggleSkill(id) {
    setSelected((prev) => {
      const next = { ...prev };
      if (next[id]) delete next[id];
      else next[id] = "BEGINNER";
      return next;
    });
  }

  function setLevel(id, level) {
    setSelected((prev) => ({ ...prev, [id]: level }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage(null);

    if (!form.name.trim()) {
      setMessage({ type: "error", text: "Name is required." });
      return;
    }
    if (!form.location.trim()) {
      setMessage({ type: "error", text: "Location is required." });
      return;
    }
    if (Object.keys(selected).length === 0 && profile?.role !== "EMPLOYER") {
      setMessage({ type: "error", text: "Select at least one skill." });
      return;
    }

    setSaving(true);
    try {
      const token = await user.getIdToken();
      const res = await fetch("/api/profile", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...form,
          skillIds: Object.keys(selected),
          experienceLevels: selected,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage({ type: "error", text: data.error || "Could not save profile." });
      } else {
        await refreshProfile();
        setMessage({ type: "success", text: "Profile saved." });
      }
    } catch {
      setMessage({ type: "error", text: "Could not save profile. Try again." });
    } finally {
      setSaving(false);
    }
  }

  async function handleCreateProfile() {
    setMessage(null);
    try {
      const token = await user.getIdToken();
      const name =
        user.displayName ||
        (user.email ? user.email.split("@")[0] : "").trim() ||
        "New member";
      const res = await fetch("/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setMessage({ type: "error", text: data.error || "Could not create your profile." });
        return;
      }
      await refreshProfile();
    } catch {
      setMessage({ type: "error", text: "Could not create your profile. Try again." });
    }
  }

  if (loading || !user) return <LoadingState message="Loading your profile..." />;
  if (!profile) {
    return (
      <main className="container">
        <div className="page-hero">
          <h1>Your profile</h1>
          <p className="subtitle">We couldn&apos;t load your profile yet.</p>
        </div>
        <div className="card">
          <p>
            Your account looks new or the profile is still being created. Retry
            to fetch it now.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
            <button type="button" className="btn btn-primary" onClick={() => refreshProfile()}>
              Retry
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleCreateProfile}>
              Create profile
            </button>
          </div>
          {message && (
            <p className={`alert ${message.type === "success" ? "alert-success" : "alert-error"}`} role="alert">
              {message.text}
            </p>
          )}
        </div>
      </main>
    );
  }

  const completion = profileCompletion(profile);
  const isEmployer = profile.role === "EMPLOYER";

  return (
    <main className="container">
      <div className="page-hero">
        <h1>Your profile</h1>
        <p className="subtitle">
          {isEmployer
            ? "Your details help artisans find work in your area."
            : "Skills and location power your opportunity matches."}
        </p>
      </div>

      <div className={styles.completion}>
        <div className={styles.completionBar}>
          <div
            className={styles.completionFill}
            style={{ width: `${completion}%` }}
          />
        </div>
        <span className={styles.completionLabel}>Profile {completion}% complete</span>
      </div>

      <div className={`card ${styles.verificationCard}`}>
        <div className={styles.verificationTitle}>Account status</div>
        <p className={styles.verificationText}>
          {profile.emailVerified ? (
            <>
              <span className={`status-pill status-success`}>Email verified</span>
              <span className={styles.verificationNote}>A verified email builds trust with the artisans and employers you work with.</span>
            </>
          ) : (
            <>
              <span className={`status-pill status-warning`}>Email not verified</span>
              <span className={styles.verificationNote}>
                {isEmployer
                  ? "Verify your email to build trust with the artisans who apply to your opportunities. A verification link was sent to " + (profile.email || "your inbox") + "."
                  : "Verify your email to unlock verified opportunities. A verification link was sent to " + (profile.email || "your inbox") + "."}
              </span>
            </>
          )}
        </p>
      </div>

      {profile.role === "EMPLOYER" && (
        <div className={`card ${styles.verificationCard}`}>
          <div className={styles.verificationTitle}>Phone & reputation</div>
          <p className={styles.verificationText}>
            {profile.phoneVerified ? (
              <span className={`status-pill status-success`}>Phone verified</span>
            ) : (
              <span className={`status-pill status-warning`}>Phone not verified</span>
            )}
            <span className={styles.verificationNote}>
              {profile.phoneVerified
                ? "Employers with a verified phone can post opportunities."
                : "Verify your phone to post opportunities on the posting page."}
            </span>
          </p>
        </div>
      )}

      <form className="form-card" onSubmit={handleSubmit} style={{ margin: "20px auto" }}>
        <div className="form-stack">
          <label className="field">
            <span className="field-label field-required">Full name</span>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </label>

          <label className="field">
            <span className="field-label field-required">Location</span>
            <NeighborhoodPicker
              value={form.location}
              onChange={(location) => setForm({ ...form, location })}
              placeholder="Githogoro"
            />
            <span className="field-hint">
              {isEmployer
                ? "Where do your jobs take place? Artisans search by neighborhood."
                : "Where are you based? Employers search by location."}
            </span>
          </label>

          <label className="field">
            <span className="field-label">Profile photo URL</span>
            <input
              type="url"
              value={form.avatarUrl}
              onChange={(e) => setForm({ ...form, avatarUrl: e.target.value })}
              placeholder="https://.../photo.jpg"
            />
            <span className="field-hint">Optional. Paste a link to your photo and we&apos;ll display it next to your name.</span>
          </label>

          {isEmployer && (
            <>
              <label className="field">
                <span className="field-label">Company or business name</span>
                <input
                  type="text"
                  value={form.companyName}
                  onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                  placeholder="e.g. Githogoro Hardware, or Homeowner"
                />
                <span className="field-hint">Optional. Shown to artisans so they know who&apos;s hiring.</span>
              </label>

              <label className="field">
                <span className="field-label">Your role</span>
                <input
                  type="text"
                  value={form.jobTitle}
                  onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
                  placeholder="e.g. Homeowner, Property manager, Business owner"
                />
                <span className="field-hint">Optional. Helps artisans understand who they&apos;ll be dealing with.</span>
              </label>
            </>
          )}

          <label className="field">
            <span className="field-label">Phone</span>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+254 7xx xxx xxx"
            />
          </label>

          <label className="field">
            <span className="field-label">About you</span>
            <textarea
              value={form.bio}
              onChange={(e) => setForm({ ...form, bio: e.target.value })}
              placeholder="A short line about your experience..."
            />
          </label>

          <div className="field">
            <span className={`field-label ${isEmployer ? "" : "field-required"}`}>
              {isEmployer ? "What do you typically hire for?" : "Your skills"}
            </span>
            {!isEmployer && (
              <span className="field-hint" style={{ display: "block", marginBottom: 8 }}>
                Pick the trades you can do and your experience level for each.
              </span>
            )}
            {isEmployer && (
              <span className="field-hint" style={{ display: "block", marginBottom: 8 }}>
                Optional. Pick trades you often hire so artisans can find you.
              </span>
            )}
            <div className={styles.skillGrid}>
              {skills.map((skill) => {
                const isSelected = Boolean(selected[skill.id]);
                return (
                  <div key={skill.id} className={styles.skillItem}>
                    <button
                      type="button"
                      className={`skill-chip ${isSelected ? "selected" : ""}`}
                      onClick={() => toggleSkill(skill.id)}
                      aria-pressed={isSelected}
                    >
                      {skill.name}
                    </button>
                    {isSelected && !isEmployer && (
                      <select
                        className={styles.levelSelect}
                        value={selected[skill.id]}
                        onChange={(e) => setLevel(skill.id, e.target.value)}
                        aria-label={`Experience level for ${skill.name}`}
                      >
                        {LEVELS.map((level) => (
                          <option key={level} value={level}>
                            {level.charAt(0) + level.slice(1).toLowerCase()}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {message && (
            <p
              className={`alert ${message.type === "success" ? "alert-success" : "alert-error"}`}
              role="alert"
            >
              {message.text}
            </p>
          )}

          <button type="submit" className="btn btn-primary btn-block" disabled={saving}>
            {saving ? "Saving..." : "Save profile"}
          </button>

          <button
            type="button"
            className="btn btn-secondary btn-block"
            onClick={() => router.push("/dashboard")}
          >
            Go to dashboard
          </button>
        </div>
      </form>
    </main>
  );
}