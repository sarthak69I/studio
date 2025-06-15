
'use client';

import React, { useState, useEffect } from 'react';
import { Loader2, Clock } from 'lucide-react';
import Image from 'next/image';

const MaintenancePage: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState<string>('');
  const [isPastTenAM, setIsPastTenAM] = useState<boolean>(false);

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      let targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0, 0, 0); // 10:00:00 AM today

      if (now >= targetTime) {
        setIsPastTenAM(true);
        setTimeRemaining('Site should be live now! Please refresh.');
        // Optionally, trigger a page refresh or a check in ClientLayoutWrapper
        // For now, this message informs the user.
        return;
      }

      const diff = targetTime.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeRemaining(
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
      );
    };

    calculateTimeRemaining(); // Initial calculation
    const intervalId = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 text-center">
      <div className="bg-slate-800/50 backdrop-blur-md p-8 sm:p-12 rounded-xl shadow-2xl max-w-md w-full border border-slate-700">
        <Image
          src="https://i.ibb.co/XZJkJ7xF/a5f7295b-f621-4163-b66d-8edadf7721d8-removebg-preview-1.png" // Your E-Leak logo
          alt="E-Leak Logo"
          width={80}
          height={80}
          className="mx-auto mb-6"
          data-ai-hint="logo"
        />
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 logo-gradient-text animate-gradient">E-Leak Under Construction</h1>
        <p className="text-slate-300 text-base sm:text-lg mb-6">
          We're working hard to bring you an awesome experience.
          The site will be live soon!
        </p>
        <div className="bg-slate-700/50 p-6 rounded-lg shadow-inner">
          <div className="flex items-center justify-center text-lg sm:text-xl font-semibold text-amber-400 mb-3">
            <Clock className="h-6 w-6 mr-3 animate-spin" />
            Returning In:
          </div>
          {isPastTenAM ? (
            <p className="text-2xl sm:text-3xl font-mono font-bold text-green-400">
              {timeRemaining}
            </p>
          ) : timeRemaining ? (
            <p className="text-3xl sm:text-4xl font-mono font-bold text-green-400 tracking-wider">
              {timeRemaining}
            </p>
          ) : (
            <Loader2 className="h-8 w-8 text-slate-400 animate-spin mx-auto" />
          )}
        </div>
        <p className="text-xs text-slate-500 mt-8">
          Thank you for your patience.
        </p>
      </div>
      <footer className="absolute bottom-4 text-xs text-slate-600">
        &copy; E-Leak All rights reserved.
      </footer>
    </div>
  );
};

export default MaintenancePage;
