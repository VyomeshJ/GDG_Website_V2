import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import GamesCatalog from "./GamesCatalog";

export const metadata: Metadata = {
  title: "Games | Game Developer Guild",
  description:
    "Browse games, prototypes, and jam entries created by University of Auckland Game Developer Guild members.",
  alternates: {
    canonical: "/games",
  },
  openGraph: {
    title: "GDG Game Library",
    description:
      "Games, prototypes, and jam entries made by the Game Developer Guild community.",
    url: "/games",
  },
};

export default function GamesPage() {
  return (
    <main className="bg-paper">
      <Navbar />
      <GamesCatalog />
      <Footer />
    </main>
  );
}
