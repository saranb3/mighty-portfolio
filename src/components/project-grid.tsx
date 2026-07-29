import Image from "next/image";
import Link from "next/link";
import { Link as TransitionLink } from "next-view-transitions";
import { projects, type Project } from "@/content/projects";
import { ProjectVisual } from "./visuals";
import { ProjectGallery } from "./project-gallery";

/* The showcase is founder/leadership work — the things Mighty started and
   ran. Employed work (TripBuddy, AirEstate, ScribeAR) lives in the
   experience tabs above. Rendered as a 2×2 "ledger" grid of image-led
   cards. */
const isStartedRow = (p: Project) =>
  p.status === "founder" || p.status === "leadership";

const cardOrder = ["gobabygo", "thaisa", "greenlight", "lostandfound"];
const orderOf = (slug: string) => {
  const i = cardOrder.indexOf(slug);
  return i === -1 ? cardOrder.length : i;
};

export function ProjectGrid() {
  const cards = projects
    .filter(isStartedRow)
    .sort((a, b) => orderOf(a.slug) - orderOf(b.slug));

  return (
    <section id="work" className="scroll-mt-20 bg-ground px-6 lg:px-12 pt-12 lg:pt-10 pb-24 lg:pb-32">
      <div className="mx-auto max-w-6xl">
        <header>
          <h2 className="display font-semibold text-ink text-[clamp(2.5rem,5vw,4rem)] leading-[1.05]">
            Founder Experience
          </h2>
          <p className="mt-4 max-w-[65ch] text-[18px] leading-[1.6] text-ink-soft">
            I like getting crafty and building communities of like minded people. Read more about my projects below!
          </p>
        </header>

        <div className="mt-14 lg:mt-20 flex flex-col gap-6 lg:gap-8">
          {cards.map((project, i) => (
            <ProjectCard key={project.slug} project={project} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

const CARD_CLASS =
  "group relative block bg-panel border border-line rounded-3xl p-5 lg:p-7 no-underline text-ink transition-transform duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_22px_44px_-26px_rgba(22,21,19,0.4)]";

function ProjectCard({ project, flip }: { project: Project; flip: boolean }) {
  const description =
    project.framing === "narrative"
      ? project.narrative
      : project.question?.replace(/\*\*/g, "");
  const { year, roleLabel } = parseRole(project.role);

  const inner = (
    <div
      className={`grid gap-6 lg:gap-12 items-center ${
        flip
          ? "lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]"
          : "lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]"
      }`}
    >
      {/* Image / stylized visual */}
      <div
        className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-panel-deep border border-ink/10 ${
          flip ? "lg:order-2" : ""
        }`}
      >
        {project.images && project.images.length > 0 ? (
          <ProjectGallery images={project.images} alt={project.name} />
        ) : project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 1024px) 100vw, 620px"
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

      {/* Content */}
      <div className={flip ? "lg:order-1" : ""}>
        <p className="text-[15px] font-medium text-ink-soft">
          {year === "—" ? roleLabel : `${year} · ${roleLabel}`}
        </p>
        <h3 className="display font-semibold text-[clamp(1.75rem,3vw,2.6rem)] leading-[1.08] mt-2">
          {project.name}
          {project.nameItalic && (
            <span className="text-ink-soft font-medium"> {project.nameItalic}</span>
          )}
        </h3>

        {description && (
          <p className="mt-4 max-w-[62ch] text-[17px] leading-[1.6] text-ink-soft">
            {description}
          </p>
        )}

        {/* Stats — hairline-ruled ledger row */}
        {project.stats && project.stats.length > 0 && (
          <div className="mt-6 pt-6 border-t border-line flex flex-wrap gap-x-10 gap-y-4">
            {project.stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="display text-[1.75rem] font-bold leading-none tabular-nums text-ink">
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
          <div className="mt-6 flex flex-wrap gap-2">
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

        {/* CTA — internal links animate via View Transitions; external open in a new tab */}
        {project.ctaHref &&
          (() => {
            const external = project.ctaHref.startsWith("http");
            const CtaLink = external ? Link : TransitionLink;
            return (
              <CtaLink
                href={project.ctaHref}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="mt-7 inline-flex items-center gap-1.5 rounded-full border border-ink px-5 py-2.5 text-[15px] font-semibold text-ink no-underline transition-colors duration-200 hover:bg-ink hover:text-ground"
              >
                {project.ctaLabel}
                <span aria-hidden>{external ? "↗" : "→"}</span>
              </CtaLink>
            );
          })()}
      </div>
    </div>
  );

  return <div className={CARD_CLASS}>{inner}</div>;
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
