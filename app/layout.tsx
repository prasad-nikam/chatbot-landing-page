import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AnonChat — Real conversations. Zero profiles.",
  description:
    "Meet someone new, say what you actually think, and move on. Anonymous conversations on Telegram.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  openGraph: {
    title: "AnonChat — Real conversations. Zero profiles.",
    description: "Anonymous conversations without the profile tax.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} bg-ink-950 font-sans text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
