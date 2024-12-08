import React from "react";
import { Music, Calendar, MapPin, Sparkles } from "lucide-react";
import { CountdownTimer } from "./countdown";
import Image from "next/image";
import { oddvalRegular, oddvalSemiBold } from "@/app/fonts";
import { motion } from "framer-motion";

export function Hero() {
  const slideUp = {
    initial: {
      y: 300,
    },
    enter: {
      y: 0,
      transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.5 },
    },
  };
  return (
    <div className="relative min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 via-black/50 to-black" />
        </div>
      </div>

      <motion.div
        variants={slideUp}
        initial="initial"
        animate="enter"
        className="relative z-10 container mx-auto pt-48 pb-20"
      >
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/pepsi.svg"
              alt="Hero"
              width={120}
              height={120}
              className="-mb-7"
            />
            <Image src="/riveira.svg" alt="Hero" width={700} height={700} />
          </div>
          <CountdownTimer />

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className={`bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25 ${oddvalSemiBold.className}`}
            >
              Get Early Bird Tickets
            </button>
            <button
              className={`bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 ${oddvalSemiBold.className}`}
            >
              View Full Lineup
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function InfoBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div
      className={`flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 ${oddvalRegular.className}`}
    >
      <span className="mr-2">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
