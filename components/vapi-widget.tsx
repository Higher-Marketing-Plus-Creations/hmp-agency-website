"use client";

import { useEffect, useRef, useState } from "react";

// ─── Config ───────────────────────────────────────────────────────────────────
const VAPI_KEY = "e8049e40-6b1e-41c3-ba99-fbfd16cf9a65";
// Add your agent photo to /public/vapi-avatar.jpg in the repo
const PHOTO = "/figma-assets/assistant-photo.jpg";
const SIZE = 56;
const BARS = [0.3, 0.6, 1.0, 0.55, 0.85, 0.45, 0.7];

const ASSISTANT = {
  name: "Alex",
  firstMessage:
    "Hi there! I'm Alex from Higher Marketing Plus. Are you looking to grow your business online? What brings you to our site today?",
  transcriber: { provider: "deepgram", model: "nova-2", language: "en-US" },
  voice: { provider: "11labs", voiceId: "sarah", stability: 0.5, similarityBoost: 0.75 },
  model: {
    provider: "openai",
    model: "gpt-4o",
    temperature: 0.7,
    messages: [
      {
        role: "system",
        content:
          "You are Alex, a friendly AI concierge for Higher Marketing Plus — a full-service digital marketing agency and AI voice agent provider. Help visitors learn about services (SEO, paid ads, social media, web design, AI voice agents), qualify leads, and book free discovery calls. Be warm, professional, and concise — this is a voice call, not a chat. Ask one question at a time. If asked about pricing, say packages start around $1,500/month and a discovery call produces a custom quote. Capture name, email, and phone when they're interested.",
      },
    ],
  },
  endCallFunctionEnabled: true,
  endCallPhrases: ["goodbye", "bye", "talk later", "thanks bye"],
};
// ─────────────────────────────────────────────────────────────────────────────

type CallState = "idle" | "loading" | "active";

