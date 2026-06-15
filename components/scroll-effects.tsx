"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ParallaxSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 0 },
        {
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function CounterStrip() {
  const ref = useRef<HTMLDivElement>(null);

  const stats = [
    { value: 9, suffix: "+", label: "Export categories" },
    { value: 30, suffix: "+", label: "Countries reached" },
    { value: 100, suffix: "%", label: "Inquiry response rate" },
    { value: 15, suffix: "+", label: "Years of sourcing" },
  ];

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const counters = ref.current!.querySelectorAll<HTMLSpanElement>(".counter-val");
      counters.forEach((el) => {
        const target = parseFloat(el.dataset.target || "0");
        ScrollTrigger.create({
          trigger: el,
          start: "top 88%",
          once: true,
          onEnter: () => {
            gsap.fromTo(
              el,
              { textContent: "0" },
              {
                textContent: target,
                duration: 1.6,
                ease: "power2.out",
                snap: { textContent: 1 },
                onUpdate() {
                  el.textContent = Math.round(parseFloat(el.textContent || "0")).toString();
                },
              }
            );
          },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="counter-strip">
      {stats.map((s) => (
        <div key={s.label} className="counter-item">
          <div className="counter-number">
            <span className="counter-val" data-target={s.value}>0</span>
            <span className="counter-suffix">{s.suffix}</span>
          </div>
          <p>{s.label}</p>
        </div>
      ))}
    </div>
  );
}
