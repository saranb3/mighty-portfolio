import { Hero } from "@/components/hero";
import { Rotator } from "@/components/rotator";
import { Work } from "@/components/work";
import { FactsGrid } from "@/components/facts-grid";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Rotator />
      <Work />
      <FactsGrid />
      <Footer />
    </>
  );
}
