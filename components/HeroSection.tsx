"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background container - add your image here later */}

      {/* Background image will go here */}
      <Image
        src="/pastelsky-hero.png"
        alt="Background"
        fill
        className="absolute inset-0 z-0 object-cover object-[top_center] sm:object-center"
      />

      <div className="container mx-auto px-4 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        ></motion.div>
      </div>
    </section>
  );
}
