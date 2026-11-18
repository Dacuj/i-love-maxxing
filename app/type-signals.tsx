"use client";

import { useEffect, useSyncExternalStore } from "react";
import { startTypeClock } from "./type-signal-clock";

const pauseKey = "conversationplastique-pause-type";
let fallbackPaused = false;
function readPaused() {
  try { return localStorage.getItem(pauseKey) === "yes"; }
  catch { return fallbackPaused; }
}
function motionSnapshot() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return "reduced";
  return readPaused() ? "paused" : "running";
}
function serverSnapshot() { return "pending"; }
function subscribeMotion(notify: () => void) {
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  // No on-screen control. Escape is a keyboard-only way to freeze/resume the signals.
  const onKey = (event: KeyboardEvent) => {
    if (event.key !== "Escape" || event.repeat) return;
    const target = event.target;
    if (target instanceof HTMLElement && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName))) return;
    fallbackPaused = !readPaused();
    try { localStorage.setItem(pauseKey, fallbackPaused ? "yes" : "no"); } catch { /* Session fallback. */ }
    notify();
  };
  preference.addEventListener("change", notify);
  window.addEventListener("storage", notify);
  window.addEventListener("keydown", onKey);
  return () => {
    preference.removeEventListener("change", notify);
    window.removeEventListener("storage", notify);
    window.removeEventListener("keydown", onKey);
  };
}

export function TypeSignals({ children }: { children: React.ReactNode }) {
  const mode = useSyncExternalStore(subscribeMotion, motionSnapshot, serverSnapshot);

  useEffect(() => {
    const root = document.documentElement;
    if (mode !== "running") {
      delete root.dataset.typeBeat;
      return;
    }
    return startTypeClock({ document, setInterval, clearInterval });
  }, [mode]);

  return <>{children}</>;
}
