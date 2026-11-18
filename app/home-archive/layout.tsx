import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Previous landing — GAGAGAGAGAGAGA",
  description: "The earlier METADHONE AND METADATA landing, kept for reference.",
  robots: { index: false, follow: false },
};

export default function ArchiveLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
