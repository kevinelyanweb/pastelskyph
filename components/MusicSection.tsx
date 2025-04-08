"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Music2, Youtube } from "lucide-react";
import Image from "next/image";

// This is the data structure for album information
// You can edit this later to add your own album information
const albumData = [
  {
    id: 1,
    title: "Lila",
    releaseYear: "2023",
    coverImage: "/placeholder.svg?height=192&width=192", // Replace with your image path
    spotifyLink: "#",
    youtubeLink: "#",
  },
  {
    id: 2,
    title: "Hanap",
    releaseYear: "2022",
    coverImage: "/placeholder.svg?height=192&width=192", // Replace with your image path
    spotifyLink: "#",
    youtubeLink: "#",
  },
  {
    id: 3,
    title: "Parirala",
    releaseYear: "2021",
    coverImage: "/placeholder.svg?height=192&width=192", // Replace with your image path
    spotifyLink: "#",
    youtubeLink: "#",
  },
  {
    id: 4,
    title: "Pagsisisi",
    releaseYear: "2020",
    coverImage: "/placeholder.svg?height=192&width=192", // Replace with your image path
    spotifyLink: "#",
    youtubeLink: "#",
  },
  {
    id: 5,
    title: "Freeway",
    releaseYear: "2019",
    coverImage: "/placeholder.svg?height=192&width=192", // Replace with your image path
    spotifyLink: "#",
    youtubeLink: "#",
  },
];

export default function Music() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <Image
        src="/pastelsky-music.jpg" // Place image inside `public/` folder
        alt="Background"
        fill
        className="absolute inset-0 z-0 object-cover object-[top_center] sm:object-center"
      />

      <div className="container mx-auto px-4 z-20" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
            Our Music
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {albumData.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface AlbumProps {
  album: {
    id: number;
    title: string;
    releaseYear: string;
    coverImage: string;
    spotifyLink: string;
    youtubeLink: string;
  };
}

function AlbumCard({ album }: AlbumProps) {
  return (
    <motion.div
      className="bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden"
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: album.id * 0.1 },
        },
      }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <div className="h-48 bg-gray-800 relative">
        {/* Album cover image */}
        <Image
          src={album.coverImage || "/placeholder.svg"}
          alt={album.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 font-serif">
          {album.title}
        </h3>
        <p className="text-gray-300 mb-4 font-sans">
          Released: {album.releaseYear}
        </p>
        <div className="flex space-x-3">
          <motion.a
            href={album.spotifyLink}
            className="flex items-center justify-center px-4 py-2 bg-[#1DB954] text-white rounded-md text-sm font-medium font-sans"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Music2 className="h-4 w-4 mr-2" />
            Spotify
          </motion.a>
          <motion.a
            href={album.youtubeLink}
            className="flex items-center justify-center px-4 py-2 bg-[#FF0000] text-white rounded-md text-sm font-medium font-sans"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Youtube className="h-4 w-4 mr-2" />
            YouTube
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
