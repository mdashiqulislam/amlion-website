"use client";

import { useEffect, useState } from "react";
import { CONTACT } from "@/data/content";
import { Icon, Roll } from "./ui";
import { useIsPhone } from "./useIsPhone";

const tel = CONTACT.phone.replace(/[^+\d]/g, "");
const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address.join(" "))}`;
const COMPANY_TAGS = ["Oral care", "Personal care", "Retail"];

/** Office hours are Sun to Thu, 9am to 6pm in Bangladesh (BST, UTC+6). */
function isOpenNow(d = new Date()) {
  const bst = new Date(d.getTime() + (d.getTimezoneOffset() + 360) * 60000);
  const day = bst.getDay();
  const mins = bst.getHours() * 60 + bst.getMinutes();
  return day >= 0 && day <= 4 && mins >= 540 && mins < 1080;
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

/**
 * Call and email rows. On phones the whole row is a link with an arrow. On computers it is plain text
 * (no link, no arrow, no hover), so visitors read or copy the number and email instead.
 */
function ReachLine({ href, icon, label, value, phone }: { href: string; icon: string; label: string; value: string; phone: boolean }) {
  const inner = (
    <>
      <span className="reach-ic"><Icon id={icon} size={18} /></span>
      <span className="reach-line-text">
        <small>{label}</small>
        <strong>{value}</strong>
      </span>
      {phone && <span className="arrow"><Icon id="i-arrow" /></span>}
    </>
  );
  return phone ? <a className="reach-line" href={href}>{inner}</a> : <div className="reach-line">{inner}</div>;
}

/** Footer "Ask us" button with the phone number. On phones it calls the number; on computers it opens the question form on /contact. */
export function AskButton({ className }: { className: string }) {
  const phone = useIsPhone();
  return (
    <a className={className} href={phone ? `tel:${tel}` : "/contact"}>
      <Roll>{`Ask us: ${CONTACT.phone}`}</Roll>
      <span className="arrow"><Icon id="i-arrow" /></span>
    </a>
  );
}

/** Every way to reach AML in one place, under the question form on /contact. */
export function ContactInfo() {
  const phone = useIsPhone();
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

            <ReachLine phone={phone} href={`tel:${tel}`} icon="i-phone" label="Call us" value={CONTACT.phone} />
            <ReachLine phone={phone} href={`mailto:${CONTACT.email}`} icon="i-mail" label="Email us" value={CONTACT.email} />

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
