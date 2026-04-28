interface Fact {
  emoji: string;
  label: string;
  title: string;
  body: string;
}

const facts: Fact[] = [
  {
    emoji: "⚽",
    label: "FIXATION · 01",
    title: "I argue too much about the 4-3-3.",
    body: "Currently reading Wilson's Inverting the Pyramid. Then Cox's series. False nines, half-spaces, build-up shapes — the whole thing reads like architecture.",
  },
  {
    emoji: "🥢",
    label: "OBSESSION · 02",
    title: "Pad krapow is my desert-island meal.",
    body: "Currently chasing a worthy version on Long Island. Mom's is the benchmark. Everything else is calibration.",
  },
  {
    emoji: "🎧",
    label: "HOBBY · 03",
    title: "I DJ at 2am.",
    body: "Pioneer DDJ-FLX4. House and afro at 120–128 BPM. Floating Points, Folamour, DJ Seinfeld on heavy rotation.",
  },
  {
    emoji: "✈️",
    label: "DRIFTING · 04",
    title: "I measure cities in cups of coffee.",
    body: "Bangkok is home. Last loop: Singapore, Hong Kong, Honolulu. Long Island is up next — moving in May.",
  },
];

export function FactsGrid() {
  return (
    <section
      id="fun"
      className="bg-[#f3f1ed] px-8 lg:px-16 py-24 border-y border-line"
    >
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-serif text-4xl lg:text-7xl font-normal -tracking-[0.035em] leading-[0.95] mb-16">
          A few things <span className="ital">about me</span>.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="bg-paper-soft border border-line rounded-[20px] p-8 flex flex-col justify-between min-h-[280px] transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="text-[56px] leading-none mb-6">{fact.emoji}</div>
              <div>
                <div className="font-mono text-[10px] tracking-widest text-rust uppercase mb-3">
                  {fact.label}
                </div>
                <h4 className="font-serif italic text-[22px] leading-tight -tracking-[0.015em] font-normal text-ink mb-3">
                  {fact.title}
                </h4>
                <p className="font-sans text-sm text-ink-soft leading-relaxed">{fact.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
