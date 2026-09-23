import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export interface NeighborhoodGigData {
  id: string;
  name: string;
  county: string;
  lat: number;
  lng: number;
  totalGigs: number;
  density: "hotspot" | "high" | "moderate";
  densityScore: number; // 1-100
  avgDailyRateKes: number;
  topTrades: { name: string; count: number; percentage: number }[];
  urgentDemand: string;
  activeProjectsSample: {
    id: string;
    title: string;
    trade: string;
    rate: string;
    verified: boolean;
    urgency: "urgent" | "normal";
  }[];
}

const NAIROBI_NEIGHBORHOODS: NeighborhoodGigData[] = [
  {
    id: "githogoro",
    name: "Githogoro",
    county: "Nairobi (Runda / Gigiri Border)",
    lat: -1.2355,
    lng: 36.815,
    totalGigs: 38,
    density: "hotspot",
    densityScore: 94,
    avgDailyRateKes: 2650,
    topTrades: [
      { name: "Electrical & Solar", count: 14, percentage: 37 },
      { name: "Plumbing & Piping", count: 11, percentage: 29 },
      { name: "Welding & Fabrication", count: 8, percentage: 21 },
      { name: "Masonry & Tiling", count: 5, percentage: 13 },
    ],
    urgentDemand: "Residential Solar Inverter & Borehole Pump Wiring",
    activeProjectsSample: [
      {
        id: "git-1",
        title: "Three-Phase Distribution Board Installation",
        trade: "Electrical & Solar",
        rate: "KES 4,500 / day",
        verified: true,
        urgency: "urgent",
      },
      {
        id: "git-2",
        title: "Perimeter Gate Reinforcement & Latches",
        trade: "Welding & Fabrication",
        rate: "KES 3,200 / day",
        verified: true,
        urgency: "normal",
      },
      {
        id: "git-3",
        title: "PVC Overhead Tank Connection & Booster",
        trade: "Plumbing & Piping",
        rate: "KES 2,800 / day",
        verified: true,
        urgency: "normal",
      },
    ],
  },
  {
    id: "runda",
    name: "Runda",
    county: "Nairobi",
    lat: -1.2185,
    lng: 36.8205,
    totalGigs: 31,
    density: "hotspot",
    densityScore: 89,
    avgDailyRateKes: 3400,
    topTrades: [
      { name: "Electrical & Solar", count: 12, percentage: 39 },
      { name: "Plumbing & Piping", count: 9, percentage: 29 },
      { name: "Carpentry & Cabinetry", count: 6, percentage: 19 },
      { name: "Masonry & Tiling", count: 4, percentage: 13 },
    ],
    urgentDemand: "Solar PV Backup Systems & High-End Sanitary Ware",
    activeProjectsSample: [
      {
        id: "run-1",
        title: "10kVA Hybrid Solar Inverter Retrofit",
        trade: "Electrical & Solar",
        rate: "KES 5,000 / day",
        verified: true,
        urgency: "urgent",
      },
      {
        id: "run-2",
        title: "Under-sink RO Filtration & PEX Plumbing",
        trade: "Plumbing & Piping",
        rate: "KES 3,800 / day",
        verified: true,
        urgency: "normal",
      },
    ],
  },
  {
    id: "westlands",
    name: "Westlands",
    county: "Nairobi",
    lat: -1.265,
    lng: 36.805,
    totalGigs: 46,
    density: "hotspot",
    densityScore: 98,
    avgDailyRateKes: 3100,
    topTrades: [
      { name: "Electrical & Solar", count: 18, percentage: 39 },
      { name: "Welding & Fabrication", count: 12, percentage: 26 },
      { name: "Plumbing & Piping", count: 10, percentage: 22 },
      { name: "Carpentry & Cabinetry", count: 6, percentage: 13 },
    ],
    urgentDemand: "Commercial Office Fit-outs & Conduit Cabling",
    activeProjectsSample: [
      {
        id: "wst-1",
        title: "Commercial LED Trunking & Emergency Lights",
        trade: "Electrical & Solar",
        rate: "KES 3,500 / day",
        verified: true,
        urgency: "urgent",
      },
      {
        id: "wst-2",
        title: "Structural Mezzanine Steel Framework",
        trade: "Welding & Fabrication",
        rate: "KES 4,800 / day",
        verified: true,
        urgency: "normal",
      },
    ],
  },
  {
    id: "gigiri",
    name: "Gigiri",
    county: "Nairobi",
    lat: -1.231,
    lng: 36.804,
    totalGigs: 24,
    density: "high",
    densityScore: 78,
    avgDailyRateKes: 3200,
    topTrades: [
      { name: "Welding & Fabrication", count: 10, percentage: 42 },
      { name: "Electrical & Solar", count: 7, percentage: 29 },
      { name: "Plumbing & Piping", count: 4, percentage: 17 },
      { name: "Masonry & Tiling", count: 3, percentage: 12 },
    ],
    urgentDemand: "Diplomatic Quarter Security Grilles & Razor Wire",
    activeProjectsSample: [
      {
        id: "gig-1",
        title: "Heavy-Duty Security Gate with Intercom Ducting",
        trade: "Welding & Fabrication",
        rate: "KES 4,200 / day",
        verified: true,
        urgency: "urgent",
      },
    ],
  },
  {
    id: "kasarani",
    name: "Kasarani",
    county: "Nairobi",
    lat: -1.222,
    lng: 36.897,
    totalGigs: 36,
    density: "hotspot",
    densityScore: 91,
    avgDailyRateKes: 2300,
    topTrades: [
      { name: "Masonry & Tiling", count: 14, percentage: 39 },
      { name: "Plumbing & Piping", count: 11, percentage: 31 },
      { name: "Electrical & Solar", count: 7, percentage: 19 },
      { name: "Welding & Fabrication", count: 4, percentage: 11 },
    ],
    urgentDemand: "Multi-Storey Apartment Tile Laying & Drainage",
    activeProjectsSample: [
      {
        id: "kas-1",
        title: "Porcelain Floor & Wall Tiling (4 Units)",
        trade: "Masonry & Tiling",
        rate: "KES 2,500 / day",
        verified: true,
        urgency: "urgent",
      },
      {
        id: "kas-2",
        title: "Main Sewer Manhole & Drain Riser Assembly",
        trade: "Plumbing & Piping",
        rate: "KES 2,400 / day",
        verified: true,
        urgency: "normal",
      },
    ],
  },
  {
    id: "roysambu",
    name: "Roysambu",
    county: "Nairobi",
    lat: -1.218,
    lng: 36.887,
    totalGigs: 28,
    density: "high",
    densityScore: 82,
    avgDailyRateKes: 2200,
    topTrades: [
      { name: "Electrical & Solar", count: 10, percentage: 36 },
      { name: "Plumbing & Piping", count: 9, percentage: 32 },
      { name: "Carpentry & Cabinetry", count: 5, percentage: 18 },
      { name: "Welding & Fabrication", count: 4, percentage: 14 },
    ],
    urgentDemand: "Airbnb Modernization & Prepaid Sub-Meter Installs",
    activeProjectsSample: [
      {
        id: "roy-1",
        title: "Individual Token Meter Wiring (6 Bedsitters)",
        trade: "Electrical & Solar",
        rate: "KES 2,600 / day",
        verified: true,
        urgency: "normal",
      },
    ],
  },
  {
    id: "kilimani",
    name: "Kilimani",
    county: "Nairobi",
    lat: -1.29,
    lng: 36.786,
    totalGigs: 33,
    density: "hotspot",
    densityScore: 88,
    avgDailyRateKes: 3000,
    topTrades: [
      { name: "Plumbing & Piping", count: 12, percentage: 36 },
      { name: "Electrical & Solar", count: 11, percentage: 33 },
      { name: "Carpentry & Cabinetry", count: 6, percentage: 18 },
      { name: "Masonry & Tiling", count: 4, percentage: 12 },
    ],
    urgentDemand: "Pressure Pump Calibration & Kitchen Cabinetry",
    activeProjectsSample: [
      {
        id: "kil-1",
        title: "Booster Pump & Pressure Vessel Overhaul",
        trade: "Plumbing & Piping",
        rate: "KES 3,500 / day",
        verified: true,
        urgency: "urgent",
      },
    ],
  },
  {
    id: "parklands",
    name: "Parklands",
    county: "Nairobi",
    lat: -1.261,
    lng: 36.824,
    totalGigs: 23,
    density: "high",
    densityScore: 76,
    avgDailyRateKes: 2750,
    topTrades: [
      { name: "Plumbing & Piping", count: 9, percentage: 39 },
      { name: "Electrical & Solar", count: 7, percentage: 30 },
      { name: "Carpentry & Cabinetry", count: 4, percentage: 17 },
      { name: "Welding & Fabrication", count: 3, percentage: 13 },
    ],
    urgentDemand: "Commercial Kitchen Grease Trap & Line Flushes",
    activeProjectsSample: [
      {
        id: "prk-1",
        title: "Cast Iron to HDPE Commercial Drain Repiping",
        trade: "Plumbing & Piping",
        rate: "KES 3,200 / day",
        verified: true,
        urgency: "normal",
      },
    ],
  },
  {
    id: "karen",
    name: "Karen",
    county: "Nairobi",
    lat: -1.32,
    lng: 36.712,
    totalGigs: 21,
    density: "high",
    densityScore: 74,
    avgDailyRateKes: 3600,
    topTrades: [
      { name: "Carpentry & Cabinetry", count: 8, percentage: 38 },
      { name: "Electrical & Solar", count: 6, percentage: 29 },
      { name: "Masonry & Tiling", count: 4, percentage: 19 },
      { name: "Plumbing & Piping", count: 3, percentage: 14 },
    ],
    urgentDemand: "Hardwood Pergola Construction & Solar Inverter Wiring",
    activeProjectsSample: [
      {
        id: "kar-1",
        title: "Outdoor Teak Decking & Balustrade Assembly",
        trade: "Carpentry & Cabinetry",
        rate: "KES 4,000 / day",
        verified: true,
        urgency: "urgent",
      },
    ],
  },
  {
    id: "ruiru",
    name: "Ruiru / Thika Road",
    county: "Kiambu / Nairobi Metro",
    lat: -1.146,
    lng: 36.96,
    totalGigs: 29,
    density: "high",
    densityScore: 84,
    avgDailyRateKes: 2400,
    topTrades: [
      { name: "Welding & Fabrication", count: 12, percentage: 41 },
      { name: "Masonry & Tiling", count: 8, percentage: 28 },
      { name: "Electrical & Solar", count: 6, percentage: 21 },
      { name: "Plumbing & Piping", count: 3, percentage: 10 },
    ],
    urgentDemand: "Industrial Warehouse Trusses & Perimeter Blockwork",
    activeProjectsSample: [
      {
        id: "rui-1",
        title: "Structural I-Beam Welding & Gusset Plates",
        trade: "Welding & Fabrication",
        rate: "KES 3,000 / day",
        verified: true,
        urgency: "urgent",
      },
    ],
  },
  {
    id: "dagoretti",
    name: "Dagoretti Corner",
    county: "Nairobi",
    lat: -1.298,
    lng: 36.732,
    totalGigs: 18,
    density: "moderate",
    densityScore: 65,
    avgDailyRateKes: 2100,
    topTrades: [
      { name: "Carpentry & Cabinetry", count: 8, percentage: 44 },
      { name: "Welding & Fabrication", count: 5, percentage: 28 },
      { name: "Masonry & Tiling", count: 3, percentage: 17 },
      { name: "Electrical & Solar", count: 2, percentage: 11 },
    ],
    urgentDemand: "Bespoke Timber Joinery & Metal Grilles",
    activeProjectsSample: [
      {
        id: "dag-1",
        title: "MDF Wardrobe Fabrication & Soft-Close Hinges",
        trade: "Carpentry & Cabinetry",
        rate: "KES 2,400 / day",
        verified: true,
        urgency: "normal",
      },
    ],
  },
  {
    id: "embakasi",
    name: "Embakasi / Airport North",
    county: "Nairobi",
    lat: -1.315,
    lng: 36.902,
    totalGigs: 22,
    density: "high",
    densityScore: 75,
    avgDailyRateKes: 2500,
    topTrades: [
      { name: "Electrical & Solar", count: 9, percentage: 41 },
      { name: "Welding & Fabrication", count: 7, percentage: 32 },
      { name: "Plumbing & Piping", count: 4, percentage: 18 },
      { name: "Masonry & Tiling", count: 2, percentage: 9 },
    ],
    urgentDemand: "Distribution Warehousing 3-Phase Panels & Heavy Racks",
    activeProjectsSample: [
      {
        id: "emb-1",
        title: "Pallet Racking Anchoring & Bolt Assembly",
        trade: "Welding & Fabrication",
        rate: "KES 2,800 / day",
        verified: true,
        urgency: "normal",
      },
    ],
  },
];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const tradeFilter = searchParams.get("trade");
    const neighborhoodId = searchParams.get("neighborhood");

    // Check if we have database opportunities we can aggregate
    let dbOpportunitiesCount = 0;
    try {
      dbOpportunitiesCount = await prisma.opportunity.count({
        where: { status: "OPEN" },
      });
    } catch {
      // Non-blocking if database is cold
    }

    let filtered = NAIROBI_NEIGHBORHOODS;

    if (neighborhoodId) {
      filtered = filtered.filter((n) => n.id === neighborhoodId);
    }

    if (tradeFilter && tradeFilter !== "All Trades") {
      filtered = filtered
        .map((n) => {
          const matchingTrade = n.topTrades.find(
            (t) => t.name.toLowerCase() === tradeFilter.toLowerCase()
          );
          if (!matchingTrade) return null;
          return {
            ...n,
            totalGigs: matchingTrade.count,
            densityScore: Math.round((matchingTrade.count / n.totalGigs) * n.densityScore),
          };
        })
        .filter(Boolean) as NeighborhoodGigData[];
    }

    const totalActiveGigs = filtered.reduce((acc, curr) => acc + curr.totalGigs, 0);
    const highestDemandNeighborhood = [...filtered].sort(
      (a, b) => b.totalGigs - a.totalGigs
    )[0];

    const avgOverallRate = Math.round(
      filtered.reduce((acc, curr) => acc + curr.avgDailyRateKes, 0) /
        (filtered.length || 1)
    );

    return NextResponse.json({
      neighborhoods: filtered,
      summary: {
        totalMappedNeighborhoods: filtered.length,
        totalActiveGigs,
        highestDemandNeighborhood: highestDemandNeighborhood
          ? {
              name: highestDemandNeighborhood.name,
              totalGigs: highestDemandNeighborhood.totalGigs,
              density: highestDemandNeighborhood.density,
            }
          : null,
        avgOverallDailyRateKes: avgOverallRate,
        dbOpportunitiesCount,
        metroCenter: {
          lat: -1.242,
          lng: 36.82,
          zoom: 12,
        },
      },
    });
  } catch (err: unknown) {
    console.error("Failed to load neighborhood demand data:", err);
    return NextResponse.json(
      {
        neighborhoods: NAIROBI_NEIGHBORHOODS,
        summary: {
          totalMappedNeighborhoods: NAIROBI_NEIGHBORHOODS.length,
          totalActiveGigs: NAIROBI_NEIGHBORHOODS.reduce((a, b) => a + b.totalGigs, 0),
          highestDemandNeighborhood: { name: "Westlands", totalGigs: 46, density: "hotspot" },
          avgOverallDailyRateKes: 2750,
          metroCenter: { lat: -1.242, lng: 36.82, zoom: 12 },
        },
      },
      { status: 200 }
    );
  }
}
