"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/use-mobile";
import { Music, Users, Phone } from "lucide-react";

interface NavbarProps {
  onNavigate: (section: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md py-2" : "bg-transparent py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {isMobile ? (
            <div className="w-full flex justify-center">
              {/* Centered logo on mobile - linked to hero section */}
              <div
                className="h-10 w-24 relative cursor-pointer"
                onClick={() => onNavigate("hero")}
              >
                <Image
                  src="/pastelsky-font-fix.png"
                  alt="Logo"
                  width={300}
                  height={400}
                  className="object-contain"
                  layout="intrinsic"
                />
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center">
                {/* Smaller logo for desktop - linked to hero section */}
                <div
                  className="h-10 w-24 relative cursor-pointer"
                  onClick={() => onNavigate("hero")}
                >
                  <Image
                    src="/pastelsky-font-fix.png"
                    alt="Logo"
                    width={300}
                    height={400}
                    className="object-contain"
                    layout="intrinsic"
                  />
                </div>
              </div>

              <nav>
                <ul className="flex space-x-8">
                  {["Music", "Members", "Contact"].map((item) => (
                    <motion.li
                      key={item}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <button
                        onClick={() => onNavigate(item.toLowerCase())}
                        className="text-white font-medium text-lg hover:text-primary transition-colors font-serif"
                      >
                        {item}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </>
          )}
        </div>
      </motion.header>

      {/* Mobile bottom navigation */}
      {isMobile && (
        <motion.div
          className="fixed bottom-6 left-0 right-0 z-50 flex justify-center"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex space-x-4 bg-black/70 backdrop-blur-md rounded-full px-4 py-3">
            <motion.button
              onClick={() => onNavigate("music")}
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Music className="h-5 w-5" />
            </motion.button>
            <motion.button
              onClick={() => onNavigate("members")}
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Users className="h-5 w-5" />
            </motion.button>
            <motion.button
              onClick={() => onNavigate("contact")}
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </>
  );
}
