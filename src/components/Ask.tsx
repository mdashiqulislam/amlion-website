"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { CONTACT } from "@/data/content";
import { CloudLayer, Icon, Puff, Roll } from "./ui";

const DEFAULT_MSG = "We use your details only to answer your question.";
const TOPICS = ["A product question", "Is this pack genuine?", "Where can I buy AmLion?", "Something else"];

function QuestionForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);

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
        <h3>Ask us a question</h3>
        <div className="field"><label htmlFor="q-name">Your name</label><input id="q-name" name="name" ref={nameRef} autoComplete="name" placeholder="Your name" required /></div>
        <div className="field"><label htmlFor="q-topic">What is it about?</label>
          <select id="q-topic" name="topic" defaultValue={TOPICS[0]}>{TOPICS.map((t) => <option key={t}>{t}</option>)}</select>
        </div>
        <div className="field"><label htmlFor="q-msg">Your question</label><textarea id="q-msg" name="message" rows={3} placeholder="Tell us what you would like to know" /></div>
        <div className="field"><label htmlFor="q-contact">Phone, WhatsApp or email</label><input id="q-contact" name="contact" ref={contactRef} placeholder="+880 1XXX-XXXXXX or you@example.com" required /></div>
        <button className="btn btn-lime" type="submit"><Roll>Send question</Roll><span className="arrow"><Icon id="i-arrow" /></span></button>
        <p className="fine" style={error ? { color: "#B42318" } : undefined}>
          {error ? "Add your name and a phone number or email so we can reply." : DEFAULT_MSG}
        </p>
      </div>

      <div className="form-done" hidden={!sent}>
        <div className="ok"><Icon id="i-check" size={26} /></div>
        <h3>Question ready to send</h3>
        <p className="fine">This is a design prototype, so nothing was sent. On the live site your question goes to the AmLion team.</p>
        <button className="btn btn-line" type="button" onClick={() => setSent(false)}>Edit question</button>
      </div>
    </form>
  );
}

export function Ask() {
  return (
    <section className="block" id="contact">
      <div className="wrap sky cta">
        <div className="clouds" aria-hidden="true">
          <CloudLayer id="cf3" seed={27} style={{ height: "40%", opacity: 0.85 }} matrix="3.6 0 0 0 -1.6" />
          <Puff css="width:560px;height:200px;left:-200px;bottom:-120px" />
        </div>
        <div className="copy reveal">
          <h2 className="h2">Got a question about AmLion?</h2>
          <p>Ask about a product, check a pack, or find out where to buy. A member of the AmLion team will reply.</p>
          <div className="direct">
            <span className="pill"><i><Icon id="i-phone" size={14} /></i>{CONTACT.phone}</span>
            <span className="pill"><i><Icon id="i-mail" size={14} /></i>{CONTACT.email}</span>
          </div>
        </div>
        <QuestionForm />
      </div>
    </section>
  );
}
