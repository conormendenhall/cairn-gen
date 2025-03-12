import type { Metadata } from "next";
import { Inknut_Antiqua } from "next/font/google";
import "./globals.css";

const inknut = Inknut_Antiqua({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cairn generator",
  description: "Character generator for the Cairn RPG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inknut.className} antialiased`}>{children}</body>
    </html>
  );
}
