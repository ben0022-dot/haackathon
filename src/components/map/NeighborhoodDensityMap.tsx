"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
  useMap,
} from "@vis.gl/react-google-maps";
import {
  MapPin,
  Flame,
  Briefcase,
  Layers,
  Sparkles,
  TrendingUp,
  Banknote,
  ArrowRight,
  ShieldCheck,
  Compass,
  AlertCircle,
  Maximize2,
  Minimize2,
  Search,
} from "lucide-react";
import type { NeighborhoodGigData } from "@/app/api/neighborhood-demand/route";

const DEFAULT_CENTER = { lat: -1.242, lng: 36.82 };
const DEFAULT_ZOOM = 12;

interface MapControllerProps {
  center: { lat: number; lng: number } | null;
  zoom?: number;
}

function MapController({ center, zoom }: MapControllerProps) {
  const map = useMap();

  useEffect(() => {
    if (!map || !center) return;
    map.panTo(center);
    if (zoom) {
      map.setZoom(zoom);
    }
  }, [map, center, zoom]);

  return null;
}

export function NeighborhoodDensityMap() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  const [neighborhoods, setNeighborhoods] = useState<NeighborhoodGigData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedTrade, setSelectedTrade] = useState<string>("All Trades");
  const [selectedNeighborhood, setSelectedNeighborhood] =
    useState<NeighborhoodGigData | null>(null);
  const [hoveredNeighborhoodId, setHoveredNeighborhoodId] = useState<string | null>(
    null
  );
  const [mapTarget, setMapTarget] = useState<{
    lat: number;
    lng: number;
    zoom?: number;
  } | null>(null);

  const [activeTab, setActiveTab] = useState<"map" | "grid">("map");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const tradesList = [
    "All Trades",
    "Electrical & Solar",
    "Plumbing & Piping",
    "Welding & Fabrication",
    "Masonry & Tiling",
    "Carpentry & Cabinetry",
  ];

  // Fetch neighborhood gig density data
  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setLoading(true);
        const res = await fetch(
          `/api/neighborhood-demand?trade=${encodeURIComponent(selectedTrade)}`
        );
        if (!res.ok) throw new Error("Failed to load neighborhood gig data");
        const data = await res.json();
        if (isMounted) {
          setNeighborhoods(data.neighborhoods || []);
          setSelectedNeighborhood((prev) => {
            if (!prev) {
              const githogoro = data.neighborhoods?.find(
                (n: NeighborhoodGigData) => n.id === "githogoro"
              );
              return githogoro || data.neighborhoods?.[0] || null;
            }
            return (
              data.neighborhoods?.find(
                (n: NeighborhoodGigData) => n.id === prev.id
              ) || prev
            );
          });
        }
      } catch (err: unknown) {
        if (isMounted) {
          setError(
            err instanceof Error ? err.message : "Network error loading demand data"
          );
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    loadData();
    return () => {
      isMounted = false;
    };
  }, [selectedTrade]);

  const totalGigs = useMemo(
    () => neighborhoods.reduce((sum, n) => sum + n.totalGigs, 0),
    [neighborhoods]
  );

  const hottestZone = useMemo(() => {
    if (!neighborhoods.length) return null;
    return [...neighborhoods].sort((a, b) => b.totalGigs - a.totalGigs)[0];
  }, [neighborhoods]);

  const avgRate = useMemo(() => {
    if (!neighborhoods.length) return 2600;
    return Math.round(
      neighborhoods.reduce((sum, n) => sum + n.avgDailyRateKes, 0) /
        neighborhoods.length
    );
  }, [neighborhoods]);

  const handleSelectNeighborhood = useCallback(
    (n: NeighborhoodGigData, zoom = 13) => {
      setSelectedNeighborhood(n);
      setMapTarget({ lat: n.lat, lng: n.lng, zoom });
    },
    []
  );

  const resetView = useCallback(() => {
    setMapTarget({ ...DEFAULT_CENTER, zoom: DEFAULT_ZOOM });
  }, []);

  return (
    <section
      id="neighborhood-demand-map"
      style={{
        padding: "48px 16px",
        background: "var(--background, #f7f6f3)",
        borderBottom: "1px solid var(--border, #e6e4df)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--surface, #ffffff)",
              border: "1px solid var(--border, #e6e4df)",
              padding: "4px 12px",
              borderRadius: "999px",
              width: "fit-content",
            }}
          >
            <Compass size={14} color="var(--primary, #00843d)" />
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                color: "var(--primary-dark, #016b30)",
              }}
            >
              Real-Time TVET Labour Demand Mapping
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "16px",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 3vw + 0.5rem, 2.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.18,
                  color: "var(--text-primary, #16231b)",
                  margin: 0,
                }}
              >
                Local Gig Demand & Artisan Density
              </h2>
              <p
                style={{
                  fontSize: "1.02rem",
                  color: "var(--text-secondary, #5c6a62)",
                  marginTop: "8px",
                  maxWidth: "680px",
                  lineHeight: 1.5,
                }}
              >
                Explore neighborhood demand density across Nairobi Metro. TVET
                graduates and employers can track active artisan needs, daily market
                rates in KES, and trade shortages from Githogoro to Westlands.
              </p>
            </div>

            {/* Quick Summary KPIs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <div
                style={{
                  background: "var(--surface, #ffffff)",
                  border: "1px solid var(--border, #e6e4df)",
                  padding: "10px 16px",
                  borderRadius: "10px",
                  minWidth: "120px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-secondary, #5c6a62)",
                    fontWeight: 600,
                  }}
                >
                  Active Gigs Mapped
                </div>
                <div
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 800,
                    color: "var(--primary, #00843d)",
                  }}
                >
                  {totalGigs} Openings
                </div>
              </div>

              <div
                style={{
                  background: "var(--surface, #ffffff)",
                  border: "1px solid var(--border, #e6e4df)",
                  padding: "10px 16px",
                  borderRadius: "10px",
                  minWidth: "120px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-secondary, #5c6a62)",
                    fontWeight: 600,
                  }}
                >
                  Top Demand Hub
                </div>
                <div
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 800,
                    color: "var(--accent, #d9a404)",
                  }}
                >
                  {hottestZone ? hottestZone.name : "Westlands"}
                </div>
              </div>

              <div
                style={{
                  background: "var(--surface, #ffffff)",
                  border: "1px solid var(--border, #e6e4df)",
                  padding: "10px 16px",
                  borderRadius: "10px",
                  minWidth: "120px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-secondary, #5c6a62)",
                    fontWeight: 600,
                  }}
                >
                  Avg. Artisan Rate
                </div>
                <div
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 800,
                    color: "var(--text-primary, #16231b)",
                  }}
                >
                  KES {avgRate.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Toolbar: Trade Discipline Filter Pills & Neighborhood Jump Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            background: "var(--surface, #ffffff)",
            border: "1px solid var(--border, #e6e4df)",
            borderRadius: "12px",
            padding: "16px",
            marginBottom: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          }}
        >
          {/* Trade Discipline Selection */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            <span
              style={{
                fontSize: "0.82rem",
                fontWeight: 700,
                color: "var(--text-secondary, #5c6a62)",
                marginRight: "4px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Filter by Trade:
            </span>
            {tradesList.map((trade) => {
              const active = selectedTrade === trade;
              return (
                <button
                  key={trade}
                  type="button"
                  onClick={() => setSelectedTrade(trade)}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "999px",
                    fontSize: "0.84rem",
                    fontWeight: 600,
                    border: active
                      ? "1.5px solid var(--primary, #00843d)"
                      : "1px solid var(--border, #e6e4df)",
                    background: active
                      ? "var(--primary, #00843d)"
                      : "var(--surface, #ffffff)",
                    color: active ? "#ffffff" : "var(--text-primary, #16231b)",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  {trade}
                </button>
              );
            })}
          </div>

          {/* Quick Jump to Neighborhoods & View Controls */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
              borderTop: "1px solid var(--border, #e6e4df)",
              paddingTop: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-secondary, #5c6a62)",
                  fontWeight: 600,
                }}
              >
                Quick Jump:
              </span>
              {["Githogoro", "Runda", "Westlands", "Kasarani", "Kilimani"].map(
                (name) => {
                  const target = neighborhoods.find(
                    (n) => n.name.toLowerCase() === name.toLowerCase()
                  );
                  const isSelected = selectedNeighborhood?.id === target?.id;
                  return (
                    <button
                      key={name}
                      type="button"
                      onClick={() => target && handleSelectNeighborhood(target, 14)}
                      style={{
                        padding: "4px 10px",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        borderRadius: "6px",
                        border: isSelected
                          ? "1px solid var(--primary, #00843d)"
                          : "1px solid var(--border, #e6e4df)",
                        background: isSelected
                          ? "var(--primary-soft, #e6f4ec)"
                          : "var(--background, #f7f6f3)",
                        color: isSelected
                          ? "var(--primary-dark, #016b30)"
                          : "var(--text-primary, #16231b)",
                        cursor: "pointer",
                      }}
                    >
                      {name}
                    </button>
                  );
                }
              )}
              <button
                type="button"
                onClick={resetView}
                style={{
                  padding: "4px 10px",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  borderRadius: "6px",
                  border: "1px solid var(--border, #e6e4df)",
                  background: "var(--surface, #ffffff)",
                  color: "var(--text-secondary, #5c6a62)",
                  cursor: "pointer",
                }}
              >
                Reset Metro View
              </button>
            </div>

            {/* Density Legend & Fullscreen toggle */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                fontSize: "0.78rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#00843d",
                  }}
                />
                <span style={{ color: "var(--text-secondary, #5c6a62)" }}>
                  Hotspot (30+ gigs)
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#d9a404",
                  }}
                />
                <span style={{ color: "var(--text-secondary, #5c6a62)" }}>
                  High Demand (20-29)
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#0284c7",
                  }}
                />
                <span style={{ color: "var(--text-secondary, #5c6a62)" }}>
                  Steady (&lt;20)
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--primary, #00843d)",
                  fontWeight: 600,
                }}
              >
                {isExpanded ? (
                  <>
                    <Minimize2 size={14} /> Normal
                  </>
                ) : (
                  <>
                    <Maximize2 size={14} /> Expanded
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Main Grid: Interactive Map (Left/Center) + Neighborhood Intelligence Drawer (Right) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isExpanded
              ? "1fr"
              : "minmax(0, 1fr) minmax(320px, 380px)",
            gap: "20px",
            alignItems: "start",
          }}
        >
          {/* Map Container */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: isExpanded ? "640px" : "560px",
              borderRadius: "14px",
              overflow: "hidden",
              border: "1px solid var(--border, #e6e4df)",
              boxShadow: "0 6px 24px rgba(0, 0, 0, 0.08)",
              background: "#e5e7eb",
            }}
          >
            {apiKey ? (
              <APIProvider apiKey={apiKey} libraries={["marker"]}>
                <Map
                  mapId="DEMO_MAP_ID"
                  defaultCenter={DEFAULT_CENTER}
                  defaultZoom={DEFAULT_ZOOM}
                  gestureHandling="greedy"
                  disableDefaultUI={false}
                  clickableIcons={false}
                  internalUsageAttributionIds={["gmp_mcp_codeassist_v1_aistudio"]}
                  style={{ width: "100%", height: "100%" }}
                >
                  <MapController
                    center={mapTarget ? { lat: mapTarget.lat, lng: mapTarget.lng } : null}
                    zoom={mapTarget?.zoom}
                  />

                  {/* Neighborhood Density Markers */}
                  {neighborhoods.map((n) => {
                    const isSelected = selectedNeighborhood?.id === n.id;
                    const isHovered = hoveredNeighborhoodId === n.id;

                    const markerBg =
                      n.density === "hotspot"
                        ? "#00843d"
                        : n.density === "high"
                        ? "#d9a404"
                        : "#0284c7";

                    return (
                      <AdvancedMarker
                        key={n.id}
                        position={{ lat: n.lat, lng: n.lng }}
                        onClick={() => handleSelectNeighborhood(n)}
                        zIndex={isSelected ? 100 : isHovered ? 50 : 10}
                      >
                        <div
                          onMouseEnter={() => setHoveredNeighborhoodId(n.id)}
                          onMouseLeave={() => setHoveredNeighborhoodId(null)}
                          style={{
                            cursor: "pointer",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            transform: isSelected || isHovered ? "scale(1.12)" : "scale(1)",
                            transition: "transform 0.18s ease",
                          }}
                        >
                          {/* Pulsing Demand Bubble */}
                          <div
                            style={{
                              background: markerBg,
                              color: "#ffffff",
                              borderRadius: "999px",
                              padding: "6px 12px",
                              boxShadow:
                                isSelected || isHovered
                                  ? `0 0 0 4px rgba(255,255,255,0.9), 0 6px 16px rgba(0,0,0,0.3)`
                                  : "0 3px 10px rgba(0,0,0,0.22)",
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                              fontWeight: 700,
                              fontSize: "0.82rem",
                              whiteSpace: "nowrap",
                              border: "2px solid #ffffff",
                            }}
                          >
                            {n.density === "hotspot" && (
                              <Flame size={13} color="#ffffff" />
                            )}
                            <span>{n.name}</span>
                            <span
                              style={{
                                background: "rgba(0,0,0,0.25)",
                                padding: "1px 6px",
                                borderRadius: "999px",
                                fontSize: "0.74rem",
                              }}
                            >
                              {n.totalGigs}
                            </span>
                          </div>

                          {/* Pointer Triangle */}
                          <div
                            style={{
                              width: 0,
                              height: 0,
                              borderLeft: "6px solid transparent",
                              borderRight: "6px solid transparent",
                              borderTop: `7px solid ${markerBg}`,
                              marginTop: "-1px",
                            }}
                          />
                        </div>
                      </AdvancedMarker>
                    );
                  })}

                  {/* InfoWindow for selected neighborhood */}
                  {selectedNeighborhood && (
                    <InfoWindow
                      position={{
                        lat: selectedNeighborhood.lat,
                        lng: selectedNeighborhood.lng,
                      }}
                      onCloseClick={() => setSelectedNeighborhood(null)}
                      headerDisabled={false}
                    >
                      <div
                        style={{
                          padding: "6px 4px",
                          maxWidth: "240px",
                          fontFamily: "inherit",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            marginBottom: "4px",
                          }}
                        >
                          <span
                            style={{
                              display: "inline-block",
                              width: "8px",
                              height: "8px",
                              borderRadius: "50%",
                              background:
                                selectedNeighborhood.density === "hotspot"
                                  ? "#00843d"
                                  : "#d9a404",
                            }}
                          />
                          <strong style={{ fontSize: "1rem", color: "#16231b" }}>
                            {selectedNeighborhood.name}
                          </strong>
                        </div>
                        <div
                          style={{
                            fontSize: "0.82rem",
                            color: "#5c6a62",
                            marginBottom: "6px",
                          }}
                        >
                          {selectedNeighborhood.totalGigs} active TVET gigs in this zone
                        </div>
                        <div
                          style={{
                            fontSize: "0.78rem",
                            background: "#e6f4ec",
                            color: "#016b30",
                            padding: "4px 8px",
                            borderRadius: "4px",
                            fontWeight: 600,
                            marginBottom: "6px",
                          }}
                        >
                          Avg: KES {selectedNeighborhood.avgDailyRateKes.toLocaleString()} / day
                        </div>
                        <div
                          style={{
                            fontSize: "0.75rem",
                            color: "#71717a",
                            lineHeight: 1.3,
                          }}
                        >
                          {selectedNeighborhood.urgentDemand}
                        </div>
                      </div>
                    </InfoWindow>
                  )}
                </Map>
              </APIProvider>
            ) : (
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "24px",
                  textAlign: "center",
                  background: "var(--surface, #ffffff)",
                }}
              >
                <AlertCircle size={36} color="var(--warning, #d9a404)" />
                <h3 style={{ marginTop: "12px", marginBottom: "6px" }}>
                  Interactive Map Ready
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary, #5c6a62)",
                    maxWidth: "400px",
                  }}
                >
                  Configure your Google Maps Platform API key in the environment to
                  render live vector tiles.
                </p>
              </div>
            )}

            {/* Floating Quick Stats Overlay on Map */}
            <div
              style={{
                position: "absolute",
                top: "14px",
                left: "14px",
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(6px)",
                border: "1px solid var(--border, #e6e4df)",
                borderRadius: "8px",
                padding: "8px 14px",
                fontSize: "0.78rem",
                color: "var(--text-primary, #16231b)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                pointerEvents: "none",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#22c55e",
                  animation: "pulse 1.8s infinite",
                }}
              />
              <span>
                <strong>Live Demand Layer</strong> · {neighborhoods.length} Zones
                Mapped
              </span>
            </div>
          </div>

          {/* Neighborhood Intelligence Detail Drawer */}
          <div
            style={{
              background: "var(--surface, #ffffff)",
              border: "1px solid var(--border, #e6e4df)",
              borderRadius: "14px",
              padding: "20px",
              boxShadow: "0 4px 18px rgba(0, 0, 0, 0.05)",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            {selectedNeighborhood ? (
              <>
                {/* Selected Header */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "8px",
                      marginBottom: "6px",
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        fontSize: "1.3rem",
                        fontWeight: 800,
                        color: "var(--text-primary, #16231b)",
                      }}
                    >
                      {selectedNeighborhood.name}
                    </h3>
                    <span
                      style={{
                        fontSize: "0.74rem",
                        fontWeight: 700,
                        padding: "3px 8px",
                        borderRadius: "999px",
                        background:
                          selectedNeighborhood.density === "hotspot"
                            ? "var(--primary-soft, #e6f4ec)"
                            : "var(--warning-soft, #fdf6e2)",
                        color:
                          selectedNeighborhood.density === "hotspot"
                            ? "var(--primary-dark, #016b30)"
                            : "var(--warning, #b45309)",
                        textTransform: "uppercase",
                      }}
                    >
                      {selectedNeighborhood.density === "hotspot"
                        ? "Hotspot Zone"
                        : "High Demand"}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--text-secondary, #5c6a62)",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <MapPin size={13} color="var(--primary, #00843d)" />
                    <span>{selectedNeighborhood.county}</span>
                  </div>
                </div>

                {/* Key Metrics for Neighborhood */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      background: "var(--background, #f7f6f3)",
                      border: "1px solid var(--border, #e6e4df)",
                      borderRadius: "8px",
                      padding: "10px 12px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.74rem",
                        color: "var(--text-secondary, #5c6a62)",
                        fontWeight: 600,
                      }}
                    >
                      Active Gigs
                    </div>
                    <div
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: 800,
                        color: "var(--primary, #00843d)",
                      }}
                    >
                      {selectedNeighborhood.totalGigs} Open
                    </div>
                  </div>

                  <div
                    style={{
                      background: "var(--background, #f7f6f3)",
                      border: "1px solid var(--border, #e6e4df)",
                      borderRadius: "8px",
                      padding: "10px 12px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.74rem",
                        color: "var(--text-secondary, #5c6a62)",
                        fontWeight: 600,
                      }}
                    >
                      Avg. Daily Rate
                    </div>
                    <div
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: 800,
                        color: "var(--text-primary, #16231b)",
                      }}
                    >
                      KES {selectedNeighborhood.avgDailyRateKes.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Urgent Demand Callout */}
                <div
                  style={{
                    background: "var(--primary-soft, #e6f4ec)",
                    border: "1px dashed var(--primary, #00843d)",
                    borderRadius: "8px",
                    padding: "12px",
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                  }}
                >
                  <Sparkles
                    size={18}
                    color="var(--primary-dark, #016b30)"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  />
                  <div style={{ fontSize: "0.82rem", lineHeight: 1.4 }}>
                    <strong style={{ color: "var(--primary-dark, #016b30)" }}>
                      Peak Demand:
                    </strong>{" "}
                    <span style={{ color: "var(--text-primary, #16231b)" }}>
                      {selectedNeighborhood.urgentDemand}
                    </span>
                  </div>
                </div>

                {/* Trade Breakdown Progress Bars */}
                <div>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      color: "var(--text-secondary, #5c6a62)",
                      marginBottom: "10px",
                    }}
                  >
                    Trade Demand Distribution
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {selectedNeighborhood.topTrades.map((trade) => (
                      <div key={trade.name} style={{ fontSize: "0.82rem" }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "3px",
                          }}
                        >
                          <span style={{ fontWeight: 600 }}>{trade.name}</span>
                          <span style={{ color: "var(--text-secondary, #5c6a62)" }}>
                            {trade.count} gigs ({trade.percentage}%)
                          </span>
                        </div>
                        <div
                          style={{
                            width: "100%",
                            height: "6px",
                            background: "var(--border, #e6e4df)",
                            borderRadius: "999px",
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              width: `${trade.percentage}%`,
                              height: "100%",
                              background: "var(--primary, #00843d)",
                              borderRadius: "999px",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sample Active Gigs in this Neighborhood */}
                <div>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      color: "var(--text-secondary, #5c6a62)",
                      marginBottom: "8px",
                    }}
                  >
                    Verified Opportunities Here
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {selectedNeighborhood.activeProjectsSample.map((gig) => (
                      <div
                        key={gig.id}
                        style={{
                          background: "var(--background, #f7f6f3)",
                          border: "1px solid var(--border, #e6e4df)",
                          borderRadius: "8px",
                          padding: "10px 12px",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "0.85rem",
                            fontWeight: 700,
                            color: "var(--text-primary, #16231b)",
                            marginBottom: "4px",
                          }}
                        >
                          {gig.title}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            fontSize: "0.78rem",
                            color: "var(--text-secondary, #5c6a62)",
                          }}
                        >
                          <span>{gig.trade}</span>
                          <strong style={{ color: "var(--primary-dark, #016b30)" }}>
                            {gig.rate}
                          </strong>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to Action for Selected Neighborhood */}
                <div style={{ marginTop: "4px" }}>
                  <Link
                    href={`/opportunities?location=${encodeURIComponent(
                      selectedNeighborhood.name
                    )}`}
                    className="btn btn-primary"
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      padding: "12px",
                      borderRadius: "8px",
                      fontWeight: 700,
                      fontSize: "0.92rem",
                      textDecoration: "none",
                    }}
                  >
                    <span>View All {selectedNeighborhood.name} Gigs</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </>
            ) : (
              <div
                style={{
                  textAlign: "center",
                  padding: "36px 12px",
                  color: "var(--text-secondary, #5c6a62)",
                }}
              >
                <MapPin size={32} color="var(--primary, #00843d)" />
                <p style={{ marginTop: "12px", fontSize: "0.92rem" }}>
                  Click on any neighborhood pin on the map to inspect live gig
                  demand and artisan rate trends.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Neighborhood Demand Table / Grid for Accessibility & Comprehensive Browsing */}
        <div style={{ marginTop: "32px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "14px",
            }}
          >
            <h3
              style={{
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "var(--text-primary, #16231b)",
                margin: 0,
              }}
            >
              All Nairobi Neighborhood Demand Indices
            </h3>
            <span
              style={{
                fontSize: "0.82rem",
                color: "var(--text-secondary, #5c6a62)",
              }}
            >
              Click a neighborhood to focus on map
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "12px",
            }}
          >
            {neighborhoods.map((n) => {
              const isSelected = selectedNeighborhood?.id === n.id;
              return (
                <div
                  key={n.id}
                  onClick={() => handleSelectNeighborhood(n, 14)}
                  style={{
                    background: isSelected
                      ? "var(--primary-soft, #e6f4ec)"
                      : "var(--surface, #ffffff)",
                    border: `1px solid ${
                      isSelected
                        ? "var(--primary, #00843d)"
                        : "var(--border, #e6e4df)"
                    }`,
                    borderRadius: "10px",
                    padding: "14px",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                    boxShadow: isSelected
                      ? "0 4px 12px rgba(0, 132, 61, 0.15)"
                      : "none",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "6px",
                    }}
                  >
                    <div>
                      <strong
                        style={{
                          fontSize: "1rem",
                          color: "var(--text-primary, #16231b)",
                        }}
                      >
                        {n.name}
                      </strong>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--text-secondary, #5c6a62)",
                        }}
                      >
                        {n.county}
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        padding: "2px 8px",
                        borderRadius: "999px",
                        background:
                          n.density === "hotspot"
                            ? "#00843d"
                            : n.density === "high"
                            ? "#d9a404"
                            : "#0284c7",
                        color: "#ffffff",
                      }}
                    >
                      {n.totalGigs} Gigs
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "0.78rem",
                      paddingTop: "8px",
                      borderTop: "1px solid var(--border, #e6e4df)",
                      marginTop: "6px",
                    }}
                  >
                    <span style={{ color: "var(--text-secondary, #5c6a62)" }}>
                      Avg. Daily Pay:
                    </span>
                    <strong style={{ color: "var(--text-primary, #16231b)" }}>
                      KES {n.avgDailyRateKes.toLocaleString()}
                    </strong>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
