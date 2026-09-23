"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  Bot,
  User,
  Send,
  Sparkles,
  RotateCcw,
  Zap,
  Cpu,
  Flame,
  Copy,
  Check,
  Briefcase,
  GraduationCap,
  Wrench,
} from "lucide-react";

const ROLES = [
  {
    id: "advisor",
    name: "TVET Career Advisor",
    icon: GraduationCap,
    desc: "CV review, gig pricing & trade career growth",
    systemPrompt:
      "You are SpaceMakers AI Career Advisor for TVET graduates in Kenya. Help artisans, plumbers, electricians, caterers, tailors, welders, and masons polish their CVs, negotiate fair gig rates, prepare for technical interviews, and grow their trade businesses. Keep responses practical and culturally attuned to the Kenyan informal and formal labour market (using KES currency).",
  },
  {
    id: "recruiter",
    name: "Employer Talent Scout",
    icon: Briefcase,
    desc: "Project scoping, safety rules & fair labor contracts",
    systemPrompt:
      "You are SpaceMakers Employer Talent Consultant. You help homeowners, contractors, small businesses, and institutions find, evaluate, and hire verified TVET tradespeople. You assist with scoping project deliverables, estimating fair budgets, drafting trade contracts, and ensuring occupational health & safety compliance.",
  },
  {
    id: "mentor",
    name: "Master Craftsman Mentor",
    icon: Wrench,
    desc: "Technical wiring codes, plumbing slopes & formulas",
    systemPrompt:
      "You are SpaceMakers Senior Master Craftsman & Technical Mentor. You provide deep technical advice on trade standards, wiring codes (BS 7671/KEBS), plumbing gradient equations, welding joint preparation, concrete mixes, and fabric cutting formulas.",
  },
];

const MODELS = [
  {
    id: "gemini-3.5-flash",
    name: "Gemini 3.5 Flash",
    tag: "General Tasks",
    icon: Flame,
    desc: "Fast, balanced reasoning for daily questions",
  },
  {
    id: "gemini-3.1-flash-lite",
    name: "Gemini 3.1 Flash Lite",
    tag: "Fast Tasks",
    icon: Zap,
    desc: "Low-latency responses for quick estimations",
  },
  {
    id: "gemini-3.1-pro-preview",
    name: "Gemini 3.1 Pro",
    tag: "Complex Tasks",
    icon: Cpu,
    desc: "Advanced logic for complex trade contracts & specifications",
  },
];

const STARTER_PROMPTS = [
  "What is the fair daily rate for domestic electrical wiring in Nairobi?",
  "How should I list my NITA certification on my TVET profile?",
  "Draft a 1-page agreement for fabricating a security steel gate.",
  "What is the standard pipe slope gradient for kitchen drainage?",
];

