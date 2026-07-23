"use client";

import Image from "next/image";
import React, { useCallback, useRef, useState } from "react";

export default function GongClient() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const buttonSize = "min(60vh, calc(100vw - 2rem), calc(100vh - 2rem))";

  const handlePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    void audio.play().catch(() => {});
  }, []);

  const handleKey = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handlePlay();
      }
    },
    [handlePlay],
  );

  return (
    <>
      <button
        id="gongBtn"
        aria-label="Play gong"
        onClick={handlePlay}
        onKeyDown={handleKey}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        style={{
          height: buttonSize,
          width: buttonSize,
          padding: "0.7rem",
          border: 0,
          borderRadius: "26px",
          background: isHovered ? "#9a9a9a" : "#878787",
          boxShadow: isHovered
            ? "0 12px 28px rgba(0, 0, 0, 0.35)"
            : "0 10px 24px rgba(0, 0, 0, 0.25)",
          cursor: "pointer",
          transition: "background-color 160ms ease, box-shadow 160ms ease",
          display: "flex",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="/gong-assets/gong.jpg"
          alt="Gong"
          fill
          sizes="(max-width: 760px) calc(100vw - 2rem), 60vh"
          style={{
            display: "block",
            objectFit: "contain",
            borderRadius: "inherit",
            filter: isHovered ? "brightness(0.92) saturate(0.95)" : "none",
            transition: "filter 160ms ease",
          }}
        />
      </button>

      <audio
        ref={audioRef}
        src="/gong-assets/Gong Sound Effect.mp3"
        preload="metadata"
      />
    </>
  );
}
