import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Black Friday Deal - FervoGear SFI-5 Race Suit + FREE Gloves | Save $451",
  description: "Limited time Black Friday offer: Premium Double Layer SFI-5 Nomex Race Suit + FREE Matching Gloves. Save $451 this weekend only. Fully customizable, 3.5 week turnaround.",
  keywords: "race suit, fire suit, Nomex suit, SFI-5, custom race suit, black friday, racing gear, FervoGear",
  openGraph: {
    title: "Black Friday: Save $451 on FervoGear SFI-5 Race Suit + FREE Gloves",
    description: "Premium Double Layer SFI-5 Nomex Race Suit. Fully customizable. Limited quantities.",
    images: ["https://fervogear.com/wp-content/uploads/2025/10/Helloween.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Performance: Preconnect to external domains */}
        <link rel="preconnect" href="https://fervogear.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fast.wistia.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fervogear.com" />
        <link rel="dns-prefetch" href="https://fast.wistia.com" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
