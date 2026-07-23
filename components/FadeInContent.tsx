"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import useAnimationsDisabled from "@/hooks/useAnimationsDisabled";

export default function FadeInContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const animationsDisabled = useAnimationsDisabled();

  return (
    <motion.div
      className={className}
      data-mobile-static="true"
      initial={animationsDisabled ? false : { opacity: 0 }}
      whileInView={animationsDisabled ? undefined : { opacity: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
