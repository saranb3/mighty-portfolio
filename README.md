# Mighty Saranborirak — Portfolio

Personal portfolio site. Next.js 15 (App Router) + Tailwind v4 + MDX.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project structure

```
src/
├── app/
│   ├── layout.tsx          Root layout. Fonts, metadata, nav.
│   ├── page.tsx            Home page composing all sections.
│   ├── globals.css         Tailwind v4 theme + a few keyframes.
│   ├── sitemap.ts          Auto-generates /sitemap.xml.
│   ├── robots.ts           /robots.txt for crawlers.
│   └── work/
│       └── scribear/page.mdx   Example case study. Copy this for new ones.
├── components/
│   ├── nav.tsx             Floating pill nav.
│   ├── hero.tsx            Split black/white hero.
│   ├── avatar.tsx          The illustrated avatar SVG.
│   ├── spotify-card.tsx    Now-playing card.
│   ├── rotator.tsx         Auto-cycling about strip.
│   ├── work.tsx            Maps projects to ProjectCard.
│   ├── project-card.tsx    Full-width project card.
│   ├── facts-grid.tsx      Personal interests grid.
│   ├── footer.tsx          Thank-you / contact / marquee.
│   └── visuals/            Custom SVG visual per project.
│       └── index.tsx
├── content/
│   └── projects.ts         Source of truth for all work cards.
└── lib/
    └── fonts.ts            next/font setup for Geist + Fraunces.
```

## How to customize

### Adding or editing a project

Edit `src/content/projects.ts`. Each project is typed — TypeScript will tell you if you miss a field.

Project framing options:
- `framing: "question"` — uses the "How might we..." PM-style framing
- `framing: "narrative"` — uses a free-form italic paragraph

For the visual on the right side of each card, add a new component to `src/components/visuals/index.tsx` and reference it via `visualKey` in `projects.ts`.

### Adding a case study

1. Create `src/app/work/[slug]/page.mdx`
2. Set the `metadata` export at the top
3. Write your case study in markdown — `mdx-components.tsx` handles the styling
4. Update the matching `ctaHref` in `projects.ts` to point at the new route

### Changing colors

All colors live in `src/app/globals.css` as Tailwind v4 `@theme` tokens. Change `--color-ink`, `--color-rust`, etc. and they update everywhere.

### Changing fonts

Edit `src/lib/fonts.ts`. Any font from `next/font/google` works as a drop-in.

### Replacing the avatar

Replace the SVG in `src/components/avatar.tsx` with either a different SVG or a `<Image>` from `next/image` pointing at `/public/images/avatar.jpg`.

## Deploy to Vercel

```bash
git init
git add .
git commit -m "initial"
gh repo create mighty-portfolio --public --source=. --push
```

Then visit vercel.com → Import Project → pick the repo → Deploy. ~60 seconds to live.

To add a custom domain (e.g. mighty.so), buy it from any registrar and add it in the Vercel project settings. Vercel will give you the DNS record to add.

## TODO

- [ ] Add real avatar (commission illustration or use photo)
- [ ] Replace placeholder OG image at `/public/og-image.png`
- [ ] Add real photography to `/public/images/` and replace placeholder visuals
- [ ] Write case studies for Zebra, ThaiSA, GoBabyGo, AirEstate
- [ ] Add `/about` page with longer bio
- [ ] Wire up the resume PDF download (`/public/resume.pdf`)
- [ ] Replace social links with real handles
