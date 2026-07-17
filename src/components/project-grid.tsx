import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/content/projects";
import { ProjectVisual } from "./visuals";

/* The showcase is founder/leadership work — the things Mighty started and
   ran. Employed work (TripBuddy, AirEstate, ScribeAR) lives in the
   experience tabs above. Rendered as a 2×2 "ledger" grid of image-led
   cards. */
const isStartedRow = (p: Project) =>
  p.status === "founder" || p.status === "leadership";

const cardOrder = ["gobabygo", "thaisa", "greenlight", "lostandfound", "illinihappenings"];
const orderOf = (slug: string) => {
  const i = cardOrder.indexOf(slug);
  return i === -1 ? cardOrder.length : i;
};

export function ProjectGrid() {
  const cards = projects
    .filter(isStartedRow)
    .sort((a, b) => orderOf(a.slug) - orderOf(b.slug));

  return (
    <section id="work" className="bg-ground px-6 lg:px-12 pt-12 lg:pt-10 pb-24 lg:pb-32">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-[65ch]">
          <h2 className="display font-semibold text-ink text-[clamp(2.5rem,5vw,4rem)] leading-[1.05]">
            Founder Experience
          </h2>
          <p className="mt-4 text-[18px] leading-[1.6] text-ink-soft">
            Not everything I&rsquo;ve built came from a job description. These
            started as &ldquo;someone should do this&rdquo; — so I did.
          </p>
        </header>

        <div className="mt-14 lg:mt-20 grid gap-4 md:grid-cols-2">
          {cards.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

const CARD_CLASS =
  "group relative flex flex-col bg-panel border border-line rounded-3xl p-6 lg:p-7 no-underline text-ink transition-transform duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_22px_44px_-26px_rgba(22,21,19,0.4)]";

function ProjectCard({ project }: { project: Project }) {
  const description =
    project.framing === "narrative"
      ? project.narrative
      : project.question?.replace(/\*\*/g, "");
  const { year, roleLabel } = parseRole(project.role);
  const interactive = Boolean(project.ctaHref);

  const inner = (
    <>
      {/* Image / stylized visual */}
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-panel-deep border border-ink/10">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, 560px"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <ProjectVisual visualKey={project.visualKey} />
          </div>
        )}
        <span className="absolute top-4 right-4 z-10 inline-flex items-center rounded-full bg-ink text-ground text-[13px] font-semibold px-3.5 py-1.5">
          {project.statusLabel}
        </span>
      </div>

      {/* Role + title */}
      <p className="mt-5 text-[15px] font-medium text-ink-soft">
        {year === "—" ? roleLabel : `${year} · ${roleLabel}`}
      </p>
      <h3 className="display font-semibold text-[clamp(1.5rem,2.6vw,1.9rem)] leading-[1.1] mt-2">
        {project.name}
        {project.nameItalic && (
          <span className="text-ink-soft font-medium"> {project.nameItalic}</span>
        )}
      </h3>

      {description && (
        <p className="mt-3 text-[16px] leading-[1.6] text-ink-soft">
          {description}
        </p>
      )}

      {/* Stats — hairline-ruled ledger row */}
      {project.stats && project.stats.length > 0 && (
        <div className="mt-5 pt-5 border-t border-line flex flex-wrap gap-x-8 gap-y-4">
          {project.stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="display text-[1.5rem] font-bold leading-none tabular-nums text-ink">
                {s.value}
              </span>
              <span className="text-[13px] leading-[1.3] text-ink-soft max-w-[16ch]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Tags */}
      {project.tags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] tracking-wide text-ink-soft border border-line rounded-full px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* CTA pinned to the bottom */}
      {interactive && (
        <span className="mt-6 pt-1 inline-flex items-center gap-1.5 text-[15px] font-semibold text-ink underline underline-offset-4 decoration-2">
          {project.ctaLabel}
          <span
            aria-hidden
            className="transition-transform duration-300 ease-out group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      )}
    </>
  );

  if (!interactive) {
    return <div className={CARD_CLASS}>{inner}</div>;
  }
  return (
    <Link href={project.ctaHref!} className={CARD_CLASS}>
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
