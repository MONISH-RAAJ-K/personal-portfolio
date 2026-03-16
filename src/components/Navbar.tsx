"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = ["Home", "Skills", "Works", "Contact"];

  // Toggle mobile menu, prevent scrolling when open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-0 right-0 z-[60] flex justify-center w-full px-6"
      >
        <div 
          className={`flex items-center justify-between w-full max-w-2xl px-8 py-4 rounded-full transition-all duration-700 ${
            isScrolled || isMobileMenuOpen
              ? "bg-[#111111]/80 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" 
              : "bg-black/20 backdrop-blur-md border border-white/5"
          }`}
        >
          <a href="#home" className="text-xl font-bold tracking-tighter text-white z-10 relative">
            MR<span className="text-[#888]">.</span>
          </a>
          
          <div className="hidden md:flex items-center gap-2 relative">
            {navItems.map((item, index) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative px-5 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 tracking-wide z-10"
              >
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {item}
              </a>
            ))}
          </div>
          
          <button 
            className="md:hidden text-white hover:text-gray-300 transition-colors z-[70] relative flex items-center justify-center w-8 h-8"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {!isMobileMenuOpen ? (
                <motion.svg 
                  key="open-icon"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              ) : (
                <motion.svg 
                  key="close-icon"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            className="fixed inset-0 z-[50] bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8 w-full px-8">
              {navItems.map((item, index) => (
                <motion.a 
                  key={item} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-bold tracking-tighter text-white hover:text-gray-300 transition-colors w-full text-center py-4 border-b border-white/5"
                >
                  {item}
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 flex items-center justify-center gap-6"
            >
              <span className="text-white/30 text-xs tracking-widest font-mono uppercase">Crafted with precision</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

