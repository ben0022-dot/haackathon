import Link from "next/link";
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

function formatCurrency(payment) {
  return typeof payment === "number"
    ? `KES ${payment.toLocaleString()}`
    : null;
}

function timeAgo(date) {
  const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
  if (seconds < 60) return "Just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  const days = Math.floor(hours / 24);
  return `${days} day${days > 1 ? "s" : ""} ago`;
}

export default function OpportunityCard({ opportunity, showScore }) {
  const amount = formatCurrency(opportunity.payment);

  return (
    <article className="card opportunity-card">
      <div className="opportunity-card-head">
        <h3 className="opportunity-title">{opportunity.title}</h3>
        {opportunity.verified ? (
          <span className="verified-badge" aria-label="Verified opportunity">
            ✓ Verified
          </span>
        ) : (
          <span className="unverified-badge">Unverified</span>
        )}
      </div>

      <p className="opportunity-meta">
        <span>{opportunity.type ? TYPE_LABELS[opportunity.type] : ""}</span>
        <span className="dot" aria-hidden="true">·</span>
        <span>{opportunity.location}</span>
      </p>

      <div className="opportunity-payment">
        {amount ? (
          <strong>{amount}</strong>
        ) : null}
        {opportunity.paymentType ? (
          <span>{PAYMENT_LABELS[opportunity.paymentType]}</span>
        ) : null}
      </div>

      {opportunity.skills?.length > 0 && (
        <div className="skill-list">
          {opportunity.skills.map((os) => (
            <SkillBadge key={os.skill?.id ?? os.skillId} name={os.skill?.name} />
          ))}
        </div>
      )}

      <div className="opportunity-card-foot">
        <span className="opportunity-posted">Posted {timeAgo(opportunity.createdAt)}</span>
        {showScore && typeof opportunity.score === "number" ? (
          <span className="match-score">Match {opportunity.score}%</span>
        ) : null}
      </div>

      <Link href={`/opportunities/${opportunity.id}`} className="btn btn-primary btn-block">
        View Opportunity
      </Link>
    </article>
  );
}