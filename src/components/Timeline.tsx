"use client";

import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2025",
    title: "Internship (3 Months)",
    company: "Kevel Corp",
    description: "Gained hands-on experience in full stack development, contributing to real-world projects and learning modern software engineering practices."
  },
  {
    year: "2022 - 2025",
    title: "Bachelor of Computer Applications (BCA)",
    company: "Nadar Mahajana Sangam S. Velaichamy Nadar College",
    description: "Graduated with a strong foundation in computer science, software development, algorithms, and database management."
  },
  {
    year: "2021 - 2022",
    title: "Higher Secondary (HSL)",
    company: "Thiagarajar Model Hr. Sec. School",
    description: "Completed higher secondary education with a focus on core subjects setting the foundation for a degree in computer applications."
  },
  {
    year: "2019 - 2020",
    title: "Secondary School (SSLC)",
    company: "Thiagarajar Model Hr. Sec. School",
    description: "Completed secondary education with strong academic performance."
  }
];

export default function Timeline() {
  return (
    <section id="roadmap" className="bg-[#121212] py-32 px-8 md:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter drop-shadow-xl inline-block">
            Learning Journey<span className="text-indigo-500">.</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto font-light">
            A timeline of my academic background and professional experiences.
          </p>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0 md:border-l-0 md:space-y-0 space-y-12">
          {/* Central vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2"></div>
          
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 100, damping: 20 }}
                className={`relative flex flex-col md:flex-row items-center justify-between w-full group ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-21px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-[#121212] flex items-center justify-center z-10 border border-white/10 group-hover:border-indigo-500/50 transition-colors duration-500">
                  <div className="w-3 h-3 rounded-full bg-white/20 group-hover:bg-indigo-500 transition-colors duration-500 group-hover:scale-150 transform shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
                </div>

                {/* Content Box */}
                <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md transition-all duration-500 hover:bg-white/[0.05] hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:-translate-y-1">
                    <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-semibold tracking-wider mb-4 border border-indigo-500/20">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <h4 className="text-lg text-gray-300 font-medium mb-4">
                      {item.company}
                    </h4>
                    <p className="text-gray-400 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
