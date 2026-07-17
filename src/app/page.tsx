import { Hero } from "@/components/hero";
import { SkillsGrid } from "@/components/skills-grid";
import { ExperienceTabs } from "@/components/experience-tabs";
import { ProjectGrid } from "@/components/project-grid";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <SkillsGrid />
      <ExperienceTabs />
      <ProjectGrid />
      <Footer />
    </>
  );
}
