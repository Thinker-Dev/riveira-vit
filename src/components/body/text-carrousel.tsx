import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { oddvalSemiBold } from "@/app/fonts";
import { oddvalRegular } from "@/app/fonts";
import Magnetic from "../common/Magnetic";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function TextCarrosel() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 1,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

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
    <motion.section
      className="main"
      variants={slideUp}
      initial="initial"
      animate="enter"
    >
      <Image src="/image.webp" alt="Hero" fill={true} />
      <div
        className="flex flex-col items-center mt-20 relative z-10 w-full space-y-5"
        data-scroll
        data-scroll-speed={0.5}
      >
        <Image src="/pepsi.svg" alt="Hero" width={120} height={120} />
        <div className={`${oddvalRegular.className} text-2xl`}>
          29th Feb to 3rd March
        </div>
        <div className="flex gap-3">
          <Magnetic>
            <Button className={`${oddvalSemiBold.className}`}>Register</Button>
          </Magnetic>
          <Magnetic>
            <Button className={`${oddvalSemiBold.className}`}>
              Proshow Entry
            </Button>
          </Magnetic>
        </div>
      </div>
      <div className="sliderContainer">
        <div ref={slider} className="slider">
          <p ref={firstText}>Riviera 2024 -</p>
          <p ref={secondText}>Riviera 2024 -</p>
        </div>
      </div>
    </motion.section>
  );
}
