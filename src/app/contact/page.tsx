import type { Metadata } from "next";
import { Ask } from "@/components/Ask";
import { ContactInfo } from "@/components/Contact";
import { ScrollReveal } from "@/components/Effects";
import { Footer } from "@/components/Footer";
import { FloatNav } from "@/components/Nav";
import { Faq } from "@/components/Shopper";
import { Sprite } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact us | AML Consumer Care Ltd",
  description: "Ask AML Consumer Care Ltd about a product, check if a pack is genuine, or find out where to buy. Phone, email, office hours and address.",
};

export default function ContactPage() {
  return (
    <>
      <Sprite />
      <FloatNav />
      <div className="page career contact-page">
        <main id="main">
          <Ask asPageHeading />
          <ContactInfo />
          <Faq />
        </main>
        <Footer />
      </div>
      <ScrollReveal />
    </>
  );
}
