"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const EMAIL = "saranb3@illinois.edu";
const RESUME_URL =
  "https://drive.google.com/file/d/1FHCjLk-L367kzPA0KwZU3x6ogWSD7FBb/view?usp=sharing";
const LINKEDIN_URL = "https://www.linkedin.com/in/saran-burapachaisri/";
const GITHUB_URL = "https://github.com/saranb3";

const actions: {
  icon: "mail" | "file" | "linkedin" | "github";
  label: string;
  href: string;
  external?: boolean;
}[] = [
  { icon: "mail", label: "Email", href: `mailto:${EMAIL}` },
  { icon: "file", label: "Resume", href: RESUME_URL, external: true },
  { icon: "linkedin", label: "LinkedIn", href: LINKEDIN_URL, external: true },
  { icon: "github", label: "GitHub", href: GITHUB_URL, external: true },
];

const stickers = [
  { label: "🐶 I have eight dogs", tilt: "-rotate-6" },
  { label: "⚽ Liverpool, YWNA!", tilt: "rotate-3" },
  { label: "☕ Love cold brews", tilt: "-rotate-2" },
  { label: "✈️ 7 countries so far", tilt: "rotate-6" },
];

const postcards = [
  {
    src: "/images/mighty-1.png",
    alt: "Mighty at the beach in Santa Monica",
    caption: "Beach Day @ Santa Monica",
  },
  {
    src: "/images/soccer.png",
    alt: "Mighty playing football",
    caption: "Match Day @ Chelsea Piers",
  },
  {
    src: "/images/pitch.JPG",
    alt: "Mighty on the pitch",
    caption: "Pitching @ Bangkok ",
  },
  {
    src: "/images/photography.jpeg",
    alt: "A photo Mighty shot on his Fujifilm X-T50",
    caption: "Photographing @ West Village",
  },
];

const SLIDE_MS = 3800;

/* Inline company logo, sized to the surrounding text. Brand-colored marks show
   as tight rounded tiles; `dropWhite` blends out a white background so a
   dark-on-white mark sits directly on the page. */
function LogoChip({
  src,
  alt,
  size,
  dropWhite,
}: {
  src: string;
  alt: string;
  size: number;
  dropWhite?: boolean;
}) {
  if (dropWhite) {
    return (
      <Image
        src={src}
        alt={alt}
        title={alt}
        width={size}
        height={size}
        className="mx-0.5 inline-block h-[1.3em] w-auto align-[-0.3em] mix-blend-multiply"
      />
    );
  }
  return (
    <span className="mx-0.5 inline-flex overflow-hidden rounded-[5px] align-[-0.3em] ring-1 ring-black/10 shadow-sm">
      <Image
        src={src}
        alt={alt}
        title={alt}
        width={size}
        height={size}
        className="h-[1.3em] w-auto"
      />
    </span>
  );
}

