const lines = [
  { plain: "I am a", italic: "product thinker", rest: "and systems builder.", accent: true },
  { plain: "I've studied", italic: "statistics", rest: "& computer science.", accent: false },
  { plain: "I argue too much about", italic: "false nines", rest: ".", accent: true },
  { plain: "I DJ at", italic: "2am", rest: "between problem sets.", accent: false },
];

export function Rotator() {
  return (
    <section
      id="about"
      className="bg-[#fafaf8] px-8 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 items-center border-y border-line text-center lg:text-left"
    >
      <div className="relative min-h-[180px]">
        {lines.map((line, idx) => (
          <span
            key={idx}
            className="rotator-line block font-serif text-3xl lg:text-5xl leading-tight -tracking-[0.025em] font-normal text-ink opacity-0"
            style={{ animationDelay: `${idx * 4}s` }}
          >
            {line.plain}{" "}
            <span className={`ital ${line.accent ? "text-rust" : ""}`}>{line.italic}</span>
            <br />
            {line.rest}
          </span>
        ))}
      </div>
      <div className="hidden lg:block w-px h-[200px] bg-line" />
      <div className="w-[200px] h-[200px] flex items-center justify-center text-[140px] mx-auto lg:mx-0 drop-shadow-[0_8px_24px_rgba(10,10,10,0.1)]">
        🥢
      </div>
    </section>
  );
}
