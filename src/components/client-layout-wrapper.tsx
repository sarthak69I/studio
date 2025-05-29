
'use client';

import React, { useEffect, type ReactNode } from 'react';
import { Toaster } from "@/components/ui/toaster";

interface ClientLayoutWrapperProps {
  children: ReactNode;
}

export default function ClientLayoutWrapper({ children }: ClientLayoutWrapperProps) {
  useEffect(() => {
    const handleContextmenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextmenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextmenu);
    };
  }, []);

  return (
    <>
      {children}
      <Toaster />
      {/* Telegram Floating Button */}
      <a href="https://t.me/DatabaseCourseNT" target="_blank" className="telegram-float" aria-label="Join Telegram">
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" />
      </a>
    </>
  );
}
