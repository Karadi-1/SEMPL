import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Elina — Hygiene, engineered.",
  description:
    "Elina is a premium Indian engineering brand specialising in precision-crafted stainless steel commercial kitchen systems designed for durability, compliance, and operational efficiency.",
  keywords: [
    "commercial kitchen equipment",
    "stainless steel fabrication",
    "SS304 kitchen systems",
    "hygienic kitchen design",
    "Elina Engineering",
  ],
  openGraph: {
    title: "Elina — Hygiene, engineered.",
    description:
      "Premium precision-crafted stainless steel commercial kitchen systems.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f6f4",
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
      <body className={`${inter.variable} ${cormorant.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
