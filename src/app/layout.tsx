import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SplashScreen from "@/components/layout/SplashScreen";

export const metadata: Metadata = {
  title: {
    default: "Lab House — Precision Calibration Services | ISO 17025 Certified",
    template: "%s | Lab House Calibration",
  },
  description:
    "Fast, accurate, and affordable ISO/IEC 17025 certified & NABL accredited calibration services. 2-hour emergency response. Serving all industrial sectors.",
  keywords: [
    "calibration services",
    "ISO 17025",
    "NABL accredited",
    "precision measurement",
    "instrument calibration",
    "Lab House",
  ],
  authors: [{ name: "Lab House Calibration Services" }],
  openGraph: {
    title: "Lab House — Precision Calibration Services",
    description:
      "ISO 17025 certified calibration. Fast turnaround, emergency support, competitive pricing.",
    url: "https://labhouse.com",
    siteName: "Lab House",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@8..144,100..1000&family=Red+Hat+Display:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SplashScreen />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
