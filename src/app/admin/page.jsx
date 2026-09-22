"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import LoadingState from "@/components/LoadingState";
import styles from "./page.module.css";

function formatDate(value) {
  return new Date(value).toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
  });
}

export default function AdminPage() {
  const router = useRouter();
  const { user, profile, loading } = useAuth();

  const [pending, setPending] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [busyId, setBusyId] = useState(null);

  async function loadPending() {
    setFetching(true);
    setError("");
    try {
      const token = await user.getIdToken();
      const res = await fetch("/api/admin/opportunities", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Could not load pending opportunities.");
      } else {
        setPending(data.opportunities || []);
      }
    } catch {
      setError("Could not load pending opportunities.");
    } finally {
      setFetching(false);
    }
  }

  useEffect(() => {
    if (!loading && !user) router.push("/login");
  }, [loading, user, router]);

  useEffect(() => {
    if (!user) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- data load on mount
    loadPending();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  async function review(opportunityId, action) {
    setBusyId(opportunityId);
    setMessage("");
    try {
      const token = await user.getIdToken();
      const res = await fetch("/api/admin/opportunities", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ opportunityId, action }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage(data.error || "Could not update the opportunity.");
      } else {
        setPending((prev) => prev.filter((o) => o.id !== opportunityId));
        setMessage(
          action === "approve"
            ? "Opportunity approved and verified."
            : "Opportunity rejected and closed.",
        );
      }
    } catch {
      setMessage("Could not update the opportunity.");
    } finally {
      setBusyId(null);
    }
  }

  if (loading || !user) return <LoadingState message="Loading..." />;

  if (profile && profile.role !== "ADMIN") {
    return (
      <main className="container">
        <div className="empty-state card">
          <h3>Admins only.</h3>
          <p>You don&apos;t have permission to view this page.</p>
          <div style={{ marginTop: 16 }}>
            <Link href="/dashboard" className="btn btn-primary">Go to dashboard</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="container">
      <div className="page-hero">
        <h1>Admin dashboard</h1>
        <p className="subtitle">Review and verify opportunities before promotion.</p>
      </div>

      {error && <p className="alert alert-error" role="alert">{error}</p>}
      {message && <p className="alert alert-success" role="alert">{message}</p>}

      <section className="section">
        <div className="section-head">
          <h2>Pending Opportunities</h2>
        </div>

        {fetching ? (
          <LoadingState message="Loading pending opportunities..." />
        ) : pending.length === 0 ? (
          <div className="empty-state card">
            <h3>No pending opportunities.</h3>
            <p>All posted opportunities have been reviewed.</p>
          </div>
        ) : (
          <div>
            {pending.map((opportunity) => (
              <article className="card" key={opportunity.id}>
                <div className={styles.head}>
                  <div>
                    <h3 className={styles.title}>{opportunity.title}</h3>
                    <p className={styles.meta}>
                      Posted by {opportunity.employer.name} · {opportunity.location} ·{" "}
                      {formatDate(opportunity.createdAt)}
                    </p>
                  </div>
                  {typeof opportunity.payment === "number" && (
                    <span className={styles.payment}>
                      KES {opportunity.payment.toLocaleString()}
                    </span>
                  )}
                </div>

                <p className={styles.description}>{opportunity.description}</p>

                {opportunity.skills?.length > 0 && (
                  <div className="skill-list" style={{ margin: "8px 0" }}>
                    {opportunity.skills.map((os) => (
                      <span key={os.skill?.id ?? os.skillId} className="badge badge-skill">
                        {os.skill?.name}
                      </span>
                    ))}
                  </div>
                )}

                <div className={styles.actions}>
                  <button
                    type="button"
                    className="btn btn-sm btn-primary"
                    onClick={() => review(opportunity.id, "approve")}
                    disabled={busyId === opportunity.id}
                  >
                    Approve
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-danger-soft"
                    onClick={() => review(opportunity.id, "reject")}
                    disabled={busyId === opportunity.id}
                  >
                    Reject
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}