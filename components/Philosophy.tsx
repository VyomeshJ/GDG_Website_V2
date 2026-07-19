"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const icons = [
  { file: "Spec Icon.svg", left: "5%", top: "8%", size: 148, rotate: -12 },
  { file: "Spec Icon-1.svg", left: "76%", top: "6%", size: 172, rotate: 9 },
  { file: "Spec Icon-2.svg", left: "23%", top: "19%", size: 118, rotate: 13 },
  { file: "Spec Icon-3.svg", left: "84%", top: "27%", size: 132, rotate: -8 },
  { file: "Spec Icon-4.svg", left: "4%", top: "37%", size: 164, rotate: 7 },
  { file: "Spec Icon-5.svg", left: "68%", top: "42%", size: 116, rotate: -14 },
  { file: "Spec Icon-6.svg", left: "17%", top: "55%", size: 134, rotate: -7 },
  { file: "Spec Icon-7.svg", left: "82%", top: "61%", size: 160, rotate: 12 },
  { file: "Spec Icon-8.svg", left: "3%", top: "76%", size: 122, rotate: 10 },
  { file: "Spec Icon-9.svg", left: "58%", top: "79%", size: 142, rotate: -10 },
  { file: "Spec Icon-10.svg", left: "79%", top: "87%", size: 110, rotate: 7 },
];

const iconVariants = {
  hidden: ({
    from,
    index,
    reduced,
  }: {
    from: number;
    index: number;
    reduced: boolean;
  }) => ({
    x: reduced ? 0 : `${from * 115}vw`,
    opacity: 0,
    transition: {
      duration: reduced ? 0.15 : 0.55,
      delay: reduced ? 0 : (icons.length - index - 1) * 0.035,
      ease: "easeIn" as const,
    },
  }),
  visible: ({ index, rotate }: { index: number; rotate: number }) => ({
    x: 0,
    rotate,
    opacity: 0.82,
    transition: {
      type: "spring" as const,
      stiffness: 58,
      damping: 15,
      mass: 0.8,
      delay: index * 0.07,
    },
  }),
};

export default function Philosophy() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      data-section="philosophy"
      className="relative isolate min-h-[780px] scroll-mt-24 overflow-hidden bg-white px-[clamp(24px,7vw,110px)] py-[clamp(58px,6vw,84px)] text-[#292929] max-[760px]:min-h-[850px] max-[760px]:scroll-mt-22 max-[760px]:py-14"
      aria-labelledby="philosophy-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.08 }}
    >
      <h2 id="philosophy-heading" className="sr-only">
        Our philosophy
      </h2>

      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        {icons.map((icon, index) => (
          <motion.div
            className="absolute max-[760px]:scale-75"
            style={{ left: icon.left, top: icon.top, width: icon.size }}
            custom={{
              from: index % 2 === 0 ? -1 : 1,
              index,
              reduced: Boolean(reducedMotion),
              rotate: reducedMotion ? 0 : icon.rotate,
            }}
            variants={iconVariants}
            key={icon.file}
          >
            <Image
              className="block h-auto w-full brightness-0"
              src={`/assets/spec icons/${icon.file}`}
              alt=""
              width={250}
              height={250}
              unoptimized
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[860px] items-center justify-center max-[760px]:min-h-[730px]">
        <motion.article
          className="flex min-h-[460px] flex-col justify-center rounded-[18px] bg-white/90 p-[clamp(26px,3.5vw,46px)] text-center shadow-[0_18px_60px_rgba(0,0,0,.12)] backdrop-blur-[3px] max-[760px]:min-h-[540px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 45 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.28, duration: 0.55 },
            },
          }}
        >
          <h3 className="mb-8 font-boxel text-[clamp(27px,3.8vw,46px)] leading-[1] font-black tracking-[-.035em] uppercase">
            Our philosophy
          </h3>
          <h3 className="mb-8 text-[clamp(27px,3.8vw,46px)] leading-[1] font-black tracking-[-.035em] uppercase">
            (corporate lingo ofc)
          </h3>
          <p className="mx-auto max-w-[720px] text-[clamp(15px,1.35vw,18px)] leading-[1.55]">
            That’s what GDG is about: bring an idea, pick up new skills, and
            make something. Art, code, music, design, everything belongs here! You
            don’t need to know everything before you start as the fun is in figuring
            it out along the way.
          </p>
          <p className="mx-auto mt-5 max-w-[720px] text-[clamp(15px,1.35vw,18px)] leading-[1.55]">
            Games are better with people, so our events are built around
            meeting teammates, sharing what you’re working on, and playing each
            other&apos;s games. Teaming up is encouraged, never forced, and
            everyone is welcome, even if you’re shy.
          </p>
        </motion.article>
      </div>
    </motion.section>
  );
}
