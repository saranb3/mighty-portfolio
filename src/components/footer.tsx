const contactButtons = [
  { label: "Email", href: "mailto:saranb3@illinois.edu" },
  { label: "LinkedIn", href: "https://linkedin.com/in/mighty-s" },
  { label: "GitHub", href: "https://github.com/saranb3" },
  { label: "Resume PDF", href: "/resume.pdf" },
];

const marqueeItems = [
  "Let's chat",
  "✦",
  "Let's build something",
  "✦",
  "Let's chat",
  "✦",
  "Let's build something",
  "✦",
  "Let's chat",
  "✦",
  "Let's build something",
  "✦",
];

export function Footer() {
  return (
    <footer id="contact" className="bg-[#1a1a1a] text-paper px-8 lg:px-16 pt-32 pb-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="font-serif italic text-2xl text-mustard mb-4">
          See you next time around!
        </div>

        <h2 className="font-sans text-6xl lg:text-[200px] font-medium -tracking-[0.045em] leading-[0.92] mb-12">
          Thank you<span className="ital text-[#9a8e6e]">.</span>
        </h2>

        <p className="font-sans text-2xl leading-relaxed font-normal max-w-[720px] mb-16 text-paper/85">
          I'm currently open for{" "}
          <span className="italic">fall 2026 and spring/summer 2027 PM internships</span> and beyond — and also
          accepting restaurant recommendations on Long Island. Let's connect and talk about the
          next thing.
        </p>

        <div className="flex flex-wrap gap-3 mb-20">
          {contactButtons.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              className="inline-flex items-center gap-3 px-7 py-4 bg-white/[0.06] border border-white/15 rounded-full text-paper no-underline font-medium text-base transition-colors hover:bg-white/[0.12]"
            >
              {btn.label} <span className="font-serif">→</span>
            </a>
          ))}
        </div>

        <div className="-mx-8 lg:-mx-16 py-8 border-y border-white/15 overflow-hidden whitespace-nowrap mb-12">
          <div className="marquee-track inline-flex gap-12 font-serif italic text-3xl lg:text-4xl -tracking-[0.025em] font-normal text-paper">
            {marqueeItems.concat(marqueeItems).map((item, i) => (
              <span key={i} className={item === "✦" ? "text-mustard not-italic font-sans" : ""}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-between font-mono text-[11px] tracking-widest text-ink-mute uppercase">
          <span>© MMXXVI · MIGHTY Burapachaisri</span>
          <span>DESIGNED & BUILT IN URBANA, IL</span>
          <span>SET IN GEIST & FRAUNCES</span>
        </div>
      </div>
    </footer>
  );
}
