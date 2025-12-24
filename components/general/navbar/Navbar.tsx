"use client";
import Link from "next/link";
import Logo from "./Logo";
import LinkButton from "../LinkButton";
import { LuDownload } from "react-icons/lu";
import MobileNavbar from "./MobileNavbar";
import { useState } from "react";

export const navLinks = [
  { url: "#home", label: "Home" },
  { url: "#services", label: "Services" },
  { url: "#resume", label: "Resume" },
  { url: "#projects", label: "Projects" },
  { url: "#skilla", label: "Skills" },
  { url: "#testimonials", label: "Testimonials" },
  { url: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="h-18 fixed z-50 w-full">
      <div
        className="flex items-center h-full justify-between 
			w-[90%] m-auto"
      >
        {/* LOGO */}
        <Logo />
        {/* LINKS */}
        <ul className=" lg:flex space-x-10 hidden">
          {navLinks.map((link) => {
            return (
              <li key={link.url}>
                <Link
                  className="text-gray-200 hover:text-cyan-300
									font-medium transition duration-500"
                  href={link.url}
                >
                  {link.label}{" "}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* BUTTON */}
        <div className="hidden lg:block">
          <LinkButton
            href="/documents/cv.pdf"
            text="Download CV"
            download
            icon={LuDownload}
            iconPosition="left"
          />
        </div>
        <MobileNavbar navOpen={navOpen} />
      </div>
    </nav>
  );
}
