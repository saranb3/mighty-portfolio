/* Skills section content — each entry is a capability plus the receipt
   that backs it. Edit freely; the section renders whatever is here. */

export interface Skill {
  name: string;
  detail: string;
}

export const skills: Skill[] = [
  {
    name: "AI-native workflows",
    detail:
      "I build with Claude Code and Cursor daily, shipping AI products, from a Claude roadmap workflow at Zebra to a GPT-4o listing pipeline at AirEstate.",
  },
  {
    name: "Prototyping & wireframing",
    detail:
      "Figma wireframes to clickable prototypes. TripBuddy's four core flows went sketch to pitch in eight weeks.",
  },
  {
    name: "Analytics & testing",
    detail:
      "Mixpanel funnels, drop-off analysis, grounded in a Statistics degree.",
  }
];
