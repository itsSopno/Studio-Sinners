"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import Navbar from "./navbar/navbar";
import Loading from "./Loading/page";
import { AppProvider } from "../contexts/AppContext";

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
            {children}
          </AppProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
