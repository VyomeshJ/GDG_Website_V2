import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WhoWeAre from "@/components/WhoWeAre";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <WhoWeAre />
    </main>
  );
}
