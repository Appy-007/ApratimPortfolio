import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  weight:['400','500','600','700'],
  subsets: ["latin"],
});

const ovo = Ovo({
  weight:['400'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio-Apratim",
  description: "Portfolio Website of Apratim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${ovo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
