import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Nunito } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "BERKAH Trip | Private Trip Bromo dari Surabaya",
  description: "BERKAH Trip melayani private trip Gunung Bromo dari Surabaya, Sidoarjo, dan sekitarnya. Tidak digabung rombongan lain, jadwal fleksibel, nyaman, dan aman.",
  keywords: [
    "BERKAH Trip",
    "Private Trip Bromo",
    "Trip Bromo dari Surabaya",
    "Sewa Jeep Bromo",
    "Wisata Bromo Murah",
    "Surabaya Bromo Tour"
  ],
  authors: [{ name: "BERKAH Trip Team" }],
  openGraph: {
    title: "BERKAH Trip | Private Trip Bromo dari Surabaya",
    description: "BERKAH Trip melayani private trip Gunung Bromo dari Surabaya, Sidoarjo, dan sekitarnya. Tidak digabung rombongan lain, jadwal fleksibel, nyaman, dan aman.",
    siteName: "BERKAH Trip",
    locale: "id_ID",
    type: "website",
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-cream text-brand-dark selection:bg-brand-orange selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
