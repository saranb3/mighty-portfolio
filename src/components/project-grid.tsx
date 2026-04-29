import Link from "next/link";
import { projects } from "@/content/projects";
import { visuals } from "./visuals";

export function ProjectGrid() {
  return (
    <section className="px-8 lg:px-16 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
        {projects.map((project) => {
          const Visual = visuals[project.visualKey];
          const description =
            project.framing === "narrative"
              ? project.narrative
              : project.question?.replace(/\*\*/g, "");
          const year = project.role.match(/\d{4}/)?.[0] ?? "";
          const org = project.name;

          return (
            <Link
              key={project.slug}
              href={project.ctaHref}
              className="group block no-underline text-ink"
            >
              {/* Image / visual area */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-paper-soft border border-line mb-5 transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-lg">
                {project.statusLabel && project.status === "shipped" && (
                  <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 text-[10px] tracking-widest uppercase font-mono font-medium px-2 py-1 rounded-full bg-paper text-ink-soft border border-line">
                    Shipped ↗
                  </span>
                )}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  {Visual && <Visual />}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-sans text-[22px] font-bold text-ink mb-2 -tracking-[0.01em] group-hover:opacity-80 transition-opacity">
                {project.name}
                {project.nameItalic && (
                  <span className="font-normal text-ink-soft"> {project.nameItalic}</span>
                )}
                {project.status === "shipped" && (
                  <span className="ml-2 inline-flex items-center text-[11px] tracking-widest uppercase font-mono font-medium text-ink-soft">
                    SHIPPED ↗
                  </span>
                )}
              </h3>

              {/* Description */}
              {description && (
                <p className="font-sans text-base text-ink-soft leading-[1.5] mb-4">
                  {description}
                </p>
              )}

              {/* Footer: org · year */}
              <div className="font-sans text-sm font-semibold text-ink">
                {org}
                {year && <span className="text-ink-soft"> · {year}</span>}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
