import React from "react";
import { Music, Trophy, Palette, Mic } from "lucide-react";
import { VisionCard } from "./vision";
import { motion } from "framer-motion";
import { oddvalSemiBold, spaceGrotesk } from "@/app/fonts";
import { juanaMedium } from "@/app/fonts";

const visionPoints = [
  {
    icon: <Music className="w-6 h-6" />,
    title: "Music Excellence",
    description:
      "From classical compositions to electronic beats, showcase your musical prowess across diverse genres.",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Competitive Spirit",
    description:
      "Battle it out in multiple rounds of intense competition, judged by industry professionals.",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Creative Freedom",
    description:
      "Express yourself freely through various art forms, from traditional to digital mediums.",
  },
  {
    icon: <Mic className="w-6 h-6" />,
    title: "Performance Platform",
    description:
      "Take center stage and captivate audiences with your unique artistic vision.",
  },
];

export function AboutRiviera() {
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
    <section className="relative py-24 overflow-hidden bg-black ">
      <div className="relative z-10 max-w-screen-2xl mx-auto px-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-2"
          >
            <h1
              className={`${oddvalSemiBold.className} text-4xl leading-[55px] text-center`}
            >
              <motion.span
                className="text-black bg-primary px-4 py-1 rounded-full"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Riviera
              </motion.span>{" "}
              Where{" "}
              <span className={`${juanaMedium.className} italic`}>
                Creativity
              </span>
              <br /> Meets{" "}
              <span className={`${juanaMedium.className} italic`}>
                Competition
              </span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            className={`${spaceGrotesk.className} text-base text-white/50 text-center max-w-3xl mx-auto leading-7 mt-7`}
          >
            Welcome to Riviera, VIT's heart—a 4-day explosion of sports,
            culture, and unbridled enthusiasm! 36,000 students, 650+ colleges,
            and a whirlwind of events from dramatic face-offs to literary
            showdowns.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {visionPoints.map((point, index) => (
            <motion.div key={index} variants={itemVariants}>
              <VisionCard {...point} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
