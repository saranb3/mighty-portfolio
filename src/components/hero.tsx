"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const EMAIL = "saranb3@illinois.edu";
const RESUME_URL =
  "https://drive.google.com/file/d/1FHCjLk-L367kzPA0KwZU3x6ogWSD7FBb/view?usp=sharing";

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

/* "Snapshot" hero — photo-led and personality-forward: a tilted polaroid that
   drifts through Mighty's snapshots on its own, fact stickers, the greeting in
   the headline. Warmth with receipts. */
export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

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
            className="font-sans mt-5 text-[clamp(1.4rem,2.4vw,1.75rem)] leading-[1.3]h text-ink max-w-[30ch] fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Rising senior studying Computer Science &amp; Statistics at UIUC. Currently a PM intern at
            Zebra Technologies, previously at Bangkok Bank and AirEstate. Outside
            of work, you can find me playing football, lifting weights, drinking coffee, or taking photos!
          </p>


          <div
            className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4 fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center rounded-full bg-ink px-7 py-3.5 text-[17px] font-semibold text-ground no-underline transition-opacity duration-200 hover:opacity-85"
            >
              Say hello
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[17px] font-semibold text-ink underline underline-offset-4 decoration-2"
            >
              Resume <span aria-hidden>↗</span>
            </a>
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
