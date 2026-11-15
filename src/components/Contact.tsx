"use client";

import { useEffect, useState } from "react";
import { CONTACT } from "@/data/content";
import { Icon } from "./ui";

const tel = CONTACT.phone.replace(/[^+\d]/g, "");
const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address.join(" "))}`;
const COMPANY_TAGS = ["Oral care", "Personal care", "Retail"];

/** Office hours are Mon to Fri, 8.30am to 5.30pm in Malaysia (UTC+8). */
function isOpenNow(d = new Date()) {
  const myt = new Date(d.getTime() + (d.getTimezoneOffset() + 480) * 60000);
  const day = myt.getDay();
  const mins = myt.getHours() * 60 + myt.getMinutes();
  return day >= 1 && day <= 5 && mins >= 510 && mins < 1050;
}

/** Live "Open now / Closed now" chip. Rendered after mount so the server and browser agree. */
function OpenStatus() {
  const [open, setOpen] = useState<boolean | null>(null);
  useEffect(() => {
    const tick = () => setOpen(isOpenNow());
    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, []);
  if (open === null) return <span className="reach-status" aria-hidden="true">&nbsp;</span>;
  return (
    <span className="reach-status" data-open={open}>
      <i aria-hidden="true" />
      {open ? "Open now" : "Closed now"}
    </span>
  );
}

/** Every way to reach AML in one place, under the question form on /contact. */
export function ContactInfo() {
  return (
    <section className="block" aria-labelledby="reach-h">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2 className="h2" id="reach-h">Other ways <span className="soft">to reach us</span></h2>
          <p className="lede center">Call, write or visit. The team answers during office hours.</p>
        </div>

        <div className="reach">
          {/* Talk to a person: the two direct lines on a navy panel */}
          <div className="reach-talk reveal">
            <svg className="reach-mark" viewBox="0 0 48 48" aria-hidden="true"><use href="#i-logo" /></svg>
            <div className="reach-talk-head">
              <p className="reach-label">Talk to a person</p>
              <OpenStatus />
            </div>
            <p className="reach-big">Real people.<br /><span>Real answers.</span></p>

            <a className="reach-line" href={`tel:${tel}`}>
              <span className="reach-ic"><Icon id="i-phone" size={18} /></span>
              <span className="reach-line-text">
                <small>Call us</small>
                <strong>{CONTACT.phone}</strong>
              </span>
              <span className="arrow"><Icon id="i-arrow" /></span>
            </a>

            <a className="reach-line" href={`mailto:${CONTACT.email}`}>
              <span className="reach-ic"><Icon id="i-mail" size={18} /></span>
              <span className="reach-line-text">
                <small>Email us</small>
                <strong>{CONTACT.email}</strong>
              </span>
              <span className="arrow"><Icon id="i-arrow" /></span>
            </a>

            <p className="reach-hours">
              <span>Office hours</span>
              {CONTACT.hours}
            </p>
          </div>

          {/* Visit: address over a drawn street grid with a pulsing pin */}
          <div className="reach-visit reveal">
            <div className="reach-map" aria-hidden="true">
              <span className="reach-road r1" />
              <span className="reach-road r2" />
              <span className="reach-road r3" />
              <span className="reach-pin"><i /></span>
            </div>
            <div className="reach-visit-body">
              <p className="reach-label">Headquarters</p>
              <address>{CONTACT.address.map((l) => <span key={l}>{l}</span>)}</address>
              <a className="reach-dir" href={maps} target="_blank" rel="noopener noreferrer">
                Get directions <Icon id="i-arrow" size={14} />
              </a>
            </div>
          </div>

          {/* The companies behind AML */}
          <div className="reach-co reveal">
            <p className="reach-label">Our companies</p>
            <ol>
              {CONTACT.entities.map((e, i) => (
                <li key={e}>
                  <span className="reach-no">{String(i + 1).padStart(2, "0")}</span>
                  <span className="reach-co-name">{e}</span>
                  {COMPANY_TAGS[i] && <span className="reach-tag">{COMPANY_TAGS[i]}</span>}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
