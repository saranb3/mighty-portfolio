"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { experiences, type Experience } from "@/content/experience";
import { ProductDeck } from "./product-deck";

export function ExperienceTabs() {
  const [activeId, setActiveId] = useState(experiences[0].id);
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const active = experiences.find((e) => e.id === activeId) ?? experiences[0];

  const moveFocus = (from: number, delta: number) => {
    const next =
      (from + delta + experiences.length) % experiences.length;
    const target = experiences[next];
    setActiveId(target.id);
    tabRefs.current.get(target.id)?.focus();
  };

  return (
    <section id="experience" className="scroll-mt-20 bg-ground px-6 lg:px-12 pt-12 lg:pt-16 pb-12 lg:pb-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="display font-semibold text-ink text-[clamp(2.5rem,5vw,4rem)] leading-[1.05]">
          Work experience
        </h2>

        <div className="mt-12 lg:mt-16 grid lg:grid-cols-[260px_1fr] gap-8 lg:gap-16 items-start">
          {/* Tab list — vertical timeline of companies */}
          <div
            role="tablist"
            aria-label="Work experience"
            className="relative flex lg:flex-col overflow-x-auto lg:overflow-visible border-b lg:border-b-0 border-line -mx-6 px-6 lg:mx-0 lg:px-0"
          >
            {/* Timeline spine (desktop) */}
            <span
              aria-hidden
              className="hidden lg:block absolute left-[35px] top-10 bottom-10 w-px bg-line"
            />
            {experiences.map((exp, i) => {
              const selected = exp.id === activeId;
              return (
                <button
                  key={exp.id}
                  ref={(el) => {
                    if (el) tabRefs.current.set(exp.id, el);
                  }}
                  role="tab"
                  id={`exp-tab-${exp.id}`}
                  aria-selected={selected}
                  aria-controls={`exp-panel-${exp.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveId(exp.id)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                      e.preventDefault();
                      moveFocus(i, 1);
                    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                      e.preventDefault();
                      moveFocus(i, -1);
                    }
                  }}
                  className={`group relative shrink-0 flex items-center gap-3 text-left px-4 py-3 lg:px-0 lg:py-4 border-b-2 lg:border-b-0 -mb-px lg:mb-0 transition-colors duration-200 ${
                    selected
                      ? "border-ink"
                      : "border-transparent"
                  }`}
                >
                  {/* Timeline node — company monogram */}
                  <span
                    aria-hidden
                    className={`display relative flex size-18 shrink-0 items-center justify-center overflow-hidden rounded-full text-[26px] font-semibold transition-all duration-200 ${
                      exp.iconSrc ? "border border-line bg-ground" : exp.iconBg
                    } ${
                      selected
                        ? "ring-2 ring-ink ring-offset-2 ring-offset-ground"
                        : "grayscale-[35%] group-hover:grayscale-0"
                    }`}
                  >
                    {exp.iconSrc ? (
                      <Image
                        src={exp.iconSrc}
                        alt=""
                        width={144}
                        height={144}
                        className="size-full object-cover"
                      />
                    ) : (
                      exp.icon
                    )}
                  </span>
                  <span>
                    <span
                      className={`block text-[16px] font-semibold transition-colors duration-200 ${
                        selected
                          ? "text-ink"
                          : "text-ink-soft group-hover:text-ink"
                      }`}
                    >
                      {exp.company}
                    </span>
                    <span className="hidden lg:block mt-0.5 text-[13px] font-medium text-ink-soft">
                      {exp.period}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Panel — role details */}
          <div
            key={active.id}
            role="tabpanel"
            id={`exp-panel-${active.id}`}
            aria-labelledby={`exp-tab-${active.id}`}
            className="lg:min-h-[320px] fade-up"
            style={{ animationDuration: "0.45s" }}
          >
            <RolePanel active={active} />
          </div>
        </div>
      </div>
    </section>
  );
}

function BulletList({ bullets }: { bullets: string[] }) {
  return (
    <ul className="space-y-4 max-w-[62ch]">
      {bullets.map((bullet) => (
        <li key={bullet} className="flex gap-3">
          <span
            aria-hidden
            className="mt-[11px] size-1.5 shrink-0 rounded-full bg-ink-mute"
          />
          <span className="text-[17px] leading-[1.6] text-ink-soft">
            {bullet}
          </span>
        </li>
      ))}
    </ul>
  );
}

function RolePanel({ active }: { active: Experience }) {
  const [open, setOpen] = useState(false);
  const bulletsId = `exp-bullets-${active.id}`;

  return (
    <>
      <h3 className="display font-semibold text-[24px] lg:text-[28px] leading-[1.15] text-ink">
        {active.role}{" "}
        <span className="text-ink-soft">@ {active.company}</span>
      </h3>
      <p className="mt-2 text-[15px] font-medium text-ink-soft">
        {active.period} · {active.location}
      </p>

      {active.synopsis ? (
        <>
          <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.6] text-ink-soft">
            {active.synopsis}
          </p>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={bulletsId}
            className="group mt-4 inline-flex items-center gap-1.5 text-[15px] font-semibold text-ink"
          >
            <span className="underline underline-offset-4 decoration-2">
              {open ? "Read less" : "Read more"}
            </span>
            <span
              aria-hidden
              className={`transition-transform duration-300 ease-out ${
                open ? "rotate-180" : ""
              }`}
            >
              ↓
            </span>
          </button>
          <div id={bulletsId} hidden={!open} className="mt-6">
            <BulletList bullets={active.bullets} />
          </div>
        </>
      ) : (
        <div className="mt-6">
          <BulletList bullets={active.bullets} />
        </div>
      )}

      <ProductDeck
        companyId={active.id}
        cta={
          active.href ? (
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                    <Link
                      href={active.href}
                      target={
                        active.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        active.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group inline-flex items-center gap-1.5 text-[16px] font-semibold text-ink no-underline"
                    >
                      <span className="underline underline-offset-4 decoration-2">
                        {active.ctaLabel ?? "Learn more"}
                      </span>
                      <span
                        aria-hidden
                        className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                    {active.secondaryHref ? (
                      <Link
                        href={active.secondaryHref}
                        target={
                          active.secondaryHref.startsWith("http")
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          active.secondaryHref.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="group inline-flex items-center gap-1.5 text-[16px] font-semibold text-ink no-underline"
                      >
                        <span className="underline underline-offset-4 decoration-2">
                          {active.secondaryCtaLabel ?? "Learn more"}
                        </span>
                        <span
                          aria-hidden
                          className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </Link>
                    ) : null}
                  </div>
          ) : null
        }
      />
    </>
  );
}
