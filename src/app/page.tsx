import { Ask } from "@/components/Ask";
import { ScrollReveal } from "@/components/Effects";
import { ExportMarket } from "@/components/Export";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { FloatNav, WhatsApp } from "@/components/Nav";
import { Products } from "@/components/Products";
import { Faq, Genuine, WhereToBuy, Why } from "@/components/Shopper";
import { Plant, Story } from "@/components/Story";
import { Trust } from "@/components/Trust";
import { Sprite } from "@/components/ui";

/** Shopper journey: who is AmLion, why trust it, what is it, is it real, why choose it, where to buy. */
export default function Home() {
  return (
    <>
      <Sprite />
      <div className="page">
        <Hero />
        <FloatNav />
        <Story />
        <Trust />
        <Plant />
        <Products />
        <Genuine />
        <Why />
        <ExportMarket />
        <WhereToBuy />
        <Faq />
        <Ask />
        <Footer />
      </div>
      <WhatsApp />
      <ScrollReveal />
    </>
  );
}
