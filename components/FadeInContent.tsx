"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

export default function FadeInContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: reducedMotion ? 0.15 : 0.75, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
