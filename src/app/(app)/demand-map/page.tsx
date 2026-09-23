import React from "react";
import { NeighborhoodDensityMap } from "@/components/map/NeighborhoodDensityMap";
import Link from "next/link";
import { ArrowLeft, Sparkles, Briefcase, GraduationCap } from "lucide-react";

export const metadata = {
  title: "Local Demand & Gig Density Map | SpaceMakers",
  description:
    "Explore real-time gig opportunity density and TVET talent demand across Nairobi neighbourhoods including Githogoro, Runda, Westlands, and Kasarani.",
};

export default function DemandMapPage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--background, #f7f6f3)" }}>
      {/* Header breadcrumb & navigation bar */}
      <div
        style={{
          borderBottom: "1px solid var(--border, #e6e4df)",
          background: "var(--surface, #ffffff)",
          padding: "16px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "var(--text-primary, #16231b)",
              textDecoration: "none",
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>

          <div style={{ display: "flex", gap: "10px" }}>
            <Link
              href="/opportunities"
              className="btn btn-secondary"
              style={{
                fontSize: "0.85rem",
                padding: "8px 16px",
                borderRadius: "999px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                textDecoration: "none",
              }}
            >
              <Briefcase size={14} />
              <span>Browse All Gigs</span>
            </Link>
            <Link
              href="/signup?role=EMPLOYER"
              className="btn btn-primary"
              style={{
                fontSize: "0.85rem",
                padding: "8px 16px",
                borderRadius: "999px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                textDecoration: "none",
              }}
            >
              <GraduationCap size={14} />
              <span>Post a Gig</span>
            </Link>
          </div>
        </div>
      </div>

      <NeighborhoodDensityMap />
    </main>
  );
}
