"use client";

import Sponsors from "@/components/body/sponsors";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import Preloader from "@/components/preloader";
import MeetTheTeam from "@/components/body/team/meet-the-team";
import SeeMore from "@/components/body/see-more";
import { Navbar } from "@/components/header";
import { Hero } from "@/components/hero";
import { AboutVit } from "@/components/body/about-vit";
import { AboutRiviera } from "@/components/body/about-riveira";
import Proshow from "@/components/body/proshow";
import CallToAction from "@/components/body/call-to-action";
import Footer from "@/components/footer";
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
      <Navbar />
      <Hero />
      <AboutVit />
      <AboutRiviera />
      <Sponsors />
      <MeetTheTeam />
      <SeeMore />
      <Proshow />
      <CallToAction />
      <Footer />
    </main>
  );
}
