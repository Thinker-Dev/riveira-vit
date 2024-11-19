import BreadCrumb from "@/components/common/bread-crumb";
import Image from "next/image";
import React from "react";
import TeamCard from "./team-card";
import { motion } from "framer-motion";

export default function MeetTheTeam() {
  const team = [
    {
      name: "Dr. G. Viswanathan",
      role: "Chancellor",
      image: "/viswa.jpeg",
    },
    {
      name: "Mr. Sankar Viswanathan",
      role: "Vice President",
      image: "/sankar.jpeg",
    },
    {
      name: "Dr. Sekar Viswanathan",
      role: "Vice President",
      image: "/sekar.jpeg",
    },
    {
      name: "Dr. G V Selvam",
      role: "Vice President",
      image: "/selvam.jpeg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="pt-16 relative min-h-screen">
      <BreadCrumb title="Meet The Team" />
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {team.map((member) => (
          <motion.div key={member.name} variants={itemVariants}>
            <TeamCard {...member} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
