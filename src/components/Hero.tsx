import type { CSSProperties } from "react";
import { HeroNav } from "./Nav";
import { HeroVideo } from "./HeroVideo";
import { Icon, Roll } from "./ui";

const delay = (d: string) => ({ "--d": d }) as CSSProperties;

/**
 * Hero from the Figma frame "Hero Section" (1440 x 1237): a 1408 x 1205 card with a
 * looping background video, the nav on top, a centred text block, and a dark fade for readability.
 */
export function Hero() {
  return (
    <header className="hero2" id="top">
      <HeroVideo />
      <div className="hero2-shade" aria-hidden="true" />

      <HeroNav />

      <div className="hero2-copy">
        <span className="hero2-chip fade-up" style={delay(".05s")}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M9 1.5 15.75 4v4.5c0 3.9-2.85 7-6.75 8-3.9-1-6.75-4.1-6.75-8V4L9 1.5Z" fill="#fff" fillOpacity=".2" stroke="#fff" strokeWidth="1.2" strokeLinejoin="round" />
            <path d="m6.75 9.2 1.75 2 4.25-4.45" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Halal Certified &amp; Private Label Manufacturer
        </span>

        <div className="hero2-text">
          <h1 className="fade-up" style={delay(".15s")}>
            Made with Care. Backed <br className="br-lg" />
            by <em>Verified</em> Standards
          </h1>
          <p className="fade-up" style={delay(".3s")}>
            AML brings oral and personal care manufacturing experience to businesses across <strong>30+ countries</strong>, having helped develop products for nearly <strong>80 brands.</strong>
          </p>
        </div>

        <div className="hero2-cta fade-up" style={delay(".45s")}>
          <a className="hero2-btn" href="#products">
            <Roll>Explore Products</Roll>
            <span className="arrow"><Icon id="i-arrow" /></span>
          </a>
          <span className="hero2-note">14 Million Units. Every Month</span>
        </div>
      </div>
    </header>
  );
}
