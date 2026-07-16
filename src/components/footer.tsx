"use client";

import { useState } from "react";

const EMAIL = "saranb3@illinois.edu";
const RESUME_URL =
  "https://drive.google.com/file/d/1RaWqsNq4lDRwzBSNSBBXOtucqTldhRCW/view?usp=sharing";

export function Footer() {
  return (
    <footer id="contact" className="on-ink bg-ink text-ground">
      <div className="mx-auto max-w-6xl px-6 lg:px-12 pt-20 lg:pt-28 pb-10">
        <p className="text-[18px] lg:text-[20px] font-medium text-ground/75">
          Want a PM who can build it?
        </p>

        <div className="mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-4">
          <a
            href={`mailto:${EMAIL}`}
            className="display font-semibold text-ground text-[clamp(1.9rem,6vw,4.25rem)] leading-[1.05] no-underline break-all hover:underline underline-offset-8 decoration-[3px]"
          >
            {EMAIL}
          </a>
          <CopyEmailButton />
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-[17px] font-semibold">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ground no-underline hover:underline underline-offset-4"
          >
            Resume <span aria-hidden>↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/saran-burapachaisri/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ground no-underline hover:underline underline-offset-4"
          >
            LinkedIn <span aria-hidden>↗</span>
          </a>
        </div>

        <div className="mt-16 pt-6 border-t border-ground/15 flex flex-col sm:flex-row justify-between gap-2 text-[14px] text-ground/60">
          <span>© 2026 Mighty Burapachaisri</span>
          <span>Designed &amp; built while listening to John Summit</span>
        </div>
      </div>
    </footer>
  );
}

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — the mailto link is right there.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-1.5 rounded-full border border-ground/30 px-4 py-1.5 text-[14px] font-semibold text-ground/85 transition-colors duration-200 hover:border-ground hover:text-ground"
    >
      {copied ? "Copied!" : "Copy"}
      <span aria-live="polite" className="sr-only">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
    </button>
  );
}
