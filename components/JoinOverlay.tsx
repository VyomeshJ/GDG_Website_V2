"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

const membershipCards = [
  {
    title: "New members",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdPH6E81By17CAnS-qLgGFvA3zdNR7k9PieZzknwqFOjG6CZQ/viewform",
    image: "/assets/g_dude.png",
    width: 393,
    height: 393,
    background: "bg-[#526646]",
    titlePosition:
      "top-7 right-5 text-right max-[700px]:top-3 max-[700px]:right-4 max-[700px]:left-4 max-[700px]:max-w-none max-[700px]:text-center",
    selectionPosition: "inset-x-0 bottom-0 h-[68%] rounded-[16px]",
  },
  {
    title: "Returning members",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSe45-GrFQn55PWSOduzYrMiJ3_vpm_sHCfFuNLeVSm6ueNNEA/viewform",
    image: "/assets/r_dude.png",
    width: 361,
    height: 361,
    background: "bg-[#874657]",
    titlePosition:
      "right-4 bottom-5 left-4 text-center max-[700px]:right-4 max-[700px]:bottom-3 max-[700px]:left-4 max-[700px]:max-w-none",
    selectionPosition: "inset-x-0 top-0 h-[68%] rounded-[16px]",
  },
  {
    title: "Executive members",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdGx8fPm7C6vBPbaHIpBz2xIGJnc9PzTFp8lfXRu5CWEx4PxA/viewform",
    image: "/assets/b_dude.png",
    width: 393,
    height: 393,
    background: "bg-[#46527c]",
    titlePosition:
      "top-7 right-4 left-4 text-center max-[700px]:top-3 max-[700px]:right-4 max-[700px]:left-4 max-[700px]:max-w-none",
    selectionPosition: "inset-x-0 bottom-0 h-[68%] rounded-[16px]",
  },
];

export default function JoinOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }

      if (event.key === "Tab") {
        const focusableElements = Array.from(
          overlayRef.current?.querySelectorAll<HTMLElement>(
            'button:not([disabled]), a[href]',
          ) ?? [],
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements.at(-1);

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [onClose, open]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-200 overflow-y-auto bg-black/80 px-5 py-10 backdrop-blur-[2px] max-[700px]:px-3 max-[700px]:py-16"
      onClick={(event) => {
        if (event.currentTarget === event.target) onClose();
      }}
    >
      <button
        ref={closeButtonRef}
        className="fixed top-4 right-5 z-10 grid size-16 cursor-pointer place-items-center text-7xl leading-none font-black text-white outline-none transition-colors duration-150 hover:text-[#12caca] focus-visible:text-[#12caca] max-[700px]:top-2 max-[700px]:right-2 max-[700px]:size-13 max-[700px]:text-6xl"
        type="button"
        aria-label="Close join information"
        onClick={onClose}
      >
        <span aria-hidden="true">×</span>
      </button>

      <div className="flex min-h-full items-center justify-center max-[700px]:items-start">
        <div
          className="relative w-full max-w-[920px] rounded-[18px] border border-white/10 bg-[#292929] p-[clamp(18px,3vw,34px)] text-white shadow-[0_24px_80px_rgba(0,0,0,.7)]"
          role="dialog"
          aria-modal="true"
          aria-label="Join the Game Developers Guild"
        >
          <h2 className="sr-only">Join the Game Developers Guild</h2>

          <div className="grid grid-cols-3 gap-[clamp(12px,2.5vw,28px)] max-[700px]:grid-cols-1">
            {membershipCards.map((card) => (
              <a
                className={`group relative min-h-[310px] cursor-pointer overflow-hidden rounded-[16px] outline-none transition-transform duration-100 hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:ring-3 focus-visible:ring-white ${card.background} max-[700px]:min-h-[190px]`}
                href={card.href}
                key={card.title}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${card.title} application form (opens in a new tab)`}
              >
                <div
                  className={`pointer-events-none absolute z-10 overflow-hidden bg-transparent transition-colors duration-100 [transition-timing-function:steps(2)] group-hover:bg-white/12 group-focus-visible:bg-white/12 ${card.selectionPosition}`}
                  aria-hidden="true"
                >
                  <Image
                    className="absolute top-1/2 left-1/2 z-10 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 object-contain [image-rendering:pixelated]"
                    src={card.image}
                    alt=""
                    width={card.width}
                    height={card.height}
                    unoptimized
                    aria-hidden="true"
                  />
                </div>
                <h3
                  className={`pointer-events-none absolute z-20 max-w-[70%] font-boxel text-[clamp(16px,2vw,25px)] leading-[1.05] font-black ${card.titlePosition} max-[700px]:text-xl`}
                >
                  {card.title}
                </h3>
              </a>
            ))}
          </div>

          <p className="mt-[clamp(22px,3vw,34px)] text-center text-[clamp(17px,2.2vw,27px)] leading-[1.35] font-black uppercase">
            Anyone can join, even if you&apos;re a grad or non-UoA!
            <br />
            Membership is just $5 per sem~
          </p>

          <div
            className="absolute top-full left-1/2 -translate-x-1/2 border-x-[18px] border-t-[24px] border-x-transparent border-t-[#292929]"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}
