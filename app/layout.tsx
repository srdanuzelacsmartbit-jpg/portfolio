import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/general/navbar/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import ServiceSection from "@/components/services/ServiceSection";
import ResumeSection from "@/components/resume/ResumeSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import SkillsSection from "@/components/skills/SkillsSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import ContactSection from "@/components/contact/ContactSection";

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
        <ProjectsSection />
        <SkillsSection />
        <TestimonialsSection />
        <ContactSection />
        {children}
      </body>
    </html>
  );
}

/*
https://www.youtube.com/watch?v=VSlzAvwPODo

https://github.com/srdanuzelacsmartbit-jpg/portfolio.git

npm install react-icons // Ikone
npm install typewriter-effect // Animcaija

www.reactbits.dev
Search for particles background
npm install ogl // Cestice

2:00:00
*/
