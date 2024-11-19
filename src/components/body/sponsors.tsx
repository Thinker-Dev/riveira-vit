import React from "react";
import BreadCrumb from "../common/bread-crumb";
import Image from "next/image";
import { oddvalSemiBold } from "@/app/fonts";
import Magnetic from "../common/Magnetic";

export default function Sponsors() {
  return (
    <section className="py-10 relative">
      <BreadCrumb title="Sponsors" />
      <div className="flex flex-col items-center gap-5 justify-center">
        <p
          className={`text-3xl font-bold uppercase ${oddvalSemiBold.className}`}
        >
          Title Sponsor
        </p>
        <Magnetic>
          <Image
            src="/pepsi.svg"
            alt="Apple Music logo"
            className="h-[200px] w-auto"
            width={500}
            height={500}
          />
        </Magnetic>
      </div>
      <div className="flex flex-col items-center gap-5 justify-center mt-10">
        <p
          className={`text-xl font-bold uppercase ${oddvalSemiBold.className}`}
        >
          Other Sponsors
        </p>
        <div className="flex items-center gap-10 justify-center">
          <Magnetic>
            <Image
              src="/cyper.jpeg"
              alt="Strava logo"
              className="h-[150px] w-auto"
              width={500}
              height={500}
            />
          </Magnetic>
          <Magnetic>
            <Image
              src="/cub.jpeg"
              alt="Strava logo"
              className="h-[150px] w-auto"
              width={500}
              height={500}
            />
          </Magnetic>
          <Magnetic>
            <Image
              src="/karur.png"
              alt="Chrome logo"
              className="h-[150px] w-auto"
              width={500}
              height={500}
            />
          </Magnetic>
        </div>
      </div>
      {/* <div className="absolute bottom-10 left-1/2 max-w-full -translate-x-1/2">
        <Dock className="items-end pb-3">
          {imgData.map((item, idx) => (
            <DockItem
              key={idx}
              className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800"
            >
              <DockLabel>{item.name}</DockLabel>
              <DockIcon>
                <img src={item.src} alt={item.alt} className="h-full w-auto" />
              </DockIcon>
            </DockItem>
          ))}
        </Dock>
      </div> */}
    </section>
  );
}
