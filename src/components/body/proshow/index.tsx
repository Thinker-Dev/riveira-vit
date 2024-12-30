import { oddvalSemiBold, spaceGrotesk } from "@/app/fonts";
import ArtistsCol from "./integrations-col";
import Tag from "@/components/common/tag";
import { EventsGrid } from "../events/EventsGrid";
import { events } from "@/lib/constants";

const artists = [
  {
    name: "Samantha",
    src: "samanta.jpeg",
  },
  {
    name: "Shankar Mahadevan",
    src: "Day1_1.webp",
  },
  {
    name: "Vijay Prakash",
    src: "Day1_2.webp",
  },
  {
    name: "GV Prakash",
    src: "Day2_1.webp",
  },
  {
    name: "Pineapple Express",
    src: "Day2_2.webp",
  },
  {
    name: "Agam",
    src: "Day3_1.webp",
  },
  {
    name: "VDJ Zen",
    src: "Day4_1.webp",
  },
  {
    name: "DJ Paroma",
    src: "Day4_2.webp",
  },
];

export type ArtistsProps = typeof artists;

export default function Proshow() {
  return (
    <section className="py-24 overflow-hidden max-w-screen-2xl mx-auto px-20 bg-gradient-to-b from-black via-black to-purple-950/70 ">
      <div className="grid items-center lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="mb-6">
            <Tag>Artists</Tag>
          </div>
          <h1
            className={`text-5xl font-bold uppercase ${oddvalSemiBold.className}`}
          >
            Proshow Artists
          </h1>
          <p className={`${spaceGrotesk.className} text-white/50 mt-4`}>
            Discover the mesmerizing performances by our talented artists, each
            bringing their unique flair and energy to the stage. Join us for an
            unforgettable experience!
          </p>
        </div>
        <div>
          <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] grid grid-cols-1 md:grid-cols-2 gap-4">
            <ArtistsCol artists={artists} />
            <ArtistsCol
              artists={artists.slice().reverse()}
              className="hidden md:flex"
              reverse
            />
          </div>
        </div>
      </div>
    </section>
  );
}
