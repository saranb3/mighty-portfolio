import Image from "next/image";
import { CyclingSubtitle } from "./cycling-subtitle";

export function Hero() {
  return (
    <section className="relative bg-paper">
      {/* Vertical divider — independent of column heights */}
      <div
        aria-hidden
        className="hidden lg:block absolute left-[58%] top-40 bottom-20 w-px bg-line fade-up"
        style={{ animationDelay: "0.5s" }}
      />
      <div className="grid grid-cols-1 lg:grid-cols-[6fr_4fr]">
        {/* LEFT — headline */}
        <div className="px-8 lg:px-16 pt-40 pb-20 flex flex-col">
          <h1
            className="display-serif text-[88px] font-bold leading-[1] -tracking-[0.02em] mb-10 text-[#233] fade-up"
            style={{
              textShadow:
                "0 0 8px rgba(0,0,0,0.15), 0 0 4px rgba(0, 0, 0, 0.1)",
              mixBlendMode: "multiply",
              animationDelay: "0.1s",
            }}
          >
            Hello, I'm <span className="italic text-rust">Mighty!</span>
          </h1>

          <div className="fade-up" style={{ animationDelay: "0.3s" }}>
            <CyclingSubtitle />
          </div>

          <div
            className="grid grid-cols-[auto_auto] gap-x-20 mt-24 fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            <div>
              <div className="font-sans text-[23px] font-semibold text-ink mb-.5 -tracking-[0.005em] whitespace-nowrap">
                Currently
              </div>
              <div className="font-sans text-[23px] font-semibold text-ink-soft -tracking-[0.005em] inline-flex items-center gap-2 whitespace-nowrap">
                PM Intern @ Zebra
              </div>
            </div>
            <div>
              <div className="font-sans text-[23px] font-semibold text-ink mb-.5 -tracking-[0.005em] whitespace-nowrap">
                Previously at
              </div>
              <div className="font-sans text-[23px] font-semibold text-ink-soft -tracking-[0.005em] whitespace-nowrap">
                Bangkok Bank, AirEstate
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — sidebar */}
        <aside
          className="border-t lg:border-t-0 border-line px-12 pt-40 pb-20 fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Image
            src="/images/mighty-3.png"
            alt="Mighty"
            width={300}
            height={375}
            className="w-full max-w-[300px] aspect-[6/5] object-cover rounded-2xl object-[center_60%]"
          />

          <h2 className="font-serif italic text-[28px] font-medium text-ink mt-8 mb-4 -tracking-[0.01em]">
            Nice to meet you!
          </h2>

          <p className="font-sans text-[20px] font-medium leading-[1.5] -tracking-[0.005em] text-ink-soft mb-8 max-w-[440px]">
            I like tinkering with new technologies, building cool things, and solving hard problems!
          </p>

          <div className="flex gap-2.5">
            <a
              href="https://www.linkedin.com/in/saran-burapachaisri/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 flex items-center justify-center transition-opacity hover:opacity-70"
            >
              <Image
                src="/images/linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
                className="w-[24px] h-[24px] object-contain"
              />
            </a>
            <a
              href="https://www.instagram.com/mighty.bura/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center transition-opacity hover:opacity-70"
            >
              <Image
                src="/images/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
                className="w-[24px] h-[24px] object-contain"
              />
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