function ActionIcon({
  name,
  className,
}: {
  name: "mail" | "file" | "linkedin" | "github";
  className?: string;
}) {
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
  const line = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };
  if (name === "file") {
    return (
      <svg {...line}>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
      </svg>
    );
  }
  return (
    <svg {...line}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

/* "Snapshot" hero — photo-led and personality-forward: a tilted polaroid that
   drifts through Mighty's snapshots on its own, fact stickers, the greeting in
   the headline. Warmth with receipts. */
export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
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

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % postcards.length),
      SLIDE_MS,
    );
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section id="about" className="relative scroll-mt-16 bg-ground overflow-hidden px-6 lg:px-12 pt-36 lg:pt-44 pb-12 lg:pb-16">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-[7fr_5fr] gap-14 lg:gap-20 items-center">
        <div>
          <h1
            className="display font-bold text-ink text-[clamp(2.9rem,6vw,5rem)] leading-[1.02] fade-up"
            style={{ animationDelay: "0.05s" }}
          >
            Hello, I&rsquo;m Mighty!
          </h1>

          <p
            className="font-sans mt-5 text-[clamp(1.2rem,1.9vw,1.6rem)] leading-[1.4] text-ink max-w-[30ch] fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Rising senior studying{" "}
            <span className="font-bold italic">Computer Science &amp; Statistics</span> @ University of{" "}
            <Image
              src="/images/uiuc.png"
              alt="University of Illinois"
              title="University of Illinois"
              width={512}
              height={574}
              className="inline-block h-[1.05em] w-auto align-[-0.14em]"
            />
            llinois.
            <br /><br />
            <span className="font-bold italic">PM Intern</span> @ Zebra Technologies{" "}
            <LogoChip src="/images/logos/zebra.png" alt="Zebra Technologies" size={1024} /> 
            <br />
            Prev. @ {""}Bangkok Bank {" "}
            <LogoChip src="/images/logos/bangkokbank.jpeg" alt="Bangkok Bank" size={447} />,{" "}
             AirEstate <LogoChip src="/images/logos/airestate.jpeg" alt="AirEstate" size={100} dropWhite />.
            <br /><br />
            Outside of work, you can find me playing football, lifting weights, drinking coffee, or taking photos!
          </p>


          <div
            className="mt-9 flex items-center gap-6 fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            {actions.map((a) => {
              const isMail = a.icon === "mail";
              return (
                <div key={a.href} className="group relative">
                  <a
                    href={a.href}
                    target={a.external ? "_blank" : undefined}
                    rel={a.external ? "noopener noreferrer" : undefined}
                    aria-label={isMail ? `Email ${EMAIL}` : a.label}
                    onClick={isMail ? copyEmail : undefined}
                    className="block text-ink transition-[transform,opacity] duration-200 hover:-translate-y-0.5 hover:opacity-70"
                  >
                    <ActionIcon name={a.icon} className="size-7" />
                  </a>
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute bottom-full left-1/2 z-10 mb-2.5 -translate-x-1/2 whitespace-nowrap rounded-lg bg-ink px-3 py-1.5 text-[13px] font-semibold text-ground shadow-[0_10px_24px_-8px_rgba(22,21,19,0.5)] transition-opacity duration-200 ${
                      isMail && copied
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                    }`}
                  >
                    {isMail ? (copied ? "Copied!" : EMAIL) : a.label}
                    <span className="absolute left-1/2 top-full size-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-ink" />
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Auto-advancing polaroid slideshow + stickers */}
        <div className="relative fade-up" style={{ animationDelay: "0.3s" }}>
          <figure
            className="relative rotate-2 bg-white p-3 pb-14 w-[min(100%,400px)] mx-auto shadow-[0_28px_60px_-28px_rgba(22,21,19,0.4)]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              {postcards.map((p, i) => {
                const active = i === index;
                return (
                  <Image
                    key={p.src}
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 400px, 90vw"
                    priority={i === 0}
                    className="object-cover"
                    style={{
                      opacity: active ? 1 : 0,
                      transform: active ? "scale(1.06)" : "scale(1)",
                      transition:
                        "opacity 1100ms ease, transform 4600ms ease-out",
                    }}
                  />
                );
              })}

              {/* Slide indicators */}
              <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center gap-1.5">
                {postcards.map((p, i) => (
                  <button
                    key={p.src}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show ${p.caption}`}
                    aria-current={i === index}
                    className={`size-2 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.4)] transition-all duration-300 ${
                      i === index ? "w-5 bg-white" : "bg-white/60 hover:bg-white/90"
                    }`}
                  />
                ))}
              </div>
            </div>

            <figcaption className="absolute inset-x-0 bottom-4 h-6 text-center">
              {postcards.map((p, i) => (
                <span
                  key={p.src}
                  className={`ital absolute inset-x-0 text-[18px] text-ink-soft transition-opacity duration-700 ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {p.caption}
                </span>
              ))}
            </figcaption>
          </figure>

          {/* Stickers — pinned around the polaroid on large screens */}
          <div className="hidden lg:block" aria-hidden>
            <span className={`absolute -left-10 top-6 ${stickers[0].tilt} rounded-full bg-panel border border-line px-4 py-2 text-[15px] font-semibold text-ink shadow-sm`}>
              {stickers[0].label}
            </span>
            <span className={`absolute -right-6 top-1/4 ${stickers[1].tilt} rounded-full bg-panel border border-line px-4 py-2 text-[15px] font-semibold text-ink shadow-sm`}>
              {stickers[1].label}
            </span>
            <span className={`absolute -left-6 bottom-1/4 ${stickers[2].tilt} rounded-full bg-panel border border-line px-4 py-2 text-[15px] font-semibold text-ink shadow-sm`}>
              {stickers[2].label}
            </span>
            <span className={`absolute right-2 -bottom-12 ${stickers[3].tilt} rounded-full bg-panel border border-line px-4 py-2 text-[15px] font-semibold text-ink shadow-sm`}>
              {stickers[3].label}
            </span>
          </div>

          {/* Stickers — wrap row on small screens */}
          <div className="lg:hidden mt-8 flex flex-wrap justify-center gap-3">
            {stickers.map((s) => (
              <span
                key={s.label}
                className={`${s.tilt} rounded-full bg-panel border border-line px-4 py-2 text-[15px] font-semibold text-ink`}
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
