import React from "react";

interface FloatingObjectProps {
  imageUrl: string;
  size: number;
  row: number;
  speed: number;
}

export function FloatingObject({
  imageUrl,
  size,
  row,
  speed,
}: FloatingObjectProps) {
  const yPos = row * 100 + 50; // Evenly spaced rows

  return (
    <div
      className="absolute animate-float"
      style={{
        top: yPos,
        width: size,
        height: size,
        animationDuration: `${speed}s`,
      }}
    >
      <img
        src={imageUrl}
        alt="Floating object"
        className="w-full h-full object-contain"
      />
    </div>
  );
}
