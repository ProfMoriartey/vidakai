import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { cn } from "~/lib/utils";
import { CursorProvider } from "../context/CursorContext"
import CustomCursor from "../components/CustomCursor"
import SmoothScroll from "~/components/SmoothScroll";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

export const metadata: Metadata = {
  title: "VidaKai",
  description: "Websites with an attitude",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(geist.variable, "font-mono", jetbrainsMono.variable)}>
      <body><SmoothScroll><CursorProvider><CustomCursor />{children}</CursorProvider></SmoothScroll></body>
    </html>
  );
}
