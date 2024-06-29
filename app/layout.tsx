import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import Image from "next/image";
import MoonImg from "../public/moon2.png";
import Footer from "@/components/Footer";
import "./globals.css";
import "../utils/polyfills";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Jagadeesh | Portfolio",
  description: "Jagadeesh's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="background-container">
            <Image className="moon-img" src={MoonImg} alt="" />
            <div className="stars"></div>
            <div className="twinkling"></div>
            <div className="clouds"></div>
          </div>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
