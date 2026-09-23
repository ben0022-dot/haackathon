"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail } from "firebase/auth";
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

  const [showReset, setShowReset] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetMessage, setResetMessage] = useState("");
  const [resetError, setResetError] = useState("");
  const [resetting, setResetting] = useState(false);

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

  async function handleReset(e) {
    e.preventDefault();
    setResetMessage("");
    setResetError("");
    if (!auth) {
      setResetError("Password reset is unavailable right now. Please try again later.");
      return;
    }
    setResetting(true);
    try {
      await sendPasswordResetEmail(auth, resetEmail.trim().toLowerCase());
      setResetMessage("Password reset link sent. Check your email inbox.");
    } catch (err) {
      const code = err?.code || err?.message;
      if (code === "auth/user-not-found") {
        setResetMessage("If an account exists for that email, a reset link has been sent.");
      } else if (code === "auth/invalid-email") {
        setResetError("Please enter a valid email address.");
      } else if (code === "auth/too-many-requests") {
        setResetError("Too many requests. Please wait a moment and try again.");
      } else {
        setResetError("Could not send the reset link. Please try again.");
      }
    } finally {
      setResetting(false);
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

          <button
            type="button"
            className={styles.forgotLink}
            onClick={() => {
              setShowReset((v) => !v);
              setResetEmail((prev) => prev || email);
              setResetMessage("");
              setResetError("");
            }}
          >
            Forgot password?
          </button>

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

        {showReset && (
          <form className="form-stack" onSubmit={handleReset} style={{ marginTop: 12 }}>
            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
              Enter your account email and we&apos;ll send a reset link.
            </p>
            <label className="field">
              <span className="field-label">Email</span>
              <input
                type="email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                required
                autoComplete="email"
                placeholder="you@example.com"
              />
            </label>
            <button type="submit" className="btn btn-secondary btn-block" disabled={resetting}>
              {resetting ? "Sending..." : "Send reset link"}
            </button>
            {resetMessage && <p className="alert alert-success" role="alert">{resetMessage}</p>}
            {resetError && <p className="alert alert-error" role="alert">{resetError}</p>}
          </form>
        )}

        <p className={styles.alt}>
          New here? <Link href="/signup" className={styles.altLink}>Create an account</Link>
        </p>
      </div>
    </main>
  );
}