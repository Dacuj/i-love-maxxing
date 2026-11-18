"use client";

import { useEffect, useRef } from "react";

export function PhosphorGrain({ className }: { className: string }) {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const surface = canvas.current;
    const context = surface?.getContext("2d");
    if (!surface || !context) return;

    const { width, height } = surface;
    const grain = context.createImageData(width, height);
    let seed = 1937;
    for (let i = 0; i < grain.data.length; i += 4) {
      seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
      const brightness = seed >>> 24;
      grain.data[i] = brightness;
      grain.data[i + 1] = brightness;
      grain.data[i + 2] = brightness;
      grain.data[i + 3] = 255;
    }
    context.putImageData(grain, 0, 0);
  }, []);

  return <canvas ref={canvas} className={className} width={850} height={578} aria-hidden="true" />;
}
