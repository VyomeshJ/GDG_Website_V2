"use client";

import { motion, useReducedMotion } from "motion/react";

export default function Trailer() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      data-section="trailer"
      className="relative isolate overflow-hidden bg-white px-[clamp(20px,7vw,110px)] py-[clamp(44px,5vw,70px)] text-[#292929]"
      aria-labelledby="trailer-heading"
    >
      <div className="mx-auto max-w-[900px]">
        <motion.h2
          id="trailer-heading"
          className="mb-[clamp(32px,4vw,48px)] text-center font-boxel text-[clamp(46px,6vw,82px)] leading-[.85] font-black tracking-[-.055em] uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: reducedMotion ? 0.15 : 0.7 }}
        >
          Our Trailer
        </motion.h2>
        <motion.div
          className="overflow-hidden rounded-[16px] bg-black shadow-[0_24px_70px_rgba(0,0,0,.25)]"
          initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.72 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={
            reducedMotion
              ? { duration: 0.15 }
              : { type: "spring", stiffness: 180, damping: 11, mass: 0.8 }
          }
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
