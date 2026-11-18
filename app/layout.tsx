import type { Metadata } from "next";
import "./globals.css";
import { TypeSignals } from "./type-signals";

export const metadata: Metadata = {
  title: "METADHONE AND METADATA — GAGAGAGAGAGAGA",
  description: "A bilingual, scroll-sensitive visual essay about love, cities, algorithms, memes and the stolen pause.",
  icons: {
    icon: "/favicon-conversationplastique.png",
    apple: "/favicon-conversationplastique.png",
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><TypeSignals>{children}</TypeSignals></body>
    </html>
  );
}
