"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const scale1 = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // Section 2: 30% to 50%
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.5], [50, -50]);

  // Section 3: 60% to 80%
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.8], [50, -50]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] z-10 pointer-events-none">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-8 md:px-24">
        
        {/* Section 1 */}
        <motion.div 
          style={{ opacity: opacity1, y: y1, scale: scale1 }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto"
        >
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-2xl text-center">
            Monish Raaj.
          </h1>
          <p className="text-xl md:text-3xl text-indigo-200 mt-6 tracking-[0.2em] font-medium uppercase drop-shadow-lg">
            Full Stack Developer
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-24 pointer-events-auto"
        >
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 max-w-3xl leading-[1.1] drop-shadow-2xl">
            I craft digital experiences.
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-end justify-center px-8 md:px-24 pointer-events-auto text-right"
        >
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-l from-white via-gray-200 to-gray-500 max-w-3xl leading-[1.1] drop-shadow-2xl">
            Bridging design <br/> & engineering.
          </h2>
        </motion.div>

      </div>
    </div>
  );
}

