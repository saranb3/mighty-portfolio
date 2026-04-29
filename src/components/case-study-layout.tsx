"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type CaseStudySection = { id: string; label: string };

export function CaseStudyLayout({
  sections,
  children,
  org,
  title,
  titleItalic,
  meta,
  next,
}: {
  sections: CaseStudySection[];
  children: React.ReactNode;
  org?: { label: string; icon?: string; iconBg?: string };
  title: string;
  titleItalic?: string;
  meta?: { role?: string; context?: string; timeline?: string };
  next?: { href: string; label: string };
}) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          )[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 lg:gap-24 max-w-[1280px] mx-auto px-8 lg:px-16 pt-32 pb-24">
      {/* Sticky sidebar */}
      <aside className="lg:sticky lg:top-32 lg:self-start">
        <Link
          href="/"
          className="font-sans text-base text-ink-soft hover:text-ink no-underline mb-10 block transition-colors"
        >
          ← Work
        </Link>
        <nav className="flex flex-col gap-3.5">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`font-sans text-base no-underline transition-colors ${
                active === s.id
                  ? "text-blue-600 font-medium"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="min-w-0">
        {/* Header */}
        <header className="mb-20">
          {org && (
            <div className="flex items-center gap-3 mb-8">
              {org.icon && (
                <span
                  className={`inline-flex items-center justify-center w-8 h-8 rounded-md font-serif italic font-bold text-base ${
                    org.iconBg ?? "bg-mustard text-ink"
                  }`}
                >
                  {org.icon}
                </span>
              )}
              <span className="font-sans text-xl text-ink">{org.label}</span>
            </div>
          )}

          <h1 className="display-serif text-4xl lg:text-[64px] font-medium leading-[1.05] -tracking-[0.02em] text-ink mb-14">
            {title}
            {titleItalic && (
              <span className="italic font-medium text-ink-soft"> {titleItalic}</span>
            )}
          </h1>

          {meta && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-12 gap-y-6 max-w-3xl">
              {meta.role && (
                <div>
                  <div className="font-sans text-sm text-ink-soft mb-2">Role</div>
                  <div className="font-sans text-lg text-ink font-medium">
                    {meta.role}
                  </div>
                </div>
              )}
              {meta.context && (
                <div>
                  <div className="font-sans text-sm text-ink-soft mb-2">Context</div>
                  <div className="font-sans text-lg text-ink font-medium">
                    {meta.context}
                  </div>
                </div>
              )}
              {meta.timeline && (
                <div>
                  <div className="font-sans text-sm text-ink-soft mb-2">Timeline</div>
                  <div className="font-sans text-lg text-ink font-medium">
                    {meta.timeline}
                  </div>
                </div>
              )}
            </div>
          )}
        </header>

        {children}

        {next && (
          <div className="mt-24 pt-8 border-t border-line flex justify-between items-center font-mono text-xs tracking-widest text-ink-soft">
            <span>NEXT →</span>
            <Link
              href={next.href}
              className="text-ink no-underline hover:underline"
            >
              {next.label}
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}

/**
 * Section wrapper — used inside CaseStudyLayout children.
 * id must match a sidebar section id.
 */
export function CaseStudySection({
  id,
  label,
  headline,
  children,
}: {
  id: string;
  label: string;
  headline: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-28 scroll-mt-32">
      <div className="display-serif italic text-2xl text-ink mb-4">{label}</div>
      <h2 className="display-serif text-3xl lg:text-[40px] font-medium leading-[1.15] -tracking-[0.02em] text-ink mb-8 max-w-[820px]">
        {headline}
      </h2>
      <div className="font-sans text-[18px] text-ink leading-[1.65] space-y-6 max-w-[760px]">
        {children}
      </div>
    </section>
  );
}
