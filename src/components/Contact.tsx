"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Contact() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } },
  };

  return (
    <section id="contact" className="relative bg-black py-32 px-8 md:px-24 overflow-hidden min-h-screen flex items-center">
      
      {/* Background abstract gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          
          {/* Text Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2"
          >
            <h2 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40 mb-8 tracking-tighter leading-[1] drop-shadow-2xl">
              Let's create <br/> something <span className="text-indigo-500">extraordinary.</span>
            </h2>
            <p className="text-gray-400 text-xl md:text-2xl font-light max-w-lg mb-12">
              Currently available for freelance projects and open to full-time opportunities.
            </p>
            
            <a href="mailto:hello@monishraaj.com" className="inline-flex items-center gap-3 text-2xl font-semibold text-white group hover:text-indigo-400 transition-colors">
              hello@monishraaj.com
              <span className="p-3 rounded-full bg-white/10 group-hover:bg-indigo-500/20 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300">
                <ArrowUpRight className="w-6 h-6" />
              </span>
            </a>
          </motion.div>

          {/* Social Links Right Side */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="md:w-5/12 w-full flex flex-col gap-4"
          >
            {[
              { label: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "#" },
              { label: "GitHub", icon: <Github className="w-5 h-5" />, href: "#" },
              { label: "Twitter / X", icon: <Twitter className="w-5 h-5" />, href: "#" },
              { label: "Email Me", icon: <Mail className="w-5 h-5" />, href: "mailto:hello@monishraaj.com" }
            ].map((link, i) => (
              <motion.a 
                key={i}
                href={link.href}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                className="group flex items-center justify-between p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.08] hover:border-indigo-500/30 transition-all duration-500 cursor-pointer overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex items-center gap-4 relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">
                  <div className="p-3 rounded-full bg-white/5 border border-white/5 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                    {link.icon}
                  </div>
                  <span className="text-xl font-medium tracking-wide">{link.label}</span>
                </div>
                <ArrowUpRight className="w-6 h-6 text-gray-600 group-hover:text-indigo-400 transition-colors relative z-10" />
              </motion.a>
            ))}
          </motion.div>

        </div>
        
        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm tracking-wide"
        >
          <p>© {new Date().getFullYear()} Monish Raaj. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Crafted with React, Tailwind & Framer Motion.</p>
        </motion.div>
      </div>
    </section>
  );
}
