"use client";

import Hero from "@/components/body/hero";
import AboutRiviera from "@/components/body/info/about-riviera";
import AboutVit from "@/components/body/info/about-vit";
import Sponsors from "@/components/body/sponsors";
import TextCarrosel from "@/components/body/text-carrousel";
import Header from "@/components/header";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import Preloader from "@/components/preloader";
import MeetTheTeam from "@/components/body/team/meet-the-team";
import SeeMore from "@/components/body/see-more";
import Proshow from "@/components/body/proshow";
import SlidingImages from "@/components/SlidingImages";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 100);
    })();
  }, []);
  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Header />
      {/* <Hero /> */}

      <TextCarrosel />

      <div className="max-w-screen-2xl mx-auto px-20">
        <AboutVit />
        <AboutRiviera />
        <Sponsors />
        <MeetTheTeam />
      </div>
      <SeeMore />
      <Proshow />
    </main>
  );
}
