import "~/styles/globals.css";

import { type Metadata, type Viewport } from "next";
import { Archivo, Readex_Pro } from "next/font/google";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { site } from "~/data/site";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const readex = Readex_Pro({
  subsets: ["latin", "arabic"],
  variable: "--font-readex",
  display: "swap",
});

const title = "Vidakai Studio · Websites for local businesses";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s · Vidakai Studio" },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title, description: site.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#121418",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" className={`${archivo.variable} ${readex.variable}`}>
      <body>
        <a
          href="#main"
          className="btn btn-primary sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-3 focus:z-[60]"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
