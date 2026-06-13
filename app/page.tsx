import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/sections/About";
import { HeroSection } from "@/components/sections/HeroSection";
import { Projects } from "@/components/sections/Projects";
import { ServiceRequest } from "@/components/sections/ServiceRequest";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Timeline } from "@/components/sections/Timeline";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <Timeline />
        <Projects />
        <Skills />
        <Services />
        <ServiceRequest />
      </main>
      <Footer />
    </>
  );
}
