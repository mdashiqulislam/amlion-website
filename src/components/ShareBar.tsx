"use client";

import { useState } from "react";

/** Copy the link or share it on WhatsApp or Facebook. Uses the address the reader is on. */
export function ShareBar({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const url = () => (typeof location !== "undefined" ? location.href.split("#")[0] : "");
  const open = (href: string) => window.open(href, "_blank", "noopener,noreferrer");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this link", url());
    }
  };

  return (
    <div className="share" role="group" aria-label="Share this article">
      <span className="share-l">Share</span>
      <button type="button" onClick={copy}>{copied ? "Link copied" : "Copy link"}</button>
      <button type="button" onClick={() => open(`https://wa.me/?text=${encodeURIComponent(`${title} ${url()}`)}`)}>WhatsApp</button>
      <button type="button" onClick={() => open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url())}`)}>Facebook</button>
      <span className="sr" role="status" aria-live="polite">{copied ? "Link copied to clipboard" : ""}</span>
    </div>
  );
}
