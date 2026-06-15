"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 0.9, smoothWheel: true });
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
