import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/general/navbar/Navbar";
import Footer from "@/components/general/Footer";

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
        {/* THIS GOEST TO page.tsx !!! */}

        {children}
        <Footer />
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

https://aos-animate.vercel.app
npm install aos

2:25:00
*/
