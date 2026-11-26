import type { Metadata } from "next";
import { AboutCta, AboutHero, Belief, Board, LeadingTeam, MissionVision, Overview } from "@/components/About";
import { Footer } from "@/components/Footer";
import { FloatNav } from "@/components/Nav";
import { Sprite } from "@/components/ui";

export const metadata: Metadata = {
  title: "About | AML Consumer Care Ltd",
  description: "AML Consumer Care Ltd., part of AMLION Group Malaysia, brings HALAL-certified oral and personal care to Bangladesh. Read about our mission, vision, board of directors and leading team.",
};

export default function AboutPage() {
  return (
    <>
      <Sprite />
      <FloatNav />
      <div className="page career">
        <main id="main">
          <AboutHero />
          <Overview />
          <MissionVision />
          <Belief />
          <Board />
          <LeadingTeam />
          <AboutCta />
        </main>
        <Footer />
      </div>
    </>
  );
}
