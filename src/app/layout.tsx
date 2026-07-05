import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Noto_Serif_JP, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";

const bodyFont = Zen_Kaku_Gothic_New({
  variable: "--font-body",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const headingFont = Noto_Serif_JP({
  variable: "--font-heading",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "株式会社メディカル東京",
    template: "%s | 株式会社メディカル東京",
  },
  description:
    "在宅医療と医療IT支援を両輪に、地域医療の基盤を支える株式会社メディカル東京。",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.cocopharmacy1.com"
  ),
  icons: {
    icon: "/legacy/cocofavicon.png",
  },
  openGraph: {
    title: "株式会社メディカル東京",
    description:
      "在宅医療と医療IT支援を両輪に、地域医療の基盤を支える株式会社メディカル東京。",
    url: "/",
    siteName: "株式会社メディカル東京",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/legacy/og.jpg",
        width: 1200,
        height: 630,
        alt: "株式会社メディカル東京",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社メディカル東京",
    description:
      "在宅医療と医療IT支援を両輪に、地域医療の基盤を支える株式会社メディカル東京。",
    images: ["/legacy/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja" data-scroll-behavior="smooth">
      <body
        className={`${bodyFont.variable} ${headingFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
