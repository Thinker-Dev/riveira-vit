import React from "react";
import { EventsGrid } from "./EventsGrid";
import { events } from "@/lib/constants";
import { motion } from "framer-motion";
import Tag from "@/components/common/tag";
import { oddvalSemiBold } from "@/app/fonts";
import { spaceGrotesk } from "@/app/fonts";

export default function Events() {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-black to-purple-950/70">
      <div className="max-w-screen-2xl mx-auto px-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true, amount: 0.1 }}
          className="flex justify-center mb-6"
        >
          <Tag>Events</Tag>
        </motion.div>
        <div className="flex justify-center mb-16 flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            className={`text-5xl font-bold uppercase ${oddvalSemiBold.className}`}
          >
            Proshow Artists
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            className={`${spaceGrotesk.className} text-base text-white/50 text-center max-w-3xl mx-auto leading-7 mt-7`}
          >
            Discover the mesmerizing performances by our talented artists, each
            bringing their unique flair and energy to the stage. Join us for an
            unforgettable experience!
          </motion.p>
        </div>
        <EventsGrid events={events} />
      </div>
    </section>
  );
}
