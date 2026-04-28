import Link from "next/link";
import type { Project, ProjectStatus } from "@/content/projects";
import { visuals } from "./visuals";

const statusStyles: Record<ProjectStatus, string> = {
  research: "bg-rust text-paper",
  shipped: "bg-olive text-paper",
  incoming: "bg-ink text-paper",
  leadership: "bg-olive text-paper",
  founder: "bg-mustard text-ink",
};

/**
 * Render text with markdown-like ** for emphasis
 * "**bold-italic accent** rest of text" -> <strong> + plain
 */
function renderEmphasized(text: string, accentClass: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const inner = part.slice(2, -2);
      return (
        <strong key={i} className={accentClass}>
          {inner}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function ProjectCard({ project }: { project: Project }) {
  const Visual = visuals[project.visualKey];
  const isDark = project.isDark ?? false;

  const cardClass = isDark
    ? "bg-ink text-paper border-ink"
    : "bg-paper-soft text-ink border-line";

  const visualBg = isDark ? "bg-ink-2" : "bg-paper";

  return (
    <article
      className={`${cardClass} border rounded-[24px] p-8 lg:p-12 mb-8 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 transition-transform duration-700 hover:-translate-y-1`}
    >
      <div className="flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-[10px] tracking-widest uppercase font-medium ${statusStyles[project.status]}`}
            >
              {project.statusLabel}
            </span>
            <span
              className={`font-mono text-[11px] tracking-wide ${isDark ? "text-ink-mute" : "text-ink-soft"}`}
            >
              {project.role}
            </span>
          </div>

          <h3 className="font-sans text-4xl lg:text-[56px] font-medium -tracking-[0.04em] leading-[0.95] mb-6">
            {project.name}
            {project.nameItalic && (
              <>
                <br />
                <span className="ital">{project.nameItalic}</span>
              </>
            )}
          </h3>

          {project.framing === "question" && project.question && (
            <p className="font-serif text-2xl lg:text-[28px] leading-snug -tracking-[0.015em] font-normal mb-8">
              {renderEmphasized(
                project.question,
                `font-medium italic ${isDark ? "text-mustard" : "text-rust"}`
              )}
            </p>
          )}

          {project.framing === "narrative" && project.narrative && (
            <p className="font-serif italic text-2xl lg:text-[28px] leading-[1.3] -tracking-[0.015em] font-normal mb-8">
              {project.narrative}
            </p>
          )}

          <div className="mb-8">
            <div
              className={`font-mono text-[11px] tracking-widest uppercase mb-4 ${isDark ? "text-ink-mute" : "text-ink-soft"}`}
            >
              {project.metricsLabel}
            </div>
            {project.metrics.map((metric, i) => (
              <div
                key={i}
                className="font-sans text-base leading-snug mb-3 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-px"
                style={{
                  // tailwind doesn't easily compose pseudo bg, so inline:
                  ["--bar-color" as string]: isDark ? "var(--color-mustard)" : "var(--color-ink)",
                }}
              >
                <span
                  className="absolute left-0 top-2.5 w-2 h-px"
                  style={{ background: isDark ? "var(--color-mustard)" : "var(--color-ink)" }}
                />
                {renderEmphasized(metric, "font-semibold")}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div
            className={`flex flex-wrap gap-2 pt-6 border-t ${isDark ? "border-white/15" : "border-line"}`}
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`font-mono text-[11px] px-3 py-1 border rounded-full tracking-wide ${isDark ? "border-white/20 text-paper" : "border-line text-ink-soft"}`}
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={project.ctaHref}
            className={`mt-6 inline-flex items-center gap-2 font-medium text-base no-underline group ${isDark ? "text-paper" : "text-ink"}`}
          >
            {project.ctaLabel}
            <span
              className="block w-8 h-px transition-all duration-500 group-hover:w-16"
              style={{ background: "currentColor" }}
            />
            →
          </Link>
        </div>
      </div>

      <div
        className={`${visualBg} rounded-2xl overflow-hidden relative min-h-[420px] flex items-center justify-center`}
      >
        {Visual && <Visual />}
      </div>
    </article>
  );
}
