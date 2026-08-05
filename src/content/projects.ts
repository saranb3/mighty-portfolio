export type ProjectStatus = "shipped" | "research" | "incoming" | "leadership" | "founder";
export type FramingType = "question" | "narrative";

export interface Project {
  slug: string;
  name: string;
  nameItalic?: string; // optional italic suffix in the title
  status: ProjectStatus;
  statusLabel: string; // display label: "Research", "Incoming", etc.
  role: string; // "Research Assistant · 2024"
  framing: FramingType;
  question?: string; // markdown-style: ** for bold-italic accent
  narrative?: string;
  metricsLabel: string; // "Outcomes" | "By the numbers" | "What I built"
  metrics: string[]; // markdown-style ** for bold
  tags: string[];
  /* Omit both to render the row without a link (e.g. case study not written yet). */
  ctaLabel?: string;
  ctaHref?: string;
  isDark?: boolean; // render the card in dark mode
  visualKey: string; // matches a key in the visuals registry
  image?: string; // optional real photo/screenshot; overrides the stylized visual in the grid
  images?: string[]; // optional gallery; when 2+, the card shows a slideshow with next/prev
  stats?: { value: string; label: string }[]; // clean number+label pairs shown on the grid card
}

export const projects: Project[] = [
  {
    slug: "thaisa",
    name: "Thai Student",
    nameItalic: "Association",
    status: "leadership",
    statusLabel: "Leadership",
    role: "President · 2025–2026",
    framing: "narrative",
    narrative:
      "A year of running ops for a 100+ member org. Songkran on the Quad, Casino Night, Friendsgiving, Lunar New Year, a soccer tournament that nearly required a referee — events that shipped on time, every time.",
    metricsLabel: "By the numbers",
    metrics: [
      "**12 events shipped** across academic year '25–'26, including ASTA Expo and Welcome Dinner.",
      "**$1000 raised** through Thai Tea Sale; freshmen mentor program with 4 rotating P'Nong pairs.",
      "**100+ active members**, growing exec team, full event calendar.",
    ],
    tags: ["Operations", "Event production", "Team leadership", "Community"],
    ctaLabel: "See the year in review",
    ctaHref: "/work/thaisa",
    visualKey: "thaisa",
    images: [
      "/images/thaisa/songkran.png",
      "/images/thaisa/welcomeparty.png",
      "/images/thaisa/thanksgiving.png",
      "/images/thaisa/orchid trip.png",
      "/images/thaisa/seniorparty.png",
    ],
    stats: [
      { value: "12", label: "events organized" },
      { value: "$1000", label: "raised" },
      { value: "100+", label: "active members" },
    ],
  },
  {
    slug: "gobabygo",
    name: "GoBabyGo",
    nameItalic: "Thailand",
    status: "founder",
    statusLabel: "Founder",
    role: "Founder · 2021 – 2024",
    framing: "narrative",
    narrative:
      "Founded in my school's maker space, GoBabyGo is a nonprofit based in Bangkok modifying ride-on toy cars for children with mobility disabilities. Currently, scaled into a national volunteer-run program that builds these cars to families across Thailand.",
    metricsLabel: "What we built",
    metrics: [
      "**7 chapters** across Thai universities, each running independent build days.",
      "**200+ volunteers** trained in basic electrical and mechanical work.",
      "**30+ cars** built and given to families with kids who have mobility challenges.",
    ],
    tags: ["Nonprofit", "Founding", "Hardware", "Bangkok → National"],
    ctaLabel: "Read more",
    ctaHref: "https://www.gobabygothailand.org/",
    visualKey: "gobabygo",
    images: [
      "/images/gobabygo/gbg1.png",
      "/images/gobabygo/gbg2.png",
      "/images/gobabygo/gbg3.png",
      "/images/gobabygo/gbg4.png",
    ],
    stats: [
      { value: "7", label: "chapters nationwide" },
      { value: "200+", label: "volunteers trained" },
      { value: "30+", label: "cars built & donated" },
    ],
  },
];
