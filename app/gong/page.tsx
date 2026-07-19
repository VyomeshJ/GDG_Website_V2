import type { Metadata } from "next";
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
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2c2c2c",
        backgroundImage: "url('/BG/WhatAreWeBG.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <GongClient />
    </main>
  );
}
