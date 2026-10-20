import Image from "next/image";
import Link from "next/link";
import { BELIEF, BOARD, MISSION, OVERVIEW, TEAM, VISION } from "@/data/about";
import type { Person } from "@/data/about";
import { Icon, Roll } from "./ui";

export function AboutHero() {
  return (
    <section aria-labelledby="about-h1">
      <div className="wrap career-hero about-hero">
        <div className="copy">
          <span className="eyebrow">About AML Consumer Care Ltd</span>
          <h1 id="about-h1">Everyday care, <span>made in Dhaka</span></h1>
          <p className="career-lede">{OVERVIEW.lede}</p>
        </div>
        <div className="career-photos" aria-hidden="true">
          <figure className="cp a"><Image src="/about/factory.webp" alt="" fill priority sizes="(max-width: 860px) 60vw, 300px" /></figure>
          <figure className="cp b"><Image src="/factory/filling-line.webp" alt="" fill priority sizes="(max-width: 860px) 60vw, 300px" /></figure>
        </div>
      </div>
    </section>
  );
}

/** Brief description of AML Consumer Care. */
export function Overview() {
  return (
    <section className="block" id="who" aria-labelledby="who-h">
      <div className="wrap ab-who">
        <div>
          <h2 className="h2" id="who-h">Who we <span className="soft">are</span></h2>
          {OVERVIEW.body.map((p) => <p key={p} className="ab-p">{p}</p>)}
        </div>
        <ul className="ab-facts">
          {OVERVIEW.facts.map((f) => (
            <li key={f.value}><b>{f.value}</b><span>{f.label}</span></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function MissionVision() {
  return (
    <section className="block" id="mission" aria-label="Mission and vision">
      <div className="wrap ab-mv">
        <article className="mv mission">
          <span className="label">Our mission</span>
          <p>{MISSION}</p>
        </article>
        <article className="mv vision">
          <span className="label">Our vision</span>
          <p>{VISION}</p>
        </article>
      </div>
    </section>
  );
}

export function Belief() {
  return (
    <section className="block" id="belief" aria-labelledby="belief-h">
      <div className="wrap ab-belief">
        <span className="label">We believe in</span>
        <h2 id="belief-h">{BELIEF.line}</h2>
        <p>{BELIEF.text}</p>
        <ul>
          {BELIEF.points.map((p) => (
            <li key={p.title}><h3>{p.title}</h3><span>{p.text}</span></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Initials() {
  return (
    <svg viewBox="0 0 80 100" aria-hidden="true" className="avatar">
      <circle cx="40" cy="38" r="15" fill="currentColor" />
      <path d="M10 100c0-20 13-32 30-32s30 12 30 32z" fill="currentColor" />
    </svg>
  );
}

function PeopleGrid({ people, id, title, lede, cols }: { people: Person[]; id: string; title: React.ReactNode; lede: string; cols: 3 | 4 }) {
  return (
    <section className="block" id={id} aria-labelledby={`${id}-h`}>
      <div className="wrap">
        <div className="sec-head">
          <h2 className="h2" id={`${id}-h`}>{title}</h2>
          <p className="lede center">{lede}</p>
        </div>
        <ul className={`people cols-${cols}`}>
          {people.map((p, i) => (
            <li key={i} className="person">
              <div className={`person-photo${p.photo ? "" : " empty"}`}>
                {p.photo ? <Image src={p.photo} alt={`${p.name}, ${p.role}`} fill sizes="(max-width: 560px) 50vw, 280px" /> : <Initials />}
              </div>
              <h3>{p.name}</h3>
              <p>{p.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Board() {
  return <PeopleGrid id="board" cols={4} people={BOARD} title={<>Board of <span className="soft">Directors</span></>} lede="The people who guide AML Consumer Care Ltd." />;
}

export function LeadingTeam() {
  return <PeopleGrid id="team" cols={4} people={TEAM} title={<>Our leading <span className="soft">team</span></>} lede="The people who run AML day to day." />;
}

export function AboutCta() {
  return (
    <section className="block" aria-labelledby="ab-cta-h">
      <div className="wrap cv-band">
        <div>
          <h2 className="h2" id="ab-cta-h">Want to be part of the team?</h2>
          <p>See the open roles at AML Consumer Care Ltd and apply online.</p>
        </div>
        <Link className="btn btn-dark" href="/career#roles"><Roll>See open roles</Roll><span className="arrow"><Icon id="i-arrow" /></span></Link>
      </div>
    </section>
  );
}
