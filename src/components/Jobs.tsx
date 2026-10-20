"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useState } from "react";
import { DEPARTMENTS, JOBS } from "@/data/careers";
import type { Job } from "@/data/careers";
import { Icon } from "./ui";

const LOCATIONS = [...new Set(JOBS.map((j) => j.location))].sort();
const TYPES = [...new Set(JOBS.map((j) => j.type))];

type Filters = { q: string; dept: string; type: string; loc: string };
const NONE: Filters = { q: "", dept: "", type: "", loc: "" };

const haystack = (j: Job) =>
  [j.title, j.dept, j.type, j.location, j.mode, j.experience, j.education, j.summary, ...j.does, ...j.needs].join(" ").toLowerCase();
const INDEX = new Map(JOBS.map((j) => [j.slug, haystack(j)]));

function matches(j: Job, f: Filters, skip?: keyof Filters) {
  if (skip !== "dept" && f.dept && j.dept !== f.dept) return false;
  if (skip !== "type" && f.type && j.type !== f.type) return false;
  if (skip !== "loc" && f.loc && j.location !== f.loc) return false;
  const words = f.q.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return words.every((w) => INDEX.get(j.slug)!.includes(w));
}

function JobCard({ job }: { job: Job }) {
  return (
    <article className="jc">
      <div className="jc-top">
        <span className="jc-dept">{job.dept}</span>
        <span className={`jc-type${job.type === "Internship" ? " intern" : ""}`}>{job.type}</span>
      </div>
      <h3 className="jc-title"><Link href={`/career/${job.slug}`} className="jc-link">{job.title}</Link></h3>
      <p className="jc-sum">{job.summary}</p>
      <dl className="jc-facts">
        <div><dt>Location</dt><dd>{job.location} · {job.mode}</dd></div>
        <div><dt>Experience</dt><dd>{job.experience}</dd></div>
        <div className="wide"><dt>Education</dt><dd>{job.education}</dd></div>
      </dl>
      <div className="jc-foot">
        <span className="jc-dates">
          <span>Posted {job.posted}</span>
          <b>Apply by {job.deadline}</b>
        </span>
        <span className="jc-go" aria-hidden="true">View &amp; apply <i><Icon id="i-arrow" size={14} /></i></span>
      </div>
    </article>
  );
}

/** Open roles: search, filters with live counts, reset, and cards that open a dedicated job page. */
export function Jobs() {
  const uid = useId();
  const [f, setF] = useState<Filters>(NONE);
  const [ready, setReady] = useState(false);
  const set = (p: Partial<Filters>) => setF((cur) => ({ ...cur, ...p }));

  // Restore filters from the address, so Back from a job page returns to the same list.
  useEffect(() => {
    const p = new URLSearchParams(location.search);
    const dept = p.get("dept") ?? "";
    const type = p.get("type") ?? "";
    const loc = p.get("loc") ?? "";
    setF({
      q: p.get("q") ?? "",
      dept: (DEPARTMENTS as readonly string[]).includes(dept) ? dept : "",
      type: TYPES.includes(type as Job["type"]) ? type : "",
      loc: LOCATIONS.includes(loc) ? loc : "",
    });
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const p = new URLSearchParams();
    (Object.keys(f) as (keyof Filters)[]).forEach((k) => f[k] && p.set(k, f[k]));
    const qs = p.toString();
    history.replaceState(history.state, "", `${location.pathname}${qs ? `?${qs}` : ""}${location.hash}`);
  }, [f, ready]);

  const shown = useMemo(() => JOBS.filter((j) => matches(j, f)), [f]);
  const countFor = (key: "dept" | "type" | "loc", v: string) => JOBS.filter((j) => matches(j, { ...f, [key]: "" }, key) && (key === "dept" ? j.dept === v : key === "type" ? j.type === v : j.location === v)).length;
  const deptAll = JOBS.filter((j) => matches(j, f, "dept")).length;
  const active = (Object.keys(f) as (keyof Filters)[]).filter((k) => f[k].trim());

  return (
    <section className="block" id="roles" aria-labelledby="roles-h">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="h2" id="roles-h">Open roles <span className="soft">at AML</span></h2>
          <p className="lede center">Search or filter, then open a role to read the details and apply. No account needed.</p>
        </div>

        <div className="jobs-tools" role="search" aria-label="Search and filter open roles">
          <div className="jt-row">
            <label className="search" htmlFor={`${uid}-q`}>
              <span className="lbl">Search roles</span>
              <span className="search-box">
                <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><circle cx="8" cy="8" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.7" /><path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
                <input id={`${uid}-q`} type="search" value={f.q} onChange={(e) => set({ q: e.target.value })} placeholder="Job title, department or keyword" autoComplete="off" />
              </span>
            </label>
            <label className="sel" htmlFor={`${uid}-loc`}>
              <span className="lbl">Location</span>
              <select id={`${uid}-loc`} value={f.loc} onChange={(e) => set({ loc: e.target.value })}>
                <option value="">All locations</option>
                {LOCATIONS.map((l) => <option key={l} value={l}>{l} ({countFor("loc", l)})</option>)}
              </select>
            </label>
            <label className="sel" htmlFor={`${uid}-type`}>
              <span className="lbl">Job type</span>
              <select id={`${uid}-type`} value={f.type} onChange={(e) => set({ type: e.target.value })}>
                <option value="">All types</option>
                {TYPES.map((t) => <option key={t} value={t}>{t} ({countFor("type", t)})</option>)}
              </select>
            </label>
          </div>

          <div className="depts" role="group" aria-label="Department">
            <button type="button" aria-pressed={!f.dept} className={!f.dept ? "on" : ""} onClick={() => set({ dept: "" })}>
              All departments <span className="n">{deptAll}</span>
            </button>
            {DEPARTMENTS.map((d) => {
              const n = countFor("dept", d);
              return (
                <button key={d} type="button" aria-pressed={f.dept === d} className={f.dept === d ? "on" : ""} disabled={n === 0 && f.dept !== d} onClick={() => set({ dept: f.dept === d ? "" : d })}>
                  {f.dept === d && <Icon id="i-check" size={14} />}{d} <span className="n">{n}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="jobs-status">
          <p className="count" role="status" aria-live="polite">
            {active.length ? `Showing ${shown.length} of ${JOBS.length} roles` : `${JOBS.length} open roles`}
          </p>
          {active.length > 0 && (
            <div className="active">
              {f.q.trim() && <span className="pill-on">“{f.q.trim()}”</span>}
              {f.dept && <span className="pill-on">{f.dept}</span>}
              {f.loc && <span className="pill-on">{f.loc}</span>}
              {f.type && <span className="pill-on">{f.type}</span>}
              <button type="button" className="clear" onClick={() => setF(NONE)}>Clear all filters</button>
            </div>
          )}
        </div>

        {shown.length > 0 ? (
          <div className="jgrid">{shown.map((j) => <JobCard key={j.slug} job={j} />)}</div>
        ) : (
          <div className="jempty" role="status">
            <h3>No roles match your search</h3>
            <p>Try fewer words, a different department or all locations. You can also clear everything and see all {JOBS.length} roles.</p>
            <div className="jempty-actions">
              <button type="button" className="btn btn-dark" onClick={() => setF(NONE)}>Clear all filters</button>
              <Link className="btn btn-line" href="/career/apply">Submit your CV instead</Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
