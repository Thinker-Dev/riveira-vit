import { juanaMedium, oddvalSemiBold, spaceGrotesk } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import Magnetic from "@/components/common/Magnetic";
import { motion } from "framer-motion";

export default function AboutVit() {
  return (
    <motion.section
      className="min-h-screen flex items-center"
      initial={{ y: 20 }}
      whileInView={{ translateY: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <section className="flex space-x-10 items-end">
        <div className="w-1/2">
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
                className="text-black bg-primary px-4 py-1 rounded-full"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                VIT.
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            className={`${spaceGrotesk.className} text-base text-justify leading-7 mt-7`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            At VIT, our founding vision is the delivery of internationally
            benchmarked, quality higher education. We consistently embrace
            innovation to elevate educational standards. Our cosmopolitan campus
            hosts a diverse student body from across the globe. Our esteemed
            faculty, experienced and knowledgeable, is dedicated to nurturing
            students. The global benchmarks set by VIT in teaching and research
            drive our unwavering commitment to excellence, transcending
            aspiration to become an ingrained ethos.
          </motion.p>
        </div>
        <motion.div
          className="w-1/2 flex justify-center"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <Image
            src="/craxy-img-1.png"
            alt="Riveira"
            width={400}
            height={400}
          />
        </motion.div>
      </section>
    </motion.section>
  );
}
