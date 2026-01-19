"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import Navbar from "./navbar/navbar";
import Loading from "./Loading/page";
import { AppProvider } from "../contexts/AppContext";
import SmoothScroll from "./smoothScroll";
import { SpeedInsights } from "@vercel/speed-insights/next"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <html lang="en">
        <body>
          <Loading />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased rounded-tr-4xl rounded-tl-4xl`}
      >
        <SessionProvider>
         
          <AppProvider>
            <Navbar />
         
            <SmoothScroll>
            {children}
         
          </SmoothScroll>
        
          </AppProvider>
          <SpeedInsights />
        </SessionProvider>
      </body>
        <footer className="py-10 px-6 md:px-20 flex justify-between items-center opacity-20 text-[8px] tracking-[0.5em] uppercase border-t border-white/5 bg-black text-white">
        <span>ESTD // 2026</span>
        <span>Studio_Siners // Contact_Gateway</span>
      </footer>
    </html>
  );
}
