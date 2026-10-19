"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { CONTACT, PRODUCT_TYPES } from "@/data/content";
import { CloudLayer, Icon, Label, Puff, Roll } from "./ui";

const SAMPLES = "Samples & catalogue";
const DEFAULT_MSG = "We reply with MOQ, pricing and timeline. Your details are only used to answer your request.";

/** Hero secondary CTA: jumps to the form with "Samples & catalogue" ticked. */
export function SamplesLink({ children }: { children: ReactNode }) {
  return (
    <a className="btn btn-glass" href="#contact" onClick={() => window.dispatchEvent(new CustomEvent("amlion:samples"))}>
      {children}
    </a>
  );
}

function QuoteForm() {
  const [picked, setPicked] = useState<string[]>(["Toothpaste"]);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onSamples = () => setPicked((p) => (p.includes(SAMPLES) ? p : [...p, SAMPLES]));
    window.addEventListener("amlion:samples", onSamples);
    return () => window.removeEventListener("amlion:samples", onSamples);
  }, []);

  const toggle = (t: string) => setPicked((p) => (p.includes(t) ? p.filter((x) => x !== t) : [...p, t]));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const missingName = !nameRef.current?.value.trim();
    if (missingName || !contactRef.current?.value.trim()) {
      setError(true);
      (missingName ? nameRef.current : contactRef.current)?.focus();
      return;
    }
    setError(false);
    setSent(true);
  };

  return (
    <form className="form reveal" noValidate onSubmit={onSubmit}>
      <div style={{ display: "grid", gap: 14 }} hidden={sent}>
        <h3>Request a quote</h3>
        <div className="row">
          <div className="field"><label htmlFor="f-name">Your name</label><input id="f-name" name="name" ref={nameRef} autoComplete="name" placeholder="Rahim Ahmed" required /></div>
          <div className="field"><label htmlFor="f-company">Company</label><input id="f-company" name="company" autoComplete="organization" placeholder="Your brand or company" /></div>
        </div>
        <div className="field">
          <span className="lbl" id="ptype-l">What do you want to make?</span>
          <div className="ptypes" role="group" aria-labelledby="ptype-l">
            {PRODUCT_TYPES.map((t) => (
              <button key={t} type="button" aria-pressed={picked.includes(t)} onClick={() => toggle(t)}>{t}</button>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="field">
            <label htmlFor="f-country">Country</label>
            <select id="f-country" name="country" defaultValue="Bangladesh">
              <option>Bangladesh</option><option>India</option><option>Malaysia</option><option>Other</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="f-qty">Estimated first order</label>
            <select id="f-qty" name="qty" defaultValue="Not sure yet">
              <option>Not sure yet</option><option>Under 10,000 units</option><option>10,000 to 50,000 units</option><option>Over 50,000 units</option>
            </select>
          </div>
        </div>
        <div className="field"><label htmlFor="f-contact">Email or WhatsApp number</label><input id="f-contact" name="contact" ref={contactRef} placeholder="you@company.com or +880 1XXX-XXXXXX" required /></div>
        <button className="btn btn-lime" type="submit"><Roll>Request a quote</Roll><span className="arrow"><Icon id="i-arrow" /></span></button>
        <p className="fine" style={error ? { color: "#B42318" } : undefined}>
          {error ? "Add your name and an email or WhatsApp number so our team can reply." : DEFAULT_MSG}
        </p>
      </div>

      <div className="form-done" hidden={!sent}>
        <div className="ok"><Icon id="i-check" size={26} /></div>
        <h3>Request ready to send</h3>
        <p className="fine">This is a design prototype, so nothing was sent. On the live site this form goes straight to AmLion&apos;s sales team.</p>
        <button className="btn btn-line" type="button" onClick={() => setSent(false)}>Edit request</button>
      </div>
    </form>
  );
}

export function Contact() {
  return (
    <section className="block" id="contact">
      <div className="wrap sky cta">
        <div className="clouds" aria-hidden="true">
          <CloudLayer id="cf3" seed={27} style={{ height: "40%", opacity: 0.85 }} matrix="3.6 0 0 0 -1.6" />
          <Puff css="width:560px;height:200px;left:-200px;bottom:-120px" />
        </div>
        <div className="copy reveal">
          <Label style={{ color: "rgba(255,255,255,.85)" }}>Get in touch</Label>
          <h2 className="h2">Ready to launch your own brand?</h2>
          <p>Tell us what you want to make. A member of our team will come back to you with everything you need to decide.</p>
          <ul className="gets">
            {["Minimum order quantity and pricing", "Production timeline", "Samples and packaging options"].map((t) => (
              <li key={t}><span><Icon id="i-check" size={12} /></span>{t}</li>
            ))}
          </ul>
          <div className="direct">
            <span className="pill"><i><Icon id="i-phone" size={14} /></i>{CONTACT.phone}</span>
            <span className="pill"><i><Icon id="i-mail" size={14} /></i>{CONTACT.email}</span>
          </div>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}
