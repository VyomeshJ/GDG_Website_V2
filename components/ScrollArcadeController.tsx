"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";

export default function ScrollArcadeController() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["center 92%", "center 55%"],
  });

  const assemblyProgress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 28,
    mass: 0.45,
  });

  const joystickY = useTransform(assemblyProgress, [0, 1], [-38, 0]);
  const baseY = useTransform(assemblyProgress, [0, 1], [30, 0]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[197/240] w-full max-w-[320px] max-[760px]:w-[min(62vw,240px)]"
      role="img"
      aria-label="Arcade joystick connecting to its base"
    >
      <motion.div
        className="absolute top-[2.6%] left-[29%] z-10 w-[42.13%] will-change-transform"
        style={{ y: joystickY }}
      >
        <Image
          className="block h-auto w-full brightness-0"
          src="/assets/arcade-joystick.svg"
          alt=""
          width={83}
          height={126}
          unoptimized
          aria-hidden="true"
        />
      </motion.div>

      <motion.div
        className="absolute top-[38%] left-0 z-20 w-full will-change-transform"
        style={{ y: baseY }}
      >
        <Image
          className="block h-auto w-full brightness-0"
          src="/assets/arcade-base.svg"
          alt=""
          width={197}
          height={149}
          unoptimized
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
}
