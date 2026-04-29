"use client";

import { useEffect, useState } from "react";

export function ScribearVisual() {
  const [bars, setBars] = useState<number[]>(
    Array.from({ length: 15 }, () => Math.random() * 75 + 20)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setBars(Array.from({ length: 15 }, () => Math.random() * 75 + 20));
    }, 700);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-gradient-to-br from-[#1a3a5a] to-[#2d5a7e] relative flex flex-col justify-center p-12">
      <div className="bg-black/30 rounded-lg px-5 py-4 font-mono text-sm text-paper mb-6">
        <div>
          <span className="text-mustard">→</span> "the integral of f of x d x..."
        </div>
        <div className="opacity-70">tokenizing → parsing → rendering</div>
      </div>
      <div className="font-serif italic text-6xl lg:text-7xl leading-none -tracking-[0.025em] text-paper text-center font-normal my-6">
        ∫ f(<span className="text-mustard">x</span>) dx = F(x) + C
      </div>
      <div className="flex gap-1 items-center h-10">
        {bars.map((h, i) => (
          <span
            key={i}
            className="flex-1 bg-paper rounded opacity-60 transition-all duration-500"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export function ZebraVisual() {
  return (
    <div className="bg-paper-soft w-full h-full flex items-center justify-center relative overflow-hidden">
      <span className="absolute top-6 left-6 font-mono text-[11px] tracking-widest text-ink-soft">
        PM INTERN · '26
      </span>
      <span className="font-serif text-[280px] lg:text-[320px] leading-[0.85] -tracking-[0.06em] text-ink font-normal">
        Z
      </span>
      <span className="absolute bottom-6 right-6 font-mono text-[11px] tracking-widest text-ink-soft">
        HOLTSVILLE, NY
      </span>
      <div
        className="absolute bottom-0 left-0 right-0 h-2"
        style={{
          background:
            "repeating-linear-gradient(90deg, var(--color-ink) 0 18px, transparent 18px 36px)",
        }}
      />
    </div>
  );
}

export function ThaisaVisual() {
  return (
    <div className="bg-gradient-to-br from-rust to-cherry w-full h-full p-12 flex flex-col justify-between text-butter relative">
      <div className="absolute top-8 right-8 w-20 h-20 border-[1.5px] border-current rounded-full flex items-center justify-center text-center font-mono text-[9px] tracking-widest leading-tight -rotate-12 opacity-85">
        ★ THAISA
        <br />
        EST. 2009 ★
      </div>
      <div className="flex justify-between font-mono text-[11px] tracking-widest">
        <span>SPRING '26</span>
        <span>UIUC</span>
      </div>
      <div className="font-serif text-7xl lg:text-[88px] leading-[0.92] -tracking-[0.035em] font-normal">
        Songkran
        <br />
        <span className="ital">on the</span> Quad.
      </div>
      <div className="flex justify-between font-mono text-[11px] tracking-widest border-t border-butter/30 pt-4">
        <span>APR 18</span>
        <span>SOUTH QUAD · 2PM</span>
        <span>FREE</span>
      </div>
    </div>
  );
}

export function GobabyGoVisual() {
  return (
    <div className="bg-gradient-to-br from-[#b8c2a8] to-olive w-full h-full p-12 flex flex-col justify-between text-cream-warm">
      <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid meet" className="w-full flex-1">
        <rect x="120" y="100" width="160" height="60" rx="20" fill="#f1ead8" />
        <rect x="135" y="80" width="130" height="30" rx="10" fill="#c8553d" />
        <circle cx="155" cy="170" r="22" fill="#0e0d0b" />
        <circle cx="155" cy="170" r="10" fill="#f1ead8" />
        <circle cx="245" cy="170" r="22" fill="#0e0d0b" />
        <circle cx="245" cy="170" r="10" fill="#f1ead8" />
        <circle cx="180" cy="100" r="8" fill="#0e0d0b" />
        <text
          x="220"
          y="100"
          textAnchor="middle"
          fontFamily="Fraunces, serif"
          fontStyle="italic"
          fontSize="24"
          fill="#f1ead8"
        >
          ★
        </text>
        <path
          d="M 0 200 L 60 140 L 120 180 L 180 130 L 240 170 L 300 120 L 360 160 L 400 140 L 400 240 L 0 240 Z"
          fill="#3a5043"
          opacity="0.4"
        />
      </svg>
      <div className="flex gap-6 border-t border-cream-warm/30 pt-4">
        {[
          { num: "7", label: "CHAPTERS" },
          { num: "200+", label: "VOLUNTEERS" },
          { num: "30+", label: "CARS BUILT" },
        ].map((stat) => (
          <div key={stat.label}>
            <b className="block font-serif italic text-4xl leading-none -tracking-[0.03em] font-normal mb-1">
              {stat.num}
            </b>
            <span className="font-mono text-[10px] tracking-widest opacity-80">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AirestateVisual() {
  return (
    <div className="bg-paper-deep w-full h-full p-8 flex items-center justify-center">
      <div className="bg-paper-soft rounded-[14px] p-6 w-full max-w-[360px] shadow-[0_8px_24px_rgba(10,10,10,0.06)]">
        <div className="h-44 bg-gradient-to-br from-olive to-[#3a5043] rounded-lg mb-4 relative overflow-hidden flex items-center justify-center">
          <span className="text-6xl opacity-60">🏠</span>
        </div>
        <div className="font-serif text-[22px] font-medium mb-1">Furnished 1BR — Stony Brook</div>
        <div className="font-sans text-sm text-ink-soft mb-3">
          In-unit W/D · Walk to LIRR · Available May
        </div>
        <div className="font-serif text-[32px] font-medium -tracking-[0.02em]">
          $1.4
          <small className="text-sm font-mono font-normal text-ink-soft tracking-wider">
            k/mo
          </small>
        </div>
      </div>
    </div>
  );
}

export function BangkokBankVisual() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#003d7a] to-[#0066cc] flex items-center justify-center p-8">
      <div className="text-paper text-center">
        <div className="font-serif italic text-5xl mb-2">Bangkok Bank</div>
        <div className="font-mono text-xs tracking-widest opacity-70 uppercase">Software · 2024</div>
      </div>
    </div>
  );
}

export function IlliniHappeningsVisual() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#e84a27] to-[#13294b] flex items-center justify-center p-8">
      <div className="text-paper text-center">
        <div className="font-serif italic text-5xl mb-2">Illini Happenings</div>
        <div className="font-mono text-xs tracking-widest opacity-70 uppercase">Campus Events</div>
      </div>
    </div>
  );
}

export const visuals: Record<string, React.ComponentType> = {
  scribear: ScribearVisual,
  zebra: ZebraVisual,
  thaisa: ThaisaVisual,
  gobabygo: GobabyGoVisual,
  airestate: AirestateVisual,
  bangkokbank: BangkokBankVisual,
  illinihappenings: IlliniHappeningsVisual,
};
