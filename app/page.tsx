"use client";

import type React from "react";
import { useRef } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero-section";
import Music from "@/components/music-section";

import Contact from "@/components/contact-section";

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const musicRef = useRef<HTMLDivElement | null>(null);
  const membersRef = useRef<HTMLDivElement | null>(null);
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
            case "members":
              scrollToSection(membersRef);
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
