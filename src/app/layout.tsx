import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { cn } from "~/lib/utils";
import { CursorProvider } from "../context/CursorContext"
import CustomCursor from "../components/CustomCursor"
import SmoothScroll from "~/components/SmoothScroll";
import Preloader from "~/components/Preloader";
import GlobalBackground from "../components/GlobalBackground"

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

export const metadata: Metadata = {
  metadataBase: new URL("https://vidakai.com"), // Update with your actual domain
  title: {
    default: "VidaKai | Digital Craft & Web Development",
    template: "%s | VidaKai"
  },
  description: "VidaKai builds high-performance web applications, inclusive UI/UX designs, and strategic international digital marketing campaigns.",
  keywords: ["Web Development", "UI/UX Design", "Full-Stack Agency", "Digital Marketing", "Next.js"],
  authors: [{ name: "VidaKai" }],
  creator: "VidaKai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vidakai.com",
    title: "VidaKai | Digital Craft & Web Development",
    description: "High-performance web applications and strategic international marketing.",
    siteName: "VidaKai",
    images: [
      {
        url: "/opengraph-image.png", // Next.js automatically looks for this file
        width: 1200,
        height: 630,
        alt: "VidaKai Web Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VidaKai | Digital Craft & Web Development",
    description: "High-performance web applications and strategic international marketing.",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(geist.variable, "font-mono", jetbrainsMono.variable)}>
      <body><SmoothScroll><CursorProvider><Preloader /><CustomCursor /><GlobalBackground />{children}</CursorProvider></SmoothScroll></body>
    </html>
  );
}
