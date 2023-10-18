import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL!),
  title: {
    template: ` %s | Indie Blog`,
    default: "Indie Blog",
  },
  description: "A blog with the latest news of indie pop culture",
  keywords: [
    "Blog",
    "News",
    "Independent",
    "Indie",
    "Music",
    "Movies",
    "Series",
  ],
  authors: [
    {
      name: "Benjamin Landavazo",
      url: "https://github.com/benjamin324132",
    },
  ],
  creator: "Benjamin Landavazo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.BASE_URL!,
    title: "Indie Blog",
    description: "A blog with the latest news of indie pop culture",
    siteName: "Indie Blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indie Blog",
    description: "A blog with the latest news of indie pop culture",
    images: [`${process.env.BASE_URL!}/og.jpg`],
    creator: "Benjamin Landavazo",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
