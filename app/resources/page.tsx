import type { Metadata } from "next";
import FadeInContent from "@/components/FadeInContent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ResourceExplorer from "@/app/tutorials/TutorialExplorer";

export const metadata: Metadata = {
  title: "Resources | Game Developer Guild",
  description:
    "Explore game development learning paths, recordings, and community resources from the University of Auckland Game Developer Guild.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "GDG Resources",
    description:
      "Learning paths and community resources for every part of game development.",
    url: "/resources",
  },
};

export default function ResourcesPage() {
  return (
    <main className="flex min-h-dvh flex-col bg-black text-white">
      <Navbar flat />
      <section className="flex flex-1 items-center px-[clamp(4px,1vw,16px)] pt-[96px] min-[761px]:pt-[120px]">
        <FadeInContent className="mx-auto w-full max-w-[1500px]">
          <ResourceExplorer />
        </FadeInContent>
      </section>
      <Footer />
    </main>
  );
}
