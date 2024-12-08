import React from "react";
import {
  GraduationCap,
  Globe,
  Users,
  BookOpen,
  Sparkles,
  Target,
} from "lucide-react";
import { VisionCard } from "./vision";
import Tag from "@/components/common/tag";
import { motion } from "framer-motion";
import { oddvalSemiBold, spaceGrotesk } from "@/app/fonts";
import { juanaMedium } from "@/app/fonts";

const visionPoints = [
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Quality Education",
    description:
      "Delivering internationally benchmarked, quality higher education that sets global standards.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Campus",
    description:
      "A cosmopolitan campus hosting diverse students from across the globe, fostering cultural exchange.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Expert Faculty",
    description:
      "Esteemed faculty members dedicated to nurturing students with experience and knowledge.",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Research Excellence",
    description:
      "Driving innovation through cutting-edge research and unwavering commitment to excellence.",
  },
];

export function AboutVit() {
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
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-32 left-32 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            className="flex justify-center mb-6"
          >
            <Tag> Our Vision</Tag>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-2"
          >
            <h1
              className={`${oddvalSemiBold.className} text-4xl leading-[55px]`}
            >
              Empowering{" "}
              <span className={`${juanaMedium.className} italic`}>Minds</span>
              , <br /> Inspiring{" "}
              <span className={`${juanaMedium.className} italic`}>
                Futures
              </span>{" "}
              at{" "}
              <motion.span
                className="text-black bg-[#FF82FE] px-4 py-1 rounded-full"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                VIT.
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            className={`${spaceGrotesk.className} text-base text-white/50 text-center max-w-3xl mx-auto leading-7 mt-7`}
          >
            At VIT, we consistently embrace innovation to elevate educational
            standards, transcending aspiration to become an ingrained ethos.
          </motion.p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 "
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
