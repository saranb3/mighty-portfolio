"use client";

import { useState } from "react";

const EMAIL = "saranb3@illinois.edu";
const LINKEDIN_URL = "https://www.linkedin.com/in/saran-burapachaisri/";
const GITHUB_URL = "https://github.com/saranb3";

const socials: {
  icon: "linkedin" | "github" | "mail";
  label: string;
  href: string;
  external?: boolean;
}[] = [
  { icon: "linkedin", label: "LinkedIn", href: LINKEDIN_URL, external: true },
  { icon: "github", label: "GitHub", href: GITHUB_URL, external: true },
  { icon: "mail", label: "Email", href: `mailto:${EMAIL}` },
];

const jiggle =
  "group-hover:[animation:icon-jiggle_0.5s_ease-in-out] group-focus-within:[animation:icon-jiggle_0.5s_ease-in-out]";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText(EMAIL).then(
      () => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      },
      () => {},
    );
  };

  return (
    <footer id="contact" className="bg-ink text-ground">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 lg:px-12 py-7 sm:grid sm:grid-cols-3 sm:items-center">
        <p className="order-2 text-[17px] font-medium text-white sm:order-none sm:justify-self-start">
          © 2026 Saran Burapachaisri
        </p>

        <div className="order-1 w-full max-w-[400px] sm:order-none sm:justify-self-center">
          <p className="mb-2 text-center text-[17px] font-medium text-white">
            Currently listening to:
          </p>
          <iframe
            title="Akon's Beautiful Day on Spotify"
            src="https://open.spotify.com/embed/track/5z7l1HQ9KzqT8yLcViRG1L?utm_source=generator"
            width="100%"
            height={90}
            frameBorder={0}
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            style={{ borderRadius: 12 }}
          />
        </div>

        <ul className="order-3 flex items-center justify-center gap-5 sm:order-none sm:justify-self-end">
          {socials.map((s) => {
            const isMail = s.icon === "mail";
            return (
              <li key={s.href} className="group relative">
                <a
                  href={s.href}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  aria-label={isMail ? `Email ${EMAIL}` : s.label}
                  onClick={isMail ? copyEmail : undefined}
                  className="group block text-white transition-[color,transform] duration-200 hover:-translate-y-0.5 hover:text-white focus-visible:text-white"
                >
                  <Icon name={s.icon} className={`size-7 ${jiggle}`} />
                </a>
                <span
                  aria-hidden
                  className={`pointer-events-none absolute bottom-full left-1/2 z-10 mb-3 -translate-x-1/2 whitespace-nowrap rounded-lg bg-ground px-3 py-1.5 text-[13px] font-semibold text-ink shadow-[0_10px_24px_-8px_rgba(0,0,0,0.55)] transition-opacity duration-200 ${
                    isMail && copied ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {isMail ? (copied ? "Copied!" : EMAIL) : s.label}
                  <span className="absolute left-1/2 top-full size-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-ground" />
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}

function Icon({
  name,
  className,
}: {
  name: "linkedin" | "github" | "mail";
  className?: string;
}) {
  // Brand marks are filled glyphs; the mail icon is line-drawn.
  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
      </svg>
    );
  }
  if (name === "github") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
