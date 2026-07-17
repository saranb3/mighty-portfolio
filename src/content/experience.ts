export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  /* Monogram node — same convention as the case-study org icons */
  icon: string;
  iconBg: string;
  /* Optional logo image; falls back to the letter monogram when absent */
  iconSrc?: string;
  bullets: string[];
  href?: string;
  ctaLabel?: string;
}

export const experiences: Experience[] = [
  {
    id: "zebra",
    company: "Zebra Technologies",
    role: "Product Management Intern",
    period: "May 2026 – Present",
    location: "Holtsville, New York",
    icon: "Z",
    iconBg: "bg-ink text-ground",
    iconSrc: "/images/logos/zebra.png",
    bullets: [
      "Cut release planning 35% for a $405M portfolio by automating roadmap prioritization with a Claude workflow.",
      "Presented GTM strategy to marketing and sales, launching enablement assets to 10,000+ channel partners.",
      "Analyzed 5 competitors and synthesized regional PM feedback into PRD feature scope for a handheld reader.",
    ],
  },
  {
    id: "bangkokbank",
    company: "Bangkok Bank",
    role: "Product Management Intern",
    period: "Jul – Oct 2025",
    location: "Bangkok, Thailand",
    icon: "B",
    iconBg: "bg-[#003d7a] text-ground",
    iconSrc: "/images/logos/bangkokbank.jpeg",
    bullets: [
      "Led a 15-person team to build and pitch TripBuddy, a tourist safety app — 1st place among 190 teams at the Bangkok Bank hackathon.",
      "Interviewed 30 travelers and officials, building personas that shaped segmentation and 4 core product flows.",
      "Wireframed app screens in Figma and analyzed Mixpanel funnels to prioritize features, lifting conversion 40%.",
    ],
    href: "https://docs.google.com/document/d/1BvWyMjsS5Z7rD_HrGpT7yLKMlln87hdyoIAovh_E9dg/edit?usp=sharing",
    ctaLabel: "Read the TripBuddy case study",
  },
  {
    id: "airestate",
    company: "AirEstate",
    role: "AI Product Management Intern",
    period: "May – Jul 2025",
    location: "Sussex County, Delaware",
    icon: "A",
    iconBg: "bg-tangerine-deep text-ground",
    iconSrc: "/images/logos/airestate.jpeg",
    bullets: [
      "Architected a multi-step GPT-4o pipeline to auto-fill listings, lifting click-through rate 30% across 1,000+ listings.",
      "Built 10+ RESTful APIs to cut page latency by 500ms, boosting checkout completion across 1,000+ listings.",
      "Authored Swagger API documentation for Postman endpoints, reducing onboarding time for 5 new engineers.",
    ],
  },
  {
    id: "scribear",
    company: "ScribeAR · UIUC",
    role: "Research Intern",
    period: "Jan – Apr 2025",
    location: "Champaign, Illinois",
    icon: "S",
    iconBg: "bg-[#13294b] text-ground",
    bullets: [
      "Shipped LaTeX-enabled captioning for an AI accessibility web app, growing DAU 30% within launch week.",
      "Designed funnel analysis and interviews to prioritize 8 accessibility features, cutting drop-off for deaf students.",
    ],
  },
];
