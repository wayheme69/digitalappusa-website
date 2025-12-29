import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundOrbs from "@/components/BackgroundOrbs";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digital App - Innovative Mobile Applications",
  description: "Digital App LLC creates innovative mobile applications including CalculX, LotteryAI, BookAI, and Zodiac.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${inter.variable}`}>
      <body className="bg-background text-foreground font-inter antialiased min-h-screen">
        {/* Hidden form for Netlify Forms detection during build */}
        <form name="quote" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input name="form-name" type="hidden" value="quote" />
          <input name="bot-field" />
          <input name="name" />
          <input name="email" />
          <input name="phone" />
          <input name="company" />
          <input name="project_type" />
          <input name="budget" />
          <textarea name="description"></textarea>
        </form>
        <BackgroundOrbs />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
