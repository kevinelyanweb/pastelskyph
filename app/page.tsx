"use client";

import type React from "react";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/HeroSection";
import Music from "@/components/MusicSection";
import Contact from "@/components/ContactSection";

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const musicRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative">
      <Navbar
        onNavigate={(section: string) => {
          switch (section) {
            case "music":
              scrollToSection(musicRef);
              break;

            case "contact":
              scrollToSection(contactRef);
              break;
            default:
              scrollToSection(heroRef);
          }
        }}
      />

      <div ref={heroRef}>
        <Hero />
      </div>

      <div ref={musicRef}>
        <Music />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>
    </main>
  );
}
