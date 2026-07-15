import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans, JetBrains_Mono } from "next/font/google";
import Sky from "@/components/Sky";
import Rail from "@/components/Rail";
import TopBar from "@/components/TopBar";
import ScrollReveal from "@/components/ScrollReveal";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-fraunces",
  display: "swap",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const DEFAULT_TITLE = "Izma Qamar — Full Stack Developer";
const DEFAULT_DESCRIPTION =
  "Izma Qamar, full stack web developer exploring AI/ML. CS student at FAST-NUCES, Lahore.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: "%s — Izma Qamar" },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "Izma Qamar",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FDFBFA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Sky />
        <Rail />
        <TopBar />
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
