"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";
import styles from "./page.module.css";

export default function LoginPage() {
  const router = useRouter();
  const { user, loading, loginAsDemo } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) router.push("/dashboard");
  }, [user, loading, router]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    const trimmedEmail = email.trim().toLowerCase();

    // Check if it's a demo account or fallback if Firebase Auth is not configured
    const demoEmails = [
      "brian.demo@spacemakers.app",
      "wanjiku.demo@spacemakers.app",
      "david.demo@spacemakers.app",
      "eatery.demo@spacemakers.app",
      "hardware.demo@spacemakers.app",
      "mbugua.demo@spacemakers.app",
      "admin.spacemakers@spacemakers.app",
    ];

    if (demoEmails.includes(trimmedEmail)) {
      try {
        await loginAsDemo(trimmedEmail);
        router.push("/dashboard");
        return;
      } catch (err) {
        console.warn("Demo login error:", err);
      }
    }

    try {
      if (auth) {
        await signInWithEmailAndPassword(auth, trimmedEmail, password);
        router.push("/dashboard");
      } else {
        await loginAsDemo(trimmedEmail);
        router.push("/dashboard");
      }
    } catch {
      // If Firebase auth failed, try demo login fallback
      try {
        await loginAsDemo(trimmedEmail);
        router.push("/dashboard");
      } catch {
        setError("Invalid email or password.");
      }
    } finally {
      setSubmitting(false);
    }
  }

  async function handleGoogle() {
    setError("");
    setSubmitting(true);
    try {
      if (auth) {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
        router.push("/dashboard");
      } else {
        await loginAsDemo("graduate");
        router.push("/dashboard");
      }
    } catch {
      // Fallback for environment without Google Auth popup permissions
      await loginAsDemo("graduate");
      router.push("/dashboard");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleQuickDemo(roleKey) {
    setError("");
    setSubmitting(true);
    try {
      await loginAsDemo(roleKey);
      if (roleKey === "employer") {
        router.push("/employer");
      } else if (roleKey === "admin") {
        router.push("/admin");
      } else {
        router.push("/dashboard");
      }
    } catch (err) {
      setError("Could not log in as demo user.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className={styles.wrapper}>
      <div className="form-card">
        <div className="page-hero">
          <h1>Welcome back</h1>
          <p className="subtitle">Log in to find work that matches your skills.</p>
        </div>

        {/* Demo Fast Login Switcher */}
        <div style={{
          marginTop: 16,
          padding: 12,
          backgroundColor: "var(--color-surface-raised, #f9fafb)",
          borderRadius: 8,
          border: "1px solid var(--color-border, #e5e7eb)"
        }}>
          <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--color-text-muted, #6b7280)", marginBottom: 8 }}>
            Quick Demo Sign-in (Password: <code>SpaceMakers@2026</code>)
          </p>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            <button
              type="button"
              className="btn btn-secondary"
              style={{ fontSize: "0.8125rem", padding: "6px 10px" }}
              onClick={() => handleQuickDemo("graduate")}
              disabled={submitting}
            >
              🎓 Brian (Graduate)
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              style={{ fontSize: "0.8125rem", padding: "6px 10px" }}
              onClick={() => handleQuickDemo("employer")}
              disabled={submitting}
            >
              💼 Mama Njeri (Employer)
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              style={{ fontSize: "0.8125rem", padding: "6px 10px" }}
              onClick={() => handleQuickDemo("admin")}
              disabled={submitting}
            >
              🛡️ Admin
            </button>
          </div>
        </div>

        <form className="form-stack" onSubmit={handleSubmit} style={{ marginTop: 16 }}>
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
              autoComplete="current-password"
              placeholder="••••••••"
            />
          </label>

          <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>
            {submitting ? "Logging in..." : "Log in"}
          </button>

          <button
            type="button"
            className="btn btn-secondary btn-block"
            onClick={handleGoogle}
            disabled={submitting}
          >
            Continue with Google
          </button>

          {error && <p className="alert alert-error" role="alert">{error}</p>}
        </form>

        <p className={styles.alt}>
          New here? <Link href="/signup" className={styles.altLink}>Create an account</Link>
        </p>
      </div>
    </main>
  );
}
