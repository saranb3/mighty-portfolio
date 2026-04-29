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
  ctaLabel: string;
  ctaHref: string;
  isDark?: boolean; // render the card in dark mode
  visualKey: string; // matches a key in the visuals registry
}

export const projects: Project[] = [
  {
    slug: "bangkokbank",
    name: "TripBuddy",
    nameItalic: "at Bangkok Bank",
    status: "shipped",
    statusLabel: "Shipped",
    role: "Student Internship Program · 2025",
    framing: "narrative",
    narrative:
      "A real-time safety companion for tourists in Thailand. Built in 8 weeks with a team of 6. Won \"Most Popular\" at the BBL internship hackathon and pitched to Bangkok Bank leadership.",
    metricsLabel: "What I shipped",
    metrics: [
      "**Won \"Most Popular\"** at the BBL Student Internship Program hackathon.",
      "Led **8 user interviews** with international tourists in Bangkok; reframed the brief from \"safety app\" to \"single trusted hub.\"",
      "Designed the **Home, SOS, Area Safety, and News/Area Detail** screens in Figma; co-presented to Bangkok Bank leadership.",
    ],
    tags: ["Product", "Research", "UX Design", "Cross-functional"],
    ctaLabel: "Read the case study",
    ctaHref: "/work/bangkokbank",
    visualKey: "bangkokbank",
  },
  {
    slug: "airestate",
    name: "AirEstate",
    nameItalic: "listing platform",
    status: "shipped",
    statusLabel: "Shipped",
    role: "Backend Engineer · 2023",
    framing: "question",
    question:
      "How might we make **property search** feel fast and trustworthy when the underlying listing data is messy, partial, and constantly updating?",
    metricsLabel: "What I built",
    metrics: [
      "Backend services for the rental listing search experience: ingestion, normalization, and ranked retrieval.",
      "Data pipeline that reconciles multiple feed sources into a unified listing schema.",
      "First production codebase I shipped to a live user base — a real lesson in caching, indexing, and writing boring code that doesn't break.",
    ],
    tags: ["Backend", "Data pipelines", "Search", "Real estate"],
    ctaLabel: "View the writeup",
    ctaHref: "/work/airestate",
    visualKey: "airestate",
  },
  {
    slug: "scribear",
    name: "ScribeAR",
    nameItalic: "at UIUC",
    status: "research",
    statusLabel: "Research",
    role: "Research Assistant",
    framing: "question",
    question:
      "How might we turn **spoken mathematics** into **rendered LaTeX** in real time, accurately, with sub-200ms latency?",
    metricsLabel: "Outcomes",
    metrics: [
      "**+22% accuracy lift** over baseline by rebuilding the tokenizer around contextual ambiguity.",
      "**~140ms P95 latency** end-to-end, audio in to LaTeX rendered.",
      "Shipped to live use at the **UIUC ScribeAR research lab**, 2024.",
    ],
    tags: ["Speech ML", "NLP", "Real-time systems", "Accessibility"],
    ctaLabel: "View case study",
    ctaHref: "/work/scribear",
    isDark: true,
    visualKey: "scribear",
  },
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
      "**$409 raised** through Thai Tea Sale; freshmen mentor program with 4 rotating P'Nong pairs.",
      "**100+ active members**, growing exec team, full event calendar.",
    ],
    tags: ["Operations", "Event production", "Team leadership", "Community"],
    ctaLabel: "See the year in review",
    ctaHref: "/work/thaisa",
    visualKey: "thaisa",
  },
  {
    slug: "gobabygo",
    name: "GoBabyGo",
    nameItalic: "Thailand",
    status: "founder",
    statusLabel: "Founder",
    role: "2021 – 2024",
    framing: "narrative",
    narrative:
      "Started as a single chapter in Bangkok modifying a ride-on car for one kid who needed mobility. Grew into a national volunteer-run program that builds and donates these cars to families across Thailand.",
    metricsLabel: "What we built",
    metrics: [
      "**7 chapters** across Thai universities, each running independent build days.",
      "**200+ volunteers** trained in basic electrical and mechanical work.",
      "**30+ cars** built and given to families with kids who have mobility challenges.",
    ],
    tags: ["Nonprofit", "Founding", "Hardware", "Bangkok → National"],
    ctaLabel: "Read the story",
    ctaHref: "/work/gobabygo",
    visualKey: "gobabygo",
  },
  {
    slug: "illinihappenings",
    name: "Illini Happenings",
    nameItalic: "campus events",
    status: "shipped",
    statusLabel: "Shipped",
    role: "Founder · 2025",
    framing: "narrative",
    narrative:
      "TODO: write up Illini Happenings — what it is, who it's for, what you shipped.",
    metricsLabel: "What I built",
    metrics: [
      "TODO: outcome 1",
      "TODO: outcome 2",
      "TODO: outcome 3",
    ],
    tags: ["TODO", "TODO"],
    ctaLabel: "View case study",
    ctaHref: "/work/illinihappenings",
    visualKey: "illinihappenings",
  },
];
