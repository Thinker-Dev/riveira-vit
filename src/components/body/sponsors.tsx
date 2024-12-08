import React from "react";
import BreadCrumb from "../common/bread-crumb";
import Image from "next/image";
import { oddvalSemiBold } from "@/app/fonts";
import Magnetic from "../common/Magnetic";
import { motion } from "framer-motion";
import Tag from "../common/tag";

export default function Sponsors() {
  return (
    <section className="py-24 bg-gradient-to-b to-purple-950 from-black">
      <div className="max-w-screen-2xl mx-auto px-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true, amount: 0.1 }}
          className="flex justify-center mb-6"
        >
          <Tag>Title Sponsors</Tag>
        </motion.div>
        <div className="flex flex-col items-center gap-5 justify-center">
          <motion.p
            className={`text-3xl font-bold uppercase ${oddvalSemiBold.className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            Title Sponsor
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <Magnetic>
              <Image
                src="/pepsi.svg"
                alt="Apple Music logo"
                className="h-[200px] w-auto"
                width={500}
                height={500}
              />
            </Magnetic>
          </motion.div>
        </div>
        <div className="flex flex-col items-center gap-5 justify-center mt-10">
          <motion.p
            className={`text-xl font-bold uppercase ${oddvalSemiBold.className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            Other Sponsors
          </motion.p>
          <motion.div
            className="flex items-center gap-10 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <Magnetic>
              <Image
                src="/cyper.jpeg"
                alt="Strava logo"
                className="h-[150px] w-auto"
                width={500}
                height={500}
              />
            </Magnetic>
            <Magnetic>
              <Image
                src="/cub.jpeg"
                alt="Strava logo"
                className="h-[150px] w-auto"
                width={500}
                height={500}
              />
            </Magnetic>
            <Magnetic>
              <Image
                src="/karur.png"
                alt="Chrome logo"
                className="h-[150px] w-auto"
                width={500}
                height={500}
              />
            </Magnetic>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