export default function GeminiChatbot() {
  const [messages, setMessages] = useState([
    {
      id: "msg-0",
      role: "model",
      text: "Habari! I am your SpaceMakers AI Career & Trade Assistant powered by Gemini. How can I assist you with your trade skills, gig pricing, or hiring today?",
      timestamp: "Just now",
      modelUsed: "gemini-3.5-flash",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeRole, setActiveRole] = useState(ROLES[0].id);
  const [activeModel, setActiveModel] = useState(MODELS[0].id);
  const [copiedId, setCopiedId] = useState(null);
  const threadEndRef = useRef(null);
  const msgCounterRef = useRef(1);

  useEffect(() => {
    threadEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = useCallback(
    async (promptText) => {
      const textToSend = typeof promptText === "string" ? promptText : input;
      if (!textToSend || !textToSend.trim() || loading) return;

      const currentId = msgCounterRef.current++;
      const userMessage = {
        id: `user-${currentId}`,
        role: "user",
        text: textToSend.trim(),
        timestamp: "Just now",
      };

      const newHistory = [...messages, userMessage];
      setMessages(newHistory);
      setInput("");
      setLoading(true);

      try {
        const historyPayload = messages
          .filter((m) => m.id !== "msg-0")
          .map((m) => ({
            role: m.role,
            content: m.text,
          }));

        const res = await fetch("/api/gemini/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: textToSend.trim(),
            history: historyPayload,
            model: activeModel,
            role: activeRole,
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Failed to get response from Gemini.");
        }

        const botId = msgCounterRef.current++;
        const botMessage = {
          id: `bot-${botId}`,
          role: "model",
          text: data.reply,
          timestamp: "Just now",
          modelUsed: data.modelUsed || activeModel,
        };

        setMessages((prev) => [...prev, botMessage]);
      } catch (err) {
        const errId = msgCounterRef.current++;
        const errorMessage = {
          id: `err-${errId}`,
          role: "model",
          text: `⚠️ Error: ${err.message}. Please try again.`,
          timestamp: "Just now",
          isError: true,
        };
        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setLoading(false);
      }
    },
    [input, loading, messages, activeModel, activeRole]
  );

  function handleReset() {
    const resetId = msgCounterRef.current++;
    setMessages([
      {
        id: `msg-${resetId}`,
        role: "model",
        text: "Conversation reset. Feel free to ask a new question or change roles!",
        timestamp: "Just now",
        modelUsed: activeModel,
      },
    ]);
  }

  function handleCopy(id, text) {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Configuration bar: Role and Model Selectors */}
      <div
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius)",
          padding: 16,
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Sparkles size={20} color="var(--primary)" />
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700 }}>Gemini Multi-Turn Chat Assistant</h3>
          </div>
          <button
            type="button"
            onClick={handleReset}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: "0.85rem",
              background: "none",
              border: "1px solid var(--border)",
              padding: "6px 12px",
              borderRadius: "999px",
              cursor: "pointer",
              color: "var(--text-secondary)",
            }}
          >
            <RotateCcw size={14} /> Clear Conversation
          </button>
        </div>

        {/* Roles */}
        <div>
          <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
            Chatbot Role & System Persona
          </label>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 8, marginTop: 6 }}>
            {ROLES.map((r) => {
              const Icon = r.icon;
              const isSelected = activeRole === r.id;
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setActiveRole(r.id)}
                  style={{
                    textAlign: "left",
                    padding: "10px 12px",
                    borderRadius: "var(--radius-sm)",
                    border: `1.5px solid ${isSelected ? "var(--primary)" : "var(--border)"}`,
                    background: isSelected ? "var(--primary-soft)" : "var(--background)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                  }}
                >
                  <Icon size={18} color={isSelected ? "var(--primary-dark)" : "var(--text-secondary)"} style={{ marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 700, color: isSelected ? "var(--primary-dark)" : "var(--text-primary)" }}>
                      {r.name}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginTop: 2 }}>{r.desc}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Models */}
        <div>
          <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
            Select Gemini Model Tier
          </label>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 8, marginTop: 6 }}>
            {MODELS.map((m) => {
              const Icon = m.icon;
              const isSelected = activeModel === m.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setActiveModel(m.id)}
                  style={{
                    textAlign: "left",
                    padding: "9px 12px",
                    borderRadius: "var(--radius-sm)",
                    border: `1.5px solid ${isSelected ? "var(--primary)" : "var(--border)"}`,
                    background: isSelected ? "var(--primary-soft)" : "var(--background)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 8,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <Icon size={16} color={isSelected ? "var(--primary-dark)" : "var(--text-secondary)"} />
                    <span style={{ fontSize: "0.88rem", fontWeight: 600, color: isSelected ? "var(--primary-dark)" : "var(--text-primary)" }}>
                      {m.name}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      padding: "2px 6px",
                      borderRadius: 4,
                      background: isSelected ? "var(--primary)" : "var(--border)",
                      color: isSelected ? "#fff" : "var(--text-secondary)",
                    }}
                  >
                    {m.tag}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Chat Thread Container */}
      <div
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius)",
          display: "flex",
          flexDirection: "column",
          height: 480,
          overflow: "hidden",
        }}
      >
        {/* Scrollable messages */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: 16,
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          {messages.map((m) => {
            const isUser = m.role === "user";
            return (
              <div
                key={m.id}
                style={{
                  display: "flex",
                  flexDirection: isUser ? "row-reverse" : "row",
                  alignItems: "flex-start",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    background: isUser ? "var(--primary)" : "var(--primary-soft)",
                    color: isUser ? "#fff" : "var(--primary-dark)",
                  }}
                >
                  {isUser ? <User size={18} /> : <Bot size={18} />}
                </div>

                <div
                  style={{
                    maxWidth: "82%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: isUser ? "flex-end" : "flex-start",
                  }}
                >
                  <div
                    style={{
                      padding: "12px 16px",
                      borderRadius: 16,
                      borderTopRightRadius: isUser ? 2 : 16,
                      borderTopLeftRadius: isUser ? 16 : 2,
                      background: isUser
                        ? "var(--primary)"
                        : m.isError
                        ? "var(--danger-soft)"
                        : "var(--background)",
                      color: isUser
                        ? "#ffffff"
                        : m.isError
                        ? "var(--danger)"
                        : "var(--text-primary)",
                      border: isUser ? "none" : "1px solid var(--border)",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word",
                    }}
                  >
                    {m.text}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: "0.72rem",
                      color: "var(--text-secondary)",
                      marginTop: 4,
                      padding: "0 4px",
                    }}
                  >
                    <span>{m.timestamp}</span>
                    {m.modelUsed && <span>• {m.modelUsed}</span>}
                    {!isUser && !m.isError && (
                      <button
                        type="button"
                        onClick={() => handleCopy(m.id, m.text)}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          color: "var(--text-secondary)",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 3,
                          padding: 2,
                        }}
                        title="Copy message"
                      >
                        {copiedId === m.id ? (
                          <>
                            <Check size={12} color="var(--success)" /> Copied
                          </>
                        ) : (
                          <>
                            <Copy size={12} /> Copy
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {loading && (
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "var(--primary-soft)",
                  color: "var(--primary-dark)",
                }}
              >
                <Bot size={18} />
              </div>
              <div
                style={{
                  padding: "10px 14px",
                  borderRadius: 16,
                  background: "var(--background)",
                  border: "1px solid var(--border)",
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span className="spinner" style={{ width: 14, height: 14, borderWidth: 2 }} />
                Thinking with {activeModel}...
              </div>
            </div>
          )}

          <div ref={threadEndRef} />
        </div>

        {/* Starters */}
        <div
          style={{
            padding: "8px 12px",
            borderTop: "1px solid var(--border)",
            background: "var(--background)",
            display: "flex",
            gap: 6,
            overflowX: "auto",
          }}
        >
          {STARTER_PROMPTS.map((prompt, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleSend(prompt)}
              style={{
                fontSize: "0.78rem",
                padding: "4px 10px",
                borderRadius: "999px",
                border: "1px solid var(--border)",
                background: "var(--surface)",
                whiteSpace: "nowrap",
                cursor: "pointer",
                color: "var(--text-secondary)",
              }}
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input box */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          style={{
            padding: 12,
            borderTop: "1px solid var(--border)",
            background: "var(--surface)",
            display: "flex",
            gap: 8,
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Ask ${ROLES.find((r) => r.id === activeRole)?.name}...`}
            disabled={loading}
            style={{
              flex: 1,
              padding: "10px 14px",
              borderRadius: "999px",
              border: "1px solid var(--border)",
              background: "var(--background)",
              fontSize: "0.95rem",
              outline: "none",
            }}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            style={{
              padding: "10px 18px",
              borderRadius: "999px",
              border: "none",
              background: "var(--primary)",
              color: "#fff",
              cursor: loading || !input.trim() ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontWeight: 600,
              opacity: loading || !input.trim() ? 0.6 : 1,
            }}
          >
            <Send size={16} />
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
