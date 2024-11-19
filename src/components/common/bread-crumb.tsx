import { juanaMedium, oddvalRegular, oddvalSemiBold } from "@/app/fonts";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  subtitle?: string;
}

const BreadCrumb = ({ title, subtitle }: Props) => {
  return (
    <motion.section
      className="flex items-center justify-center pb-10 flex-col space-y-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {subtitle && <h4 className="text-paragraph text-base">{subtitle}</h4>}
      <motion.img
        src="/star.svg"
        alt="logo"
        width={30}
        height={30}
        initial={{ rotate: 0 }}
        whileInView={{ rotate: 360 }}
        transition={{ duration: 2, ease: "linear" }}
        viewport={{ once: true, amount: 0.1 }}
      />
      <h1
        className={`text-5xl font-bold uppercase ${oddvalSemiBold.className}`}
      >
        {title}
      </h1>
    </motion.section>
  );
};

export default BreadCrumb;
