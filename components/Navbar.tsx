"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = ["Home", "Games", "Events", "Resources"];

const sectionFor = (item: string) =>
  item === "Our story" ? "who-we-are" : item.toLowerCase();

function NavLogo({
  mobile = false,
  onNavigate,
}: {
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <button
      className={`group relative grid cursor-pointer place-items-center ${
        mobile ? "h-16 w-20" : "h-18 w-28"
      }`}
      type="button"
      aria-label="Game Developers Guild — home"
      onClick={onNavigate}
    >
      <Image
        className={`${
          mobile ? "h-14 w-20" : "h-[67px] w-28"
        } col-start-1 row-start-1 object-contain opacity-100 drop-shadow-[0_8px_12px_rgba(0,0,0,.75)] transition-opacity duration-100 [transition-timing-function:steps(2)] group-hover:opacity-0 group-focus-visible:opacity-0`}
        src="/assets/laser-logo.svg"
        alt=""
        width={112}
        height={67}
        priority
      />
      <Image
        className={`${
          mobile ? "h-[65px] w-[94px]" : "h-[85.8px] w-[124.8px]"
        } col-start-1 row-start-1 translate-z-0 object-contain opacity-0 transition-opacity duration-100 [image-rendering:pixelated] [transition-timing-function:steps(2)] group-hover:opacity-100 group-focus-visible:opacity-100`}
        src="/assets/pixelated-gdg-logo.png"
        alt=""
        width={48}
        height={33}
        priority
        unoptimized
      />
    </button>
  );
}

export default function Navbar({ flat = false }: { flat?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navigateTo = (section: string) => {
    setMenuOpen(false);
    const scrollBehavior = window.matchMedia("(max-width: 760px)").matches
      ? "auto"
      : "smooth";

    if (section === "games") {
      router.push("/games");
      return;
    }

    if (section === "events") {
      router.push("/events");
      return;
    }

    if (section === "resources") {
      router.push("/resources");
      return;
    }

    if (section === "home") {
      if (pathname !== "/") {
        router.push("/");
      } else {
        window.scrollTo({ top: 0, behavior: scrollBehavior });
      }
      return;
    }

    if (pathname !== "/" && pathname !== "/home") {
      router.push("/");
      return;
    }

    document
      .querySelector<HTMLElement>(`[data-section="${section}"]`)
      ?.scrollIntoView({ behavior: scrollBehavior, block: "start" });
  };

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 761px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    desktopQuery.addEventListener("change", closeOnDesktop);
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      desktopQuery.removeEventListener("change", closeOnDesktop);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 isolate z-100 px-[clamp(20px,7vw,96px)] py-3 font-boxel text-white transition-colors duration-200 ${
        menuOpen ? "bg-[#030506]" : "bg-transparent"
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 -z-10 transition-opacity duration-300 ${
          flat
            ? "h-[96px] bg-[#030506] max-[760px]:h-[88px]"
            : "h-[120px] bg-[linear-gradient(to_bottom,rgba(3,5,6,.97)_0%,rgba(3,5,6,.84)_22%,rgba(3,5,6,.62)_42%,rgba(3,5,6,.38)_62%,rgba(3,5,6,.16)_80%,transparent_100%)] max-[760px]:h-[220px]"
        } ${
          menuOpen ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden="true"
      />
      <nav aria-label="Main navigation">
        <div className="mx-auto hidden w-full max-w-[920px] grid-cols-[1fr_auto_1fr] items-center gap-7 min-[761px]:grid">
          <div className="flex justify-end gap-[clamp(18px,3vw,42px)]">
            {navigation.slice(0, 2).map((item) => (
              <button
                className="cursor-pointer text-[13px] font-extrabold tracking-[.08em] uppercase transition-[color,transform] duration-200 hover:-translate-y-0.5 hover:text-[#12caca] focus-visible:text-[#12caca] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#12caca]"
                key={item}
                type="button"
                onClick={() => navigateTo(sectionFor(item))}
              >
                {item}
              </button>
            ))}
          </div>

          <NavLogo onNavigate={() => navigateTo("home")} />

          <div className="flex justify-start gap-[clamp(18px,3vw,42px)]">
            {navigation.slice(2).map((item) => (
              <button
                className="cursor-pointer text-[13px] font-extrabold tracking-[.08em] uppercase transition-[color,transform] duration-200 hover:-translate-y-0.5 hover:text-[#12caca] focus-visible:text-[#12caca] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#12caca]"
                key={item}
                type="button"
                onClick={() => navigateTo(sectionFor(item))}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto flex h-16 w-full items-center justify-between min-[761px]:hidden">
          <NavLogo mobile onNavigate={() => navigateTo("home")} />

          <button
            className="group grid size-12 place-items-center text-white outline-none"
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="relative block h-5 w-6" aria-hidden="true">
              <span
                className={`absolute top-0 left-0 h-0.5 w-6 bg-current transition-transform duration-200 ${
                  menuOpen ? "translate-y-[9px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute top-[9px] left-0 h-0.5 w-6 bg-current transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-6 bg-current transition-transform duration-200 ${
                  menuOpen ? "-translate-y-[9px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <div
          className={`absolute inset-x-0 top-full grid overflow-hidden bg-[#030506] transition-[grid-template-rows,opacity] duration-300 min-[761px]:hidden ${
            menuOpen
              ? "grid-rows-[1fr] border-t border-white/15 opacity-100"
              : "pointer-events-none grid-rows-[0fr] opacity-0"
          }`}
          aria-hidden={!menuOpen}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="px-5 py-3">
              {navigation.map((item) => (
                <button
                  className="flex w-full cursor-pointer items-center border-b border-white/15 px-2 py-4 text-sm font-extrabold tracking-[.1em] uppercase transition-colors last:border-b-0 hover:text-[#12caca] focus-visible:text-[#12caca] focus-visible:outline-2 focus-visible:outline-[#12caca]"
                  key={item}
                  type="button"
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={() => navigateTo(sectionFor(item))}
                >
                  <span>{item}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
