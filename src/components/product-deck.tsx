"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  productsByCompany,
  type ShowcaseProduct,
  type ProductVisualKey,
} from "@/content/showcase";

/* Fan deck product showcase — the products sit as a teasing stack of
   polaroid cards (echoing the hero); "Deal the products" fans them across
   the panel with springs. Renders nothing for companies without products. */

const CARD_W = 230;
const fanRotate = [-5, 2, 6];

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-16 h-28 bg-white rounded-xl border border-line shadow-sm p-1.5 flex flex-col gap-1">
      {children}
    </div>
  );
}

/* Stylized product tiles — same flat-composition vocabulary as the
   project visuals. Swap for real product shots when available. */
function ProductTile({ visual }: { visual: ProductVisualKey }) {
  return (
    <div className="relative w-full aspect-[4/3] rounded-xl border border-line bg-paper-soft overflow-hidden flex items-center justify-center">
      {visual === "rfd40" && (
        <>
          <span className="absolute top-3 left-3 font-mono text-[9px] tracking-widest text-ink-soft">
            RFD40 · RFID SLED
          </span>
          <div className="relative">
            {/* Sled body */}
            <div className="relative w-24 h-14 bg-ink rounded-lg">
              <div className="absolute inset-x-3 top-3 h-4 bg-paper-soft/90 rounded-sm overflow-hidden">
                <div className="absolute inset-x-1 top-1/2 h-px bg-rust animate-pulse" />
              </div>
              <div className="absolute left-3 bottom-2 w-8 h-1 rounded-full bg-paper-soft/30" />
            </div>
            {/* Trigger grip */}
            <div className="w-7 h-9 bg-ink rounded-b-xl ml-6 -mt-0.5" />
          </div>
          <div className="absolute right-5 top-[38%] w-12 h-px bg-rust/50 animate-pulse" />
        </>
      )}

      {visual === "fxr90" && (
        <>
          <span className="absolute top-3 left-3 font-mono text-[9px] tracking-widest text-ink-soft">
            FXR90 · FIXED READER
          </span>
          <div className="relative flex items-center">
            {/* Reader unit */}
            <div className="relative size-20 bg-ink rounded-xl flex items-end justify-center pb-2.5">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 size-2 rounded-full bg-olive animate-pulse" />
              <div className="flex gap-1.5">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="size-2 rounded-full border border-paper-soft/40"
                  />
                ))}
              </div>
            </div>
            {/* Signal arcs */}
            <div className="absolute -right-9 top-1/2 -translate-y-1/2 size-8 rounded-full border-r-2 border-rust/50 animate-pulse" />
            <div className="absolute -right-14 top-1/2 -translate-y-1/2 size-13 rounded-full border-r-2 border-rust/30 animate-pulse" />
          </div>
        </>
      )}

      {visual === "rfd90" && (
        <>
          <span className="absolute top-3 left-3 font-mono text-[9px] tracking-widest text-ink-soft">
            RFD90 · ULTRA-RUGGED
          </span>
          <div className="relative">
            {/* Sled body with rugged bumpers */}
            <div className="relative w-24 h-14 bg-ink rounded-lg border-2 border-mustard/70">
              <div className="absolute inset-x-3 top-2.5 h-4 bg-paper-soft/90 rounded-sm overflow-hidden">
                <div className="absolute inset-x-1 top-1/2 h-px bg-rust animate-pulse" />
              </div>
              <div className="absolute left-3 bottom-1.5 w-8 h-1 rounded-full bg-paper-soft/30" />
            </div>
            {/* Trigger grip */}
            <div className="w-8 h-10 bg-ink rounded-b-xl ml-6 -mt-0.5" />
          </div>
          <div className="absolute right-5 top-[38%] w-12 h-px bg-rust/50 animate-pulse" />
        </>
      )}

      {visual === "roadmap" && (
        <div className="w-full h-full p-5 flex flex-col justify-center gap-3">
          <span className="font-mono text-[9px] tracking-widest text-ink-soft">
            ROADMAP · FY26
          </span>
          <div className="h-2.5 w-3/4 rounded-full bg-ink" />
          <div className="h-2.5 w-1/2 rounded-full bg-ink-mute" />
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2/3 rounded-full bg-mustard" />
            <span className="text-[11px] leading-none text-rust" aria-hidden>
              ✦
            </span>
          </div>
          <div className="h-2.5 w-1/3 rounded-full bg-ink-soft/50" />
        </div>
      )}

      {visual === "partners" && (
        <>
          <span className="absolute top-3 left-3 font-mono text-[9px] tracking-widest text-ink-soft">
            10,000+ PARTNERS
          </span>
          <svg viewBox="0 0 160 120" className="w-3/4" aria-hidden>
            {[
              [24, 28],
              [66, 16],
              [122, 24],
              [142, 62],
              [120, 98],
              [64, 104],
              [22, 86],
            ].map(([x, y], i) => (
              <g key={i}>
                <line
                  x1="80"
                  y1="60"
                  x2={x}
                  y2={y}
                  stroke="var(--color-line)"
                  strokeWidth="1.5"
                />
                <circle
                  cx={x}
                  cy={y}
                  r="4"
                  fill="var(--color-ink)"
                  className={i % 2 ? "animate-pulse" : undefined}
                />
              </g>
            ))}
            <circle cx="80" cy="60" r="7" fill="var(--color-rust)" />
          </svg>
        </>
      )}

      {visual === "tb-home" && (
        <>
          <span className="absolute top-3 left-3 font-mono text-[9px] tracking-widest text-ink-soft">
            TRIPBUDDY · HOME
          </span>
          <PhoneFrame>
            <div className="relative flex-1 rounded-md bg-olive/20 overflow-hidden">
              <div className="absolute left-2 top-3 right-3 h-px bg-olive/40" />
              <div className="absolute left-4 top-6 right-1 h-px bg-olive/40 rotate-12" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-2.5 rounded-full bg-rust animate-pulse" />
            </div>
            <div className="h-2 rounded-sm bg-paper-deep" />
            <div className="h-2 w-3/4 rounded-sm bg-paper-deep" />
          </PhoneFrame>
        </>
      )}

      {visual === "tb-sos" && (
        <>
          <span className="absolute top-3 left-3 font-mono text-[9px] tracking-widest text-ink-soft">
            TRIPBUDDY · SOS
          </span>
          <PhoneFrame>
            <div className="flex-1 flex items-center justify-center">
              <div className="size-9 rounded-full bg-cherry flex items-center justify-center animate-pulse">
                <span className="text-white text-[7px] font-bold tracking-wider">
                  SOS
                </span>
              </div>
            </div>
            <div className="h-2 rounded-sm bg-paper-deep" />
          </PhoneFrame>
        </>
      )}

      {visual === "tb-news" && (
        <>
          <span className="absolute top-3 left-3 font-mono text-[9px] tracking-widest text-ink-soft">
            TRIPBUDDY · ALERTS
          </span>
          <PhoneFrame>
            <div className="h-2.5 w-2/3 rounded-sm bg-ink/70" />
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex gap-1 items-center">
                <div
                  className={`size-1.5 rounded-full shrink-0 ${i === 0 ? "bg-rust" : "bg-paper-deep"}`}
                />
                <div className="h-1.5 flex-1 rounded-sm bg-paper-deep" />
              </div>
            ))}
          </PhoneFrame>
        </>
      )}
    </div>
  );
}

