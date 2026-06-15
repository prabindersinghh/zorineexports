"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

/* ── Standard scroll reveal — for below-fold content ──────────────────────── */
export function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}) {
  const offsets = {
    up: { y: 32, x: 0 },
    left: { y: 0, x: -28 },
    right: { y: 0, x: 28 },
    none: { y: 0, x: 0 },
  };
  const { y, x } = offsets[direction];

  return (
    <motion.div
      initial={{ opacity: 0, y, x, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Hero reveal — animates on mount (no whileInView), for above-fold ─────── */
export function HeroReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Hero text — clip-mask slide-up, on mount ─────────────────────────────── */
export function RevealText({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div style={{ overflow: "hidden" }} className={className}>
      <motion.div
        initial={{ y: "105%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
