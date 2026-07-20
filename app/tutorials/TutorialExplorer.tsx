"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import resourcesData from "@/data/resources.json";

type ResourcePath = {
  id: string;
  label: string;
  icon: string;
  color: string;
  position: { left: string; top: string };
};

type Resource = {
  title: string;
  href: string;
  position: { left: string; top: string };
};

type ResourceLink = Omit<Resource, "position">;

const resourcePaths: ResourcePath[] = [
  {
    id: "music-audio",
    label: "Music/Audio",
    icon: "Spec Icon-7.svg",
    color: "#f9ab55",
    position: { left: "50%", top: "25%" },
  },
  {
    id: "design-play",
    label: "Design and Play",
    icon: "Spec Icon-11.svg",
    color: "#bd73e8",
    position: { left: "72%", top: "37.5%" },
  },
  {
    id: "code-engine",
    label: "Code and Engine Use",
    icon: "Spec Icon-9.svg",
    color: "#55bff0",
    position: { left: "72%", top: "62.5%" },
  },
  {
    id: "art",
    label: "Art",
    icon: "Spec Icon-4.svg",
    color: "#64d581",
    position: { left: "50%", top: "75%" },
  },
  {
    id: "narrative",
    label: "Narrative",
    icon: "Spec Icon-2.svg",
    color: "#ff7d55",
    position: { left: "28%", top: "62.5%" },
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: "Spec Icon-8.svg",
    color: "#12caca",
    position: { left: "28%", top: "37.5%" },
  },
];

const resourcePositions = [
  { left: "56%", top: "30%" },
  { left: "82%", top: "30%" },
  { left: "56%", top: "70%" },
  { left: "82%", top: "70%" },
];

const iconPath = (file: string) => `/assets/spec icons/${file}`;
const hexagon =
  "[clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)]";

function ResourceBubble({
  resource,
  reducedMotion,
}: {
  resource: Resource;
  reducedMotion: boolean;
}) {
  const motionProps = {
    className:
      "absolute z-30 flex size-[clamp(60px,19cqw,126px)] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 border-[#b8b8b8] bg-[#151515] p-2 text-center shadow-[0_10px_28px_rgba(0,0,0,.35)] transition-[transform,background-color] duration-200 hover:scale-105 hover:bg-[#1d1d1d] focus-visible:bg-[#1d1d1d] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#b8b8b8]",
    style: { left: resource.position.left, top: resource.position.top },
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: {
      duration: reducedMotion ? 0 : 0.42,
      ease: "easeInOut" as const,
    },
  };

  return (
    <motion.a
      {...motionProps}
      href={resource.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${resource.title} — open resource`}
    >
      <span className="max-w-[82%] font-k2d text-[clamp(9px,2.2cqw,14px)] leading-tight font-black text-white">
        {resource.title}
      </span>
    </motion.a>
  );
}

export default function ResourceExplorer() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const reducedMotion = Boolean(useReducedMotion());
  const selected = resourcePaths.find((path) => path.id === selectedId);
  const resources: Resource[] = selected
    ? ((resourcesData as Record<string, ResourceLink[]>)[selected.id] ?? [])
        .slice(0, 4)
        .map((resource, index) => ({
          ...resource,
          position: resourcePositions[index],
        }))
    : [];

  return (
    <section className="w-full" aria-labelledby="resource-categories-heading">
      <motion.div
        className="overflow-visible px-2 py-2 text-center"
        animate={{ opacity: selected ? 0 : 1, y: selected ? -12 : 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.42, ease: "easeInOut" }}
      >
        <h2
          className="font-boxel text-[clamp(18px,2.5vw,30px)] leading-[1.35] font-black uppercase"
          id="resource-categories-heading"
        >
          Choose your path
        </h2>
      </motion.div>

      <div
        className="relative mx-auto mt-1 aspect-square max-w-full [container-type:inline-size]"
        style={{ width: "min(60dvh, 820px, 100%)" }}
      >
        <motion.div
          className={`absolute top-1/2 left-1/2 z-10 h-[clamp(88px,25cqw,194px)] w-[clamp(100px,28cqw,220px)] -translate-x-1/2 -translate-y-1/2 bg-white/25 p-[3px] ${hexagon}`}
          animate={{ opacity: selected ? 0 : 1 }}
          transition={{ duration: reducedMotion ? 0 : 0.42, ease: "easeInOut" }}
        >
          <div
            className={`grid size-full place-items-center bg-[#151515] p-5 ${hexagon}`}
          >
            <Image
              className="mx-auto size-[clamp(36px,10cqw,88px)] object-contain"
              src={iconPath("Spec Icon-10.svg")}
              alt=""
              width={250}
              height={250}
              aria-hidden="true"
              unoptimized
            />
          </div>
        </motion.div>

        {resourcePaths.map((path) => {
          const isSelected = path.id === selectedId;

          return (
            <motion.div
              className="absolute z-20 h-[clamp(72px,22cqw,158px)] w-[clamp(82px,25cqw,180px)] -translate-x-1/2 -translate-y-1/2"
              style={{ left: path.position.left, top: path.position.top }}
              animate={
                selected
                  ? isSelected
                    ? { left: "18%", top: "50%", opacity: 1 }
                    : { opacity: 0 }
                  : {
                      left: path.position.left,
                      top: path.position.top,
                      opacity: 1,
                    }
              }
              transition={{
                duration: reducedMotion ? 0 : 0.42,
                ease: "easeInOut",
              }}
              key={path.id}
            >
              <button
                className={`group size-full cursor-pointer p-[3px] text-center transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#12caca] disabled:cursor-default ${hexagon}`}
                style={{ backgroundColor: path.color }}
                type="button"
                disabled={Boolean(selected)}
                onClick={() => setSelectedId(path.id)}
              >
                <span
                  className={`flex size-full flex-col items-center justify-center bg-[#151515] p-3 group-hover:bg-[#1d1d1d] ${hexagon}`}
                >
                  <Image
                    className="h-[48%] w-[48%] object-contain"
                    src={iconPath(path.icon)}
                    alt=""
                    width={250}
                    height={250}
                    aria-hidden="true"
                    unoptimized
                  />
                  <span className="mt-1 font-k2d text-[clamp(8px,2.2cqw,13px)] leading-tight font-black text-white">
                    {path.label}
                  </span>
                </span>
              </button>
            </motion.div>
          );
        })}

        <AnimatePresence>
          {resources.map((resource, index) => (
            <ResourceBubble
              resource={resource}
              reducedMotion={reducedMotion}
              key={`${selected?.id}-${index}`}
            />
          ))}
        </AnimatePresence>

        <AnimatePresence>
          {selected && (
            <motion.button
              className="absolute top-1 left-1 z-40 cursor-pointer p-2 text-3xl leading-none font-black text-white/70 transition-colors hover:text-[#12caca] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#12caca]"
              type="button"
              aria-label="Choose another resource path"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: reducedMotion ? 0 : 0.42,
                ease: "easeInOut",
              }}
              onClick={() => setSelectedId(null)}
            >
              ⬅︎
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
