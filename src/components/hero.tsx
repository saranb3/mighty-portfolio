import Image from "next/image";

const EMAIL = "saranb3@illinois.edu";
const RESUME_URL =
  "https://drive.google.com/file/d/1RaWqsNq4lDRwzBSNSBBXOtucqTldhRCW/view?usp=sharing";

const stickers = [
  { label: "🐶 I have eight dogs", tilt: "-rotate-6" },
  { label: "⚽ Liverpool, YWNA!", tilt: "rotate-3" },
  { label: "☕ Love cold brews", tilt: "-rotate-2" },
  { label: "✈️ 7 countries so far", tilt: "rotate-6" },
];

/* "Snapshot" hero — photo-led and personality-forward: a tilted polaroid,
   fact stickers, the greeting in the headline. Warmth with receipts. */
export function Hero() {
  return (
    <section className="relative bg-ground overflow-hidden px-6 lg:px-12 pt-36 lg:pt-44 pb-20 lg:pb-24">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-[7fr_5fr] gap-14 lg:gap-20 items-center">
        <div>
          <h1
            className="display font-bold text-ink text-[clamp(2.9rem,6vw,5rem)] leading-[1.02] fade-up"
            style={{ animationDelay: "0.05s" }}
          >
            Hello, I&rsquo;m Mighty!
          </h1>

          <p
            className="display mt-5 text-[clamp(1.4rem,2.4vw,1.75rem)] leading-[1.3] font-semibold text-ink max-w-[26ch] fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Aspiring product manager who loves to build.
          </p>

          <p
            className="mt-6 max-w-[52ch] text-[18px] leading-[1.65] font-medium text-ink-soft fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            Rising senior in CS &amp; Stats at UIUC — currently a PM intern at
            Zebra Technologies, previously Bangkok Bank and AirEstate. Outside
            of work, you can find me playing football, lifting weights, trying out coffee at new cafes, or taking photos with my Fujifilm!
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4 fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center rounded-full bg-ink px-7 py-3.5 text-[17px] font-semibold text-ground no-underline transition-opacity duration-200 hover:opacity-85"
            >
              Say hello
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[17px] font-semibold text-ink underline underline-offset-4 decoration-2"
            >
              Resume <span aria-hidden>↗</span>
            </a>
          </div>
        </div>

        {/* Polaroid + stickers */}
        <div className="relative fade-up" style={{ animationDelay: "0.3s" }}>
          <figure className="rotate-2 bg-white p-3 pb-14 w-[min(100%,380px)] mx-auto shadow-[0_28px_60px_-28px_rgba(22,21,19,0.4)]">
            <Image
              src="/images/mighty-1.png"
              alt="Mighty at the beach in Santa Monica"
              width={760}
              height={950}
              priority
              className="w-full aspect-[4/5] object-cover"
            />
            <figcaption className="ital absolute bottom-4 left-0 right-0 text-center text-[18px] text-ink-soft">
              off duty, Santa Monica
            </figcaption>
          </figure>

          {/* Stickers — pinned around the polaroid on large screens */}
          <div className="hidden lg:block" aria-hidden>
            <span className={`absolute -left-10 top-6 ${stickers[0].tilt} rounded-full bg-panel border border-line px-4 py-2 text-[15px] font-semibold text-ink shadow-sm`}>
              {stickers[0].label}
            </span>
            <span className={`absolute -right-6 top-1/4 ${stickers[1].tilt} rounded-full bg-panel border border-line px-4 py-2 text-[15px] font-semibold text-ink shadow-sm`}>
              {stickers[1].label}
            </span>
            <span className={`absolute -left-6 bottom-1/4 ${stickers[2].tilt} rounded-full bg-panel border border-line px-4 py-2 text-[15px] font-semibold text-ink shadow-sm`}>
              {stickers[2].label}
            </span>
            <span className={`absolute right-2 -bottom-12 ${stickers[3].tilt} rounded-full bg-panel border border-line px-4 py-2 text-[15px] font-semibold text-ink shadow-sm`}>
              {stickers[3].label}
            </span>
          </div>

          {/* Stickers — wrap row on small screens */}
          <div className="lg:hidden mt-8 flex flex-wrap justify-center gap-3">
            {stickers.map((s) => (
              <span
                key={s.label}
                className={`${s.tilt} rounded-full bg-panel border border-line px-4 py-2 text-[15px] font-semibold text-ink`}
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
