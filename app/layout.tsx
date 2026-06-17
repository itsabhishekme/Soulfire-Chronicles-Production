import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://soulfirechronicles.com"),

  title: {
    default: "Soulfire Chronicles Production",
    template: "%s | Soulfire Chronicles Production",
  },

  description:
    "Soulfire Chronicles Production creates cinematic documentaries, spiritual stories, inspirational films, and visual experiences that explore destiny, human connection, and the extraordinary journey of life.",

  keywords: [
    "Soulfire Chronicles Production",
    "Documentary Production",
    "Film Production",
    "Spiritual Documentary",
    "Inspirational Films",
    "Storytelling",
    "Video Production",
    "Short Films",
    "Documentary Filmmaking",
    "Creative Studio",
  ],

  authors: [
    {
      name: "Soulfire Chronicles Production",
    },
  ],

  creator: "Soulfire Chronicles Production",

  publisher: "Soulfire Chronicles Production",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://soulfirechronicles.com",
    siteName: "Soulfire Chronicles Production",
    title: "Soulfire Chronicles Production",
    description:
      "Stories that illuminate minds and awaken souls.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Soulfire Chronicles Production",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Soulfire Chronicles Production",
    description:
      "Stories that illuminate minds and awaken souls.",
    images: ["/og-image.jpg"],
  },

  category: "Entertainment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cinzel.variable} ${inter.variable}`}
    >
      <body className="bg-black text-white antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />

          <main className="flex-1">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}