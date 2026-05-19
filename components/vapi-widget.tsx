"use client";

import { useEffect, useRef, useState } from "react";
import Vapi from "@vapi-ai/web";

type CallState = "idle" | "connecting" | "active";

export function VapiWidget() {
  const vapiRef = useRef<Vapi | null>(null);
  const [callState, setCallState] = useState<CallState>("idle");
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY;
    if (!publicKey) return;

    const vapi = new Vapi(publicKey);
    vapiRef.current = vapi;

    vapi.on("call-start", () => setCallState("active"));
    vapi.on("call-end", () => {
      setCallState("idle");
      setIsMuted(false);
      setIsSpeaking(false);
    });
    vapi.on("speech-start", () => setIsSpeaking(true));
    vapi.on("speech-end", () => setIsSpeaking(false));
    vapi.on("error", (e) => {
      console.error("[Vapi]", e);
      setCallState("idle");
    });

    return () => {
      vapi.stop();
    };
  }, []);

  function startCall() {
    const vapi = vapiRef.current;
    const assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID || "f86f9947-20d8-4885-ab80-659ffa65b4bf";
    if (!vapi) return;
    setCallState("connecting");
    vapi.start(assistantId);
  }

  function endCall() {
    vapiRef.current?.stop();
  }

  function toggleMute(e: React.MouseEvent) {
    e.stopPropagation();
    const vapi = vapiRef.current;
    if (!vapi) return;
    const next = !isMuted;
    vapi.setMuted(next);
    setIsMuted(next);
  }

  const isActive = callState !== "idle";

  if (!process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY) {
    return null;
  }

  return (
    <div className="vapi-widget" role="complementary" aria-label="AI voice assistant">
      {isActive && (
        <div className="vapi-card">
          <div className="vapi-card-header">
            <div className="vapi-avatar">HM+</div>
            <div className="vapi-card-info">
              <div className="vapi-card-name">HM+ Assistant</div>
              <div className={`vapi-card-status${isSpeaking ? " is-speaking" : ""}`}>
                <span className="vapi-dot" />
                {callState === "connecting" ? "Connecting…" : isSpeaking ? "Speaking" : "Listening"}
              </div>
            </div>
          </div>
          <div className="vapi-card-actions">
            <button
              className={`vapi-mute-btn${isMuted ? " is-muted" : ""}`}
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute microphone" : "Mute microphone"}
            >
              {isMuted ? <UnmuteIcon /> : <MuteIcon />}
              <span>{isMuted ? "Unmute" : "Mute"}</span>
            </button>
            <button className="vapi-end-btn" onClick={endCall} aria-label="End call">
              <PhoneOffIcon />
              <span>End call</span>
            </button>
          </div>
        </div>
      )}

      <button
        className={`vapi-trigger${isActive ? " is-active" : ""}${isSpeaking ? " is-speaking" : ""}`}
        onClick={isActive ? endCall : startCall}
        aria-label={isActive ? "End AI voice call" : "Talk to our AI assistant"}
      >
        <span className="vapi-trigger-ring" />
        {isActive ? <PhoneOffIcon /> : <MicIcon />}
        {!isActive && <span className="vapi-trigger-label">Talk to AI</span>}
      </button>
    </div>
  );
}

function MicIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="9" y="2" width="6" height="12" rx="3" fill="currentColor" />
      <path d="M5 11a7 7 0 0 0 14 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="18" x2="12" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="9" y1="22" x2="15" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PhoneOffIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M17.5 18.5c-5 0-9.5-4.5-9.5-9.5 0-1.1.2-2.1.5-3L6 4C4.7 5.7 4 7.8 4 10c0 5.5 4.5 10 10 10 2.2 0 4.3-.7 6-2l-2-2.5c-.8.3-1.7.5-2.5.5z"
        fill="currentColor"
      />
      <line x1="3" y1="3" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MuteIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="9" y="2" width="6" height="12" rx="3" fill="currentColor" />
      <path d="M5 11a7 7 0 0 0 14 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="3" y1="3" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function UnmuteIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="9" y="2" width="6" height="12" rx="3" fill="currentColor" />
      <path d="M5 11a7 7 0 0 0 14 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="18" x2="12" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
