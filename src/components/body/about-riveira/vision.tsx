import React from "react";
import { Sparkles } from "lucide-react";
import { oddvalSemiBold, spaceGrotesk } from "@/app/fonts";

interface VisionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function VisionCard({ title, description, icon }: VisionCardProps) {
  return (
    <div className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-6 hover:from-white/10 hover:to-white/20 transition-all duration-500 h-full">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-primary/20 rounded-xl text-primary/90 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3
          className={`${oddvalSemiBold.className} text-xl font-semibold text-white ml-4`}
        >
          {title}
        </h3>
      </div>
      <p className={`${spaceGrotesk.className} text-white/50 leading-7`}>
        {description}
      </p>
    </div>
  );
}
