import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Chinh Dan — Session Musician",
  description:
    "Session musician specializing in guitar, bass, vocals, and songwriting. Based in Vancouver, BC, Canada.",
  openGraph: {
    title: "Chinh Dan — Session Musician",
    description:
      "Session musician specializing in guitar, bass, vocals, and songwriting.",
    url: "https://chinh-dan.com",
    siteName: "Chinh Dan",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#0d0d0d] text-cream antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
