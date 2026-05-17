# Vertical project display

**Date:** 2026-05-18
**Scope:** Replace `src/components/project-grid.tsx` with a vertical, side-by-side row layout that mirrors the structure of the provided Figma reference, translated to the site's existing cream/ink/warm-accent palette.

## Goal

Today, `ProjectGrid` renders projects as a 3-column responsive grid of cards. Replace it with a single-column vertical layout where each project is a wide row composed of:

- a left-side image card (containing the existing per-project `visuals[]` component) with a status pill in its top-left
- a right-side text column with title, description, a "Project info" data table, and a single CTA link

The new layout copies the **structure, hierarchy, and typography role** of the Figma reference. Colors are remapped from the reference's dark theme to the site's existing cream tokens; no new colors are introduced.

## Out of scope

- Changes to `src/content/projects.ts`, `src/components/visuals.tsx`, or `src/app/globals.css`.
- Adding alternating row direction. Every row is image-left / text-right, matching the reference.
- Adding a numeric index (`01`, `02`, …). The reference does not have one and neither will we.
- Multiple CTAs per row. The reference shows two ("Live demo", "See on GitHub"); our project data has only one `ctaHref`, so we render one.

## Component structure

```
<section>                                ← outer wrapper, page-level padding
  <SectionHeader />                      ← eyebrow + serif H2
  <ol>
    {projects.map(p =>
      <ProjectRow project={p} />         ← one row per project
    )}
  </ol>
</section>
```

`ProjectRow` is an internal component (not exported). Its props are just `{ project: Project }`. It owns the row's layout and visual treatment.

### `SectionHeader`

- Eyebrow: `SELECTED WORK` in `font-mono text-xs uppercase tracking-[0.18em] text-ink-mute`.
- H2: Fraunces display-serif (`.display-serif` class), `~64px`, `text-ink`, copy: *Things I've built and shipped.* (Italicize "built" with `.ital` for the same hero-language move used elsewhere on the site.)
- Bottom margin: `mb-24 lg:mb-32`.

### `ProjectRow`

Outer element: a `<Link href={project.ctaHref} class="group block">`. The whole row is clickable.

Inner grid: `lg:grid lg:grid-cols-[5fr_6fr] lg:gap-x-20`. Mobile is single column (image card on top, text below).

**Left column — image card:**
- `relative aspect-[4/3] rounded-3xl bg-paper-soft border border-line`
- Inner: `absolute inset-0 flex items-center justify-center p-8 lg:p-12`
- Renders the existing `visuals[project.visualKey]` component, same as today.
- Hover (on the parent `.group`): `group-hover:-translate-y-1.5 group-hover:shadow-[0_24px_60px_-24px_rgba(10,10,10,0.18)]` over `duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]`.
- **Status pill**: `absolute top-5 left-5 inline-flex items-center rounded-full px-3 py-1.5 bg-ink text-paper font-mono text-[10px] uppercase tracking-[0.18em]`. Content: `project.statusLabel`. For `shipped` projects, append a `↗` glyph.

**Right column — text:**
- `flex flex-col justify-center pt-8 lg:pt-0` (on mobile, separation from card)
- Title (`h3`):
  - `font-sans text-[36px] lg:text-[44px] font-[540] leading-[1.15] -tracking-[0.01em] text-ink`
  - `project.name` followed by, if present, `project.nameItalic` wrapped in `<span class="ital text-ink-soft"> {nameItalic}</span>`
  - On `group-hover`: `transition-opacity duration-300 group-hover:opacity-90` (no slide — the image lift already telegraphs interactivity)
- Description: `mt-5 max-w-[56ch] text-[18px] leading-[1.6] text-ink-soft`. Source:
  - if `framing === "narrative"` → `project.narrative`
  - else → `project.question?.replace(/\*\*/g, "")`
- Project info block (margin `mt-10`):
  - Eyebrow: `<div class="font-mono text-xs uppercase tracking-[0.18em] text-ink">PROJECT INFO</div>` with `mb-4`
  - A `<dl>` with two rows. Each row: `flex justify-between items-baseline py-4 border-t border-line` (last row also gets `border-b`).
    - Row 1: `<dt>Year</dt> <dd>{year}</dd>`
    - Row 2: `<dt>Role</dt> <dd>{roleLabel}</dd>`
  - `dt` styling: `text-[15px] text-ink-soft`
  - `dd` styling: `text-[15px] text-ink`
