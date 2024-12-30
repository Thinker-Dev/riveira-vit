import { oddvalSemiBold, spaceGrotesk } from "@/app/fonts";
import Magnetic from "@/components/common/Magnetic";
import { Button } from "@/components/ui/button";
import { formatEventDate } from "@/lib/utils";
import React from "react";

interface FeaturedEventProps {
  event: Event;
}

export function FeaturedEvent({ event }: FeaturedEventProps) {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg mb-12 group">
      <div className="aspect-[21/9] relative">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <div className="max-w-3xl">
          <h2
            className={`${oddvalSemiBold.className} text-4xl font-bold text-white mb-3`}
          >
            {event.title}
          </h2>
          <p className={`${spaceGrotesk.className} text-lg text-white/90 mb-4`}>
            {event.description}
          </p>
          <div className="flex items-center gap-4 text-white/90">
            <span className={`${spaceGrotesk.className} text-lg`}>
              {formatEventDate(event.date)}
            </span>
            <span>•</span>
            <span className={`${spaceGrotesk.className} text-lg`}>
              {event.location}
            </span>
          </div>
        </div>
        <Magnetic>
          <Button className={`${oddvalSemiBold.className} w-fit mt-6`}>
            Get Tickets
          </Button>
        </Magnetic>
      </div>
    </div>
  );
}
