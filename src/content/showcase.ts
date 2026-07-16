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
    },
    {
      name: "SOS flow",
      blurb:
        "One tap to reach police, embassy, and emergency contacts with live location.",
      visual: "tb-sos",
    },
    {
      name: "Trip alerts",
      blurb: "Area news and scam warnings, localized to where you stand.",
      visual: "tb-news",
    },
  ],
};
