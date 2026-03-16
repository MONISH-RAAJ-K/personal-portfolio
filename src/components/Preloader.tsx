"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = "hidden";

    const duration = 2500; // 2.5s total loading time
    const interval = 30; // Update progress every 30ms
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = ""; // Re-enable scrolling
        }, 500); // Wait a bit after 100% before starting exit animation
      }
    }, interval);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.1,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          {/* Background subtle grid/glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_60%)] pointer-events-none" />

          {/* Central Core & Rings */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center -mt-10 md:-mt-10">
            {/* Outer Ring */}
            <motion.div
              className="absolute w-full h-full rounded-full border border-white/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              {/* Spinning dots on the ring */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/50 blur-[1px]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/30" />
            </motion.div>

            {/* Middle Ring */}
            <motion.div
              className="absolute w-36 h-36 md:w-48 md:h-48 rounded-full border border-white/15"
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-white/70 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            </motion.div>

            {/* Inner Ring (Dashed) */}
            <motion.svg
              className="absolute w-28 h-28 md:w-36 md:h-36"
              viewBox="0 0 100 100"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </motion.svg>

            {/* Pulsing Core */}
            <motion.div
              className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center mix-blend-screen"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8],
                boxShadow: [
                  "0 0 20px rgba(255,255,255,0.3)",
                  "0 0 60px rgba(255,255,255,0.8)",
                  "0 0 20px rgba(255,255,255,0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full rounded-full bg-white blur-[4px] md:blur-md" />
            </motion.div>
          </div>

          {/* Typography Bottom */}
          <div className="absolute bottom-12 md:bottom-20 flex flex-col items-center gap-3 md:gap-4">
            <motion.div 
              className="flex items-center gap-2 text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] text-white/50"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-white inline-block"
              />
              INITIALIZING SYSTEM
            </motion.div>

            {/* Progress Counter */}
            <div className="font-mono text-4xl md:text-5xl font-light tracking-tighter text-white/90">
              {progress.toString().padStart(3, "0")}
              <span className="text-white/30 text-xl md:text-2xl">%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-32 md:w-48 h-[1px] bg-white/10 mt-1 md:mt-2 overflow-hidden relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-white"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
