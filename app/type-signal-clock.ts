// Large headings retain their shared 400 ms bright/dim cycle (2.5 flashes/sec).
// The static green introduction is not part of this clock.
export const SIGNAL_TICK_MS = 200;

type SignalEnvironment = {
  document: Pick<Document, "hidden" | "documentElement" | "addEventListener" | "removeEventListener">;
  setInterval: typeof setInterval;
  clearInterval: typeof clearInterval;
};

export function startTypeClock(environment: SignalEnvironment) {
  const { document, setInterval, clearInterval } = environment;
  const root = document.documentElement;
  let timer: ReturnType<typeof setInterval> | undefined;
  let beat = 0;
  const syncVisibility = () => {
    clearInterval(timer);
    delete root.dataset.typeBeat;
    if (document.hidden) return;
    timer = setInterval(() => {
      beat += 1;
      root.dataset.typeBeat = beat % 2 ? "dim" : "bright";
    }, SIGNAL_TICK_MS);
  };
  syncVisibility();
  document.addEventListener("visibilitychange", syncVisibility);
  return () => {
    clearInterval(timer);
    delete root.dataset.typeBeat;
    document.removeEventListener("visibilitychange", syncVisibility);
  };
}