- CTA: `mt-10 inline-flex items-center gap-2 text-rust font-mono text-xs uppercase tracking-[0.18em] underline underline-offset-[6px] decoration-[1.5px]`. Content: `{project.ctaLabel} ↗`. Note: the CTA isn't a separate clickable element — the entire row already links. The styling is purely visual affordance.

### Year and role parsing

`project.role` today is a single string like `"Student Internship Program · 2025"` or `"Research Assistant"` or `"President · 2025–2026"` or `"2021 – 2024"`.

Parse it once per row:
- `year`: first match of `/\d{4}(?:\s*[–-]\s*\d{4})?/` (captures `2025`, `2025–2026`, `2021 – 2024`). If no match → render `—`.
- `roleLabel`: the original `role` string with that year match and a leading/trailing ` · ` separator stripped. If the result is empty (e.g. role was just `"2021 – 2024"`), render `—`.

This is local helper logic inside `project-grid.tsx`. No schema change.

## Layout and spacing

- Section padding: `px-8 lg:px-12 pt-13gi pb-20` (preserves the existing rhythm from the current grid; `pt-13gi` is the same custom value already in use).
- Max width: wrap the inner content in `mx-auto max-w-7xl`.
- Row separation: `space-y-32 lg:space-y-40`.

## Motion

Use the existing `.fade-up` class on each `ProjectRow`. This class auto-runs the `fade-up` keyframe on mount (no `IntersectionObserver` needed — matches how the hero animates today).

Stagger via inline style: `style={{ animationDelay: \`${Math.min(i, 5) * 80}ms\` }}`. The cap keeps later rows from feeling slow on long lists.

## Color and theme tokens

All colors come from existing tokens. No new tokens added.

| Role | Token |
|---|---|
| Section bg | inherited `--color-paper` |
| Image card bg | `bg-paper-soft` |
| Card border | `border-line` |
| Pill bg / text | `bg-ink` / `text-paper` |
| Title | `text-ink` |
| Italic suffix | `text-ink-soft` via `.ital` |
| Body | `text-ink-soft` |
| Eyebrow / dt | `text-ink` (eyebrow), `text-ink-soft` (dt) |
| dd | `text-ink` |
| Dividers | `border-line` |
| CTA accent | `text-rust` |

## Files touched

- **Rewrite:** `src/components/project-grid.tsx`. Keep the named export `ProjectGrid` so `src/app/page.tsx` does not change.

## Non-changes (explicit)

- `src/content/projects.ts` — untouched.
- `src/components/visuals.tsx` — untouched.
- `src/app/globals.css` — untouched.
- `src/app/page.tsx` — untouched.
- No new dependencies.

## Risks and edge cases

- **Long titles / italic suffixes** could wrap awkwardly at the lg breakpoint. Title uses `text-balance` to help; no fixed width clamp.
- **Visuals registry returning `undefined`** for an unknown `visualKey` (already possible today). The card simply renders empty — same behavior as the current grid. No new fallback added.
- **Mobile pill collision**: on narrow viewports the pill sits in the top-left of the card; this is fine since the card retains its 4:3 aspect even at full-width mobile.
- **Year parsing missing** for the `gobabygo` project (role is `"2021 – 2024"`): `roleLabel` falls back to `—`, year displays `2021 – 2024`. Acceptable.

## Acceptance checklist

- [ ] `ProjectGrid` renders a single vertical column of full-width rows.
- [ ] Each row has image card on the left, text column on the right at `lg+`; stacks on mobile.
- [ ] Image card contains the existing visual for the project and shows a `statusLabel` pill in its top-left.
- [ ] Right column shows title (with optional italic suffix), description, a "PROJECT INFO" eyebrow, a `Year` row, a `Role` row, and a CTA link.
- [ ] Hover lifts the image card and dims the title slightly.
- [ ] Rows fade up on scroll-in with a staggered delay.
- [ ] Only existing color tokens are used; no new colors, no new fonts.
- [ ] `src/app/page.tsx` does not change.
