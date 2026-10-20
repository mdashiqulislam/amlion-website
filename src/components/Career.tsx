import Image from "next/image";
import Link from "next/link";
import { JOBS, PERKS, STEPS } from "@/data/careers";
import { Icon, Roll } from "./ui";

/** Hero: purpose, why join, and one clear next step. "Explore open roles" is the primary action, "Send your CV" the secondary. */
export function CareerHero() {
  return (
    <section className="career-hero-wrap" aria-labelledby="career-h1">
      <div className="wrap career-hero">
        <div className="copy">
          <span className="eyebrow">Careers at AML Consumer Care Ltd</span>
          <h1 id="career-h1">Build care that <span>families trust</span></h1>
          <p className="career-lede">
            We make toothpaste and personal care in Dhaka, sold in cosmetic shops and super shops across Bangladesh.
            Join a team backed by 15+ years of AML Group know-how.
          </p>
          <div className="career-actions">
            <a className="btn btn-lime btn-xl" href="#roles"><Roll>Explore open roles</Roll><span className="arrow"><Icon id="i-arrow" /></span></a>
            <Link className="btn btn-glass btn-2nd" href="/career/apply"><Roll>Send your CV</Roll></Link>
          </div>
          <p className="career-hint"><b>{JOBS.length} open roles</b> in Dhaka and Chattogram. Apply online, no account needed.</p>
        </div>
        <div className="career-photos" aria-hidden="true">
          <figure className="cp a"><Image src="/factory/qc.webp" alt="" fill priority sizes="(max-width: 860px) 60vw, 300px" /></figure>
          <figure className="cp b"><Image src="/factory/packing.webp" alt="" fill priority sizes="(max-width: 860px) 60vw, 300px" /></figure>
        </div>
      </div>
    </section>
  );
}

export function Perks() {
  return (
    <section className="block" id="why" aria-labelledby="perks-h">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="h2" id="perks-h">Why people <span className="soft">join AML</span></h2>
          <p className="lede center">Four reasons, all from what AML does today.</p>
        </div>
        <ul className="perks">
          {PERKS.map((p, i) => (
            <li key={p.title} className="perk" style={{ background: p.tone }}>
              <span className="perk-n" aria-hidden="true">{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
        <p className="perks-note">Salary, leave and other benefits are listed on each job page.</p>
      </div>
    </section>
  );
}

export function HiringSteps() {
  return (
    <section className="block" id="process" aria-labelledby="steps-h">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="h2" id="steps-h">How hiring <span className="soft">works</span></h2>
          <p className="lede center">Four steps, so you always know what comes next.</p>
        </div>
        <ol className="steps">
          {STEPS.map((s, i) => (
            <li key={s.title} className="step">
              <span className="num" aria-hidden="true">{i + 1}</span>
              <h3><span className="sr">Step {i + 1}: </span>{s.title}</h3>
              <p>{s.does}</p>
              <p className="expect"><b>What to expect</b>{s.expect}</p>
            </li>
          ))}
        </ol>
        <p className="perks-note">Placeholder process. The recruitment team will confirm each step and any timings before launch.</p>
      </div>
    </section>
  );
}

export function CvBand() {
  return (
    <section className="block" id="cv" aria-labelledby="cv-h">
      <div className="wrap cv-band">
        <div>
          <h2 className="h2" id="cv-h">Do not see your role?</h2>
          <p>Send us your CV for a general application. The AML recruitment team will receive it. See the page for what happens next and how we handle your data.</p>
        </div>
        <Link className="btn btn-dark" href="/career/apply"><Roll>Submit your CV</Roll><span className="arrow"><Icon id="i-arrow" /></span></Link>
      </div>
    </section>
  );
}
