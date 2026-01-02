"use client";
import Image from "next/image";
import AnimatedIntro from "./AnimatedIntro";
import LinkButton from "../../general/LinkButton";
import { LuArrowRight } from "react-icons/lu";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen relative
  flex justify-center items-center
  overflow-hidden flex-col"
    >
      <div className="absolute z-10 flex flex-col items-center">
        {/* GLOWING IMAGE */}
        <div className="w-37.5 h-37.5 relative">
          <div
            className="absolute inset-0 rounded-full bg-linear-to-r
          from-blue-500 to-purple-600 animate-pulse opacity-50 blur-lg"
          ></div>
          <Image
            src={"/hero.png"}
            alt={"image"}
            className="rounded-full object-cover"
            fill
          />
        </div>
        <h1
          className="text-center my-6 text-3xl
        sm:text-4xl md:text-5xl lg:text-6xl font-bold
        tracking-wide bg-clip-text text-transparent bg-linear-to-r
        from-indigo-500 to-gray-300"
        >
          Hi, I&apos;m a Web Developer
        </h1>
        <AnimatedIntro />
        <LinkButton
          href="#projects"
          text="See my work"
          icon={LuArrowRight}
          rounded={true}
        />
      </div>
    </section>
  );
}
