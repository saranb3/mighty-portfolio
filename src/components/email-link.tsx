"use client";

import { useState } from "react";

const EMAIL = "saranb3@illinois.edu";

export function EmailLink() {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // ignore — mailto fallback below still runs
    }
    window.location.href = `mailto:${EMAIL}`;
  }

  return (
    <span className="relative inline-flex">
      <button
        type="button"
        onClick={handleClick}
        aria-label={`Email ${EMAIL}`}
        className="inline-flex items-center justify-center w-9 h-9 text-ink opacity-70 transition-opacity hover:opacity-80 cursor-pointer"
      >
        <svg width="33" height="33" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M4 7L12 13L20 7"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <span
        aria-hidden={!copied}
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-7 whitespace-nowrap rounded-md bg-ink px-2 py-1 text-[12px] font-medium text-paper transition-opacity duration-200"
        style={{ opacity: copied ? 1 : 0 }}
      >
        copied!
      </span>
    </span>
  );
}
