import type { CSSProperties } from "react";

/**
 * Turns an inline CSS string into a React style object, keeping custom
 * properties (--t1, --b1 ...) as they are. Used for the illustration colours.
 */
export function sv(css: string): CSSProperties {
  const out: Record<string, string> = {};
  for (const part of css.split(";")) {
    const i = part.indexOf(":");
    if (i < 0) continue;
    const key = part.slice(0, i).trim();
    const val = part.slice(i + 1).trim();
    if (!key) continue;
    out[key.startsWith("--") ? key : key.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())] = val;
  }
  return out as CSSProperties;
}
