import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { oddvalRegular, oddvalSemiBold } from "@/app/fonts";

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
          <Button className={`${oddvalSemiBold.className}`}>Register</Button>
          <Button className={`${oddvalSemiBold.className}`}>
            Proshow Entry
          </Button>
        </div>
      </div>
      <div className="z-10 space-y-5 flex justify-center flex-col items-center">
        <div className="flex">
          {/* <TooltipProvider>
              {data?.image.map((item, index) => (
                <div key={index} className="flex">
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger>
                      <Image
                        width={100}
                        height={100}
                        alt={item.alt}
                        className="w-10 h-10 grayscale hover:grayscale-0 duration-300 transition"
                      />
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p className="capitalize">{item.alt}</p>
                    </TooltipContent>
                  </Tooltip>
                  <div className="mx-2" />
                </div>
              ))}
            </TooltipProvider> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
