import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <>
      <main className="px-8 lg:px-16 pt-40 pb-24 max-w-[1200px] mx-auto min-h-screen">
        <h1 className="display-serif text-5xl lg:text-7xl font-bold leading-[1] -tracking-[0.02em] text-ink mb-10">
          About <span className="italic text-rust">me</span>
        </h1>
        <p className="font-sans text-[20px] font-medium text-ink-soft leading-[1.5] max-w-[640px]">
          Junior at UIUC studying Stats & CS. PM intern at Zebra Technologies this summer. I build products with rigor and taste — and spend too much time thinking about football tactics, ramen, and the right BPM for a 2am set.
        </p>
      </main>
      <Footer />
    </>
  );
}
