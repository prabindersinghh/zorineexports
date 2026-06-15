"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function HeroAura() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.to(".aura-orb", {
        y: "random(-28, 28)",
        x: "random(-22, 22)",
        duration: 5.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.4, from: "random" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="hero-aura" aria-hidden="true">
      <span className="aura-orb orb-one" />
      <span className="aura-orb orb-two" />
      <span className="aura-orb orb-three" />
      <span className="aura-orb orb-four" />
    </div>
  );
}
