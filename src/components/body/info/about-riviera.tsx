import { oddvalSemiBold, spaceGrotesk } from "@/app/fonts";
import { juanaMedium } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import Magnetic from "@/components/common/Magnetic";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AboutRiviera() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="flex space-x-10 items-center">
        <motion.div
          className="w-1/2 flex justify-center"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            src="/crazy-img-2.png"
            alt="Riveira"
            width={500}
            height={500}
          />
        </motion.div>
        <div className="w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-2"
          >
            <h1
              className={`${oddvalSemiBold.className} text-4xl leading-[55px] text-end`}
            >
              <motion.span
                className="text-black bg-primary px-4 py-1 rounded-full"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true, amount: 0.1 }}
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
            className={`${spaceGrotesk.className} text-base text-justify leading-7 mt-7`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            Welcome to Riviera, VIT&apos;s heart—a 4-day explosion of sports,
            culture, and unbridled enthusiasm! 36,000 students, 650+ colleges,
            and a whirlwind of events from dramatic face-offs to literary
            showdowns, musical crescendos, and defy-gravity dance-offs.
            Organized by VIT students, this rollercoaster happens in February,
            turning the campus into a kaleidoscope of talent and celebration.
            Join us for an unforgettable ride where the quirky and competitive
            collide!
          </motion.p>
        </div>
      </div>
    </section>
  );
}
