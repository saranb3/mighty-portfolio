import { projects } from "@/content/projects";
import { ProjectCard } from "./project-card";

export function Work() {
  return (
    <section id="work" className="px-8 lg:px-16 py-24 lg:py-32 max-w-[1400px] mx-auto">
      <div className="mb-20">
        <div className="font-serif italic text-base text-ink-soft mb-2">
          / Welcome to my playground of products & projects
        </div>
        <div className="font-sans text-5xl lg:text-[96px] font-medium -tracking-[0.04em] leading-[0.95] mb-1">
          (2021 — Present)
        </div>
        <div className="font-sans text-5xl lg:text-[96px] font-medium -tracking-[0.04em] leading-[0.95]">
          SELECTED <span className="ital">work</span>
        </div>
      </div>

      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </section>
  );
}
