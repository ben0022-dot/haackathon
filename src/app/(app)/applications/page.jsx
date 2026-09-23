"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import LoadingState from "@/components/LoadingState";
import SkillBadge from "@/components/SkillBadge";
import ReviewForm from "@/components/ReviewForm";
import styles from "./page.module.css";

function formatDate(value) {
  return new Date(value).toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
  });
}

export default function ApplicationsPage() {
  const router = useRouter();
  const { user, profile, loading } = useAuth();
  const [applications, setApplications] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!loading && !user) router.push("/login");
  }, [loading, user, router]);

  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    async function load() {
      try {
        const token = await user.getIdToken();
        const res = await fetch("/api/applications", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (!cancelled) {
          if (res.ok) setApplications(data.applications || []);
          else setError(data.error || "Could not load applications.");
        }
      } catch {
        if (!cancelled) setError("Could not load your applications.");
      } finally {
        if (!cancelled) setFetching(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [user]);

  async function reload() {
    try {
      const token = await user.getIdToken();
      const res = await fetch("/api/applications", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) setApplications(data.applications || []);
    } catch {
      // keep existing data
    }
  }

  if (loading || !user) return <LoadingState message="Loading applications..." />;

  return (
    <main className="container">
      <div className="page-hero">
        <h1>My Applications</h1>
        <p className="subtitle">Track every opportunity you have applied to.</p>
      </div>

      {error && <p className="alert alert-error" role="alert">{error}</p>}

      {fetching ? (
        <LoadingState message="Loading applications..." />
      ) : applications.length === 0 ? (
        <div className="empty-state card">
          <h3>You haven&apos;t applied to any opportunities yet.</h3>
          <p>Browse verified opportunities near you and apply in one tap.</p>
          <div style={{ marginTop: 16 }}>
            <Link href="/opportunities" className="btn btn-primary">Browse opportunities</Link>
          </div>
        </div>
      ) : (
        <div>
          {applications.map((app) => (
            <article className="card" key={app.id}>
              <div className={styles.titleRow}>
                <Link href={`/opportunities/${app.opportunity.id}`} className={styles.title}>
                  {app.opportunity.title}
                </Link>
                <span className={`status-pill status-${app.status}`}>{app.status}</span>
              </div>
              <p className={styles.meta}>
                {app.opportunity.location} · {app.opportunity.employer?.name} · Applied{" "}
                {formatDate(app.createdAt)}
              </p>
              {app.opportunity.skills?.length > 0 && (
                <div className="skill-list" style={{ marginTop: 8 }}>
                  {app.opportunity.skills.map((os) => (
                    <SkillBadge key={os.skill?.id ?? os.skillId} name={os.skill?.name} />
                  ))}
                </div>
              )}
              {app.message && (
                <p className={styles.message}>&quot;{app.message}&quot;</p>
              )}
              {app.status === "COMPLETED" &&
                profile &&
                !app.reviews?.some((r) => r.reviewerId === profile.id) && (
                  <div style={{ marginTop: 12 }}>
                    <ReviewForm
                      applicationId={app.id}
                      revieweeName={app.opportunity.employer?.name}
                      onSubmitted={reload}
                    />
                  </div>
                )}
            </article>
          ))}
        </div>
      )}
    </main>
  );
}