function PolaroidCard({ product }: { product: ShowcaseProduct }) {
  return (
    <div className="bg-white p-2.5 pb-3.5 shadow-[0_18px_40px_-18px_rgba(22,21,19,0.35)]">
      <ProductTile visual={product.visual} />
      <h4 className="display mt-3 text-[17px] font-semibold text-ink leading-snug">
        {product.name}
      </h4>
      <p className="mt-1 text-[14px] leading-[1.55] text-ink-soft">
        {product.blurb}
      </p>
    </div>
  );
}

export function ProductDeck({
  companyId,
  cta,
}: {
  companyId: string;
  /* Rendered beside the deal button (e.g. the case-study link); rendered
     alone when the company has no products. */
  cta?: React.ReactNode;
}) {
  const products = productsByCompany[companyId];
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  // Measure the deck container so fan positions are numeric px transforms —
  // springs can't interpolate between mismatched units (px ↔ %).
  const deckRef = useRef<HTMLDivElement>(null);
  const [deckW, setDeckW] = useState(760);
  useEffect(() => {
    const measure = () => {
      if (deckRef.current) setDeckW(deckRef.current.offsetWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  if (!products) return cta ? <div className="mt-8">{cta}</div> : null;

  const spring = reduced
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 240, damping: 24 };

  return (
    <div className="mt-8">
      <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="inline-flex items-center gap-2 rounded-full border border-ink px-5 py-2.5 text-[15px] font-semibold text-ink transition-colors duration-200 hover:bg-ink hover:text-ground"
        >
          {open ? "Stack them back" : "Deal the products"}
          <span aria-hidden>✦</span>
        </button>
        {cta}
      </div>

      {/* Desktop deck — absolute cards fanning across the panel */}
      <div
        ref={deckRef}
        className="hidden sm:block relative mt-8 h-[360px] max-w-[820px] cursor-pointer"
        onClick={() => setOpen((o) => !o)}
        aria-hidden
      >
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            className="absolute top-0 left-0 w-[230px]"
            initial={false}
            animate={
              open
                ? {
                    x: (i * (deckW - CARD_W)) / (products.length - 1),
                    rotate: fanRotate[i % fanRotate.length],
                    y: 0,
                  }
                : { x: i * 16, rotate: (i - 1) * 4, y: i * 5 }
            }
            transition={{
              ...spring,
              delay: reduced
                ? 0
                : open
                  ? i * 0.07
                  : (products.length - 1 - i) * 0.05,
            }}
            whileHover={
              open && !reduced ? { y: -10, rotate: 0, scale: 1.02 } : undefined
            }
            style={{ zIndex: open ? i : products.length - i }}
          >
            <PolaroidCard product={p} />
          </motion.div>
        ))}
      </div>

      {/* Mobile — the fan doesn't fit; open a simple staggered stack */}
      <div
        className="sm:hidden grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden min-h-0">
          <div className="flex flex-col gap-6 pt-7">
            {products.map((p, i) => (
              <div
                key={p.name}
                className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${i % 2 ? "rotate-1" : "-rotate-1"}`}
                style={{
                  opacity: open ? 1 : 0,
                  transitionDelay: open ? `${120 + i * 90}ms` : "0ms",
                }}
              >
                <PolaroidCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
