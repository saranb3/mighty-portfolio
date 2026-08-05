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
  /* Short intro shown above the bullets; enables the "Read more" disclosure */
  synopsis?: string;
  bullets: string[];
  href?: string;
  ctaLabel?: string;
  secondaryHref?: string;
  secondaryCtaLabel?: string;
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
    synopsis:
    "Product Management intern on Zebra's Advanced Location Technologies team. I own prioritization tooling for a $405M RFID portfolio, translate customer problems into one pagers that engineering scopes from, and built a Claude powered pipeline that turns raw customer feedback into ranked feature requests.",
    bullets: [
      "Automated product roadmap with Claude, cutting release planning time 35% for $405M hardware portfolio",
      "Published Product Marketing Bulletins and user guides for 3 device launches, reaching 100+ channel partners",
      "Conducted in-depth competitor research and market trends to shape a one-pager for a new handheld reader",
      "Sized a $2B hospitality use case, prototyped and pitched an RFID tracking system to software and hardware", 
      "Ran weekly discovery calls with retail prospects, translating pain points and bottlenecks into RFID use cases"
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
    synopsis:
      "Product lead on a 15 person team, building personas, user flows, and app screens for a tourist safety app, designed for the tens of millions of foreign travelers who visit Thailand each year.",
    bullets: [
      "Led a 15-person team to pitch a tourist safety app, placing 1st among 190 teams at Bangkok Bank hackathon", 
      "Ran cross-functional weekly standups, accelerating launch timeline by 3 weeks for earlier user feedback",
      "Interviewed 30 travelers and officials, building personas that shaped segmentation and 4 core product flows",
      "Wireframed app screens in Figma and analyzed Mixpanel funnels to prioritize features, lifting conversion 40%"
    ],
    href: "/work/bangkokbank",
    ctaLabel: "Buddy case study",
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
    synopsis:
      "Intern on the backend engineering team, building an AI pipeline that autofills incomplete listings and the matching logic that ranks them against what renters are searching for, across 1,000+ properties.",
    bullets: [
      "Architected a GPT-4o pipeline to fill empty fields in listings, lifting click through rate 30% across 1,000+ listings",
      "Built 10+ REST APIs cutting page latency 500ms, lifting checkout completion and driving $10K in first month",
      "Authored Swagger API documentation for Postman endpoints, reducing onboarding time for 5 new engineers"
    ],
    href: "/work/airestate",
    ctaLabel: "Read the AirEstate writeup",
  },
  {
    id: "scribear",
    company: "ScribeAR  UIUC",
    role: "Research Intern",
    period: "Jan – Apr 2025",
    location: "Champaign, Illinois",
    icon: "S",
    iconBg: "bg-[#13294b] text-ground",
    synopsis:
      "Research intern on an AI accessibility app, shipping LaTeX-enabled captioning and prioritizing the features that cut drop-off for deaf and hard-of-hearing students.",
    bullets: [
      "Shipped LaTeX-enabled captioning for an AI accessibility web app, growing DAU 30% within launch week.",
      "Designed funnel analysis and interviews to prioritize 8 accessibility features, cutting drop-off for deaf students.",
    ],
    href: "/work/scribear",
    ctaLabel: "Read the ScribeAR case study",
  },
];
