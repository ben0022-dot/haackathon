"use client";

import { useState } from "react";
import { Globe, Search, ExternalLink, TrendingUp, ShieldCheck, Newspaper } from "lucide-react";

const PRESET_TOPICS = [
  "Current TVET artisan daily wage rates in Kenya (KES) 2026",
  "NITA Kenya trade test examination registration requirements & schedules",
  "Standard cost of plumbing & electrical wiring materials in Nairobi",
  "TVETA Kenya accredited vocational colleges & market demand trends",
];

export default function SearchGroundingTool() {
  const [query, setQuery] = useState(PRESET_TOPICS[0]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  async function handleSearch(searchQuery) {
    const textToSearch = typeof searchQuery === "string" ? searchQuery : query;
    if (!textToSearch.trim() || loading) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/gemini/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: textToSearch.trim() }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch Google Search grounded data.");
      }

      setResult(data);
    } catch (err) {
      console.error("Search Grounding Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      {/* Header */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Globe size={22} color="var(--primary)" />
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700 }}>Live Market & Trade Intelligence (Google Search Grounding)</h3>
        </div>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", marginTop: 4 }}>
          Powered by Gemini 3.5 Flash with Google Search Grounding tool. Verify live labor rates, NITA policies, and tool costs across Kenya.
        </p>
      </div>

      {/* Preset Topics */}
      <div>
        <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
          Explore Key Trade Topics
        </label>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
          {PRESET_TOPICS.map((topic, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setQuery(topic);
                handleSearch(topic);
              }}
              style={{
                fontSize: "0.82rem",
                padding: "6px 12px",
                borderRadius: "999px",
                border: "1px solid var(--border)",
                background: query === topic ? "var(--primary-soft)" : "var(--background)",
                color: query === topic ? "var(--primary-dark)" : "var(--text-primary)",
                fontWeight: query === topic ? 700 : 500,
                cursor: "pointer",
              }}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      {/* Search Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        style={{ display: "flex", gap: 8 }}
      >
        <div style={{ position: "relative", flex: 1 }}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search current labor laws, material pricing, TVET wages in Kenya..."
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px 16px 12px 40px",
              borderRadius: "999px",
              border: "1px solid var(--border)",
              background: "var(--background)",
              fontSize: "0.95rem",
              outline: "none",
            }}
          />
          <Newspaper
            size={18}
            color="var(--text-secondary)"
            style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }}
          />
        </div>
        <button
          type="submit"
          disabled={loading || !query.trim()}
          style={{
            padding: "12px 22px",
            borderRadius: "999px",
            border: "none",
            background: "var(--primary)",
            color: "#fff",
            fontWeight: 700,
            cursor: loading || !query.trim() ? "not-allowed" : "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            opacity: loading || !query.trim() ? 0.6 : 1,
          }}
        >
          {loading ? (
            <span className="spinner" style={{ width: 16, height: 16, borderWidth: 2 }} />
          ) : (
            <Search size={16} />
          )}
          Search Live Web
        </button>
      </form>

      {error && (
        <div
          style={{
            background: "var(--danger-soft)",
            color: "var(--danger)",
            borderRadius: "var(--radius-sm)",
            padding: "12px 16px",
            fontSize: "0.9rem",
          }}
        >
          ⚠️ {error}
        </div>
      )}

      {/* Results Display */}
      {result && (
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 8 }}>
          {/* Synthesized intelligence */}
          <div
            style={{
              background: "var(--background)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-sm)",
              padding: 18,
              fontSize: "0.95rem",
              lineHeight: 1.65,
              whiteSpace: "pre-wrap",
            }}
          >
            {result.text}
          </div>

          {/* Extracted Google Search Sources */}
          {result.sources && result.sources.length > 0 && (
            <div>
              <h4 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}>
                <ShieldCheck size={16} color="var(--primary)" />
                Grounded Web References ({result.sources.length})
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {result.sources.map((source, idx) => (
                  <a
                    key={idx}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      padding: "6px 12px",
                      borderRadius: "999px",
                      background: "var(--surface)",
                      color: "var(--primary-dark)",
                      border: "1px solid var(--border)",
                      textDecoration: "none",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                    }}
                  >
                    <Globe size={13} color="var(--primary)" />
                    <span style={{ maxWidth: 260, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {source.title}
                    </span>
                    <ExternalLink size={12} />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
