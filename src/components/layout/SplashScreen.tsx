"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // Only show splash screen once per browser session
    const hasSeenSplash = sessionStorage.getItem("labhouse_splash_seen");
    if (hasSeenSplash) {
      return;
    }

    setIsVisible(true);
    sessionStorage.setItem("labhouse_splash_seen", "true");
    
    // Trigger the reveal fill animation slightly after mount
    const revealTimer = setTimeout(() => {
      setIsRevealed(true);
    }, 100);
    
    // Start the fade out animation after 2.5 seconds
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2500);

    // Completely remove it from the DOM after 3.2 seconds
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3200);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-700 ease-in-out ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex items-center justify-center w-full h-full p-8">
        {/* We use a standard img tag here to avoid Next.js Image caching complexity during the critical render path of a splash screen */}
        <img 
          src="/nabl-logo.png" 
          alt="NABL Logo" 
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto object-contain bg-white transition-all duration-[2000ms] ease-out"
          style={{
            clipPath: isRevealed ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)'
          }}
        />
      </div>
    </div>
  );
}
