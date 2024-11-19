import { oddvalSemiBold, spaceGrotesk } from "@/app/fonts";
import { juanaMedium } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import Magnetic from "@/components/common/Magnetic";
import { Button } from "@/components/ui/button";

export default function AboutRiviera() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="flex space-x-10 items-center">
        <div className="w-1/2 flex justify-center">
          <Image
            src="/crazy-img-2.png"
            alt="Riveira"
            width={500}
            height={500}
          />
        </div>
        <div className="w-1/2">
          <h1
            className={`${oddvalSemiBold.className} text-4xl leading-[55px] text-end`}
          >
            <Magnetic>
              <span className="text-black bg-primary px-4 py-1 rounded-full">
                Riviera
              </span>
            </Magnetic>{" "}
            Where{" "}
            <span className={`${juanaMedium.className} italic`}>
              Creativity
            </span>
            <br /> Meets{" "}
            <span className={`${juanaMedium.className} italic`}>
              Competition
            </span>
          </h1>
          <p
            className={`${spaceGrotesk.className} text-base text-justify leading-7 mt-7`}
          >
            Welcome to Riviera, VIT&apos;s heart—a 4-day explosion of sports,
            culture, and unbridled enthusiasm! 36,000 students, 650+ colleges,
            and a whirlwind of events from dramatic face-offs to literary
            showdowns, musical crescendos, and defy-gravity dance-offs.
            Organized by VIT students, this rollercoaster happens in February,
            turning the campus into a kaleidoscope of talent and celebration.
            Join us for an unforgettable ride where the quirky and competitive
            collide!
          </p>
        </div>
      </div>
    </section>
  );
}
