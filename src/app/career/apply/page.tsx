import type { Metadata } from "next";
import Link from "next/link";
import { ApplyForm } from "@/components/ApplyForm";
import { Footer } from "@/components/Footer";
import { FloatNav } from "@/components/Nav";
import { Sprite } from "@/components/ui";
import { APPLY_REQUIREMENTS } from "@/data/careers";

export const metadata: Metadata = {
  title: "Submit your CV | Careers | AML Consumer Care Ltd",
  description: "Send a general application to the AML Consumer Care Ltd recruitment team.",
};

/** General application: for candidates who cannot find a suitable vacancy. */
export default function GeneralApplyPage() {
  return (
    <>
      <Sprite />
      <FloatNav always />
      <div className="page career">
        <main id="main" className="job-page">
          <div className="wrap">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/career">Careers</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Submit your CV</span>
            </nav>
            <header className="job-head">
              <span className="label">General application</span>
              <h1>Submit your CV</h1>
              <p>Cannot find a role that fits? Send your CV to the AML recruitment team. Check <Link href="/career#roles" className="u">the open roles</Link> first, because applying to a specific role is the fastest route.</p>
            </header>

            <div className="job-layout">
              <div className="job-main">
                <section aria-labelledby="g-next">
                  <h2 id="g-next">What happens after you submit</h2>
                  <ul className="ticks">
                    <li>Your CV goes to the AML recruitment team.</li>
                    <li>If a role matches your background, the team may contact you by phone or email.</li>
                    <li>We cannot promise a reply or a role.</li>
                  </ul>
                  <p className="ph-note">Placeholder. HR must confirm whether CVs are kept for future openings and for how long, then this text and the privacy notice will be updated.</p>
                </section>
                <section aria-labelledby="g-req">
                  <h2 id="g-req">What you need</h2>
                  <ul className="ticks">{APPLY_REQUIREMENTS.map((d) => <li key={d}>{d}</li>)}</ul>
                </section>
                <section aria-labelledby="g-priv">
                  <h2 id="g-priv">Your data</h2>
                  <p>We use your details only to review your application. Read the <Link className="u" href="/career/privacy">recruitment privacy notice</Link> before you send anything.</p>
                </section>
              </div>
              <div className="job-side apply-side" id="apply">
                <h2>Your details</h2>
                <ApplyForm title="General application" general />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
