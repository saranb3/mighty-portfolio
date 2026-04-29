import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { visuals } from "@/components/visuals";
import { Footer } from "@/components/footer";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project — Mighty Burapachaisri" };
  return {
    title: `${project.name} — Mighty Burapachaisri`,
    description:
      project.framing === "narrative"
        ? project.narrative
        : project.question?.replace(/\*\*/g, ""),
  };
}

function renderEmphasized(text: string, accentClass: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className={accentClass}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const Visual = visuals[project.visualKey];
  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <main className="max-w-[820px] mx-auto px-6 lg:px-8 pt-32 pb-24">
        <Link
          href="/"
          className="font-mono text-xs tracking-widest uppercase text-ink-soft no-underline hover:text-ink"
        >
          ← Back to work
        </Link>

        <div className="font-mono text-[11px] tracking-widest text-rust uppercase mt-12 mb-4">
          {project.statusLabel} · {project.role}
        </div>

        <h1 className="display-serif text-5xl lg:text-6xl font-bold leading-[1] -tracking-[0.02em] text-ink mb-10">
          {project.name}
          {project.nameItalic && (
            <span className="italic font-medium text-ink-soft"> {project.nameItalic}</span>
          )}
        </h1>

        {project.framing === "question" && project.question && (
          <p className="font-serif text-2xl lg:text-[28px] leading-snug -tracking-[0.015em] font-normal mb-10">
            {renderEmphasized(project.question, "font-medium italic text-rust")}
          </p>
        )}

        {project.framing === "narrative" && project.narrative && (
          <p className="font-serif italic text-2xl lg:text-[28px] leading-[1.4] -tracking-[0.015em] font-normal mb-10 text-ink">
            {project.narrative}
          </p>
        )}

        {Visual && (
          <div className="rounded-2xl overflow-hidden bg-paper-soft border border-line aspect-[16/10] my-12">
            <Visual />
          </div>
        )}

        <h2 className="font-mono text-[11px] tracking-widest uppercase text-ink-soft mb-4">
          {project.metricsLabel}
        </h2>
        <ul className="space-y-3 mb-12">
          {project.metrics.map((m, i) => (
            <li
              key={i}
              className="font-sans text-[18px] text-ink leading-snug pl-5 relative before:content-[''] before:absolute before:left-0 before:top-3 before:w-3 before:h-px before:bg-ink"
            >
              {renderEmphasized(m, "font-semibold")}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-6 border-t border-line">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] px-3 py-1 border border-line rounded-full tracking-wide text-ink-soft"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-line flex justify-between items-center font-mono text-xs tracking-widest text-ink-soft">
          <span>NEXT →</span>
          <Link
            href={next.ctaHref}
            className="text-ink no-underline hover:underline"
          >
            {next.name}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
