import Link from "next/link";
import { projects, type Project } from "@/content/projects";
import { visuals } from "./visuals";

export function ProjectGrid() {
  return (
    <section className="px-8 lg:px-12 pt-13gi pb-20">
      <div className="mx-auto max-w-7xl">
        <header className="mb-24 lg:mb-32">
          <h2 className="font-[400]display-serif text-[56px] lg:text-[72px] leading-[1] -tracking-[0.02em] text-ink text-balance">
            Selected Works
          </h2>
        </header>

        <ol className="space-y-32 lg:space-y-40">
          {projects.map((project, i) => (
            <li
              key={project.slug}
              className="fade-up"
              style={{ animationDelay: `${Math.min(i, 5) * 80}ms` }}
            >
              <ProjectRow project={project} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const Visual = visuals[project.visualKey];
  const description =
    project.framing === "narrative"
      ? project.narrative
      : project.question?.replace(/\*\*/g, "");

  const { year, roleLabel } = parseRole(project.role);
  const isShipped = project.status === "shipped";

  return (
    <Link
      href={project.ctaHref}
      className="group block no-underline text-ink"
    >
      <div className="grid lg:grid-cols-[5fr_6fr] lg:gap-x-20 items-center">
        {/* Image card */}
        <div className="relative aspect-[4/3] rounded-3xl bg-paper-soft border border-line overflow-hidden transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1.5 group-hover:shadow-[0_24px_60px_-24px_rgba(10,10,10,0.18)]">
          <span className="absolute top-5 left-5 z-10 inline-flex items-center rounded-full bg-ink text-paper font-mono text-[10px] uppercase tracking-[0.18em] px-3 py-1.5">
            {project.statusLabel}
            {isShipped && <span className="ml-1">↗</span>}
          </span>
          <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-12">
            {Visual && <Visual />}
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center pt-10 lg:pt-0">
          <h3 className="font-sans text-[36px] lg:text-[44px] font-[540] leading-[1.15] -tracking-[0.01em] text-ink text-balance transition-opacity duration-300 group-hover:opacity-90">
            {project.name}
            {project.nameItalic && (
              <span className="ital text-ink-soft"> {project.nameItalic}</span>
            )}
          </h3>

          {description && (
            <p className="mt-5 max-w-[56ch] text-[18px] leading-[1.6] text-ink-soft">
              {description}
            </p>
          )}

          <div className="mt-10">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-ink mb-4">
              Project info
            </div>
            <dl>
              <div className="flex justify-between items-baseline py-4 border-t border-line">
                <dt className="text-[15px] text-ink-soft">Year</dt>
                <dd className="text-[15px] text-ink">{year}</dd>
              </div>
              <div className="flex justify-between items-baseline py-4 border-t border-b border-line">
                <dt className="text-[15px] text-ink-soft">Role</dt>
                <dd className="text-[15px] text-ink">{roleLabel}</dd>
              </div>
            </dl>
          </div>

          <span className="mt-10 inline-flex items-center gap-2 w-fit text-rust font-mono text-xs uppercase tracking-[0.18em] underline underline-offset-[6px] decoration-[1.5px]">
            {project.ctaLabel}
            <span aria-hidden>↗</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

function parseRole(role: string): { year: string; roleLabel: string } {
  const yearMatch = role.match(/\d{4}(?:\s*[–-]\s*\d{4})?/);
  const year = yearMatch?.[0] ?? "—";
  let roleLabel = role;
  if (yearMatch) {
    roleLabel = roleLabel.replace(yearMatch[0], "");
  }
  roleLabel = roleLabel
    .replace(/^\s*·\s*/, "")
    .replace(/\s*·\s*$/, "")
    .trim();
  if (!roleLabel) roleLabel = "—";
  return { year, roleLabel };
}
