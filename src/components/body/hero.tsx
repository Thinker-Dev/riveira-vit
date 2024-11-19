import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { oddvalRegular, oddvalSemiBold } from "@/app/fonts";
import Magnetic from "../common/Magnetic";

const Hero = () => {
  const router = useRouter();

  return (
    <section
      id="home"
      className="h-[calc(100vh-64px)] flex items-center justify-center"
      style={{
        backgroundImage: "url(/image.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/pepsi.svg"
          alt="Hero"
          width={120}
          height={120}
          className="-mb-7"
        />
        <Image src="/riveira.svg" alt="Hero" width={700} height={700} />
        <div className={`${oddvalRegular.className} text-2xl mt-5`}>
          29th Feb to 3rd March
        </div>
        <div className="flex gap-3 mt-10">
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
    </section>
  );
};

export default Hero;
