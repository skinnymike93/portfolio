import type { Metadata } from "next";
import { Instrument_Serif, Savate } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const savate = Savate({
  variable: "--font-savate",
  subsets: ["latin"],
  weight: ["300", "500"],
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${savate.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-ink">
        {children}
      </body>
    </html>
  );
}
