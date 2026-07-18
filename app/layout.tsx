import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Game Developers Guild",
  description: "The University of Auckland's community for game developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-0 bg-paper font-k2d text-ink">{children}</body>
    </html>
  );
}
