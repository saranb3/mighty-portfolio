import { Avatar } from "./avatar";
import { SpotifyCard } from "./spotify-card";

export function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative">
      {/* LEFT — dark side */}
      <div className="bg-ink text-paper px-8 lg:px-16 pt-32 pb-16 flex flex-col justify-between relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="font-sans text-5xl lg:text-6xl font-medium tracking-tight leading-none mb-7">
            Hello, I'm <span className="ital text-white">Mighty</span>
          </h1>

          <p className="text-lg lg:text-[22px] leading-snug text-paper/85 max-w-[540px] mb-14 font-normal -tracking-[0.005em]">
            Junior at UIUC studying Statistics & CS. I build products that take both the
            system and the person seriously — <span className="ital">rigor with taste</span>.
          </p>

          <div className="grid grid-cols-2 gap-8 mb-14 max-w-[540px]">
            <div>
              <div className="font-mono text-[11px] tracking-widest uppercase text-paper/60 mb-2">
                Currently in
              </div>
              <div className="text-lg font-medium">Urbana, IL</div>
            </div>
            <div>
              <div className="font-mono text-[11px] tracking-widest uppercase text-paper/60 mb-2">
                Joining as
              </div>
              <div className="text-lg font-medium">PM Intern, Zebra</div>
            </div>
          </div>
        </div>

        <SpotifyCard />
      </div>

      {/* RIGHT — light side with glass card */}
      <div className="bg-white px-8 lg:px-16 pt-32 pb-16 flex items-center justify-center relative overflow-hidden">
        {/* Light caustics */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 800px 400px at 80% 20%, rgba(220, 225, 235, 0.6) 0%, transparent 60%),
              radial-gradient(ellipse 600px 800px at 20% 80%, rgba(230, 230, 235, 0.5) 0%, transparent 50%),
              radial-gradient(ellipse 400px 200px at 50% 50%, rgba(255, 255, 255, 0.8) 0%, transparent 70%)
            `,
          }}
        />

        {/* Glass card */}
        <div
          className="relative z-10 w-full max-w-[460px] aspect-[4/5] rounded-[32px] p-12 flex flex-col items-center justify-between border"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(248,248,250,0.5) 100%)",
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
            borderColor: "rgba(255,255,255,0.8)",
            boxShadow:
              "0 30px 80px -20px rgba(10,10,10,0.12), 0 0 0 1px rgba(255,255,255,0.5) inset",
          }}
        >
          <Avatar />

          <p className="text-center text-[17px] leading-snug text-ink font-medium -tracking-[0.01em]">
            Pad krapow is my <span className="ital">favorite</span> meal in the world.
          </p>

          <div className="flex gap-3.5">
            {["in", "𝕏", "ig"].map((label) => (
              <a
                key={label}
                className="w-9 h-9 flex items-center justify-center text-ink rounded-full text-sm font-semibold transition-colors hover:bg-white/60 cursor-pointer"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
