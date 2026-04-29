"use client";

import { useEffect, useState } from "react";

const facts: string[] = [
  "I've been to 7 countries",  
  "My favorite soccer team is Liverpool",
  "I have eight dogs!",
  "I can juggle the ball 200 times",
  "I value empathy and kindness", 
  "I destress by weight lifting and running",
  "I hate sour coffee",
  "I can type 160 wpm"

];

export function CyclingSubtitle() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      const swap = window.setTimeout(() => {
        setIndex((i) => (i + 1) % facts.length);
        setVisible(true);
      }, 500);
      return () => window.clearTimeout(swap);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <svg
        width="0"
        height="0"
        style={{ position: "absolute", pointerEvents: "none" }}
        aria-hidden
      >
        <filter id="rocky-text">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="1.3"
            numOctaves="2"
            seed="3"
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix
            in="noise"
            type="matrix"
            values="0 0 0 0 0.15
                    0 0 0 0 0.15
                    0 0 0 0 0.15
                    0 0 0 1.0 0"
            result="darkNoise"
          />
          <feComposite
            in="darkNoise"
            in2="SourceGraphic"
            operator="in"
            result="texturedNoise"
          />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="texturedNoise" />
          </feMerge>
        </filter>
      </svg>

      <div
        className="font-sans text-[80px] font-bold leading-[0.95] -tracking-[0.04em] text-[#999] min-h-[1.9em] max-w-[18ch]"
        style={{
          textShadow: "0 0 8px rgba(0,0,0,0.15), 0 0 4px rgba(0,0,0,0.1)",
          mixBlendMode: "multiply",
          filter: "url(#rocky-text)",
        }}
      >
        <span
          style={{
            display: "inline-block",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 500ms ease, transform 500ms ease",
          }}
        >
          {facts[index]}
        </span>
      </div>
    </>
  );
}
