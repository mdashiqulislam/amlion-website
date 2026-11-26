"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { DEPARTMENTS, JOBS } from "@/data/careers";
import type { Job } from "@/data/careers";
import { Icon } from "./ui";

/**
 * How the open roles list behaves for any number of roles:
 * - 0 roles: no search or filters (nothing to narrow), a "no open roles right now" panel with Send your CV.
 * - 1 role: search and filters stay, so the section looks the same as it will with more roles.
 * - 2 to 12 roles: every card shows in a two-column grid.
 * - More than 12: the first 12 show, "Show more roles" adds 12 at a time. Changing a filter starts from 12 again.
 * Filters only offer what exists: departments with no open role are left out, and a choice that would give
 * 0 results with the other filters is disabled. No match shows a panel to clear the filters or send a CV.
 * Filters live in the address (?q=&dept=&type=&loc=), so Back from a job page returns to the same list.
 */
const PAGE = 12;

type Filters = { q: string; dept: string; type: string; loc: string };
const NONE: Filters = { q: "", dept: "", type: "", loc: "" };
const FILTER_KEYS = Object.keys(NONE) as (keyof Filters)[];

const haystack = (j: Job) =>
  [j.title, j.dept, j.type, j.location, j.mode, j.experience, j.education, j.salary ?? "", j.summary, ...j.does, ...j.needs].join(" ").toLowerCase();

function matches(j: Job, f: Filters, text: string, skip?: keyof Filters) {
  if (skip !== "dept" && f.dept && j.dept !== f.dept) return false;
  if (skip !== "type" && f.type && j.type !== f.type) return false;
  if (skip !== "loc" && f.loc && j.location !== f.loc) return false;
  const words = f.q.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return words.every((w) => text.includes(w));
}

const roles = (n: number) => `${n} ${n === 1 ? "role" : "roles"}`;

/** Card fields follow the client's feedback: title, location, experience, salary range (under experience), education and apply-by date. */
function JobCard({ job }: { job: Job }) {
  return (
    <article className="jc">
      <h3 className="jc-title"><Link href={`/career/${job.slug}`} className="jc-link">{job.title}</Link></h3>
      <dl className="jc-facts">
        <div><dt>Location</dt><dd>{job.location}</dd></div>
        <div><dt>Experience</dt><dd>{job.experience}</dd></div>
        <div><dt>Education</dt><dd>{job.education}</dd></div>
        {job.salary && <div><dt>Salary range</dt><dd>{job.salary}</dd></div>}
      </dl>
      <div className="jc-foot">
        <b className="jc-deadline">Apply by {job.deadline}</b>
        <span className="jc-go" aria-hidden="true">View &amp; apply <i><Icon id="i-arrow" size={14} /></i></span>
      </div>
    </article>
  );
}

