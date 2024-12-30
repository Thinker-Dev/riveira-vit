import React from "react";
import { formatEventDate } from "@/lib/utils";
import { oddvalSemiBold, spaceGrotesk } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import Magnetic from "@/components/common/Magnetic";
interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg">
      {/* Image with gradient overlay */}
      <div className="aspect-[4/3] relative">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div className="mt-auto">
          <h3
            className={`${oddvalSemiBold.className}   text-2xl font-bold text-white mb-2`}
          >
            {event.title}
          </h3>
          <div className="flex items-center gap-4 text-white/90 text-sm">
            <span className={`${spaceGrotesk.className} text-sm`}>
              {formatEventDate(event.date)}
            </span>
            <span>•</span>
            <span className={`${spaceGrotesk.className} text-sm`}>
              {event.location}
            </span>
          </div>
        </div>
      </div>

      {/* Hover overlay with CTA */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
        <Magnetic>
          <Button className={`${oddvalSemiBold.className} w-fit `}>
            Get Tickets
          </Button>
        </Magnetic>
      </div>
    </div>
  );
}
