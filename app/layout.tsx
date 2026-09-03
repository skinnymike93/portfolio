import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Newsreader, Savate } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const savate = Savate({
  variable: "--font-savate",
  subsets: ["latin"],
  weight: ["200", "500"],
  style: ["normal", "italic"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["200", "400", "500", "700", "800"],
  style: ["normal", "italic"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.tagline,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#eeeeee",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${savate.variable} ${newsreader.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="texture-favorita-4 min-h-full bg-background font-sans text-ink">
        {children}
      </body>
    </html>
  );
}
