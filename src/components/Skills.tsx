"use client";

import { motion, Variants } from "framer-motion";
import { Code2, Database, Layout, Server, Sparkles, FileJson } from "lucide-react";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <Layout className="w-6 h-6" /> },
    { name: "CSS", icon: <Layout className="w-6 h-6" /> },
    { name: "Bootstrap", icon: <Layout className="w-6 h-6" /> },
    { name: "JavaScript", icon: <Code2 className="w-6 h-6" /> },
    { name: "React", icon: <Code2 className="w-6 h-6" /> },
    { name: "Tailwind CSS", icon: <Sparkles className="w-6 h-6" /> },
    { name: "Laravel", icon: <Server className="w-6 h-6" /> },
    { name: "REST APIs", icon: <FileJson className="w-6 h-6" /> },
    { name: "MySQL", icon: <Database className="w-6 h-6" /> },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20 } },
  };

  return (
    <section id="skills" className="relative bg-[#121212] py-20 px-4 sm:px-8 md:py-32 md:px-24 overflow-hidden">
      
      {/* Animated Background Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center md:items-start w-full">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/3 relative md:sticky md:top-32 text-center md:text-left z-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tighter drop-shadow-xl inline-block">
              Tech Stack<span className="text-indigo-500">.</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-light mt-2 md:mt-4 max-w-lg mx-auto md:mx-0">
              A comprehensive toolkit that allows me to build scalable, full-stack applications from aesthetic frontends to robust backends.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -8, rotate: Math.random() * 4 - 2 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 },
                  scale: { type: "spring", stiffness: 300, damping: 20 },
                  rotate: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group flex flex-col items-center justify-center gap-3 sm:gap-5 p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl transition-colors duration-500 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] cursor-default overflow-hidden relative"
              >
                {/* Radial gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="text-gray-500 group-hover:text-indigo-400 transition-colors duration-500 relative z-10 transform group-hover:scale-110">
                  {skill.icon}
                </div>
                <span className="text-sm md:text-base text-gray-400 group-hover:text-white font-semibold tracking-wide transition-colors duration-500 relative z-10 text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}


