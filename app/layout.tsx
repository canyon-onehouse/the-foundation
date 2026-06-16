import type { Metadata, Viewport } from "next";
import {
  Montserrat,
  Comfortaa,
  Fuzzy_Bubbles,
  Playfair_Display,
  Poppins,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { MetaPixel } from "@/components/MetaPixel";
import { GivebutterScript } from "@/components/GivebutterScript";
import { GivebutterWidget } from "@/components/GivebutterWidget";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

// OHP design-system tokens first, then global base/overrides.
import "../styles/colors_and_type.css";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
  display: "swap",
});

const fuzzyBubbles = Fuzzy_Bubbles({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-fuzzy",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "One House Project",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1B222C",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const fontVars = [
    montserrat.variable,
    comfortaa.variable,
    fuzzyBubbles.variable,
    playfair.variable,
    poppins.variable,
  ].join(" ");

  return (
    <html lang="en" className={fontVars}>
      <body>
        {children}
        {/* Givebutter floating donation button + binding script */}
        <GivebutterWidget />
        <GivebutterScript />
        {/* Analytics */}
        <MetaPixel />
        <Analytics />
      </body>
    </html>
  );
}
