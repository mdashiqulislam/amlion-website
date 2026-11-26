import { DEPARTMENTS, JOBS } from "./careers";
import type { Job } from "./careers";

/**
 * DEVELOPMENT ONLY. Fake roles for checking how the open roles list behaves with 0, 1 or many jobs.
 * Open /career?jobs=0, /career?jobs=1 or /career?jobs=50 on the dev server. Production always shows the real JOBS.
 */
const PLACES = ["Dhaka", "Chattogram", "Gazipur", "Sylhet", "Khulna", "Rajshahi", "All Over Bangladesh"];
const LEVELS = ["Executive", "Officer", "Senior Executive", "Manager", "Assistant Manager"];

export function demoJobs(n: number): Job[] {
  if (n <= JOBS.length) return JOBS.slice(0, n);
  const base = JOBS[0];
  return Array.from({ length: n }, (_, i) => {
    const dept = DEPARTMENTS[i % DEPARTMENTS.length];
    const title = `${dept} ${LEVELS[i % LEVELS.length]}`;
    return {
      ...base,
      slug: `demo-${i + 1}`,
      title,
      dept,
      location: PLACES[(i * 3) % PLACES.length],
      type: i % 9 === 4 ? "Internship" : "Full-time",
      experience: i % 9 === 4 ? "No experience needed" : `${(i % 5) + 1}+ years`,
      salary: i % 4 === 3 ? undefined : base.salary,
    };
  });
}
