import { oddvalRegular, oddvalSemiBold } from "@/app/fonts";
import React, { useState, useEffect } from "react";

const calculateTimeLeft = () => {
  const festivalDate = new Date("2024-07-15").getTime();
  const now = new Date().getTime();
  const difference = festivalDate - now;

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Indicate that the component is now running on the client
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isClient) {
    // Render a placeholder or initial state on the server
    return null;
  }

  return (
    <div className="flex justify-center space-x-6 text-white">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 w-24">
            <div className={`${oddvalSemiBold.className} text-2xl font-bold`}>
              {value}
            </div>
            <div
              className={`${oddvalRegular.className} text-xs uppercase tracking-wider mt-1`}
            >
              {unit}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
