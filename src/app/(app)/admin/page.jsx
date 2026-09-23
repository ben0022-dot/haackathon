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

function emptyLabel(publicNames) {
  return publicNames.length === 0
    ? "No public skills yet."
    : `${publicNames.length} public skill${publicNames.length === 1 ? "" : "s"}.`;
}

export default function AdminPage() {
  const router = useRouter();
  const { user, profile, loading } = useAuth();

  const [tab, setTab] = useState("pending");

  const [pending, setPending] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [busyId, setBusyId] = useState(null);

  const [skillRequests, setSkillRequests] = useState([]);
  const [skillNotes, setSkillNotes] = useState("");
  const [skillBusy, setSkillBusy] = useState(null);
  const [skillsList, setSkillsList] = useState([]);
  const [mergeTargets, setMergeTargets] = useState({});

  const [users, setUsers] = useState([]);
  const [userQuery, setUserQuery] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userNotes, setUserNotes] = useState("");

  const [recentApps, setRecentApps] = useState([]);
  const [appNotes, setAppNotes] = useState("");
  const [appFetching, setAppFetching] = useState(false);

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

  async function loadSkillRequests() {
    setSkillNotes("");
    try {
      const token = await user.getIdToken();
      const res = await fetch("/api/admin/skill-requests?status=PENDING", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) {
        setSkillNotes(data.error || "Could not load skill requests.");
      } else {
        setSkillRequests(data.requests || []);
      }
      const skillRes = await fetch("/api/skills", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const skillData = await skillRes.json();
      if (skillRes.ok) setSkillsList(skillData.skills || []);
    } catch {
      setSkillNotes("Could not load skill requests.");
    }
  }

  async function loadUsers() {
    setUserNotes("");
    try {
      const token = await user.getIdToken();
      const params = new URLSearchParams();
      if (userQuery.trim()) params.set("q", userQuery.trim());
      if (userRole) params.set("role", userRole);
      const res = await fetch(`/api/admin/users?${params.toString()}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) {
        setUserNotes(data.error || "Could not load users.");
      } else {
        setUsers(data.users || []);
      }
    } catch {
      setUserNotes("Could not load users.");
    }
  }

  async function loadRecentApplications() {
    setAppFetching(true);
    setAppNotes("");
    try {
      const token = await user.getIdToken();
      const res = await fetch("/api/admin/applications", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) {
        setAppNotes(data.error || "Could not load applications.");
        setRecentApps([]);
      } else {
        setRecentApps(data.applications || []);
      }
    } catch {
      setAppNotes("Could not load applications.");
      setRecentApps([]);
    } finally {
      setAppFetching(false);
    }
  }

  useEffect(() => {
    if (!user) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- data load on mount
    loadPending();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (!user) return;
    if (tab === "skill-requests") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- data load on tab switch
      loadSkillRequests();
    }
    if (tab === "users") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- data load on tab switch
      loadUsers();
    }
    if (tab === "applications") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- data load on tab switch
      loadRecentApplications();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab, user]);

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

  async function decideSkill(requestId, action, mergeInto) {
    setSkillBusy(requestId);
    setSkillNotes("");
    try {
      const token = await user.getIdToken();
      const res = await fetch("/api/admin/skill-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ requestId, action, mergeInto }),
      });
      const data = await res.json();
      if (!res.ok) {
        setSkillNotes(data.error || "Could not update the skill request.");
      } else {
        setSkillRequests((prev) => prev.filter((r) => r.id !== requestId));
      }
    } catch {
      setSkillNotes("Could not update the skill request.");
    } finally {
      setSkillBusy(null);
    }
  }

  if (loading || !user || !profile) return <LoadingState message="Loading..." />;

  if (profile.role !== "ADMIN") {
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

  if (loading || !user) return <LoadingState message="Loading..." />;

  return (
    <main className="container">
      <div className="page-hero">
        <h1>Admin dashboard</h1>
        <p className="subtitle">Review verification queues and monitor applications for a safe, honest marketplace.</p>
      </div>

      {error && <p className="alert alert-error" role="alert">{error}</p>}
      {message && <p className="alert alert-success" role="alert">{message}</p>}
      {skillNotes && <p className="alert" role="alert">{skillNotes}</p>}
      {userNotes && <p className="alert" role="alert">{userNotes}</p>}

      <div className={styles.tabs}>
        {[
          ["pending", "Pending opportunities"],
          ["skill-requests", "Skill requests"],
          ["applications", "Recent applications"],
          ["users", "Users"],
        ].map(([key, label]) => (
          <button
            key={key}
            type="button"
            className={`${styles.tab} ${tab === key ? styles.tabActive : ""}`}
            onClick={() => setTab(key)}
            aria-current={tab === key ? "page" : undefined}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "pending" && (
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
      )}

      {tab === "skill-requests" && (
        <section className="section">
          <div className="section-head">
            <h2>Skill Requests</h2>
            <p className="subtitle" style={{ margin: 0 }}>
              Approve employers&apos; new-skill requests or merge them into an existing skill.
            </p>
          </div>

          {skillRequests.length === 0 ? (
            <div className="empty-state card">
              <h3>No pending skill requests.</h3>
              <p>No employer has requested a new skill.</p>
            </div>
          ) : (
            <div>
              {skillRequests.map((request) => (
                <article className="card" key={request.id}>
                  <div className={styles.head}>
                    <div>
                      <h3 className={styles.title}>{request.name}</h3>
                      <p className={styles.meta}>
                        Requested by {request.employer.name} · {formatDate(request.createdAt)}
                      </p>
                    </div>
                  </div>

                  {request.description && (
                    <p className={styles.description}>{request.description}</p>
                  )}

                  <div className={styles.actions}>
                    <button
                      type="button"
                      className="btn btn-sm btn-primary"
                      onClick={() => decideSkill(request.id, "approve")}
                      disabled={skillBusy === request.id}
                    >
                      Approve
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-danger-soft"
                      onClick={() => decideSkill(request.id, "reject")}
                      disabled={skillBusy === request.id}
                    >
                      Reject
                    </button>
                  </div>

                  <div className={styles.mergeRow} style={{ marginTop: 10 }}>
                    <select
                      className={styles.mergeInput}
                      value={mergeTargets[request.id] || ""}
                      onChange={(e) =>
                        setMergeTargets((prev) => ({
                          ...prev,
                          [request.id]: e.target.value,
                        }))
                      }
                      aria-label="Merge into existing skill"
                    >
                      <option value="">
                        {skillsList.length === 0
                          ? "No existing skills to merge into"
                          : "Merge into..."}
                      </option>
                      {skillsList.map((skill) => (
                        <option key={skill.id} value={skill.name}>
                          {skill.name}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      className="btn btn-sm btn-secondary"
                      onClick={() =>
                        decideSkill(request.id, "merge", mergeTargets[request.id])
                      }
                      disabled={
                        skillBusy === request.id || !mergeTargets[request.id]
                      }
                    >
                      Merge
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      )}

      {tab === "applications" && (
        <section className="section">
          <div className="section-head">
            <h2>Recent applications</h2>
            <p className="subtitle" style={{ margin: 0 }}>
              Who applied to which gig, newest first.
            </p>
          </div>

          {appFetching ? (
            <LoadingState message="Loading applications..." />
          ) : appNotes ? (
            <p className="alert" role="alert">{appNotes}</p>
          ) : recentApps.length === 0 ? (
            <div className="empty-state card">
              <h3>No applications yet.</h3>
              <p>When members apply to gigs, they will show up here.</p>
            </div>
          ) : (
            <div>
              {recentApps.map((app) => (
                <article className="card" key={app.id}>
                  <div className={styles.head}>
                    <div>
                      <h3 className={styles.title}>{app.applicant?.name}</h3>
                      <p className={styles.meta}>
                        applied to <strong>{app.opportunity?.title}</strong> ·{" "}
                        {app.opportunity?.employer?.name} · {formatDate(app.createdAt)}
                      </p>
                    </div>
                    <span className={`status-pill status-${app.status}`} style={{ flexShrink: 0 }}>
                      {app.status}
                    </span>
                  </div>

                  {app.message && <p className={styles.description}>{app.message}</p>}

                  <p className={styles.meta}>
                    {app.applicant?.location || "No location"} ·{" "}
                    {app.opportunity?.location} ·{" "}
                    {app.opportunity?.skills?.length > 0
                      ? app.opportunity.skills.map((os) => os.skill?.name).join(", ")
                      : "No listed skills"}
                    {Array.isArray(app.reviews) && app.reviews.length > 0
                      ? ` · ${app.reviews.length} review${app.reviews.length === 1 ? "" : "s"}`
                      : ""}
                  </p>
                </article>
              ))}
            </div>
          )}
        </section>
      )}

      {tab === "users" && (
        <section className="section">
          <div className="section-head">
            <h2>Users</h2>
          </div>

          <div className={styles.mergeRow}>
            <input
              type="search"
              className={styles.mergeInput}
              placeholder="Search by name or email"
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  loadUsers();
                }
              }}
            />
            <select
              className={styles.mergeInput}
              value={userRole}
              onChange={(e) => {
                setUserRole(e.target.value);
              }}
            >
              <option value="">All roles</option>
              <option value="GRADUATE">Graduates</option>
              <option value="EMPLOYER">Employers</option>
              <option value="ADMIN">Admins</option>
            </select>
            <button type="button" className="btn btn-sm btn-secondary" onClick={loadUsers}>
              Search
            </button>
          </div>

          {users.length === 0 ? (
            <div className="empty-state card">
              <h3>No users found.</h3>
              <p>Try a different search.</p>
            </div>
          ) : (
            <div>
              {users.map((u) => (
                <article className="card" key={u.id}>
                  <div className={styles.head} style={{ alignItems: "center" }}>
                    <div>
                      <h3 className={styles.title}>{u.name}</h3>
                      <p className={`${styles.email} ${styles.meta}`}>{u.email}</p>
                    </div>
                    <span className="status-pill" style={{ flexShrink: 0 }}>
                      {u.role}
                    </span>
                  </div>
                  <p className={styles.meta}>
                    {u.location || "No location"} · Joined {formatDate(u.createdAt)} ·{" "}
                    {u.emailVerified ? "email verified" : "email unverified"} ·{" "}
                    {u._count?.opportunities ?? 0} opps · {u._count?.applications ?? 0} applications
                  </p>
                </article>
              ))}
            </div>
          )}
        </section>
      )}
    </main>
  );
}
