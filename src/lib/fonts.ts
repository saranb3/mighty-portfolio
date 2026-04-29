import { DM_Sans, Fraunces, JetBrains_Mono, Braah_One } from "next/font/google";

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const braahOne = Braah_One({
  subsets: ["latin"],
  variable: "--font-braah",
  display: "swap",
  weight: ["400"],
});
