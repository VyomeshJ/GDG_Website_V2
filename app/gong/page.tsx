import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import GongClient from "./GongClient";

export const metadata: Metadata = {
  title: "Gong | Game Developer Guild",
  description: "Ring the Game Developer Guild gong.",
  alternates: {
    canonical: "/gong",
  },
};

export default function GongPage() {
  return (
    <main
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#2c2c2c]"
      style={{
        backgroundColor: "#2c2c2c",
      }}
    >
      <Image
        className="-z-10 object-cover"
        src="/BG/WhatAreWeBG.png"
        alt=""
        fill
        sizes="100vw"
        priority
      />
      <Navbar />
      <GongClient />
    </main>
  );
}
