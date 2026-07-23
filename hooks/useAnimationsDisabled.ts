"use client";

import { useSyncExternalStore } from "react";
import { useReducedMotion } from "motion/react";

const mobileMotionQuery = "(max-width: 760px)";

const subscribeToMobileMotion = (onChange: () => void) => {
  const mediaQuery = window.matchMedia(mobileMotionQuery);
  mediaQuery.addEventListener("change", onChange);

  return () => mediaQuery.removeEventListener("change", onChange);
};

const getMobileSnapshot = () => window.matchMedia(mobileMotionQuery).matches;
const getServerSnapshot = () => false;

export default function useAnimationsDisabled() {
  const isMobile = useSyncExternalStore(
    subscribeToMobileMotion,
    getMobileSnapshot,
    getServerSnapshot,
  );
  const prefersReducedMotion = useReducedMotion();

  return isMobile || Boolean(prefersReducedMotion);
}
