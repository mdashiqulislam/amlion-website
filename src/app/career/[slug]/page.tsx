import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ApplyForm } from "@/components/ApplyForm";
import { Footer } from "@/components/Footer";
import { FloatNav } from "@/components/Nav";
import { Icon, Roll, Sprite } from "@/components/ui";
import { APPLY_REQUIREMENTS, BENEFIT_ITEMS, JOBS } from "@/data/careers";

export function generateStaticParams() {
  return JOBS.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const job = JOBS.find((j) => j.slug === slug);
  if (!job) return {};
  return { title: `${job.title} | Careers | AML Consumer Care Ltd`, description: job.summary };
}

/** Dedicated job page: everything a candidate needs, then the application form on the same page. */
export default async function JobPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = JOBS.find((j) => j.slug === slug);
  if (!job) notFound();
  const i = JOBS.indexOf(job);
  const next = JOBS[(i + 1) % JOBS.length];

  const facts: [string, string][] = [
    ["Department", job.dept],
    ["Location", `${job.location} · ${job.mode}`],
    ["Employment type", job.type],
    ["Experience", job.experience],
    ["Education", job.education],
    ["Posted", job.posted],
    ["Apply by", job.deadline],
  ];

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
              <Link href="/career#roles">Open roles</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{job.title}</span>
            </nav>

            <header className="job-head">
              <span className="label">{job.dept}</span>
              <h1>{job.title}</h1>
              <p>{job.summary}</p>
              <div className="job-head-cta">
                <a className="btn btn-lime btn-xl" href="#apply"><Roll>Apply for this role</Roll><span className="arrow"><Icon id="i-arrow" /></span></a>
                <span>Apply by <b>{job.deadline}</b></span>
              </div>
            </header>

            <div className="job-layout">
              <div className="job-main">
                <section aria-labelledby="j-over">
                  <h2 id="j-over">Role overview</h2>
                  <p>{job.about}</p>
                </section>
                <section aria-labelledby="j-does">
                  <h2 id="j-does">Responsibilities</h2>
                  <ul className="ticks">{job.does.map((d) => <li key={d}>{d}</li>)}</ul>
                </section>
                <section aria-labelledby="j-needs">
                  <h2 id="j-needs">Qualifications and experience</h2>
                  <ul className="ticks">{job.needs.map((d) => <li key={d}>{d}</li>)}</ul>
                </section>
                <section aria-labelledby="j-ben">
                  <h2 id="j-ben">Benefits</h2>
                  <ul className="ben">
                    {BENEFIT_ITEMS.map((b) => <li key={b}><span>{b}</span><em>To be confirmed by HR</em></li>)}
                  </ul>
                  <p className="ph-note">Placeholder. The recruitment team will add the real terms for this role.</p>
                </section>
                <section aria-labelledby="j-req">
                  <h2 id="j-req">What you need to apply</h2>
                  <ul className="ticks">{APPLY_REQUIREMENTS.map((d) => <li key={d}>{d}</li>)}</ul>
                </section>
              </div>

              <aside className="job-side" aria-label="Role summary">
                <dl className="job-facts">
                  {facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
                </dl>
                <a className="btn btn-lime" href="#apply"><Roll>Apply for this role</Roll><span className="arrow"><Icon id="i-arrow" /></span></a>
                <p className="fine">Sample role. Real descriptions and terms will come from AML HR.</p>
              </aside>
            </div>

            <section className="apply-section" id="apply" aria-labelledby="apply-h">
              <div>
                <h2 id="apply-h">Apply for {job.title}</h2>
                <p>Four details and your CV. It takes about five minutes, and you do not need an account.</p>
              </div>
              <ApplyForm title={job.title} />
            </section>

            <nav className="job-more" aria-label="More roles">
              <Link href="/career#roles" className="btn btn-line">All open roles</Link>
              <Link href={`/career/${next.slug}`} className="job-next"><small>Next role</small><span>{next.title}</span></Link>
            </nav>
          </div>
        </main>
        <Footer />
      </div>

      <div className="apply-bar">
        <span>Apply by <b>{job.deadline}</b></span>
        <a className="btn btn-lime" href="#apply"><Roll>Apply for this role</Roll><span className="arrow"><Icon id="i-arrow" /></span></a>
      </div>
    </>
  );
}
