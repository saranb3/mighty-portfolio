import Image from "next/image";
import { CyclingSubtitle } from "./cycling-subtitle";
import { EmailLink } from "./email-link";

export function Hero() {
  return (
    <section className="relative bg-paper">
      {/* Vertical divider — independent of column heights */}
      <div
        aria-hidden
        className="hidden lg:block absolute left-[58%] top-15 bottom-0 w-px bg-line fade-up"
        style={{ animationDelay: "0.5s" }}
      />
      <div className="grid grid-cols-1 lg:grid-cols-[6fr_4fr]">
        {/* LEFT — headline */}
        <div className="px-8 lg:px-16 pt-40 pb-0 flex flex-col">
          <h1
            className="text-[80px] leading-[1] tracking-[0.02em] mb-4 text-[#233] fade-up"
            style={{
              fontFamily: '"Neulis Cursive", cursive',
              textShadow:
                "0 1px 2px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.22), 0 4px 16px rgba(0,0,0,0.18), 0 0 24px rgba(0,0,0,0.15), 0 0 6px rgba(0,0,0,0.2)",
              mixBlendMode: "multiply",
              animationDelay: "0.1s",
            }}
          >
            Hello, I'm <span className="">Mighty!</span>
          </h1>

          <div className="fade-up" style={{ animationDelay: "0.3s" }}>
            <CyclingSubtitle />
          </div>

          <div
            className="grid grid-cols-[auto_auto] gap-x-20 mt-15 fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            <div>
              <div className="font-sans text-[23px] font-semibold text-ink mb-.3 -tracking-[0.008em] whitespace-nowrap">
                Currently
              </div>
              <div className="font-sans text-[23px] font-semibold text-ink-soft -tracking-[0.008em] inline-flex items-center gap-2 whitespace-nowrap">
                PM Intern @ Zebra
              </div>
            </div>
            <div>
              <div className="font-sans text-[23px] font-semibold text-ink mb-.3 -tracking-[0.008em] whitespace-nowrap">
                Previously at
              </div>
              <div className="font-sans text-[23px] font-semibold text-ink-soft -tracking-[0.008em] whitespace-nowrap">
                Bangkok Bank, AirEstate
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — sidebar */}
        <aside
          className="border-t lg:border-t-0 border-line px-12 pt-40 pb-0 fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Image
            src="/images/mighty-3.png"
            alt="Mighty"
            width={300}
            height={375}
            className="w-full max-w-[180px] aspect-square object-cover rounded-full object-[center_60%]"
          />

          <h2 className="font-sans text-[28px] font-bold text-ink mt-8 mb-4 -tracking-[0.04em] opacity-80">
            Nice to meet you!
          </h2>

          <p className="font-sans text-[20px] font-semibold leading-[1.5] -tracking-[0.005em] text-ink-soft mb-3 max-w-[440px]">
            I'm a rising Senior studying Computer Science and Statistics at the University of Illinois. I enjoy building cool products and solving hard problems!
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/saran-burapachaisri/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center w-9 h-9 opacity-70 transition-opacity hover:opacity-80"
            >
              <Image
                src="/images/linkedin.png"
                alt="LinkedIn"
                width={28}
                height={28}
                className="w-[28px] h-[28px] object-contain"
              />
            </a>
            <EmailLink />
          </div>
        </aside>
      </div>
    </section>
  );
}
