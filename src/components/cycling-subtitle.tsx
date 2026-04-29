"use client";

import { useEffect, useState } from "react";

const facts: string[] = [
  "I've been to 7 countries",  
  "I lead a 30-member student org",
  "My favorite soccer team is Liverpool",
  "I have eight dogs",
  "I can juggle the ball 200+ times" 

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
    <div className="font-sans text-[88px] font-medium leading-[0.95] -tracking-[0.04em] text-[#999] min-h-[1.9em] max-w-[18ch]">
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
  );
}
