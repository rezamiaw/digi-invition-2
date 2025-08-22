import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Geist, Geist_Mono, Kumbh_Sans, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kumbhSans = Kumbh_Sans({
  variable: "--font-kumbh-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Wedding of Tania & Doni",
  description:
    "Undangan pernikahan digital Tania & Doni. Doa, restu, RSVP, galeri, dan Wedding Gift.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "The Wedding of Tania & Doni",
    description:
      "Undangan pernikahan digital Tania & Doni. Doa, restu, RSVP, galeri, dan Wedding Gift.",
    url: "https://example.com",
    siteName: "Tania & Doni Wedding",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Wedding of Tania & Doni",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Wedding of Tania & Doni",
    description:
      "Undangan pernikahan digital Tania & Doni. Doa, restu, RSVP, galeri, dan Wedding Gift.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💍</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/bg.png"
          as="image"
          type="image/png"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kumbhSans.variable} ${inter.variable} antialiased flex justify-center`}
      >
        <main className="relative w-full h-full">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
