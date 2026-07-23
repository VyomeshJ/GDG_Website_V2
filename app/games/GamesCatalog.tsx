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
const allTags = Array.from(new Set(games.flatMap((game) => game.tags))).sort(
  (first, second) => first.localeCompare(second),
);

const sortOptions: { label: string; value: SortMode }[] = [
  { label: "Featured", value: "default" },
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
];

export default function GamesCatalog() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortMode, setSortMode] = useState<SortMode>("default");

  const filteredGames = useMemo(() => {
    const matches =
      selectedTags.length === 0
        ? games
        : games.filter((game) =>
            selectedTags.every((tag) => game.tags.includes(tag)),
          );

    if (sortMode === "default") return matches;

    return [...matches].sort((first, second) => {
      if (!first.publishedAt && !second.publishedAt) return 0;
      if (!first.publishedAt) return 1;
      if (!second.publishedAt) return -1;

      const firstTime = Date.parse(first.publishedAt);
      const secondTime = Date.parse(second.publishedAt);
      return sortMode === "newest" ? secondTime - firstTime : firstTime - secondTime;
    });
  }, [selectedTags, sortMode]);

  const toggleTag = (tag: string) => {
    setSelectedTags((current) =>
      current.includes(tag)
        ? current.filter((selectedTag) => selectedTag !== tag)
        : [...current, tag],
    );
  };

  return (
    <>
      <section className="pt-40 relative bg-black px-[clamp(20px,5vw,72px)] py-[clamp(48px,6vw,82px)] text-ink">
        <div className="mx-auto max-w-[1450px]">
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
                  <div className="grid grid-cols-3 rounded-[9px] border border-white/15 bg-black/25 p-1">
                    {sortOptions.map((option) => {
                      const selected = sortMode === option.value;
                      return (
                        <button
                          className={`cursor-pointer rounded-[6px] px-3 py-2 text-sm font-black transition-colors sm:min-w-24 ${
                            selected
                              ? "bg-[#12caca] text-[#05252d]"
                              : "text-white/65 hover:bg-white/10 hover:text-white"
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
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-sm font-black tracking-[.08em] text-white/55 uppercase">
                    Filter by tags
                  </span>
                  {selectedTags.length > 0 && (
                    <button
                      className="cursor-pointer rounded-[7px] border border-white/20 px-3 py-1.5 text-sm font-black text-white/65 transition-colors hover:border-[#12caca] hover:text-[#12caca]"
                      type="button"
                      onClick={() => setSelectedTags([])}
                    >
                      Clear filters
                    </button>
                  )}
                </div>
                <div className="flex max-h-44 flex-wrap gap-2 overflow-y-auto pr-2">
                  {allTags.map((tag) => {
                    const selected = selectedTags.includes(tag);
                    return (
                      <button
                        className={`cursor-pointer rounded-full border px-3 py-1.5 text-xs font-bold transition-colors ${
                          selected
                            ? "border-[#12caca] bg-[#12caca] text-[#05252d]"
                            : "border-white/15 bg-white/5 text-white/65 hover:border-[#12caca]/70 hover:text-white"
                        }`}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => toggleTag(tag)}
                        key={tag}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-1 gap-[clamp(20px,2.5vw,34px)] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredGames.map((game) => (
                <a
                  className="group flex min-h-[490px] flex-col overflow-hidden rounded-[16px] border-2 border-white/10 bg-[#151515] text-white shadow-[0_14px_35px_rgba(0,0,0,.35)] transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1.5 hover:border-[#12caca] hover:shadow-[0_20px_45px_rgba(18,202,202,.18)] focus-visible:border-[#12caca] focus-visible:outline-none"
                  href={game.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={`${game.title}-${game.href}`}
                >
                  <div className="relative aspect-[315/250] overflow-hidden bg-[#05252d]">
                    {game.image ? (
                      <Image
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        src={game.image}
                        alt={`${game.title} cover art`}
                        fill
                        sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                    ) : (
                      <div className="grid size-full place-items-center bg-[radial-gradient(circle_at_center,#0c7075,#05252d)] p-8 text-center font-boxel text-2xl text-white uppercase">
                        {game.title}
                      </div>
                    )}
                    {game.playable && (
                      <span className="absolute top-3 right-3 rounded-full bg-[#12caca] px-3 py-1 text-xs font-black text-[#05252d] shadow-lg">
                        Playable in browser
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h2 className="line-clamp-2 text-[clamp(20px,2vw,27px)] leading-[1.05] font-black tracking-[-.025em]">
                      {game.title}
                    </h2>
                    <p className="mt-1 truncate text-sm font-bold text-[#12caca]">
                      by {game.author}
                    </p>
                    <p className="mt-4 line-clamp-3 text-sm leading-[1.5] text-white/60">
                      {game.description || "A game made by a member of the GDG community."}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {game.genre && (
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-white/70">
                          {game.genre}
                        </span>
                      )}
                      {game.tags.slice(0, 3).map((tag) => (
                        <span
                          className="rounded-full bg-[#12caca]/15 px-3 py-1 text-xs font-bold text-[#12caca]"
                          key={tag}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="mt-auto pt-5 text-sm font-black tracking-[.08em] text-[#12caca] uppercase transition-colors group-hover:text-white">
                      View game ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="grid min-h-64 place-items-center rounded-[16px] border-2 border-dashed border-white/20 bg-[#151515] p-8 text-center text-white">
              <div>
                <h2 className="font-boxel text-3xl uppercase">No games found</h2>
                <p className="mt-2 text-white/60">Try removing one or more tags.</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
