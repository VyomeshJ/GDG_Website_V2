"use client";

import { motion } from "motion/react";
import useAnimationsDisabled from "@/hooks/useAnimationsDisabled";

export default function Trailer() {
  const animationsDisabled = useAnimationsDisabled();

  return (
    <section
      data-section="trailer"
      className="relative isolate overflow-hidden bg-black px-[clamp(20px,7vw,110px)] pt-[clamp(140px,16vw,220px)] pb-[clamp(52px,6vw,82px)] text-white"
      aria-labelledby="trailer-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[clamp(120px,14vw,200px)] bg-[linear-gradient(to_bottom,#fff_0%,rgba(255,255,255,.82)_22%,rgba(255,255,255,.38)_50%,rgba(255,255,255,.08)_76%,#000_100%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[900px]">
        <motion.h2
          id="trailer-heading"
          className="mb-[clamp(32px,4vw,48px)] text-center font-boxel text-[clamp(46px,6vw,82px)] leading-[.85] font-black tracking-[-.055em] uppercase"
          data-mobile-static="true"
          initial={animationsDisabled ? false : { opacity: 0 }}
          whileInView={animationsDisabled ? undefined : { opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          Our Trailer
        </motion.h2>
        <motion.div
          className="overflow-hidden rounded-[16px] border border-white/15 bg-black shadow-[0_24px_70px_rgba(0,0,0,.65)]"
          data-mobile-static-transform="true"
          initial={animationsDisabled ? false : { opacity: 0, scale: 0.72 }}
          whileInView={
            animationsDisabled ? undefined : { opacity: 1, scale: 1 }
          }
          viewport={{ once: false, amount: 0.35 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 11,
            mass: 0.8,
          }}
        >
          <iframe
            className="aspect-video w-full border-0"
            src="https://www.youtube-nocookie.com/embed/j2jVBNEXx0Y"
            title="GDG Launch Night trailer"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  );
}
