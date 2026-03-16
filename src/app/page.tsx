import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      
      {/* Hero Parallax Section wrapper */}
      <div id="home" className="relative z-10 bg-[#121212]">
        <ScrollyCanvas />
        <Overlay />
      </div>

      {/* Content Parallax Wrapper (slides over the Hero naturally) */}
      <div className="relative z-20 bg-black shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <Skills />
        <Timeline />
        <Contact />
      </div>
    </main>
  );
}

