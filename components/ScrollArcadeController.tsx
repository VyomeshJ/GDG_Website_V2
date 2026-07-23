"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import useAnimationsDisabled from "@/hooks/useAnimationsDisabled";

const containerClassName =
  "relative aspect-[197/240] w-full max-w-[320px] max-[760px]:w-[min(62vw,240px)]";

function JoystickImage() {
  return (
    <Image
      className="block h-auto w-full"
      src="/assets/arcade-joystick.svg"
      alt=""
      width={83}
      height={126}
      unoptimized
      aria-hidden="true"
    />
  );
}

function BaseImage() {
  return (
    <Image
      className="block h-auto w-full"
      src="/assets/arcade-base.svg"
      alt=""
      width={197}
      height={149}
      unoptimized
      aria-hidden="true"
    />
  );
}

function StaticArcadeController() {
  return (
    <div
      className={containerClassName}
      role="img"
      aria-label="Arcade joystick connected to its base"
    >
      <div className="absolute top-[2.6%] left-[29%] z-30 w-[42.13%]">
        <JoystickImage />
      </div>
      <div className="absolute top-[38%] left-0 z-20 w-full">
        <BaseImage />
      </div>
    </div>
  );
}

function AnimatedArcadeController() {
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
      className={containerClassName}
      role="img"
      aria-label="Arcade joystick connecting to its base"
    >
      <motion.div
        className="absolute top-[2.6%] left-[29%] z-30 w-[42.13%] will-change-transform"
        data-mobile-static-transform="true"
        style={{ y: joystickY }}
      >
        <JoystickImage />
      </motion.div>
      <motion.div
        className="absolute top-[38%] left-0 z-20 w-full will-change-transform"
        data-mobile-static-transform="true"
        style={{ y: baseY }}
      >
        <BaseImage />
      </motion.div>
    </div>
  );
}

export default function ScrollArcadeController() {
  const animationsDisabled = useAnimationsDisabled();

  return animationsDisabled ? (
    <StaticArcadeController />
  ) : (
    <AnimatedArcadeController />
  );
}
