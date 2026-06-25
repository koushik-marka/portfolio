import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { portfolio } from "@/content/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: `${portfolio.name} | ${portfolio.role}`,
  description: portfolio.summary,
  keywords: [
    portfolio.name,
    "Distributed AI",
    "FastAPI",
    "ReactFlow",
    "Portfolio",
    "Computer Science Student",
    "Hyderabad Developer",
  ],
  openGraph: {
    title: `${portfolio.name} | ${portfolio.role}`,
    description: portfolio.summary,
    url: portfolio.linkedin,
    images: [{ url: "/images/splash-bg.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />

        <main className="flex-1">
          {children} <Analytics /> <SpeedInsights />
        </main>

        <Footer />
      </body>
    </html>
  );
}
