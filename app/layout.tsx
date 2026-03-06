import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "The Monotheist Prism | Viewing modern confusion through absolute monotheism",
  description:
    "Analyzing current events, theology, and modern contradictions through the lens of pure, absolute monotheism. Questions that lead to clarity.",
  keywords: ["monotheism", "theology", "absolute oneness", "current events", "philosophy", "The Monotheist Prism"],
  authors: [{ name: "The Monotheist Prism" }],
  openGraph: {
    title: "The Monotheist Prism",
    description: "Viewing modern confusion through absolute monotheism",
    url: "https://themonotheistprism.com",
    siteName: "The Monotheist Prism",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Monotheist Prism",
    description: "Viewing modern confusion through absolute monotheism",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-primary text-white antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