export function VapiWidget() {
  const [visible, setVisible] = useState(false);
  const [state, setState] = useState<CallState>("idle");
  const [hover, setHover] = useState(false);
  const vapiRef = useRef<Record<string, (...args: unknown[]) => unknown> | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    // Use the HTML script tag bundle — confirmed browser-compatible
    script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
    script.async = true;
    script.onload = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const sdk = (window as any).vapiSDK;
      if (!sdk?.run) return;

      // Note how many body children exist before run() so we can hide whatever the SDK adds
      const before = document.body.childElementCount;

      // run() creates the Vapi instance AND appends a floating button to body
      const instance = sdk.run({
        apiKey: VAPI_KEY,
        assistant: ASSISTANT,
        config: { position: "bottom-right", offset: "24px" },
      });

      // Hide every DOM element the SDK just appended (its default button)
      Array.from(document.body.children)
        .slice(before)
        .forEach((el) => ((el as HTMLElement).style.display = "none"));

      vapiRef.current = instance;
      instance.on("call-start", () => setState("active"));
      instance.on("call-end", () => setState("idle"));
      instance.on("error", (e: unknown) => {
        console.error("[Vapi]", e);
        setState("idle");
      });
    };
    document.body.appendChild(script);
    return () => {
      vapiRef.current?.stop();
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  const toggle = () => {
    if (!vapiRef.current || state === "loading") return;
    if (state === "active") {
      vapiRef.current.stop();
    } else {
      setState("loading");
      (vapiRef.current.start(ASSISTANT) as Promise<unknown>).catch(() => setState("idle"));
    }
  };

  const isActive = state === "active";
  const isLoading = state === "loading";
  const lift = hover && state === "idle" ? -2 : 0;
  const dotColor = isActive ? "#fb7185" : isLoading ? "#fbbf24" : "#22c55e";

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes vapi-breathe{0%,100%{transform:translateY(-50%) scale(1)}50%{transform:translateY(-50%) scale(1.06)}}
        @keyframes vapi-ripple{0%{transform:scale(.9);opacity:.75}100%{transform:scale(1.7);opacity:0}}
        @keyframes vapi-wave{0%{transform:scaleY(.35)}100%{transform:scaleY(1)}}
        @keyframes vapi-spin{to{transform:rotate(360deg)}}
        @keyframes vapi-blink{0%,100%{opacity:1}50%{opacity:.5}}
        @keyframes vapi-enter{0%{opacity:0;transform:translateY(16px)}100%{opacity:1;transform:translateY(0)}}
        .vapi-root{position:fixed;bottom:24px;right:24px;z-index:99999;display:inline-flex;align-items:center;padding:16px;cursor:pointer;user-select:none;-webkit-user-select:none;animation:vapi-enter .5s cubic-bezier(.22,1,.36,1) forwards}
        .vapi-halo{position:absolute;left:0;top:50%;width:${SIZE * 1.9}px;height:${SIZE * 1.9}px;border-radius:50%;filter:blur(20px);pointer-events:none;animation:vapi-breathe 4s ease-in-out infinite;transition:opacity .45s ease,background .5s ease}
        .vapi-ripple{position:absolute;left:${16 + SIZE / 2}px;top:50%;transform:translate(-50%,-50%);width:${SIZE + 12}px;height:${SIZE + 12}px;border-radius:50%;border:2px solid rgba(56,189,248,.55);animation:vapi-ripple 2.2s cubic-bezier(.22,1,.36,1) infinite;pointer-events:none}
        .vapi-pill{display:flex;align-items:center;gap:12px;background:rgba(255,255,255,.96);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-radius:999px;padding:6px 20px 6px 6px;transition:transform .4s ease,box-shadow .5s ease;position:relative;z-index:1}
        .vapi-avatar{width:${SIZE}px;height:${SIZE}px;border-radius:50%;background-image:url("${PHOTO}");background-size:cover;background-position:center;background-color:#e5e7eb;position:relative;overflow:hidden;box-shadow:inset 0 -8px 18px rgba(0,0,0,.12),inset 0 1px 1px rgba(255,255,255,.2)}
        .vapi-wave-overlay{position:absolute;bottom:0;left:0;right:0;background:linear-gradient(180deg,transparent 0%,rgba(15,23,42,.7) 50%,rgba(15,23,42,.9) 100%);display:flex;align-items:flex-end;justify-content:center;padding-bottom:${Math.round(SIZE * 0.08)}px;gap:${Math.round(SIZE * 0.04)}px;transition:height .35s cubic-bezier(.22,1,.36,1);overflow:hidden}
        .vapi-bar{border-radius:999px;background:linear-gradient(180deg,#7dd3fc,#38bdf8);box-shadow:0 0 4px rgba(56,189,248,.6);transform-origin:bottom center;animation:vapi-wave ease-in-out infinite alternate}
        .vapi-spin-ring{position:absolute;inset:-4px;border-radius:50%;background:conic-gradient(from 0deg,#38bdf8,#a78bfa,#22d3ee,#38bdf8);animation:vapi-spin 3s linear infinite;-webkit-mask:radial-gradient(circle,transparent 58%,#000 60%);mask:radial-gradient(circle,transparent 58%,#000 60%)}
        .vapi-status-dot{position:absolute;bottom:0;right:0;width:${Math.round(SIZE * 0.26)}px;height:${Math.round(SIZE * 0.26)}px;border-radius:50%;border:2.5px solid #fff;transition:background .3s ease}
        .vapi-text{display:flex;flex-direction:column;gap:2px}
        .vapi-label{font-family:-apple-system,BlinkMacSystemFont,"Inter",sans-serif;font-size:13.5px;font-weight:600;color:#1c1917;letter-spacing:-.01em;white-space:nowrap}
        .vapi-sublabel{font-family:-apple-system,BlinkMacSystemFont,"Inter",sans-serif;font-size:11.5px;font-weight:500;color:#a8a29e;display:flex;align-items:center;gap:5px;white-space:nowrap}
        .vapi-dot-sm{display:inline-block;width:6px;height:6px;border-radius:50%;flex-shrink:0}
      `}</style>

      <div
        className="vapi-root"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={toggle}
        role="button"
        aria-label={isActive ? "End call" : "Start voice call with Higher Marketing Plus"}
      >
        {/* Soft halo */}
        <div
          className="vapi-halo"
          style={{
            background: isActive
              ? "radial-gradient(circle,rgba(125,211,252,.55) 0%,rgba(167,139,250,.22) 45%,transparent 70%)"
              : "radial-gradient(circle,rgba(251,146,60,.45) 0%,rgba(251,113,133,.2) 45%,transparent 70%)",
            opacity: isActive ? 0.9 : hover ? 0.7 : 0.5,
          }}
        />

        {/* Ripple rings when active */}
        {isActive && (
          <>
            <div className="vapi-ripple" style={{ animationDelay: "0s" }} />
            <div className="vapi-ripple" style={{ animationDelay: "0.9s" }} />
          </>
        )}

        {/* Pill */}
        <div
          className="vapi-pill"
          style={{
            boxShadow: isActive
              ? "0 16px 40px rgba(56,189,248,.28),0 2px 6px rgba(0,0,0,.07),inset 0 1px 1px rgba(255,255,255,.95),0 0 0 1px rgba(255,255,255,.7)"
              : "0 14px 36px rgba(244,114,82,.22),0 2px 6px rgba(0,0,0,.06),inset 0 1px 1px rgba(255,255,255,.9),0 0 0 1px rgba(255,255,255,.6)",
            transform: `translateY(${lift}px)`,
          }}
        >
          {/* Avatar */}
          <div style={{ position: "relative" }}>
            {isActive && <div className="vapi-spin-ring" />}
            <div className="vapi-avatar">
              <div className="vapi-wave-overlay" style={{ height: isActive ? "38%" : "0%" }}>
                {BARS.map((h, i) => (
                  <div
                    key={i}
                    className="vapi-bar"
                    style={{
                      width: SIZE * 0.05,
                      height: `${h * 55}%`,
                      animationDuration: `${0.45 + i * 0.07}s`,
                      animationDelay: `${i * 0.05}s`,
                      animationPlayState: isActive ? "running" : "paused",
                    }}
                  />
                ))}
              </div>
            </div>
            <div
              className="vapi-status-dot"
              style={{
                background: dotColor,
                boxShadow: isActive ? "0 0 8px rgba(251,113,133,.7)" : "0 0 6px rgba(34,197,94,.4)",
                animation: isActive || isLoading ? "vapi-blink 1s ease-in-out infinite" : "none",
              }}
            />
          </div>

          {/* Text */}
          <div className="vapi-text">
            <div className="vapi-label">
              {isActive ? "I'm listening…" : isLoading ? "Connecting…" : "Hi! Got a question?"}
            </div>
            <div className="vapi-sublabel">
              <span className="vapi-dot-sm" style={{ background: dotColor }} />
              {isActive ? "Speak now" : isLoading ? "Please wait" : "Tap to talk"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
