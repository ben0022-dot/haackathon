"use client";

const SKILL_OPTIONS = [
  "Electrical",
  "Tailoring",
  "Catering",
  "Plumbing",
  "Carpentry",
  "Masonry",
  "Welding",
  "ICT",
  "Mechanics",
  "Hairdressing",
];

const LOCATION_OPTIONS = [
  "Githogoro",
  "Runda",
  "Muthaiga",
  "Gigiri",
  "Eastleigh",
  "Parklands",
];

const TYPE_OPTIONS = [
  { value: "JOB", label: "Job" },
  { value: "GIG", label: "Gig" },
  { value: "CONTRACT", label: "Contract" },
  { value: "APPRENTICESHIP", label: "Apprenticeship" },
  { value: "SERVICE_REQUEST", label: "Service request" },
];

export default function FilterBar({ filters, onChange }) {
  function update(name, value) {
    onChange({ ...filters, [name]: value });
  }

  function clearAll() {
    onChange({ skill: "", location: "", type: "", verified: "" });
  }

  const hasFilters = filters.skill || filters.location || filters.type || filters.verified;

  return (
    <div className="filter-bar">
      <div className="filter-grid">
        <label className="field">
          <span className="field-label">Skill</span>
          <select
            value={filters.skill}
            onChange={(e) => update("skill", e.target.value)}
          >
            <option value="">All skills</option>
            {SKILL_OPTIONS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </label>

        <label className="field">
          <span className="field-label">Location</span>
          <select
            value={filters.location}
            onChange={(e) => update("location", e.target.value)}
          >
            <option value="">All locations</option>
            {LOCATION_OPTIONS.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </label>

        <label className="field">
          <span className="field-label">Type</span>
          <select
            value={filters.type}
            onChange={(e) => update("type", e.target.value)}
          >
            <option value="">All types</option>
            {TYPE_OPTIONS.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </label>

        <label className="field">
          <span className="field-label">Verification</span>
          <select
            value={filters.verified}
            onChange={(e) => update("verified", e.target.value)}
          >
            <option value="">All</option>
            <option value="true">Verified only</option>
            <option value="false">Unverified</option>
          </select>
        </label>
      </div>

      {hasFilters && (
        <button type="button" className="btn btn-ghost" onClick={clearAll}>
          Clear filters
        </button>
      )}
    </div>
  );
}