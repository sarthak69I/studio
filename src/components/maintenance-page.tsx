
'use client';

import React, { useState, useEffect } from 'react';
import { Loader2, Clock, Send, Youtube } from 'lucide-react'; // Added Send and Youtube icons
import Image from 'next/image';
import { Button } from '@/components/ui/button'; // Added Button import

interface MaintenancePageProps {
  maintenanceEndTime: Date | null;
}

const MaintenancePage: React.FC<MaintenancePageProps> = ({ maintenanceEndTime }) => {
  const [timeRemaining, setTimeRemaining] = useState<string>('');
  const [isPastEndTime, setIsPastEndTime] = useState<boolean>(false);

  useEffect(() => {
    if (!maintenanceEndTime) {
      setIsPastEndTime(true);
      setTimeRemaining('Maintenance end time not configured.');
      return;
    }

    const calculateTimeRemaining = () => {
      const now = new Date();

      if (now >= maintenanceEndTime) {
        setIsPastEndTime(true);
        setTimeRemaining('Site should be live now! Please refresh.');
        if (intervalId) clearInterval(intervalId);
        // setTimeout(() => window.location.reload(), 5000); 
        return;
      }
      setIsPastEndTime(false);

      const diff = maintenanceEndTime.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeRemaining(
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
      );
    };

    calculateTimeRemaining();
    const intervalId = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(intervalId);
  }, [maintenanceEndTime]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 text-center">
      <div className="bg-slate-800/50 backdrop-blur-md p-8 sm:p-12 rounded-xl shadow-2xl max-w-md w-full border border-slate-700">
        <Image
          src="https://i.ibb.co/XZJkJ7xF/a5f7295b-f621-4163-b66d-8edadf7721d8-removebg-preview-1.png" 
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
            {isPastEndTime ? "Status:" : "Returning In:"}
          </div>
          {isPastEndTime ? (
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

        <div className="mt-10 space-y-4 sm:space-y-0 sm:flex sm:flex-row sm:justify-center sm:gap-5">
          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto py-3 px-6 bg-sky-600/80 border-sky-500 hover:bg-sky-500/80 hover:border-sky-400 text-white transition-all duration-300 ease-in-out transform hover:scale-105 group rounded-lg shadow-md hover:shadow-lg"
          >
            <a href="https://t.me/eleakcoursehub" target="_blank" rel="noopener noreferrer">
              <Send className="mr-2 h-4 w-4 transition-transform duration-500 group-hover:rotate-[15deg]" />
              Join Telegram
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto py-3 px-6 bg-red-700/80 border-red-600 hover:bg-red-600/80 hover:border-red-500 text-white transition-all duration-300 ease-in-out transform hover:scale-105 group rounded-lg shadow-md hover:shadow-lg"
          >
            <a href="https://youtube.com/@nexttopper-freebatch?si=SgEYNb-mxjw3AFpP" target="_blank" rel="noopener noreferrer">
              <Youtube className="mr-2 h-4 w-4 transition-transform group-hover:animate-pulse-custom" />
              Subscribe YouTube
            </a>
          </Button>
        </div>

        <p className="text-xs text-slate-500 mt-10">
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
