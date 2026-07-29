import Image from "next/image";
import { Link } from "next-view-transitions";
import type { ReactNode } from "react";

/**
 * Case-study page shell — matches the home page's system: Bricolage display
 * headings, Satoshi body, warm-gray ground, rust accent used sparingly.
 * Single centered column, no scroll-spy sidebar. Reused across every
 * `/work/*` page. Navigation in and out animates via the View Transitions
 * API (see next-view-transitions in layout.tsx + globals.css).
 */
export function CaseStudyLayout({
  org,
  title,
  titleItalic,
  meta,
  next,
  children,
}: {
  org?: { label: string; icon?: string; iconBg?: string };
  title: string;
  titleItalic?: string;
  meta?: { role?: string; context?: string; timeline?: string };
  next?: { href: string; label: string };
  children: ReactNode;
}) {
  const fields = [
    meta?.role && { k: "Role", v: meta.role },
    meta?.context && { k: "Context", v: meta.context },
    meta?.timeline && { k: "Timeline", v: meta.timeline },
  ].filter(Boolean) as { k: string; v: string }[];

  return (
    <article className="mx-auto max-w-[760px] px-6 lg:px-8 pt-28 lg:pt-36 pb-24">
      <Link
        href="/#work"
        className="inline-flex items-center gap-1.5 text-[15px] font-medium text-ink-soft no-underline transition-colors duration-200 hover:text-ink"
      >
        <span aria-hidden>←</span> Work
      </Link>

      <header className="mt-10 fade-up">
        {org && (
          <div className="flex items-center gap-3">
            {org.icon && (
              <span
                className={`inline-flex size-9 shrink-0 items-center justify-center rounded-full text-[16px] font-semibold ${
                  org.iconBg ?? "bg-ink text-ground"
                }`}
                aria-hidden
              >
                {org.icon}
              </span>
            )}
            <span className="text-[17px] font-medium text-ink-soft">
              {org.label}
            </span>
          </div>
        )}

        <h1 className="display font-semibold text-[clamp(2rem,5vw,3.4rem)] leading-[1.05] text-ink mt-6">
          {title}
          {titleItalic && <span className="ital text-ink-soft"> {titleItalic}</span>}
        </h1>

        {fields.length > 0 && (
          <dl className="mt-8 flex flex-wrap gap-x-8 sm:gap-x-12 gap-y-5 border-t border-line pt-7">
            {fields.map((f) => (
              <div key={f.k}>
                <dt className="text-[13px] text-ink-soft">{f.k}</dt>
                <dd className="mt-1 text-[16px] font-medium text-ink">{f.v}</dd>
              </div>
            ))}
          </dl>
        )}
      </header>

      <div className="mt-14 fade-up" style={{ animationDelay: "0.09s" }}>
        {children}
      </div>

      {next && (
        <nav className="mt-20 lg:mt-28 flex items-center justify-between gap-4 border-t border-line pt-8">
          <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-mute">
            Next
          </span>
          <Link
            href={next.href}
            className="group display inline-flex items-center gap-2 text-[clamp(1.25rem,2.6vw,1.75rem)] font-semibold text-ink no-underline"
          >
            {next.label}
            <span
              aria-hidden
              className="transition-transform duration-300 ease-out group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </nav>
      )}
    </article>
  );
}

/**
 * A titled block inside a case study. `heading` is the section name shown as a
 * Bricolage sub-heading (e.g. "Overview", "Challenges", "Solutions"). Prose,
 * lists, and <Figure> images pass through as children.
 */
export function CaseStudySection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-16 lg:mt-20 first:mt-0">
      <h2 className="display flex items-center gap-3 text-[clamp(1.5rem,3.2vw,2.05rem)] font-semibold leading-[1.12] text-ink">
        <span
          aria-hidden
          className="h-2.5 w-2.5 shrink-0 rounded-full bg-tangerine-deep"
        />
        {heading}
      </h2>
      <div className="mt-6 max-w-[66ch] space-y-5 text-[17px] lg:text-[18px] leading-[1.75] text-ink-soft [&_a]:text-ink [&_a]:underline [&_a]:decoration-line [&_a]:underline-offset-4 hover:[&_a]:decoration-ink [&_strong]:font-semibold [&_strong]:text-ink [&_ul]:mt-5 [&_ul]:list-none [&_ul]:space-y-3 [&_ul]:pl-0 [&_li]:relative [&_li]:pl-6 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.7em] [&_li]:before:h-1.5 [&_li]:before:w-1.5 [&_li]:before:rounded-full [&_li]:before:bg-ink-mute">
        {children}
      </div>
    </section>
  );
}

/**
 * Bordered image with an optional serif-italic caption — the same treatment as
 * the home-page polaroid. Use for the hero and any in-section photos.
 */
export function Figure({
  src,
  alt,
  caption,
  priority = false,
  aspect = "16 / 10",
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  aspect?: string;
}) {
  return (
    <figure className="my-8 first:mt-0">
      <div className="overflow-hidden rounded-2xl border border-line bg-panel">
        <Image
          src={src}
          alt={alt}
          width={1280}
          height={800}
          priority={priority}
          sizes="(max-width: 800px) 100vw, 760px"
          className="w-full object-cover"
          style={{ aspectRatio: aspect }}
        />
      </div>
      {caption && (
        <figcaption className="ital mt-3 text-[15px] text-ink-mute">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
