import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { FloatNav } from "@/components/Nav";
import { Sprite } from "@/components/ui";

export const metadata: Metadata = {
  title: "Recruitment privacy notice | AML Consumer Care Ltd",
  description: "How AML Consumer Care Ltd uses the details candidates send when applying.",
};

/** PLACEHOLDER page. The final notice must come from AML's legal or HR team. */
export default function PrivacyPage() {
  return (
    <>
      <Sprite />
      <FloatNav always />
      <div className="page career">
        <main id="main" className="job-page">
          <div className="wrap narrow">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/career">Careers</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Recruitment privacy notice</span>
            </nav>
            <header className="job-head">
              <span className="label">Placeholder</span>
              <h1>Recruitment privacy notice</h1>
              <p>This is a placeholder. AML&apos;s legal or HR team must supply the final notice before the careers page goes live.</p>
            </header>
            <div className="job-main prose">
              <section>
                <h2>What the application form collects</h2>
                <ul className="ticks">
                  <li>Your full name</li>
                  <li>Your phone or WhatsApp number</li>
                  <li>Your email address</li>
                  <li>Your CV file, and an optional note</li>
                </ul>
              </section>
              <section>
                <h2>What we use it for</h2>
                <p>To review your application for the role you chose, or as a general application.</p>
              </section>
              <section>
                <h2>To be confirmed by AML</h2>
                <ul className="ticks">
                  <li>Who is responsible for your data</li>
                  <li>How long CVs are kept</li>
                  <li>Who can see applications</li>
                  <li>How to ask for your data to be corrected or deleted</li>
                </ul>
              </section>
              <p><Link className="btn btn-line" href="/career/apply">Back to Submit your CV</Link></p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
