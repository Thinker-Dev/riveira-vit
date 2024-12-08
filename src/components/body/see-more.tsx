import React, { useEffect, useRef } from "react";
import { gsap } from "gsap"; // Add this import
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Add this import
import { oddvalLight, oddvalRegular } from "@/app/fonts";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

export default function SeeMore() {
  const seeMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (seeMoreRef.current) {
      gsap.to(seeMoreRef.current, {
        x: -200,
        scrollTrigger: {
          trigger: seeMoreRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }
  }, []);
  return (
    <Link href="/team">
      <div className="relative">
        <div className="h-[1px] bg-primary/50 w-full" />
        <div
          ref={seeMoreRef}
          className={`see-more absolute bottom-12 left-[75%] -translate-x-1/2 bg-background w-24 h-24 rounded-full border border-[#9333ea] flex items-center justify-center flex-col ${oddvalLight.className}`}
        >
          <span className="">See </span>
          <span className="">more</span>
        </div>
      </div>
    </Link>
  );
}
