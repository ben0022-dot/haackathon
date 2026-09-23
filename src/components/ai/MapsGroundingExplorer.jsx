"use client";

import { useState } from "react";
import { MapPin, Search, ExternalLink, Navigation, Compass, Star } from "lucide-react";

const PRESET_QUERIES = [
  "TVET vocational training and trade institutes in Nairobi",
  "NITA trade test centers and polytechnics in Nairobi",
  "Electrical and plumbing hardware supply shops in Nairobi",
  "Welding and steel fabrication workshops in Nairobi Industrial Area",
];

export default function MapsGroundingExplorer() {
  const [query, setQuery] = useState(PRESET_QUERIES[0]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);
  const [coords, setCoords] = useState({ latitude: -1.286389, longitude: 36.817223 }); // Default Nairobi

  function detectLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setUseCurrentLocation(true);
        },
        (err) => {
          console.warn("Geolocation warning:", err.message);
          setUseCurrentLocation(false);
        }
      );
    }
  }

  async function handleSearch(searchQuery) {
    const textToSearch = typeof searchQuery === "string" ? searchQuery : query;
    if (!textToSearch.trim() || loading) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/gemini/maps", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: textToSearch.trim(),
          latitude: coords.latitude,
          longitude: coords.longitude,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to search Google Maps data.");
      }

      setResult(data);
    } catch (err) {
      console.error("Maps search error:", err);
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
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <MapPin size={22} color="var(--primary)" />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700 }}>Local TVET & Trade Hubs (Google Maps Grounding)</h3>
          </div>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", marginTop: 4 }}>
            Grounded with Gemini 3.5 Flash and Google Maps tool. Find accredited trade institutions, hardware shops, and workshops.
          </p>
        </div>

        <button
          type="button"
          onClick={detectLocation}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: "0.85rem",
            padding: "8px 14px",
            borderRadius: "999px",
            border: "1px solid var(--border)",
            background: useCurrentLocation ? "var(--primary-soft)" : "var(--background)",
            color: useCurrentLocation ? "var(--primary-dark)" : "var(--text-secondary)",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          <Navigation size={14} />
          {useCurrentLocation ? "Using GPS Location" : "Use My Location"}
        </button>
      </div>

      {/* Preset Chips */}
      <div>
        <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
          Suggested Trade & Hub Searches
        </label>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
          {PRESET_QUERIES.map((preset, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setQuery(preset);
                handleSearch(preset);
              }}
              style={{
                fontSize: "0.82rem",
                padding: "6px 12px",
                borderRadius: "999px",
                border: "1px solid var(--border)",
                background: query === preset ? "var(--primary-soft)" : "var(--background)",
                color: query === preset ? "var(--primary-dark)" : "var(--text-primary)",
                fontWeight: query === preset ? 700 : 500,
                cursor: "pointer",
              }}
            >
              {preset}
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
            placeholder="Search TVET colleges, testing centers, hardware suppliers in Kenya..."
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
          <Compass
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
          Find on Maps
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
          {/* Grounded synthesis text */}
          <div
            style={{
              background: "var(--background)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-sm)",
              padding: 16,
              fontSize: "0.95rem",
              lineHeight: 1.6,
              whiteSpace: "pre-wrap",
            }}
          >
            {result.text}
          </div>

          {/* List of Verified Google Maps Places (MANDATORY PER RULE) */}
          {result.places && result.places.length > 0 && (
            <div>
              <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, display: "flex", alignItems: "center", gap: 6 }}>
                <MapPin size={18} color="var(--primary)" />
                Direct Google Maps Places & Reviews ({result.places.length})
              </h4>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
                {result.places.map((place, index) => (
                  <div
                    key={index}
                    style={{
                      background: "var(--surface)",
                      border: "1.5px solid var(--border)",
                      borderRadius: "var(--radius-sm)",
                      padding: 14,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: 10,
                      boxShadow: "var(--shadow)",
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)" }}>
                        {place.title}
                      </div>

                      {/* Review snippets from placeAnswerSources */}
                      {place.placeAnswerSources?.reviewSnippets &&
                        place.placeAnswerSources.reviewSnippets.length > 0 && (
                          <div style={{ marginTop: 6, display: "flex", flexDirection: "column", gap: 4 }}>
                            {place.placeAnswerSources.reviewSnippets.map((snippet, sIdx) => (
                              <div
                                key={sIdx}
                                style={{
                                  fontSize: "0.8rem",
                                  color: "var(--text-secondary)",
                                  background: "var(--background)",
                                  padding: "4px 8px",
                                  borderRadius: 4,
                                  fontStyle: "italic",
                                  display: "flex",
                                  alignItems: "flex-start",
                                  gap: 4,
                                }}
                              >
                                <Star size={12} color="var(--accent)" style={{ marginTop: 2, flexShrink: 0 }} />
                                <span>&ldquo;{snippet.reviewText || snippet.snippet || String(snippet)}&rdquo;</span>
                              </div>
                            ))}
                          </div>
                        )}
                    </div>

                    {place.url ? (
                      <a
                        href={place.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 6,
                          fontSize: "0.85rem",
                          fontWeight: 700,
                          padding: "8px 14px",
                          borderRadius: "999px",
                          background: "var(--primary-soft)",
                          color: "var(--primary-dark)",
                          textDecoration: "none",
                          border: "1px solid color-mix(in srgb, var(--primary) 30%, transparent)",
                        }}
                      >
                        Open in Google Maps <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                        Location verified via Gemini Maps Grounding
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
