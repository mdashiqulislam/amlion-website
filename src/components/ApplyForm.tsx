"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Icon, Roll } from "./ui";

const MAX_CV = 5 * 1024 * 1024;
const CV_OK = /\.(pdf|docx?)$/i;

type Key = "name" | "phone" | "email" | "cv";
type Errors = Partial<Record<Key, string>>;
const ORDER: Key[] = ["name", "phone", "email", "cv"];
const LABEL: Record<Key, string> = { name: "Full name", phone: "Phone or WhatsApp", email: "Email", cv: "Your CV" };

/**
 * Application form shared by the job pages and the general application page.
 * Fields are uncontrolled so what the candidate typed survives any validation error.
 * Prototype: nothing is sent; the confirmation says so.
 */
export function ApplyForm({ title, general = false }: { title: string; general?: boolean }) {
  const [errors, setErrors] = useState<Errors>({});
  const [cv, setCv] = useState<File | null>(null);
  const [drag, setDrag] = useState(false);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

  const pick = (f: File | undefined) => {
    if (!f) return;
    if (!CV_OK.test(f.name)) { setCv(null); return setErrors((e) => ({ ...e, cv: "That file type is not supported. Please upload a PDF or Word file." })); }
    if (f.size > MAX_CV) { setCv(null); return setErrors((e) => ({ ...e, cv: "That file is over 5 MB. Please upload a smaller file." })); }
    setCv(f);
    setErrors((e) => ({ ...e, cv: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (busy) return;
    const d = new FormData(formRef.current!);
    const name = String(d.get("name") ?? "").trim();
    const phone = String(d.get("phone") ?? "").trim();
    const email = String(d.get("email") ?? "").trim();
    const next: Errors = {};
    if (!name) next.name = "Enter your full name.";
    if (phone.replace(/\D/g, "").length < 10) next.phone = "Enter a phone or WhatsApp number we can reach you on, for example 01711 000000.";
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email address, for example you@example.com.";
    if (!cv) next.cv = errors.cv ?? "Add your CV as a PDF or Word file.";
    setErrors(next);
    if (ORDER.some((k) => next[k])) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setBusy(true);
    window.setTimeout(() => { setBusy(false); setDone(true); }, 900);
  };

  const failed = ORDER.filter((k) => errors[k]);
  const msg = (k: Key) => errors[k] && <span className="f-err" id={`e-${k}`}>{errors[k]}</span>;
  const aria = (k: Key) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `e-${k}` : undefined });

  return (
    <div className="apply-box">
      <form ref={formRef} className="apply" noValidate onSubmit={onSubmit} hidden={done} aria-busy={busy}>
        {failed.length > 0 && (
          <div className="err-sum" role="alert" tabIndex={-1} ref={summaryRef}>
            <b>Please fix {failed.length === 1 ? "1 thing" : `${failed.length} things`} before you submit</b>
            <ul>
              {failed.map((k) => (
                <li key={k}><a href={`#a-${k}`} onClick={(e) => { e.preventDefault(); formRef.current?.querySelector<HTMLElement>(`[data-f="${k}"]`)?.focus(); }}>{LABEL[k]}: {errors[k]}</a></li>
              ))}
            </ul>
          </div>
        )}

        <div className={`field${errors.name ? " bad" : ""}`}>
          <label htmlFor="a-name">Full name <span aria-hidden="true">*</span></label>
          <input id="a-name" name="name" data-f="name" autoComplete="name" placeholder="Your full name" required {...aria("name")} />
          {msg("name")}
        </div>
        <div className="row">
          <div className={`field${errors.phone ? " bad" : ""}`}>
            <label htmlFor="a-phone">Phone or WhatsApp <span aria-hidden="true">*</span></label>
            <input id="a-phone" name="phone" data-f="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="01711 000000" required {...aria("phone")} />
            {msg("phone")}
          </div>
          <div className={`field${errors.email ? " bad" : ""}`}>
            <label htmlFor="a-email">Email <span aria-hidden="true">*</span></label>
            <input id="a-email" name="email" data-f="email" type="email" autoComplete="email" placeholder="you@example.com" required {...aria("email")} />
            {msg("email")}
          </div>
        </div>

        <div className={`field${errors.cv ? " bad" : ""}`}>
          <span className="lbl" id="a-cv-l">Your CV <span aria-hidden="true">*</span></span>
          <div
            className={`drop${drag ? " over" : ""}${cv ? " has" : ""}`}
            onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
            onDragLeave={() => setDrag(false)}
            onDrop={(e) => { e.preventDefault(); setDrag(false); pick(e.dataTransfer.files[0]); }}
          >
            <input
              ref={fileRef}
              id="a-cv"
              data-f="cv"
              type="file"
              accept=".pdf,.doc,.docx"
              aria-labelledby="a-cv-l"
              {...aria("cv")}
              onChange={(e: ChangeEvent<HTMLInputElement>) => pick(e.target.files?.[0])}
            />
            {cv ? (
              <span className="drop-file">
                <i><Icon id="i-check" size={14} /></i>
                <b>{cv.name}</b>
                <small>{cv.size < 1024 * 100 ? `${Math.max(1, Math.round(cv.size / 1024))} KB` : `${(cv.size / 1024 / 1024).toFixed(1)} MB`}</small>
                <button type="button" onClick={() => { setCv(null); if (fileRef.current) fileRef.current.value = ""; }}>Remove</button>
              </span>
            ) : (
              <label htmlFor="a-cv" className="drop-empty">
                <b>Choose a file</b> or drop it here
                <small>PDF or Word, up to 5 MB</small>
              </label>
            )}
          </div>
          {msg("cv")}
        </div>

        <div className="field">
          <label htmlFor="a-note">Anything else you would like us to know <small>(optional)</small></label>
          <textarea id="a-note" name="note" rows={3} placeholder="A few lines about you or why this role." />
        </div>

        <button className="btn btn-lime" type="submit" disabled={busy}>
          {busy ? <span className="spin-label"><i className="spin" aria-hidden="true" />Submitting, please wait</span> : <Roll>{general ? "Submit your CV" : "Submit application"}</Roll>}
          <span className="arrow"><Icon id="i-arrow" /></span>
        </button>
        <p className="fine">
          We use these details only to review your application. Read the <Link href="/career/privacy">recruitment privacy notice</Link>. No account needed.
        </p>
      </form>

      {done && (
        <div className="apply-done" role="status">
          <div className="ok"><Icon id="i-check" size={26} /></div>
          <h3>{general ? "Your CV is ready to send" : "Your application is ready to send"}</h3>
          <p>
            {general ? "Your CV is" : <>Your application for <b>{title}</b> is</>} ready to go to the AML recruitment team.
            This is a design prototype, so nothing was sent yet.
          </p>
          <div className="apply-done-actions">
            <Link className="btn btn-dark" href="/career#roles"><Roll>View other roles</Roll><span className="arrow"><Icon id="i-arrow" /></span></Link>
            <button className="btn btn-line" type="button" onClick={() => setDone(false)}>Edit my application</button>
          </div>
        </div>
      )}
    </div>
  );
}
