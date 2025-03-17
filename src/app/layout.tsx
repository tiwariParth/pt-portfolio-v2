import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Parth Tiwari - Full Stack Developer & DevOps Engineer",
  description:
    "Portfolio showcasing full stack development and DevOps engineering projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={spaceGrotesk.className}>
        {/* Gradient background */}
        <div className="gradient-bg" />

        {/* Animated spotlight effect */}
        <div className="fixed inset-0 bg-gradient-spotlight from-purple-500/5 via-transparent to-transparent z-0" />

        {/* Main content */}
        <div className="relative z-10">
          <Navbar />
          <main className="min-h-screen px-4 py-16 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