/** Open roles: search, filters with live counts, reset, paging for long lists, and cards that open a dedicated job page. */
export function Jobs() {
  const uid = useId();
  const [all, setAll] = useState<Job[]>(JOBS);
  const [f, setF] = useState<Filters>(NONE);
  const [limit, setLimit] = useState(PAGE);
  const [ready, setReady] = useState(false);
  const grid = useRef<HTMLDivElement>(null);
  const focusFrom = useRef<number | null>(null);

  // Every filter change starts the list from the first page again.
  const set = (p: Partial<Filters>) => { setF((cur) => ({ ...cur, ...p })); setLimit(PAGE); };
  const reset = () => { setF(NONE); setLimit(PAGE); };

  const index = useMemo(() => new Map(all.map((j) => [j.slug, haystack(j)])), [all]);
  const locations = useMemo(() => [...new Set(all.map((j) => j.location))].sort(), [all]);
  const types = useMemo(() => [...new Set(all.map((j) => j.type))], [all]);
  const depts = useMemo(() => DEPARTMENTS.filter((d) => all.some((j) => j.dept === d)), [all]);

  // Restore filters from the address. On the dev server, ?jobs=N swaps in N fake roles to check the states above.
  useEffect(() => {
    const p = new URLSearchParams(location.search);
    const apply = (list: Job[]) => {
      const has = (k: "dept" | "type" | "loc", v: string) => list.some((j) => (k === "dept" ? j.dept : k === "type" ? j.type : j.location) === v);
      const pick = (k: "dept" | "type" | "loc") => { const v = p.get(k) ?? ""; return has(k, v) ? v : ""; };
      setAll(list);
      setF({ q: p.get("q") ?? "", dept: pick("dept"), type: pick("type"), loc: pick("loc") });
      setReady(true);
    };
    const n = Number(p.get("jobs"));
    if (process.env.NODE_ENV === "development" && p.has("jobs") && Number.isInteger(n) && n >= 0) {
      import("@/data/careers-demo").then((m) => apply(m.demoJobs(Math.min(n, 200))));
    } else {
      apply(JOBS);
    }
  }, []);

  useEffect(() => {
    if (!ready) return;
    const p = new URLSearchParams(location.search);
    FILTER_KEYS.forEach((k) => (f[k] ? p.set(k, f[k]) : p.delete(k)));
    const qs = p.toString();
    history.replaceState(history.state, "", `${location.pathname}${qs ? `?${qs}` : ""}${location.hash}`);
  }, [f, ready]);

  const matched = useMemo(() => all.filter((j) => matches(j, f, index.get(j.slug)!)), [all, f, index]);
  const shown = matched.slice(0, limit);
  const left = matched.length - shown.length;
  const countFor = (key: "dept" | "type" | "loc", v: string) =>
    all.filter((j) => matches(j, f, index.get(j.slug)!, key) && (key === "dept" ? j.dept : key === "type" ? j.type : j.location) === v).length;
  const deptAll = all.filter((j) => matches(j, f, index.get(j.slug)!, "dept")).length;
  const active = FILTER_KEYS.filter((k) => f[k].trim());
  const total = all.length;

  // After "Show more", move focus to the first new card so keyboard and screen reader users carry on from there.
  useEffect(() => {
    if (focusFrom.current === null) return;
    grid.current?.querySelectorAll<HTMLAnchorElement>(".jc-link")[focusFrom.current]?.focus();
    focusFrom.current = null;
  }, [limit]);
  const more = () => { focusFrom.current = limit; setLimit((l) => l + PAGE); };

  const status = active.length
    ? left > 0 ? `Showing ${shown.length} of ${matched.length} matching roles` : `${matched.length} of ${roles(total)} match`
    : left > 0 ? `Showing ${shown.length} of ${roles(total)}` : `${total} open ${total === 1 ? "role" : "roles"}`;

  return (
    <section className="block" id="roles" aria-labelledby="roles-h">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="h2" id="roles-h">Open roles <span className="soft">at AML</span></h2>
          <p className="lede center">
            {total === 0
              ? "There are no open roles at the moment. New roles are posted here first."
              : "Search or filter, then open a role to read the details and apply. No account needed."}
          </p>
        </div>

        {total === 0 ? (
          <div className="jempty" role="status">
            <h3>No open roles right now</h3>
            <p>Send us your CV and we will contact you when a role that fits you opens.</p>
            <div className="jempty-actions">
              <Link className="btn btn-dark" href="/career/apply">Send your CV</Link>
            </div>
          </div>
        ) : (
          <>
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
                    {locations.map((l) => { const n = countFor("loc", l); return <option key={l} value={l} disabled={n === 0 && f.loc !== l}>{l} ({n})</option>; })}
                  </select>
                </label>
                <label className="sel" htmlFor={`${uid}-type`}>
                  <span className="lbl">Job type</span>
                  <select id={`${uid}-type`} value={f.type} onChange={(e) => set({ type: e.target.value })}>
                    <option value="">All types</option>
                    {types.map((t) => { const n = countFor("type", t); return <option key={t} value={t} disabled={n === 0 && f.type !== t}>{t} ({n})</option>; })}
                  </select>
                </label>
              </div>

              <div className="depts" role="group" aria-label="Department">
                <button type="button" aria-pressed={!f.dept} className={!f.dept ? "on" : ""} onClick={() => set({ dept: "" })}>
                  All departments <span className="n">{deptAll}</span>
                </button>
                {depts.map((d) => {
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
              <p className="count" role="status" aria-live="polite">{status}</p>
              {active.length > 0 && (
                <div className="active">
                  {f.q.trim() && <span className="pill-on">“{f.q.trim()}”</span>}
                  {f.dept && <span className="pill-on">{f.dept}</span>}
                  {f.loc && <span className="pill-on">{f.loc}</span>}
                  {f.type && <span className="pill-on">{f.type}</span>}
                  <button type="button" className="clear" onClick={reset}>Clear all filters</button>
                </div>
              )}
            </div>

            {shown.length > 0 ? (
              <>
                <div ref={grid} className="jgrid">{shown.map((j) => <JobCard key={j.slug} job={j} />)}</div>
                {left > 0 && (
                  <div className="jmore">
                    <button type="button" className="btn btn-line" onClick={more}>
                      Show {Math.min(PAGE, left)} more {Math.min(PAGE, left) === 1 ? "role" : "roles"}
                    </button>
                    <span>{left} more {left === 1 ? "role" : "roles"} to see</span>
                  </div>
                )}
              </>
            ) : (
              <div className="jempty" role="status">
                <h3>No roles match your search</h3>
                <p>Try fewer words, a different department or all locations. You can also clear everything and see {total === 1 ? "the open role" : `all ${total} roles`}.</p>
                <div className="jempty-actions">
                  <button type="button" className="btn btn-dark" onClick={reset}>Clear all filters</button>
                  <Link className="btn btn-line" href="/career/apply">Submit your CV instead</Link>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
