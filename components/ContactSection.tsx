"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Music2, Youtube, Instagram, Video } from "lucide-react";

// This is the data structure for social links
// You can edit this later to add your own social links
const socialLinks = [
  {
    id: 1,
    name: "Spotify",
    icon: Music2,
    color: "#1DB954",
    link: "#", // Replace with your Spotify link
  },
  {
    id: 2,
    name: "YouTube",
    icon: Youtube,
    color: "#FF0000",
    link: "https://www.youtube.com/@pastelskymusicph", // Replace with your YouTube link
  },
  {
    id: 3,
    name: "Instagram",
    icon: Instagram,
    color: "#E1306C",
    link: "https://www.instagram.com/pastelskymusicph/", // Replace with your Instagram link
  },
  {
    id: 4,
    name: "TikTok",
    icon: Video,
    color: "#000000",
    link: "#", // Replace with your TikTok link
  },
  {
    id: 5,
    name: "Email",
    icon: Mail,
    color: "#4A7AFF",
    link: "mailto:contact@example.com", // Replace with your email
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background container - add your image here later */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10" />
      <div className="absolute inset-0 bg-gray-800">
        {/* Background image will go here */}
      </div>

      <div className="container mx-auto px-4 z-20" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
            Contact Us
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.id}
              href={social.link}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: social.id * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-3"
                style={{ backgroundColor: social.color }}
              >
                <social.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
              </div>
              <span className="text-white font-medium font-serif">
                {social.name}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
