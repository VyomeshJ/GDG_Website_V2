"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import gamesData from "@/data/games.json";

type Game = {
  title: string;
  href: string;
  image?: string;
  description?: string;
  author: string;
  genre?: string;
  playable?: boolean;
  publishedAt?: string;
  tags: string[];
};

type SortMode = "default" | "newest" | "oldest";

const games = gamesData as Game[];
const allJams = [
  "2026 Jam 1",
  "2025 Jam 2",
  "2025 Jam 1",
  "2024 Jam 2",
  "2024 Jam 1",
  "2023 Jam 2",
  "2023 Jam 1",
  "2022 Jam 3",
  // "2022 Jam 2", no games found
  // "2022 Jam 1", no games found
  // the rest are potential tags...
  // "Jam Award Winners",
  // "Non-Jam Games",
  // "Other"
];

const sortOptions: { label: string; value: SortMode }[] = [
  { label: "Featured", value: "default" },
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
];

export default function GamesCatalog() {
  const [selectedJams, setSelectedJams] = useState<string[]>([]);
  const [sortMode, setSortMode] = useState<SortMode>("default");
  const selectedJam = selectedJams[0] ?? null;

  const filteredGames = useMemo(() => {
    const matches =
      selectedJam === null
        ? games
        : games.filter((game) => game.tags.includes(selectedJam));

    if (sortMode === "default") return matches;

    return [...matches].sort((first, second) => {
      if (!first.publishedAt && !second.publishedAt) return 0;
      if (!first.publishedAt) return 1;
      if (!second.publishedAt) return -1;

      const firstTime = Date.parse(first.publishedAt);
      const secondTime = Date.parse(second.publishedAt);
      return sortMode === "newest"
        ? secondTime - firstTime
        : firstTime - secondTime;
    });
  }, [selectedJam, sortMode]);

  const toggleJam = (jam: string) => {
    setSelectedJams((current) => {
      if (current.includes(jam)) {
        return [];
      }

      return [jam];
    });
  };

  return (
    <section className="pt-40 relative bg-black px-[clamp(20px,5vw,72px)] py-[clamp(48px,6vw,82px)] text-ink">
      <div className="ultrawide-games-container mx-auto max-w-362.5">
        <div className="mb-10 overflow-hidden rounded-[18px] border-2 border-white/10 bg-[#151515] shadow-[0_18px_50px_rgba(0,0,0,.35)]">
          <div className="flex flex-col gap-5 bg-[#151515] p-[clamp(20px,3vw,34px)] text-white">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <h2 className="font-boxel text-[clamp(28px,3vw,42px)] leading-none font-black tracking-[-.035em] uppercase">
                  Browse the arcade
                </h2>
                <p className="mt-2 font-k2d text-sm font-bold text-white/55">
                  {filteredGames.length} of {games.length} games shown
                </p>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <span className="text-sm font-black tracking-[.08em] text-white/55 uppercase">
                  Sort by
                </span>
                <div className="grid grid-cols-3 rounded-lg border-2 border-white/15 bg-black/25">
                  {sortOptions.map((option) => {
                    const selected = sortMode === option.value;
                    return (
                      <button
                        className={`cursor-pointer rounded-lg px-3 py-2 text-sm font-black transition-colors sm:min-w-24 ${
                          selected
                            ? "bg-gdg-primary text-white"
                            : "text-white/65 hover:text-white"
                        }`}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => setSortMode(option.value)}
                        key={option.value}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="border-t border-white/12 pt-5">
              <div className="mb-3 flex flex-wrap items-center gap-3 min-h-11 justify-between">
                <span className="text-sm font-black tracking-[.08em] py-1.8 text-white/55 uppercase">
                  Filter by Game Jam
                </span>
                {selectedJams.length > 0 && (
                  <button
                    className="cursor-pointer rounded-[7px] border-2 border-white/20 px-3 py-1.5 text-sm font-black text-white/65 transition-colors hover:border-[#17DFB4] hover:text-[#17DFB4]"
                    type="button"
                    onClick={() => setSelectedJams([])}
                  >
                    Clear filters
                  </button>
                )}
              </div>
              <div className="flex max-h-44 flex-wrap gap-2 overflow-y-auto pr-2 -ml-1">
                {allJams.map((jam) => {
                  const selected = selectedJams.includes(jam);
                  return (
                    <button
                      className={`cursor-pointer rounded-full border-2 px-3 py-1.5 text-xs font-bold transition-colors bg-white/5 ${
                        selected
                          ? "border-gdg-highlight text-gdg-highlight"
                          : "border-white/15 text-white/65 hover:border-gdg-highlight/50 hover:text-gdg-highlight/65"
                      }`}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => toggleJam(jam)}
                      key={jam}
                    >
                      {jam}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {filteredGames.length > 0 ? (
          <div className="ultrawide-games-grid grid grid-cols-1 gap-[clamp(20px,2.5vw,34px)] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredGames.map((game) => (
              <a
                className="group flex min-h-122.5 flex-col overflow-hidden rounded-2xl border-2 border-white/10 bg-[#151515] text-white shadow-[0_14px_35px_rgba(0,0,0,.35)] transition-transform duration-200 ease-out hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transform-none motion-reduce:transition-none"
                href={game.href}
                target="_blank"
                rel="noopener noreferrer"
                key={`${game.title}-${game.href}`}
              >
                <div className="relative aspect-315/250 overflow-hidden bg-[#262626]">
                  {game.image ? (
                    <Image
                      className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none bg-gdg-primary"
                      src={game.image}
                      alt={`${game.title} Cover Art`}
                      fill
                      sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                  ) : (
                    <div className="grid size-full place-items-center bg-[#262626] p-8 text-center font-boxel text-2xl text-white uppercase bg-linear-to-t from-gdg-primary to-gdg-highlight/28">
                      {game.title}
                    </div>
                  )}
                  {game.playable && (
                    <span className="absolute top-3 right-3 rounded-full bg-white px-3 py-1 text-xs font-black text-[#151515] shadow-lg">
                      Runs on Web Browser
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h2 className="line-clamp-2 text-[clamp(20px,2vw,27px)] leading-[1.05] font-black tracking-tight">
                    {game.title}
                  </h2>
                  <p className="mt-1 truncate text-sm font-bold text-white/70">
                    by {game.author}
                  </p>
                  <p className="mt-4 line-clamp-3 text-sm leading-normal text-white/60">
                    {game.description ||
                      "A game made by a member of the GDG community."}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {game.genre && (
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-white/70">
                        {game.genre}
                      </span>
                    )}
                    {game.tags.slice(0, 3).map((tag) => (
                      <span
                        className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/65"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="mt-auto pt-5 text-sm font-black tracking-[.08em] text-white/80 uppercase transition-colors group-hover:text-white">
                    View game ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="grid min-h-64 place-items-center rounded-2xl border-2 border-dashed border-white/20 bg-[#151515] p-8 text-center text-white">
            <div>
              <h2 className="font-boxel text-3xl uppercase">No games found</h2>
              <p className="mt-2 text-white/60">
                Try removing one or more filters.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
