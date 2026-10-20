import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { CareerHero, CvBand, HiringSteps, Perks } from "@/components/Career";
import { Jobs } from "@/components/Jobs";
import { FloatNav } from "@/components/Nav";
import { Sprite } from "@/components/ui";

export const metadata: Metadata = {
  title: "Careers | AML Consumer Care Ltd",
  description: "Join AML Consumer Care Ltd in Bangladesh. Search open roles in production, quality, sales, marketing and more, and apply online.",
};

export default function CareerPage() {
  return (
    <>
      <Sprite />
      <FloatNav always />
      <div className="page career">
        <main id="main">
          <CareerHero />
          <Perks />
          <Jobs />
          <HiringSteps />
          <CvBand />
        </main>
        <Footer />
      </div>
    </>
  );
}
