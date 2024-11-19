"use client";

import Hero from "@/components/body/hero";
import AboutRiviera from "@/components/body/info/about-riviera";
import AboutVit from "@/components/body/info/about-vit";
import TextCarrosel from "@/components/body/text-carrousel";
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      {/* <TextCarrosel /> */}
      <div className="max-w-screen-2xl mx-auto px-20">
        <AboutVit />
        <AboutRiviera />
      </div>
    </main>
  );
}
