"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { sendEmailVerification } from "firebase/auth";
import { useAuth } from "@/context/AuthContext";
import LoadingState from "@/components/LoadingState";
import OpportunityCard from "@/components/OpportunityCard";
import { profileCompletion } from "@/lib/matching";
import styles from "./page.module.css";
import { Bot, Radio, MapPin, Globe, Sparkles } from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();
  const { user, profile, loading } = useAuth();
  const [opportunities, setOpportunities] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState("");
  const [verifyMessage, setVerifyMessage] = useState("");
  const [resending, setResending] = useState(false);

  async function handleResendVerification() {
    if (!user) return;
    setResending(true);
    setVerifyMessage("");
    try {
      await sendEmailVerification(user);
      setVerifyMessage("Verification email sent. Check your inbox and spam folder.");
    } catch {
      setVerifyMessage("Could not send the email. Please sign in again and retry.");
    } finally {
      setResending(false);
    }
  }

  useEffect(() => {
    if (!loading && !user) router.push("/login");
  }, [loading, user, router]);

  useEffect(() => {
    if (!loading && profile && profile.role !== "GRADUATE") {
      router.replace(profile.role === "ADMIN" ? "/admin" : "/employer");
    }
  }, [loading, profile, router]);

  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    async function load() {
      try {
        setError("");
        const token = await user.getIdToken();
        const res = await fetch("/api/opportunities?dashboard=true", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (!cancelled) {
          if (res.ok) {
            setOpportunities(data.opportunities || []);
          } else {
            setOpportunities([]);
            setError(data.error || "Could not load your opportunities.");
          }
        }
      } catch {
        if (!cancelled) {
          setOpportunities([]);
          setError("Could not load your opportunities. Check your connection and try again.");
        }
      } finally {
        if (!cancelled) setFetching(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [user]);

  if (loading || !user) return <LoadingState message="Loading your dashboard..." />;

  const completion = profile ? profileCompletion(profile) : 0;
  const matched = opportunities.filter((o) => o.score > 0);
  const showMatchCount = matched.length > 0;

  return (
    <main className="container">
      <div className="page-hero">
        <h1>Hello, {profile?.name?.split(" ")[0] || "there"} 👋</h1>
        <p className="subtitle">Find work that matches your skills.</p>
      </div>

      {user && !user.emailVerified && (
        <div
          className="alert alert-info"
          role="status"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <span>
            Verify your email ({user.email}) to secure your account.
            {verifyMessage && (
              <span style={{ display: "block", fontWeight: 500 }}>{verifyMessage}</span>
            )}
          </span>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={handleResendVerification}
            disabled={resending}
          >
            {resending ? "Sending..." : "Resend email"}
          </button>
        </div>
      )}

      {error && <p className="alert alert-error" role="alert">{error}</p>}

      <div className={styles.profileCard}>
        <div className={styles.profileInfo}>
          <span className={styles.profileLabel}>Profile completion</span>
          <div className={styles.profileBar}>
            <div className={styles.profileFill} style={{ width: `${completion}%` }} />
          </div>
          <span className={styles.profilePercent}>Profile {completion}% complete</span>
        </div>
        <Link href="/profile" className="btn btn-secondary btn-sm">Edit profile</Link>
      </div>

      {/* Gemini AI Suite Quick Access */}
      <section style={{ marginTop: 20 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <h2 style={{ fontSize: "1.05rem", fontWeight: 700, display: "flex", alignItems: "center", gap: 6 }}>
            <Sparkles size={18} color="var(--primary)" />
            SpaceMakers AI Tools & Assistance
          </h2>
          <Link href="/ai" style={{ fontSize: "0.85rem", color: "var(--primary)", fontWeight: 600 }}>
            Open AI Suite →
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 10 }}>
          <Link
            href="/ai?tab=chat"
            className="card"
            style={{
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
              borderRadius: "var(--radius-sm)",
              transition: "transform 0.1s ease",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "var(--primary-soft)",
                color: "var(--primary-dark)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Bot size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>Career Chatbot</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>Multi-turn TVET advisor</div>
            </div>
          </Link>

          <Link
            href="/ai?tab=voice"
            className="card"
            style={{
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
              borderRadius: "var(--radius-sm)",
              transition: "transform 0.1s ease",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "var(--warning-soft)",
                color: "var(--warning)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Radio size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>Live Voice Coach</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>Gemini 3.8 Live API</div>
            </div>
          </Link>

          <Link
            href="/ai?tab=maps"
            className="card"
            style={{
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
              borderRadius: "var(--radius-sm)",
              transition: "transform 0.1s ease",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "var(--primary-soft)",
                color: "var(--primary-dark)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <MapPin size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>Maps Grounding</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>Find TVET & trade shops</div>
            </div>
          </Link>

          <Link
            href="/ai?tab=search"
            className="card"
            style={{
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
              borderRadius: "var(--radius-sm)",
              transition: "transform 0.1s ease",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "var(--surface)",
                color: "var(--primary)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Globe size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>Search Grounding</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>Live wage & labor trends</div>
            </div>
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>
            {showMatchCount
              ? `${matched.length} opportunit${matched.length === 1 ? "y" : "ies"} matching your skills`
              : "Recommended opportunities"}
          </h2>
          <Link href="/opportunities">See all</Link>
        </div>

        {fetching ? (
          <LoadingState message="Finding opportunities..." />
        ) : opportunities.length === 0 ? (
          <div className="empty-state card">
            <h3>No opportunities found.</h3>
            <p>Try another skill or location, or check back soon.</p>
            <div style={{ marginTop: 16 }}>
              <Link href="/opportunities" className="btn btn-primary">Browse opportunities</Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-2">
            {opportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} showScore />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
