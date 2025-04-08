"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// This is the data structure for band members
// You can edit this later to add your own band members
const memberData = [
  {
    id: 1,
    name: "John Doe",
    role: "Vocalist",
    image: "/placeholder.svg?height=256&width=256", // Replace with your image path
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Guitarist",
    image: "/placeholder.svg?height=256&width=256", // Replace with your image path
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Bassist",
    image: "/placeholder.svg?height=256&width=256", // Replace with your image path
  },
  {
    id: 4,
    name: "Sarah Williams",
    role: "Drummer",
    image: "/placeholder.svg?height=256&width=256", // Replace with your image path
  },
];

export default function Members() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background container - add your image here later */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10" />
      <div className="absolute inset-0 bg-gray-900">
        {" "}
        <Image
          src="/pastelsky-member.jpg" // Place image inside `public/` folder
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
      </div>

      <div className="container mx-auto px-4 z-20" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
            Band Members
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {memberData.map((member) => (
            <MemberCard key={member.id} member={member} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface MemberProps {
  member: {
    id: number;
    name: string;
    role: string;
    image: string;
  };
  isInView: boolean;
}

function MemberCard({ member, isInView }: MemberProps) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: member.id * 0.2 }}
    >
      <div className="relative h-64 w-64 mx-auto mb-6 overflow-hidden rounded-full">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          width={256}
          height={256}
          className="object-cover"
        />
      </div>
      <h3 className="text-2xl font-bold text-white mb-2 font-serif">
        {member.name}
      </h3>
      <p className="text-primary text-lg font-sans">{member.role}</p>
    </motion.div>
  );
}
