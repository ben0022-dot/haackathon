"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Search,
} from "lucide-react";
import { NeighborhoodDensityMap } from "@/components/map/NeighborhoodDensityMap";
import LiveStats from "@/components/landing/LiveStats";

interface HeroSectionProps {
  onCtaClick?: () => void;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export function HeroSection({
  onCtaClick,
  ctaText = "Get started",
  ctaHref = "/signup",
  className = "",
}: HeroSectionProps) {
  const [selectedTrade, setSelectedTrade] = useState<string>("All Trades");

  const trades = [
    "All Trades",
    "Electrical & Solar",
    "Plumbing & Piping",
    "Welding & Fabrication",
    "Masonry & Construction",
    "Tailoring & Garments",
    "Catering & Hospitality",
  ];

  const recentDemand = [
    {
      title: "Commercial Three-Phase Wiring",
      location: "Githogoro · Nairobi",
      budget: "KES 4,500 / day",
      trade: "Electrical",
      badge: "Urgent Demand",
    },
    {
      title: "Water Tank & Pump Installation",
      location: "Runda · Nairobi",
      budget: "KES 3,200",
      trade: "Plumbing",
      badge: "Verified Client",
    },
    {
      title: "Custom Security Gate Fabrication",
      location: "Gigiri · Nairobi",
      budget: "KES 6,000",
      trade: "Welding",
      badge: "Materials On Site",
    },
  ];

  return (
    <section
      className={`hero-section ${className}`}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "48px 16px 40px",
        background:
          "radial-gradient(90% 120% at 85% -10%, rgba(217, 164, 4, 0.12), transparent 60%), linear-gradient(165deg, var(--primary-soft, #e6f4ec) 0%, var(--background, #f7f6f3) 65%)",
        borderBottom: "1px solid var(--border, #e6e4df)",
      }}
    >
      <div
        style={{
          maxWidth: "1080px",
          margin: "0 auto",
        }}
      >
        {/* Top Eyebrow Chip */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "var(--surface, #ffffff)",
            border: "1px solid var(--border, #e6e4df)",
            padding: "6px 14px",
            borderRadius: "999px",
            boxShadow: "var(--shadow, 0 1px 3px rgba(0,0,0,0.06))",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "var(--primary, #00843d)",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: "var(--primary-dark, #016b30)",
            }}
          >
            SpaceMakers · Kenya TVET & Trade Talent Network
          </span>
        </div>

        {/* Main Two-Column Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {/* Left Column: Headlines & Call to Action */}
          <div>
            <h1
              style={{
                fontSize: "clamp(2rem, 4vw + 1rem, 3.2rem)",
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: "-1.5px",
                color: "var(--text-primary, #16231b)",
                marginBottom: "18px",
              }}
            >
              Connecting{" "}
              <span
                style={{
                  color: "var(--primary, #00843d)",
                  textDecoration: "underline",
                  textDecorationColor: "var(--accent, #d9a404)",
                  textUnderlineOffset: "6px",
                }}
              >
                TVET Graduates
              </span>{" "}
              with Local Gig Demand.
            </h1>

            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: 1.6,
                color: "var(--text-secondary, #5c6a62)",
                marginBottom: "28px",
                maxWidth: "540px",
              }}
            >
              SpaceMakers bridges the gap between vocational training and local work.
              We match certified TVET graduates, technicians, and local artisans with
              verified residential, commercial, and construction gigs in their
              neighbourhoods — guaranteeing fair rates, direct employer connections,
              and zero middleman cuts.
            </p>

            {/* Clear Call to Action (CTA) Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "12px",
                marginBottom: "32px",
              }}
            >
              {/* Primary Call to Action Button */}
              {onCtaClick ? (
                <button
                  type="button"
                  onClick={onCtaClick}
                  className="btn btn-primary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 28px",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    borderRadius: "999px",
                    background: "var(--primary, #00843d)",
                    color: "#ffffff",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 4px 14px rgba(0, 132, 61, 0.35)",
                    transition: "transform 0.15s ease, background 0.15s ease",
                  }}
                  aria-label={ctaText}
                >
                  <Search size={18} />
                  <span>{ctaText}</span>
                  <ArrowRight size={18} />
                </button>
              ) : (
                <Link
                  href={ctaHref}
                  className="btn btn-primary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 28px",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    borderRadius: "999px",
                    background: "var(--primary, #00843d)",
                    color: "#ffffff",
                    textDecoration: "none",
                    boxShadow: "0 4px 14px rgba(0, 132, 61, 0.35)",
                    transition: "transform 0.15s ease, background 0.15s ease",
                  }}
                  aria-label={ctaText}
                >
                  <Search size={18} />
                  <span>{ctaText}</span>
                  <ArrowRight size={18} />
                </Link>
              )}

              {/* Secondary CTA for Employers */}
              <Link
                href="/signup?role=EMPLOYER"
                className="btn btn-secondary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 24px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  borderRadius: "999px",
                  background: "var(--surface, #ffffff)",
                  color: "var(--text-primary, #16231b)",
                  border: "1px solid var(--border, #e6e4df)",
                  textDecoration: "none",
                }}
              >
                <Briefcase size={17} color="var(--primary, #00843d)" />
                <span>Post a gig</span>
              </Link>

              {/* Tertiary CTA to browse opportunities */}
              <Link
                href="/opportunities"
                className="btn btn-secondary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "14px 20px",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  borderRadius: "999px",
                  background: "var(--surface, #ffffff)",
                  color: "var(--text-primary, #16231b)",
                  border: "1px solid var(--border, #e6e4df)",
                  textDecoration: "none",
                }}
              >
                <Search size={16} />
                <span>Browse opportunities</span>
              </Link>
            </div>

            {/* Free to use for everyone */}
            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "var(--primary-dark, #016b30)",
                margin: "-16px 0 24px",
              }}
            >
              <CheckCircle2 size={16} />
              Free to use for everyone — no middlemen, no agency cuts.
            </p>

            {/* Trust and Verification Badges */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                alignItems: "center",
                paddingTop: "12px",
                borderTop: "1px solid var(--border, #e6e4df)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", color: "var(--text-secondary, #5c6a62)" }}>
                <ShieldCheck size={16} color="var(--primary, #00843d)" />
                <span>NITA & TVETA Accredited</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", color: "var(--text-secondary, #5c6a62)" }}>
                <Zap size={16} color="var(--accent, #d9a404)" />
                <span>Instant Gig Matching</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", color: "var(--text-secondary, #5c6a62)" }}>
                <CheckCircle2 size={16} color="var(--primary, #00843d)" />
                <span>Verified Direct Payouts</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Local Gig Demand Feed Card */}
          <div
            style={{
              background: "var(--surface, #ffffff)",
              border: "1px solid var(--border, #e6e4df)",
              borderRadius: "var(--radius, 14px)",
              padding: "24px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid var(--border, #e6e4df)",
                paddingBottom: "12px",
                marginBottom: "16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#22c55e",
                    boxShadow: "0 0 0 3px rgba(34, 197, 94, 0.2)",
                  }}
                />
                <h3 style={{ fontSize: "1rem", fontWeight: 700, margin: 0 }}>
                  Live Gig Demand
                </h3>
              </div>
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "var(--primary-dark, #016b30)",
                  background: "var(--primary-soft, #e6f4ec)",
                  padding: "4px 8px",
                  borderRadius: "6px",
                }}
              >
                Githogoro & Nairobi Metro
              </span>
            </div>

            {/* List of recent opportunities needing TVET skills */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {recentDemand.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "12px 14px",
                    borderRadius: "8px",
                    background: "var(--background, #f7f6f3)",
                    border: "1px solid var(--border, #e6e4df)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>
                      {item.title}
                    </div>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: "var(--primary-dark, #016b30)",
                        background: "var(--primary-soft, #e6f4ec)",
                        padding: "2px 6px",
                        borderRadius: "4px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontSize: "0.82rem",
                      color: "var(--text-secondary, #5c6a62)",
                    }}
                  >
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                      <MapPin size={13} color="var(--primary, #00843d)" />
                      {item.location}
                    </span>
                    <strong style={{ color: "var(--text-primary, #16231b)" }}>
                      {item.budget}
                    </strong>
                  </div>
                </div>
              ))}
            </div>

            {/* TVET Graduate Match Callout */}
            <div
              style={{
                marginTop: "16px",
                padding: "12px",
                borderRadius: "8px",
                background: "var(--primary-soft, #e6f4ec)",
                border: "1px dashed var(--primary, #00843d)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <GraduationCap size={22} color="var(--primary-dark, #016b30)" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: "0.82rem", color: "var(--primary-dark, #016b30)", lineHeight: 1.4 }}>
                <strong>Are you a TVET graduate or certified artisan?</strong> Employers in your area are actively hiring for technical and trade gigs.
              </div>
            </div>
          </div>
        </div>

        {/* Trade Category Filter Pills */}
        <div style={{ marginTop: "36px" }}>
          <div
            style={{
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              color: "var(--text-secondary, #5c6a62)",
              marginBottom: "10px",
            }}
          >
            Explore TVET Trade Disciplines
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {trades.map((trade) => {
              const active = selectedTrade === trade;
              return (
                <button
                  key={trade}
                  type="button"
                  onClick={() => setSelectedTrade(trade)}
                  style={{
                    padding: "8px 14px",
                    borderRadius: "999px",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    border: `1.5px solid ${active ? "var(--primary, #00843d)" : "var(--border, #e6e4df)"}`,
                    background: active ? "var(--primary, #00843d)" : "var(--surface, #ffffff)",
                    color: active ? "#ffffff" : "var(--text-primary, #16231b)",
                    transition: "all 0.15s ease",
                  }}
                >
                  {trade}
                </button>
              );
            })}
          </div>
        </div>

        {/* Key Metrics Banner */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "16px",
            marginTop: "32px",
            paddingTop: "24px",
            borderTop: "1px solid var(--border, #e6e4df)",
          }}
        >
          <LiveStats />
        </div>
      </div>
    </section>
  );
}

export { NeighborhoodDensityMap };

/**
 * Default App component implementing the hero section describing the platform,
 * connecting TVET graduates with local gig demand.
 */
export default function App() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--background, #f7f6f3)" }}>
      <HeroSection />
    </main>
  );
}
