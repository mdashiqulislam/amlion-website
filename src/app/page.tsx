import { About } from "@/components/About";
import { Accreditations, Plant } from "@/components/Accreditations";
import { Contact } from "@/components/Contact";
import { ScrollReveal } from "@/components/Effects";
import { ExportMarket } from "@/components/Export";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { FloatNav, WhatsApp } from "@/components/Nav";
import { News } from "@/components/News";
import { Sprite } from "@/components/ui";

export default function Home() {
  return (
    <>
      <Sprite />
      <div className="page">
        <Hero />
        <FloatNav />
        <About />
        <Accreditations />
        <Plant />
        <ExportMarket />
        <News />
        <Contact />
        <Footer />
      </div>
      <WhatsApp />
      <ScrollReveal />
    </>
  );
}
