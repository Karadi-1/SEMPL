import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elina | Hygiene, engineered.",
  description:
    "Elina designs and fabricates precision SS304 stainless steel commercial kitchen systems with hygienic detailing, structural integrity, and compliance-focused engineering.",
  keywords: [
    "Elina",
    "SS304 fabrication",
    "commercial kitchen engineering",
    "hygienic kitchen design",
    "stainless steel kitchen equipment India",
  ],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Elina | Hygiene, engineered.",
    description:
      "Premium engineering-led commercial kitchen systems built with SS304 precision.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
