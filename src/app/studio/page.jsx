"use client";

import { motion } from "framer-motion";

export default function StudioSection() {
  const ubuntuStyle = {
    fontFamily: '"Ubuntu Sans", sans-serif',
    fontWeight: "300",
    letterSpacing: "0.1em",
  };

  const stats = [
    { label: "Founded", value: "2026" },
    { label: "Global Nodes", value: "12" },
    { label: "Encryption", value: "AES-256" },
    { label: "Efficiency", value: "99.9%" },
  ];

  return (
    <section className="bg-[#080808] text-white py-40 px-6 md:px-12 lg:px-24 overflow-hidden relative">
      
      {/* Background Subtle Text */}
      <div className="absolute top-0 right-0 opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[30vw] leading-none font-bold uppercase">Siners</h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Side: Visual Identity */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-white/5 border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              {/* Placeholder for Studio Image or Video */}
              <div className="w-full h-full flex items-center justify-center">
                 <span className="text-[10px] tracking-[2em] uppercase opacity-20 rotate-90">Studio_Siners_Core</span>
              </div>
            </div>
            
            {/* Floating Specs */}
            <div className="absolute -bottom-10 -right-10 hidden md:block bg-white text-black p-10 shadow-2xl">
               <h3 className="text-xs font-bold tracking-[0.5em] uppercase mb-4">Core_Logic</h3>
               <p style={ubuntuStyle} className="text-[10px] max-w-[150px] leading-relaxed uppercase">
                 Transforming complex data into cinematic digital experiences.
               </p>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <div className="space-y-12">
            <header>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[10px] tracking-[0.8em] text-blue-500 uppercase font-bold mb-6 block"
              >
                01 // The_Sanctuary
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                style={{ fontFamily: "'Pirata One', system-ui", fontWeight: "400" }}
                className="text-7xl md:text-9xl leading-[0.8] uppercase tracking-tighter"
              >
                Creative <br /> <span className="text-gray-600">Architects</span>
              </motion.h2>
            </header>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={ubuntuStyle}
              className="text-lg md:text-xl text-gray-400 leading-relaxed uppercase italic"
            >
              Studio Siners is a specialized digital forge where code meets craft. 
              We don't just build websites; we architect digital environments that breathe 
              with smooth transitions and crystalline performance.
            </motion.p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-12 pt-12 border-t border-white/5">
               {stats.map((stat, i) => (
                 <motion.div 
                   key={i}
                   whileHover={{ x: 10 }}
                   className="space-y-2"
                 >
                   <p className="text-[9px] tracking-[0.4em] text-gray-600 uppercase font-bold italic">{stat.label}</p>
                   <p className="text-3xl font-mono tracking-tighter text-white">{stat.value}</p>
                 </motion.div>
               ))}
            </div>

            <motion.div className="pt-12">
               <button className="group flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <span className="text-xl">→</span>
                  </div>
                  <span className="text-[10px] tracking-[0.6em] uppercase font-bold">Initiate_Partnership</span>
               </button>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Technical Footer Node */}
      <div className="mt-32 border-t border-white/5 pt-8 flex justify-between items-center opacity-10">
         <span className="text-[8px] tracking-[1.5em] uppercase italic">System_Protocol_v4.0.2</span>
         <span className="text-[8px] tracking-[1.5em] uppercase italic">Studio_Siners_MXXVI</span>
      </div>
    </section>
  );
}