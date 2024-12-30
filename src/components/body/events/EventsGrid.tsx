import React from "react";
import { FeaturedEvent } from "./FeaturedEvent";
import { EventCard } from "./EventCard";
interface EventsGridProps {
  events: Event[];
}

export function EventsGrid({ events }: any) {
  const [featuredEvent, ...otherEvents] = events;

  return (
    <div>
      {/* Featured Event */}
      <FeaturedEvent event={featuredEvent} />

      {/* Regular Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {otherEvents.map((event: any) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
