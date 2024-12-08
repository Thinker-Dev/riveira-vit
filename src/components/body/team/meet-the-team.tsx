import BreadCrumb from "@/components/common/bread-crumb";
import Image from "next/image";
import React from "react";
import TeamCard from "./team-card";
import { motion } from "framer-motion";
import Tag from "@/components/common/tag";
import { oddvalSemiBold, spaceGrotesk } from "@/app/fonts";

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
    <section className="py-24 bg-gradient-to-b from-purple-950 to-black">
      <div className="max-w-screen-2xl mx-auto px-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true, amount: 0.1 }}
          className="flex justify-center mb-6"
        >
          <Tag>The Crew</Tag>
        </motion.div>
        <div className="flex justify-center mb-16 flex-col items-center">
          <h1
            className={`text-5xl font-bold uppercase ${oddvalSemiBold.className}`}
          >
            Meet The Team
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            className={`${spaceGrotesk.className} text-base text-white/50 text-center max-w-3xl mx-auto leading-7 mt-7`}
          >
            The minds behind the success of Riviera 2024!
          </motion.p>
        </div>

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
      </div>
    </section>
  );
}
