import type { CSSProperties, ReactNode } from "react";
import { SPRITE } from "@/data/sprite";
import { sv } from "@/lib/sv";

/** Hidden SVG symbol library referenced by <Sym /> everywhere on the page. */
export function Sprite() {
  return <svg className="sprite" aria-hidden="true" focusable="false" dangerouslySetInnerHTML={{ __html: SPRITE }} />;
}

/** One illustration from the sprite, coloured by CSS custom properties in `css`. */
export function Sym({ id, view = "0 0 80 200", css = "", style, className, ...rest }: {
  id: string;
  view?: string;
  css?: string;
  style?: CSSProperties;
  className?: string;
  width?: number | string;
  height?: number | string;
}) {
  return (
    <svg className={className} viewBox={view} style={{ ...sv(css), ...style }} width={rest.width} height={rest.height} aria-hidden="true">
      <use href={`#${id}`} />
    </svg>
  );
}

export function Icon({ id, size = 16 }: { id: string; size?: number }) {
  return (
    <svg width={size} height={size} aria-hidden="true">
      <use href={`#${id}`} />
    </svg>
  );
}

/** Button label that rolls up on hover. */
export function Roll({ children }: { children: string }) {
  return (
    <span className="roll">
      <span>{children}</span>
      <span aria-hidden="true">{children}</span>
    </span>
  );
}

export function Logo({ href = "#top" }: { href?: string }) {
  return (
    <a className="logo" href={href} aria-label="AML Consumer Care Ltd home">
      <svg aria-hidden="true"><use href="#i-logo" /></svg>
      AML
    </a>
  );
}

export function Label({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return <span className="label" style={style}>{children}</span>;
}

/** Circular certification seal with text running round the edge. */
export function Seal({ code, sub, color, className, label, style }: {
  code: string; sub: string; color: string; className?: string; label: string; style?: CSSProperties;
}) {
  const id = `seal-${code}-${sub}`.replace(/[^a-zA-Z0-9-]/g, "");
  const size = code.length > 5 ? 12 : code.length > 4 ? 14 : 17;
  return (
    <svg className={className} style={style} viewBox="0 0 120 120" role="img" aria-label={label}>
      <defs>
        <path id={id} d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0" />
      </defs>
      <circle cx="60" cy="60" r="58" fill={color} opacity=".12" />
      <circle cx="60" cy="60" r="52" fill="#fff" />
      <circle cx="60" cy="60" r="52" fill="none" stroke={color} strokeWidth="1.5" />
      <text className="ringtext" fill={color}>
        <textPath href={`#${id}`}>{`CERTIFIED · ${sub} · CERTIFIED · ${sub} ·`}</textPath>
      </text>
      <circle cx="60" cy="60" r="34" fill={color} />
      <text x="60" y={code.length > 4 ? 64 : 66} textAnchor="middle" fontFamily="var(--font-jakarta), sans-serif" fontWeight="700" fontSize={size} fill="#fff" letterSpacing="-.5">{code}</text>
    </svg>
  );
}

/** Soft cloud layer: fractal noise thresholded to white. */
export function CloudLayer({ id, seed, height = 640, className = "", style, freq = "0.0032 0.0085", octaves = 5, matrix = "3.6 0 0 0 -1.55" }: {
  id: string; seed: number; height?: number; className?: string; style?: CSSProperties; freq?: string; octaves?: number; matrix?: string;
}) {
  return (
    <svg className={`cloud-layer ${className}`.trim()} viewBox={`0 0 1600 ${height}`} preserveAspectRatio="xMidYMax slice" style={style}>
      <filter id={id} x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency={freq} numOctaves={octaves} seed={seed} />
        <feColorMatrix values={`0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  ${matrix}`} />
        {id === "cf1" && <feGaussianBlur stdDeviation="1.2" />}
      </filter>
      <rect width="1600" height={height} filter={`url(#${id})`} />
    </svg>
  );
}

export function Puff({ css }: { css: string }) {
  return <div className="puff" style={sv(css)} />;
}
