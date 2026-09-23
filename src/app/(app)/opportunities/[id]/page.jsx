"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import LoadingState from "@/components/LoadingState";
import SkillBadge from "@/components/SkillBadge";

const TYPE_LABELS = {
  JOB: "Job",
  GIG: "Gig",
  CONTRACT: "Contract",
  APPRENTICESHIP: "Apprenticeship",
  SERVICE_REQUEST: "Service request",
};

const PAYMENT_LABELS = {
  FIXED: "Fixed",
  PER_DAY: "Per day",
  PER_HOUR: "Per hour",
  NEGOTIABLE: "Negotiable",
};

function formatDate(value) {
  return new Date(value).toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function OpportunityDetailPage() {
  const router = useRouter();
  const params = useParams();
  const { user, profile, loading } = useAuth();

  const [opportunity, setOpportunity] = useState(null);
  const [hasApplied, setHasApplied] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [message, setMessage] = useState("");
  const [applicationText, setApplicationText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [explanation, setExplanation] = useState("");
  const [explaining, setExplaining] = useState(false);

  useEffect(() => {
    if (!loading && !user) router.push("/login");
  }, [loading, user, router]);

  useEffect(() => {
    if (!user || !params.id) return;
    let cancelled = false;
    async function load() {
      try {
        const token = await user.getIdToken();
        const res = await fetch(`/api/opportunities/${params.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (!cancelled) {
          if (res.ok) {
            setOpportunity(data.opportunity);
            setHasApplied(data.hasApplied);
          } else {
            setMessage(data.error || "Opportunity not found.");
          }
        }
      } catch {
        if (!cancelled) setMessage("Could not load this opportunity.");
      } finally {
        if (!cancelled) setFetching(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [user, params.id]);

  async function handleExplain() {
    setExplaining(true);
    setMessage("");
    try {
      const token = await user.getIdToken();
      const res = await fetch(`/api/opportunities/${opportunity.id}/explain`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) {
        setExplanation("");
        setMessage(data.error || "Could not generate an explanation.");
      } else {
        setExplanation(data.explanation || "");
      }
    } catch {
      setExplanation("");
      setMessage("Could not generate an explanation. Try again.");
    } finally {
      setExplaining(false);
    }
  }

  async function handleApply(e) {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");
    try {
      const token = await user.getIdToken();
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ opportunityId: opportunity.id, message: applicationText }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage(data.error || "Could not submit application.");
        setSubmitting(false);
        return;
      }
      setHasApplied(true);
      setMessage("Application submitted successfully.");
      setSubmitting(false);
    } catch {
      setMessage("Could not submit your application.");
      setSubmitting(false);
    }
  }

  if (loading || !user) return <LoadingState message="Loading..." />;

  if (fetching) return <LoadingState message="Loading opportunity..." />;

  if (!opportunity) {
    return (
      <main className="container">
        <div className="empty-state card">
          <h3>Opportunity not found.</h3>
          <p>{message}</p>
          <div style={{ marginTop: 16 }}>
            <Link href="/opportunities" className="btn btn-primary">Browse opportunities</Link>
          </div>
        </div>
      </main>
    );
  }

  const isOwner = profile?.id === opportunity.employer.id;
  const canApply = profile?.role === "GRADUATE" && !isOwner && opportunity.status === "OPEN";

  return (
    <main className="container">
      <Link href="/opportunities" className="back-link">← Back to opportunities</Link>

      <article className="card" style={{ marginTop: 12 }}>
        <div className="opportunity-card-head">
          <h1 style={{ fontSize: "1.5rem", letterSpacing: "-0.8px" }}>
            {opportunity.title}
          </h1>
          {opportunity.verified ? (
            <span className="verified-badge">✓ Verified</span>
          ) : (
            <span className="unverified-badge">Unverified</span>
          )}
        </div>

        {opportunity.skills?.length > 0 && (
          <div className="skill-list" style={{ margin: "10px 0" }}>
            {opportunity.skills.map((os) => (
              <SkillBadge key={os.skill?.id ?? os.skillId} name={os.skill?.name} />
            ))}
          </div>
        )}

        <dl>
          <div className="detail-row">
            <dt>Employer</dt>
            <dd>{opportunity.employer.name}</dd>
          </div>
<div className="detail-row">
            <dt>Type</dt>
            <dd>{TYPE_LABELS[opportunity.type]}</dd>
          </div>
          <div className="detail-row">
            <dt>Location</dt>
            <dd>{opportunity.location}</dd>
          </div>
          <div className="detail-row">
            <dt>Payment</dt>
            <dd>
              {typeof opportunity.payment === "number"
                ? `KES ${opportunity.payment.toLocaleString()}`
                : "Negotiable"}
              {opportunity.paymentType ? ` (${PAYMENT_LABELS[opportunity.paymentType]})` : ""}
            </dd>
          </div>
          {opportunity.deadline && (
            <div className="detail-row">
              <dt>Deadline</dt>
              <dd>{formatDate(opportunity.deadline)}</dd>
            </div>
          )}
          <div className="detail-row">
            <dt>Posted</dt>
            <dd>{formatDate(opportunity.createdAt)}</dd>
          </div>
        </dl>

        <h2 style={{ fontSize: "1.05rem", margin: "16px 0 8px" }}>About this opportunity</h2>
        <p style={{ lineHeight: 1.6, color: "var(--text-secondary)" }}>
          {opportunity.description}
        </p>
      </article>

      {!isOwner && (
        <article className="card" style={{ marginTop: 16 }}>
          <div className="opportunity-card-head">
            <h2 style={{ fontSize: "1.05rem" }}>Why this fits you</h2>
          </div>
          {explanation ? (
            <p style={{ lineHeight: 1.6, color: "var(--text-secondary)" }}>{explanation}</p>
          ) : (
            <>
              <p style={{ lineHeight: 1.6, color: "var(--text-secondary)" }}>
                A quick AI breakdown of how your skills and location line up with this opportunity.
              </p>
              <button
                type="button"
                className="btn btn-secondary"
                style={{ marginTop: 12 }}
                onClick={handleExplain}
                disabled={explaining}
              >
                {explaining ? "Thinking..." : "✨ Explain this match"}
              </button>
            </>
          )}
        </article>
      )}

      <div style={{ marginTop: 16 }}>
        {hasApplied ? (
          <div className="alert alert-success">You have applied for this opportunity.</div>
        ) : canApply && !showForm ? (
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={() => setShowForm(true)}
          >
            Apply Now
          </button>
        ) : isOwner ? (
          <Link href="/employer" className="btn btn-secondary btn-block">View in my dashboard</Link>
        ) : null}

        {showForm && !hasApplied && (
          <form className="form-card" onSubmit={handleApply} style={{ margin: "16px auto 0" }}>
            <div className="form-stack">
              <label className="field">
                <span className="field-label">
                  Why are you suitable for this opportunity?
                </span>
                <textarea
                  value={applicationText}
                  onChange={(e) => setApplicationText(e.target.value)}
                  required
                  placeholder="A short message to the employer..."
                />
              </label>
              <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}