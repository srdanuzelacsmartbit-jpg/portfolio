import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/general/navbar/Navbar";
import HeroSection from "@/components/home/hero/HeroSection";
import ServiceSection from "@/components/home/services/ServiceSection";
import ResumeSection from "@/components/resume/ResumeSection";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased bg-slate-950`}>
        <Navbar />
        <HeroSection />
        <ServiceSection />
        <ResumeSection />
        {children}
      </body>
    </html>
  );
}

/*
npm install react-icons
npm install typewriter-effect
https://www.youtube.com/watch?v=VSlzAvwPODo

www.reactbits.dev
Search for particles background
npm install ogl

1:36:00
*/
