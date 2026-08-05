import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { bricolage, fraunces, jetbrainsMono, satoshi } from "@/lib/fonts";
import { Nav } from "@/components/nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saran Burapachaisri — Product",
  description:
    "Junior at UIUC studying Statistics & CS. PM intern at Zebra Technologies, Summer '26. Building products with rigor and taste.",
  metadataBase: new URL("https://mighty.so"),
  openGraph: {
    title: "Saran Burapachaisri — Product",
    description: "Product thinker, systems builder, student of taste.",
    url: "https://mighty.so",
    siteName: "Saran Burapachaisri",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saran Burapachaisri — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saran Burapachaisri",
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
    <ViewTransitions>
      <html
        lang="en"
        className={`${bricolage.variable} ${fraunces.variable} ${jetbrainsMono.variable} ${satoshi.variable}`}
      >
        <body>
          <Nav />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
