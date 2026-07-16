import Link from "next/link";
import { projects, type Project } from "@/content/projects";
import { ProjectVisual } from "./visuals";

/* The showcase is founder/leadership work — the things Mighty started and
   ran. Employed work (TripBuddy, AirEstate, ScribeAR) lives in the
   experience tabs above. */
const isStartedRow = (p: Project) =>
  p.status === "founder" || p.status === "leadership";

const rowOrder = ["gobabygo", "thaisa", "illinihappenings"];
const orderOf = (slug: string) => {
  const i = rowOrder.indexOf(slug);
  return i === -1 ? rowOrder.length : i;
};

export function ProjectGrid() {
  const rows = projects
    .filter(isStartedRow)
    .sort((a, b) => orderOf(a.slug) - orderOf(b.slug));

  return (
    <section id="work" className="bg-ground px-6 lg:px-12 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-[65ch]">
          <h2 className="display font-semibold text-ink text-[clamp(2.5rem,5vw,4rem)] leading-[1.05]">
            I start things.
          </h2>
          <p className="mt-4 text-[18px] leading-[1.6] text-ink-soft">
            Not everything I&rsquo;ve built came from a job description. These
            started as &ldquo;someone should do this&rdquo; — so I did.
          </p>
        </header>

        <ol className="mt-16 lg:mt-24 space-y-24 lg:space-y-32">
          {rows.map((project, i) => (
            <li key={project.slug}>
              <ProjectRow project={project} flip={i % 2 === 1} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProjectRow({ project, flip }: { project: Project; flip: boolean }) {
  const description =
    project.framing === "narrative"
      ? project.narrative
      : project.question?.replace(/\*\*/g, "");
  const { year, roleLabel } = parseRole(project.role);
  const interactive = Boolean(project.ctaHref);

  const inner = (
    <div className="grid lg:grid-cols-[6fr_5fr] gap-10 lg:gap-16 items-center">
      {/* Visual */}
      <div
        className={`relative aspect-[4/3] rounded-3xl overflow-hidden bg-panel border border-ink/10 ${
          interactive
            ? `transition-transform duration-500 ease-out group-hover:-translate-y-2 ${
                flip ? "group-hover:rotate-1" : "group-hover:-rotate-1"
              }`
            : ""
        } ${flip ? "lg:order-2" : ""}`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <ProjectVisual visualKey={project.visualKey} />
        </div>
        <span className="absolute top-5 left-5 z-10 inline-flex items-center rounded-full bg-ink text-ground text-[13px] font-semibold px-3.5 py-1.5">
          {project.statusLabel}
        </span>
      </div>

      {/* Text */}
      <div className={flip ? "lg:order-1" : ""}>
        <p className="text-[15px] font-medium text-ink-soft">
          {year === "—" ? roleLabel : `${year} · ${roleLabel}`}
        </p>
        <h3 className="display font-semibold text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.1] mt-2">
          {project.name}
          {project.nameItalic && (
            <span className="text-ink-soft font-medium">
              {" "}
              {project.nameItalic}
            </span>
          )}
        </h3>

        {description && (
          <p className="mt-4 max-w-[52ch] text-[17px] leading-[1.65] text-ink-soft">
            {description}
          </p>
        )}

        {interactive && (
          <span className="mt-7 inline-flex items-center gap-1.5 text-[16px] font-semibold text-ink underline underline-offset-4 decoration-2">
            {project.ctaLabel}
            <span
              aria-hidden
              className="transition-transform duration-300 ease-out group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        )}
      </div>
    </div>
  );

  if (!interactive) {
    return <div className="block text-ink">{inner}</div>;
  }
  return (
    <Link
      href={project.ctaHref!}
      className="group block no-underline text-ink"
    >
      {inner}
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
