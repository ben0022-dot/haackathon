"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { CheckCircle2, Circle } from "lucide-react";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";
import styles from "./page.module.css";

const PASSWORD_RULES = [
  { test: (p) => p.length >= 8, label: "At least 8 characters" },
  { test: (p) => /[A-Z]/.test(p), label: "One uppercase letter (A–Z)" },
  { test: (p) => /[a-z]/.test(p), label: "One lowercase letter (a–z)" },
  { test: (p) => /\d/.test(p), label: "One number (0–9)" },
  { test: (p) => /[^A-Za-z0-9]/.test(p), label: "One symbol (e.g. !@#$%)" },
];

function SignupContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, loading, refreshProfile } = useAuth();

  const [role, setRole] = useState(
    searchParams.get("role") === "EMPLOYER" ? "EMPLOYER" : "GRADUATE",
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const passwordChecks = PASSWORD_RULES.map((rule) => ({
    ...rule,
    ok: rule.test(password),
  }));
  const passwordComplete = passwordChecks.every((check) => check.ok);
  const strength = password
    ? Math.round(
        (passwordChecks.filter((check) => check.ok).length /
          passwordChecks.length) *
          100,
      )
    : 0;

  useEffect(() => {
    if (!loading && user) router.push("/profile");
  }, [user, loading, router]);

  async function createProfile(userToken) {
    const res = await fetch("/api/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify({ name: name.trim(), role }),
    });
    if (res.status === 409) return;
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || "Could not create profile.");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!passwordComplete) {
      setError("Meet all password requirements before creating your account.");
      return;
    }
    setSubmitting(true);
    try {
      if (!auth) throw new Error("auth-unavailable");
      const cred = await createUserWithEmailAndPassword(auth, email.trim(), password);
      const token = await cred.user.getIdToken();
      await createProfile(token);
      await refreshProfile();
      router.push("/profile");
    } catch (err) {
      const code = err?.code || err?.message;
      if (code === "auth-unavailable") {
        setError("Account creation is unavailable right now. Please try again later.");
      } else if (code === "auth/email-already-in-use") {
        setError("An account with this email already exists. Try logging in.");
      } else if (code === "auth/weak-password") {
        setError("Password must be at least 6 characters.");
      } else if (code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else {
        setError("Sign up failed. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  }

  async function handleGoogle() {
    setError("");
    if (!name.trim()) {
      setError("Please enter your name first.");
      return;
    }
    setSubmitting(true);
    try {
      if (!auth) throw new Error("auth-unavailable");
      const provider = new GoogleAuthProvider();
      const cred = await signInWithPopup(auth, provider);
      const token = await cred.user.getIdToken();
      await createProfile(token);
      await refreshProfile();
      router.push("/profile");
    } catch (err) {
      if (err?.message === "auth-unavailable") {
        setError("Google sign-up is unavailable right now. Please try again later.");
      } else if (err?.code === "auth/popup-closed-by-user") {
        setError("");
      } else {
        setError("Google sign-up failed. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className={styles.wrapper}>
      <div className="form-card">
        <div className="page-hero">
          <h1>Create your account</h1>
          <p className="subtitle">
            {role === "EMPLOYER"
              ? "Find skilled people nearby for your opportunity."
              : "Discover verified work that matches your skills."}
          </p>
        </div>

        <form className="form-stack" onSubmit={handleSubmit} style={{ marginTop: 16 }}>
          <div>
            <span className="field-label">I am a...</span>
            <div className="roleGroup" style={{ marginTop: 6 }}>
              <button
                type="button"
                className={`${styles.roleCard} ${role === "GRADUATE" ? styles.selected : ""}`}
                onClick={() => setRole("GRADUATE")}
                aria-pressed={role === "GRADUATE"}
              >
                <strong>Skilled graduate</strong>
                <span>Looking for work near me</span>
              </button>
              <button
                type="button"
                className={`${styles.roleCard} ${role === "EMPLOYER" ? styles.selected : ""}`}
                onClick={() => setRole("EMPLOYER")}
                aria-pressed={role === "EMPLOYER"}
              >
                <strong>Employer</strong>
                <span>Posting work to find people</span>
              </button>
            </div>
          </div>

          <label className="field">
            <span className="field-label">Full name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
              placeholder="Brian Otieno"
            />
          </label>

          <label className="field">
            <span className="field-label">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              placeholder="you@example.com"
            />
          </label>

          <label className="field">
            <span className="field-label">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              autoComplete="new-password"
              placeholder="At least 8 characters"
              aria-describedby="password-requirements"
            />
          </label>

          {password.length > 0 && (
            <div id="password-requirements" className={styles.checkList}>
              <div className={styles.strengthTrack}>
                <div
                  className={styles.strengthBar}
                  style={{
                    width: `${strength}%`,
                    background:
                      strength === 100
                        ? "var(--success)"
                        : strength >= 60
                        ? "var(--warning)"
                        : "var(--danger)",
                  }}
                />
              </div>
              {passwordChecks.map((check) => (
                <span
                  key={check.label}
                  className={`${styles.checkItem} ${
                    check.ok ? styles.checkOk : ""
                  }`}
                >
                  {check.ok ? (
                    <CheckCircle2 size={15} />
                  ) : (
                    <Circle size={15} />
                  )}
                  {check.label}
                </span>
              ))}
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={submitting || !passwordComplete}
          >
            {submitting ? "Creating account..." : "Create account"}
          </button>

          <button
            type="button"
            className="btn btn-secondary btn-block"
            onClick={handleGoogle}
            disabled={submitting}
          >
            Sign up with Google
          </button>

          {error && <p className="alert alert-error" role="alert">{error}</p>}
        </form>

        <p className={styles.alt}>
          Already have an account?{" "}
          <Link href="/login" className={styles.altLink}>Log in</Link>
        </p>
      </div>
    </main>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={null}>
      <SignupContent />
    </Suspense>
  );
}
