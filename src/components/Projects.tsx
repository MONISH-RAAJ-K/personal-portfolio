export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Reimagined",
      category: "Web App",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    },
    {
      title: "AI Financial Dashboard",
      category: "Fintech",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Creative Agency Portfolio",
      category: "Website",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Health & Fitness App",
      category: "Mobile UI",
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop",
    }
  ];

  return (
    <section className="min-h-screen bg-[#121212] py-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 tracking-tight">
          Selected Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col gap-4 cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 ease-in-out group-hover:border-white/20 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                {/* Fallback pattern while image loads or if it fails */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-[#121212] to-[#121212]"></div>
                
                {/* Actual image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                />
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-gray-400 tracking-wider uppercase">
                  {project.category}
                </span>
                <h3 className="text-2xl font-semibold text-white tracking-tight group-hover:text-gray-200 transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
