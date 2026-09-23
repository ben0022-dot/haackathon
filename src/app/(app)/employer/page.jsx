"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import LoadingState from "@/components/LoadingState";
import styles from "./page.module.css";

export default function EmployerPage() {
  const router = useRouter();
  const { user, profile, loading } = useAuth();

  const [opportunities, setOpportunities] = useState([]);
  const [applicants, setApplicants] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState("");
  const [busyId, setBusyId] = useState(null);

  useEffect(() => {
    if (!loading && !user) router.push("/login");
  }, [loading, user, router]);

  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    async function load() {
      try {
        const token = await user.getIdToken();
        const [oppRes, appRes] = await Promise.all([
          fetch("/api/opportunities?mine=true", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch("/api/applications?as=employer", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);
        const oppData = await oppRes.json();
        const appData = await appRes.json();
        if (!cancelled) {
          if (oppRes.ok) setOpportunities(oppData.opportunities || []);
          if (appRes.ok) setApplicants(appData.applications || []);
          if (!oppRes.ok || !appRes.ok) setError("Could not load your dashboard.");
        }
      } catch {
        if (!cancelled) setError("Could not load your dashboard.");
      } finally {
        if (!cancelled) setFetching(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [user]);

  async function loadApplicants() {
    try {
      const token = await user.getIdToken();
      const appRes = await fetch("/api/applications?as=employer", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const appData = await appRes.json();
      if (appRes.ok) setApplicants(appData.applications || []);
    } catch {
      // keep existing data
    }
  }

  async function updateStatus(applicationId, status) {
    try {
      const token = await user.getIdToken();
      const res = await fetch(`/api/applications/${applicationId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Could not update application.");
        return;
      }
      setApplicants((prev) =>
        prev.map((a) => (a.id === applicationId ? { ...a, status } : a)),
      );
      await loadApplicants();
    } catch {
      setError("Could not update application.");
    }
  }

  async function toggleStatus(opportunity) {
    const next = opportunity.status === "OPEN" ? "CLOSED" : "OPEN";
    setBusyId(opportunity.id);
    try {
      const token = await user.getIdToken();
      const res = await fetch(`/api/opportunities/${opportunity.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: next }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Could not update opportunity.");
        return;
      }
      setOpportunities((prev) =>
        prev.map((o) => (o.id === opportunity.id ? { ...o, status: next } : o)),
      );
    } catch {
      setError("Could not update opportunity.");
    } finally {
      setBusyId(null);
    }
  }

  async function deleteOpportunity(opportunity) {
    if (!window.confirm(`Delete "${opportunity.title}"? This cannot be undone.`)) return;
    try {
      const token = await user.getIdToken();
      const res = await fetch(`/api/opportunities/${opportunity.id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Could not delete opportunity.");
        return;
      }
      setOpportunities((prev) => prev.filter((o) => o.id !== opportunity.id));
      setApplicants((prev) => prev.filter((a) => a.opportunity.id !== opportunity.id));
    } catch {
      setError("Could not delete opportunity.");
    }
  }

  if (loading || !user) return <LoadingState message="Loading..." />;
  if (profile && profile.role === "GRADUATE") {
    return (
      <main className="container">
        <div className="empty-state card">
          <h3>This dashboard is for employers.</h3>
          <p>Post an opportunity or go to your dashboard to find work.</p>
          <div style={{ marginTop: 16, display: "flex", gap: 10, justifyContent: "center" }}>
            <Link href="/employer/opportunities/new" className="btn btn-primary">Post an opportunity</Link>
          </div>
        </div>
      </main>
    );
  }

  const applicantsFor = (opportunityId) =>
    applicants.filter((a) => a.opportunity.id === opportunityId);

  return (
    <main className="container">
      <div className="page-hero">
        <h1>Employer dashboard</h1>
        <p className="subtitle">Manage your opportunities and review applicants.</p>
      </div>

      <div style={{ marginTop: 14, marginBottom: 18 }}>
        <Link href="/employer/opportunities/new" className="btn btn-primary">
          Post Opportunity
        </Link>
      </div>

      {error && <p className="alert alert-error" role="alert">{error}</p>}

      {fetching ? (
        <LoadingState message="Loading your opportunities..." />
      ) : opportunities.length === 0 ? (
        <div className="empty-state card">
          <h3>You haven&apos;t posted an opportunity yet.</h3>
          <p>Post your first opportunity and reach skilled people nearby.</p>
          <div style={{ marginTop: 16 }}>
            <Link href="/employer/opportunities/new" className="btn btn-primary">Post an opportunity</Link>
          </div>
        </div>
      ) : (
        <section className="section">
          <div className="section-head">
            <h2>My Opportunities</h2>
          </div>
          <div>
            {opportunities.map((opportunity) => {
              const apps = applicantsFor(opportunity.id);
              const isOpen = activeId === opportunity.id;
              return (
                <div className="card" key={opportunity.id} style={{ padding: 0, overflow: "hidden" }}>
                  <button
                    type="button"
                    className={styles.oppRow}
                    onClick={() => setActiveId(isOpen ? null : opportunity.id)}
                    aria-expanded={isOpen}
                  >
                    <div>
                      <div className={styles.oppTitleWrap}>
                        <span className={styles.oppTitle}>{opportunity.title}</span>
                        {opportunity.verified ? (
                          <span className="verified-badge">✓ Verified</span>
                        ) : (
                          <span className="unverified-badge">Pending review</span>
                        )}
                      </div>
                      <p className={styles.oppMeta}>
                        {opportunity.location} · {apps.length} applicant{apps.length === 1 ? "" : "s"}
                      </p>
                    </div>
                    <span className={`status-pill status-${opportunity.status}`}>
                      {opportunity.status}
                    </span>
                  </button>

                  {isOpen && (
                    <div className={styles.applicants}>
                      <div className={styles.oppActions}>
                        <button
                          type="button"
                          className="btn btn-sm btn-secondary"
                          onClick={() => toggleStatus(opportunity)}
                          disabled={busyId === opportunity.id}
                        >
                          {opportunity.status === "OPEN" ? "Close" : "Reopen"}
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-danger-soft"
                          onClick={() => deleteOpportunity(opportunity)}
                        >
                          Delete
                        </button>
                      </div>
                      <h3 className={styles.applicantsTitle}>Applicants</h3>
                      {apps.length === 0 ? (
                        <p className={styles.noApplicants}>
                          No applicants yet. Check back soon.
                        </p>
                      ) : (
                        apps.map((app) => (
                          <div className={styles.applicant} key={app.id}>
                            <div className={styles.applicantHead}>
                              <div>
                                <strong>{app.applicant.name}</strong>
                                <p className={styles.applicantMeta}>
                                  {app.applicant.location || "Location not set"}
                                </p>
                              </div>
                              <span className={`status-pill status-${app.status}`}>
                                {app.status}
                              </span>
                            </div>

                            {app.applicant.skills?.length > 0 && (
                              <div className="skill-list" style={{ margin: "8px 0" }}>
                                {app.applicant.skills.map((us) => (
                                  <span key={us.skill?.id ?? us.skillId} className="badge badge-skill">
                                    {us.skill?.name}
                                  </span>
                                ))}
                              </div>
                            )}

                            {app.message && (
                              <p className={styles.applicantMessage}>&quot;{app.message}&quot;</p>
                            )}

                            <div className={styles.applicantActions}>
                              <button
                                type="button"
                                className="btn btn-sm btn-primary"
                                onClick={() => updateStatus(app.id, "ACCEPTED")}
                              >
                                Accept
                              </button>
                              <button
                                type="button"
                                className="btn btn-sm btn-secondary"
                                onClick={() => updateStatus(app.id, "REVIEWING")}
                              >
                                Review
                              </button>
                              <button
                                type="button"
                                className="btn btn-sm btn-danger-soft"
                                onClick={() => updateStatus(app.id, "REJECTED")}
                              >
                                Reject
                              </button>
                              {app.applicant.phone && (
                                <a
                                  className="btn btn-sm btn-secondary"
                                  href={`tel:${app.applicant.phone}`}
                                >
                                  Contact
                                </a>
                              )}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}