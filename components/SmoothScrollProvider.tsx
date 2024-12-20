"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const animate = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
