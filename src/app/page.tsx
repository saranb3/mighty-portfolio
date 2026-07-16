import { Hero } from "@/components/hero";
import { ExperienceTabs } from "@/components/experience-tabs";
import { ProjectGrid } from "@/components/project-grid";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceTabs />
      <ProjectGrid />
      <Footer />
    </>
  );
}
