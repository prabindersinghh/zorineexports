import type { Metadata } from "next";
import { Marcellus, Manrope } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { PageTransition } from "@/components/page-transition";
import { Footer, Header, TickerStrip } from "@/components/site-shell";

const marcellus = Marcellus({ subsets: ["latin"], weight: "400", variable: "--font-display", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Zorine Exports | Premium Indian Export Company", template: "%s | Zorine Exports" },
  description: "Premium Indian export company for spices, fresh fruits, vegetables, dry fruits, honey, herbs, millets, nuts, and handicrafts.",
  metadataBase: new URL("https://zorineexports.com"),
  openGraph: {
    title: "Zorine Exports",
    description: "Global Indian sourcing for premium buyers.",
    images: ["/img/slideshow/home4-slideshow-1.jpg"],
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: "Zorine Exports", description: "Global Indian sourcing for premium buyers." },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${marcellus.variable} ${manrope.variable}`}>
      <body>
        <SmoothScrollProvider>
          <Header />
          <TickerStrip />
          <main><PageTransition>{children}</PageTransition></main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
