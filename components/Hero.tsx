"use client";

import Image from "next/image";
import { useState } from "react";

import JoinOverlay from "./JoinOverlay";

export default function Hero() {
  const [joinOpen, setJoinOpen] = useState(false);

  return (
    <>
      <section
        data-section="home"
        className="relative isolate min-h-[110svh] scroll-mt-24 overflow-hidden bg-black text-white max-[760px]:scroll-mt-22"
        aria-label="Game Developer Guild"
      >
      <div className="absolute inset-0 -z-2 overflow-hidden bg-[#030506]" aria-hidden="true">
        <Image
          className="absolute inset-0 z-0 h-full w-full scale-[1.08] object-cover object-center [image-rendering:pixelated]"
          src="/assets/hero-bg.png"
          alt=""
          width={769}
          height={439}
          priority
          unoptimized
        />
        <div
          className="pointer-events-none absolute inset-0 z-1 scale-x-[1.35] bg-[radial-gradient(circle_at_50%_42%,transparent_0%,transparent_28%,rgba(0,0,0,1)_50%,#000_92%)] max-[760px]:bg-[radial-gradient(circle_at_50%_32%,transparent_0%,transparent_28%,rgba(0,0,0,1)_40%,#000_92%)]"
          aria-hidden="true"
        />
        {/* <div
          className="pointer-events-none absolute inset-0 z-1 scale-x-[1.35] bg-black/30 max-[760px]:bg-[radial-gradient(circle_at_50%_32%,transparent_0%,transparent_28%,rgba(0,0,0,1)_40%,#000_92%)]"
          aria-hidden="true"
        /> */}
      </div>
      <div className="absolute top-[51%] left-[clamp(24px,9vw,140px)] z-2 max-w-[640px] -translate-y-[35%] max-[760px]:top-[64%] max-[760px]:right-6 max-[760px]:translate-y-0">
        <p className="mb-[13px] text-[clamp(11px,1.25vw,16px)] font-black tracking-[.08em] text-[#10b8b5] uppercase">Auckland Uni&apos;s Game Dev Club</p>
        <h1 className="m-0 font-boxel text-[clamp(33.6px,5.6vw,80px)] leading-[.9] font-black tracking-[-.065em]">Game Developer Guild!</h1>
        <div className="mt-6 flex gap-3 max-[360px]:flex-col">
          <button
            className="group grid h-19 w-43 cursor-pointer max-[760px]:h-16 max-[760px]:w-[145px]"
            type="button"
            aria-label="Join the Game Developers Guild"
            aria-haspopup="dialog"
            aria-expanded={joinOpen}
            onClick={() => setJoinOpen(true)}
          >
            <Image className="col-start-1 row-start-1 block h-19 w-43 opacity-100 transition-opacity duration-75 [image-rendering:pixelated] [transition-timing-function:steps(1)] group-hover:opacity-0 group-focus-visible:opacity-0 max-[760px]:h-16 max-[760px]:w-[145px]" src="/assets/join-button.gif" alt="Join us" width={43} height={19} unoptimized />
            <Image className="col-start-1 row-start-1 block h-19 w-43 opacity-0 transition-opacity duration-75 [image-rendering:pixelated] [transition-timing-function:steps(1)] group-hover:opacity-100 group-focus-visible:opacity-100 max-[760px]:h-16 max-[760px]:w-[145px]" src="/assets/join-button-hover.png" alt="" width={43} height={19} unoptimized aria-hidden="true" />
          </button>

          <a
            className="group grid h-19 w-43 max-[760px]:h-16 max-[760px]:w-[145px]"
            href="https://discord.com/invite/cnmjh8NQDT"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join the Game Developers Guild on Discord"
          >
            <Image className="col-start-1 row-start-1 block h-19 w-43 opacity-100 transition-opacity duration-75 [image-rendering:pixelated] [transition-timing-function:steps(1)] group-hover:opacity-0 group-focus-visible:opacity-0 max-[760px]:h-16 max-[760px]:w-[145px]" src="/assets/discord-button.gif" alt="Join us on Discord" width={43} height={19} unoptimized />
            <Image className="col-start-1 row-start-1 block h-19 w-43 opacity-0 transition-opacity duration-75 [image-rendering:pixelated] [transition-timing-function:steps(1)] group-hover:opacity-100 group-focus-visible:opacity-100 max-[760px]:h-16 max-[760px]:w-[145px]" src="/assets/discord-button-hover.png" alt="" width={43} height={19} unoptimized aria-hidden="true" />
          </a>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-[clamp(140px,16vw,220px)] bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,.35)_42%,#000_100%)]"
        aria-hidden="true"
      />
      </section>
      <JoinOverlay open={joinOpen} onClose={() => setJoinOpen(false)} />
    </>
  );
}
