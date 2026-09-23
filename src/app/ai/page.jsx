"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import GeminiChatbot from "@/components/ai/GeminiChatbot";
import LiveVoiceConversation from "@/components/ai/LiveVoiceConversation";
import MapsGroundingExplorer from "@/components/ai/MapsGroundingExplorer";
import SearchGroundingTool from "@/components/ai/SearchGroundingTool";
import { Bot, Radio, MapPin, Globe, Sparkles } from "lucide-react";

function AIWorkspaceContent() {
  const searchParams = useSearchParams();
  const qTab = searchParams.get("tab");
  const validTabs = ["chat", "voice", "maps", "search"];
  const defaultTab = validTabs.includes(qTab) ? qTab : "chat";
  const [tab, setTab] = useState(defaultTab);

  const TABS = [
    {
      id: "chat",
      label: "Gemini Chatbot",
      icon: Bot,
      desc: "Multi-turn assistant with custom trade roles",
    },
    {
      id: "voice",
      label: "Live Voice",
      icon: Radio,
      desc: "Real-time speech with Gemini 3.8 Live API",
    },
    {
      id: "maps",
      label: "Google Maps Data",
      icon: MapPin,
      desc: "Maps-grounded TVET colleges & hardware stores",
    },
    {
      id: "search",
      label: "Google Search Data",
      icon: Globe,
      desc: "Search-grounded wages & industry trends",
    },
  ];

  return (
    <div className="container" style={{ paddingBottom: 64 }}>
      {/* Page Hero */}
      <div className="page-hero">
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "var(--primary-soft)",
              color: "var(--primary-dark)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Sparkles size={20} />
          </div>
          <h1>SpaceMakers AI Intelligence Suite</h1>
        </div>
        <p className="subtitle">
          Next-generation Gemini AI capabilities built specifically for TVET artisans, graduates, and Kenyan employers.
        </p>
      </div>

      {/* Tabs Bar */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
          gap: 10,
          margin: "20px 0 24px",
        }}
      >
        {TABS.map((t) => {
          const Icon = t.icon;
          const isSelected = tab === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                padding: "14px 16px",
                borderRadius: "var(--radius)",
                background: isSelected ? "var(--surface)" : "var(--background)",
                border: `2px solid ${isSelected ? "var(--primary)" : "var(--border)"}`,
                boxShadow: isSelected ? "var(--shadow)" : "none",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.15s ease",
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  background: isSelected ? "var(--primary)" : "var(--border)",
                  color: isSelected ? "#fff" : "var(--text-secondary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={18} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.95rem", color: isSelected ? "var(--primary-dark)" : "var(--text-primary)" }}>
                  {t.label}
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginTop: 2 }}>{t.desc}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Tab View */}
      <div>
        {tab === "chat" && <GeminiChatbot />}
        {tab === "voice" && <LiveVoiceConversation />}
        {tab === "maps" && <MapsGroundingExplorer />}
        {tab === "search" && <SearchGroundingTool />}
      </div>
    </div>
  );
}

export default function AIPage() {
  return (
    <Suspense fallback={<div className="container"><div className="loading-state"><span className="spinner" />Loading SpaceMakers AI...</div></div>}>
      <AIWorkspaceContent />
    </Suspense>
  );
}
