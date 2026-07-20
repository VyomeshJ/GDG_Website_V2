import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Philosophy from "@/components/Philosophy";
import Trailer from "@/components/Trailer";
import WhoWeAre from "@/components/WhoWeAre";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <Philosophy />
      <Faq />
      <Trailer />
      <div className="bg-black">
        <Footer />
      </div>
    </main>
  );
}
