'use client';

import { useEffect, useState } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set Black Friday end date (adjust as needed)
    const endDate = new Date('2025-12-01T23:59:59').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bg-brand-orange z-50 py-3 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center">
        <span className="font-bold text-lg md:text-xl">
          🔥 BLACK FRIDAY WEEKEND ONLY 🔥
        </span>
        <div className="flex gap-2 md:gap-4 items-center">
          <div className="bg-black/20 rounded px-3 py-1">
            <div className="text-2xl font-bold">{timeLeft.days}</div>
            <div className="text-xs">DAYS</div>
          </div>
          <div className="text-2xl font-bold">:</div>
          <div className="bg-black/20 rounded px-3 py-1">
            <div className="text-2xl font-bold">{timeLeft.hours}</div>
            <div className="text-xs">HOURS</div>
          </div>
          <div className="text-2xl font-bold">:</div>
          <div className="bg-black/20 rounded px-3 py-1">
            <div className="text-2xl font-bold">{timeLeft.minutes}</div>
            <div className="text-xs">MIN</div>
          </div>
          <div className="text-2xl font-bold">:</div>
          <div className="bg-black/20 rounded px-3 py-1">
            <div className="text-2xl font-bold">{timeLeft.seconds}</div>
            <div className="text-xs">SEC</div>
          </div>
        </div>
      </div>
    </div>
  );
}
