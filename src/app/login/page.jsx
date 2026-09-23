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
  const { user, loading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) router.push("/dashboard");
  }, [user, loading, router]);

  async function ensureProfile(userToken, displayName) {
    try {
      const existing = await fetch("/api/profile", {
        headers: { Authorization: `Bearer ${userToken}` },
      });
      if (existing.ok) return;
      await fetch("/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify({
          name: (displayName || "New Member").trim(),
          role: "GRADUATE",
        }),
      });
    } catch {
      // Profile creation is best-effort; the AuthContext will surface it.
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      if (!auth) throw new Error("auth-unavailable");
      await signInWithEmailAndPassword(auth, email.trim().toLowerCase(), password);
      router.push("/dashboard");
    } catch (err) {
      const code = err?.code || err?.message;
      if (code === "auth-unavailable") {
        setError("Sign-in is unavailable right now. Please try again later.");
      } else if (
        code === "auth/user-not-found" ||
        code === "auth/wrong-password" ||
        code === "auth/invalid-credential"
      ) {
        setError("No account found with those credentials. Please check your email and password.");
      } else if (code === "auth/too-many-requests") {
        setError("Too many failed attempts. Please try again later.");
      } else if (code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else {
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
      if (!auth) throw new Error("auth-unavailable");
      const provider = new GoogleAuthProvider();
      const cred = await signInWithPopup(auth, provider);
      await ensureProfile(await cred.user.getIdToken(), cred.user.displayName);
      router.push("/dashboard");
    } catch (err) {
      if (err?.message === "auth-unavailable") {
        setError("Sign-in is unavailable right now. Please try again later.");
      } else if (err?.code === "auth/popup-closed-by-user") {
        setError("");
      } else {
        setError("Google sign-in failed. Please try again.");
      }
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