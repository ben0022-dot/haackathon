"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import LoadingState from "@/components/LoadingState";
import OpportunityCard from "@/components/OpportunityCard";
import { profileCompletion } from "@/lib/matching";
import styles from "./page.module.css";

export default function DashboardPage() {
  const router = useRouter();
  const { user, profile, loading } = useAuth();
  const [opportunities, setOpportunities] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!loading && !user) router.push("/login");
  }, [loading, user, router]);

  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    async function load() {
      try {
        const token = await user.getIdToken();
        const res = await fetch("/api/opportunities?dashboard=true", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (!cancelled && res.ok) {
          setOpportunities(data.opportunities || []);
        }
      } catch {
        if (!cancelled) setOpportunities([]);
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