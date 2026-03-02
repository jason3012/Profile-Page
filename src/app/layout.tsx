import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: {
    default: profile.name,
    template: `%s | ${profile.name}`,
  },
  description: profile.bioShort,
  openGraph: {
    title: profile.name,
    description: profile.bioShort,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: profile.name,
    description: profile.bioShort,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
