"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";

/* Client-side image slideshow for a project card. Renders the stacked
   images with a crossfade plus a prev / next control bar and a counter.
   Fills its (relatively-positioned) parent — the card supplies the frame. */
export function ProjectGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const go = (delta: number) =>
    setIndex((prev) => (prev + delta + count) % count);

  return (
    <>
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={count > 1 ? `${alt} — image ${i + 1} of ${count}` : alt}
          fill
          sizes="(max-width: 1024px) 100vw, 620px"
          priority={i === 0}
          className={`object-cover transition-opacity duration-500 ease-out motion-reduce:transition-none ${
            i === index ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />
      ))}

      {count > 1 && (
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1 rounded-full border border-line bg-ground/95 p-1 shadow-[0_6px_16px_-8px_rgba(22,21,19,0.4)]">
          <GalleryButton label="Previous image" onClick={() => go(-1)}>
            <path d="M12.5 15 7.5 10l5-5" />
          </GalleryButton>
          <span className="min-w-[3.5ch] px-1 text-center text-[12px] font-medium tabular-nums text-ink-soft">
            {index + 1} / {count}
          </span>
          <GalleryButton label="Next image" onClick={() => go(1)}>
            <path d="m7.5 5 5 5-5 5" />
          </GalleryButton>
        </div>
      )}
    </>
  );
}

function GalleryButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex size-9 items-center justify-center rounded-full text-ink transition-colors duration-200 hover:bg-panel-deep"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        {children}
      </svg>
    </button>
  );
}
