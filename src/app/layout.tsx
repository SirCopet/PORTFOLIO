import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "MARTÍ COPETE | PORTFOLIO",
  description: "Telecommunications & Electronic Engineering.",
  openGraph: {
    title: "MARTÍ COPETE | PORTFOLIO",
    description: "Telecommunications & Electronic Engineering.",
    type: "website",
    locale: "ca_ES",
    url: "https://marticopete.space",
    siteName: "Martí Copete Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "MARTÍ COPETE | PORTFOLIO",
    description: "Telecommunications & Electronic Engineering.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
