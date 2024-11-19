import {
  juanaMedium,
  juanaRegular,
  oddvalRegular,
  oddvalSemiBold,
  spaceGrotesk,
} from "@/app/fonts";
import Image from "next/image";
import React from "react";

export default function AboutVit() {
  return (
    <section className="min-h-screen flex items-center">
      <section className="flex space-x-10 items-end">
        <div className="w-1/2">
          <h1 className={`${oddvalSemiBold.className} text-4xl leading-[55px]`}>
            Empowering{" "}
            <span className={`${juanaMedium.className} italic`}>Minds</span>
            , <br /> Inspiring{" "}
            <span className={`${juanaMedium.className} italic`}>
              Futures
            </span>{" "}
            at{" "}
            <span className="text-black bg-primary px-4 py-1 rounded-full">
              VIT.
            </span>
          </h1>
          <p
            className={`${spaceGrotesk.className} text-base text-justify leading-7 mt-7`}
          >
            At VIT, our founding vision is the delivery of internationally
            benchmarked, quality higher education. We consistently embrace
            innovation to elevate educational standards. Our cosmopolitan campus
            hosts a diverse student body from across the globe. Our esteemed
            faculty, experienced and knowledgeable, is dedicated to nurturing
            students. The global benchmarks set by VIT in teaching and research
            drive our unwavering commitment to excellence, transcending
            aspiration to become an ingrained ethos.
          </p>
        </div>
        <div className="w-1/2 flex justify-center">
          <Image
            src="/craxy-img-1.png"
            alt="Riveira"
            width={400}
            height={400}
          />
        </div>
      </section>
    </section>
  );
}
