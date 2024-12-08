import Image from "next/image";
import React, { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { ArtistsProps } from ".";
import { oddvalRegular, oddvalSemiBold } from "@/app/fonts";

export default function ArtistsCol(props: {
  artists: ArtistsProps;
  className?: string;
  reverse?: boolean;
}) {
  const { artists, className, reverse } = props;
  return (
    <motion.div
      initial={{ y: reverse ? "-50%" : 0 }}
      animate={{ y: reverse ? 0 : "-50%" }}
      transition={{
        duration: 100,
        ease: "linear",
        repeat: Infinity,
      }}
      className={twMerge("flex flex-col gap-4  pb-4", className)}
    >
      {Array.from({ length: 10 }).map((_, index) => (
        <Fragment key={index}>
          {artists.map((artist) => (
            <div
              key={artist.name}
              className="bg-neutral-900 border border-white/10 rounded-2xl pb-4"
            >
              <div className="flex items-center justify-center">
                <Image
                  src={`/${artist.src}`}
                  alt={artist.name}
                  className="w-full h-full object-cover rounded-t-2xl"
                  width={1000}
                  height={1000}
                />
              </div>
              <h3
                className={`mt-4 text-base text-center ${oddvalSemiBold.className}`}
              >
                {artist.name}
              </h3>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  );
}
