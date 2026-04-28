import type { Metadata } from "next";
import { geist, geistMono, fraunces } from "@/lib/fonts";
import { Nav } from "@/components/nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mighty Saranborirak — Product",
  description:
    "Junior at UIUC studying Statistics & CS. PM intern at Zebra Technologies, Summer '26. Building products with rigor and taste.",
  metadataBase: new URL("https://mighty.so"),
  openGraph: {
    title: "Mighty Saranborirak — Product",
    description: "Product thinker, systems builder, student of taste.",
    url: "https://mighty.so",
    siteName: "Mighty Saranborirak",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mighty Saranborirak — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mighty Saranborirak",
    description: "Product thinker, systems builder, student of taste.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${fraunces.variable}`}
    >
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
