/* Products shown in the experience-section fan deck, keyed by
   Experience.id. Companies without an entry don't get the deck.
   Edit names/blurbs here; visuals are drawn in components/product-deck.tsx. */

export type ProductVisualKey =
  | "rfd40"
  | "fxr90"
  | "rfd90"
  | "roadmap"
  | "partners"
  | "tb-home"
  | "tb-sos"
  | "tb-news";

export interface ShowcaseProduct {
  name: string;
  blurb: string;
  visual: ProductVisualKey;
  /* Optional real screenshot; when set, the deck shows this image instead
     of the stylized `visual` tile. Path is relative to /public. */
  image?: string;
}

export const productsByCompany: Record<string, ShowcaseProduct[]> = {
  zebra: [
    {
      name: "RFD40",
      blurb:
        "UHF RFID sled that snaps onto Zebra mobile computers for retail inventory.",
      visual: "rfd40",
    },
    {
      name: "FXR90",
      blurb:
        "Ultra-rugged fixed RFID reader for ports, yards, and manufacturing lines.",
      visual: "fxr90",
    },
    {
      name: "RFD90",
      blurb:
        "Ultra-rugged RFID sled built for warehouses and harsh environments.",
      visual: "rfd90",
    },
  ],
  bangkokbank: [
    {
      name: "Home & area safety",
      blurb:
        "One trusted hub for a tourist's trip — map, safety score, local guidance.",
      visual: "tb-home",
      image: "/images/tripbuddy figma/Home Page.png",
    },
    {
      name: "Travel insurance",
      blurb:
        "Bundled coverage a traveler can compare, buy, and manage without leaving the app.",
      visual: "tb-sos",
      image: "/images/tripbuddy figma/Travel Insurance.png",
    },
    {
      name: "More & essentials",
      blurb:
        "Profile, saved places, and quick access to every TripBuddy tool in one menu.",
      visual: "tb-news",
      image: "/images/tripbuddy figma/More.png",
    },
  ],
};
