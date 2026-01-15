"use client";

import { motion } from "framer-motion";

export default function ServicesLight() {
  const services = [
    { id: "01", title: "Digital Architecture", desc: "Constructing high-performance web ecosystems with a focus on speed and scalability." },
    { id: "02", title: "Motion Engineering", desc: "Crafting fluid interactions and cinematic transitions that guide user attention." },
    { id: "03", title: "System Synchronization", desc: "Seamlessly connecting front-end aesthetics with robust, real-time backend data." }
  ];

  const ubuntuStyle = {
    fontFamily: '"Ubuntu Sans", sans-serif',
    fontWeight: "400",
  };

  return (
    <section className="bg-white text-black py-40 px-6 md:px-24 selection:bg-black selection:text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <header className="mb-32 border-b border-black/10 pb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <motion.span 
              style={ubuntuStyle}
              className="text-[10px] tracking-[0.8em] text-gray-400 uppercase mb-6 block"
            >
              System_Capabilities
            </motion.span>
            <motion.h2 
              style={{ fontFamily: "'Pirata One', system-ui", fontWeight: "400" }}
              className="text-7xl md:text-9xl leading-none uppercase tracking-tighter"
            >
              The_Services
            </motion.h2>
          </div>
          <p style={ubuntuStyle} className="text-[10px] text-gray-400 uppercase tracking-widest max-w-[200px] text-right">
            Providing high-fidelity digital solutions for the next generation.
          </p>
        </header>

        {/* Services Grid - White Background Version */}
        <div className="grid lg:grid-cols-3 gap-16">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group border-l border-black/5 pl-8 hover:border-black transition-all duration-700"
            >
              <span className="text-xs font-mono text-gray-300 group-hover:text-black transition-colors block mb-12">
                [{service.id}]
              </span>
              <h3 
                style={{ fontFamily: "'Pirata One', system-ui" }}
                className="text-4xl uppercase mb-8 group-hover:translate-x-2 transition-transform duration-500"
              >
                {service.title}
              </h3>
              <p 
                style={ubuntuStyle}
                className="text-sm text-gray-500 leading-relaxed uppercase tracking-wide italic"
              >
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Studio Philosophy - White Background */}
        <div className="mt-48 grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7">
            <div className="aspect-[16/9] bg-gray-100 relative overflow-hidden group">
               {/* Visual Asset Space */}
               <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-30 transition-opacity">
                 <span className="text-[15vw] font-bold">SINERS</span>
               </div>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-10">
             <h4 style={{ fontFamily: "'Pirata One', system-ui" }} className="text-5xl uppercase leading-none">
               Architecture <br /> Of Trust
             </h4>
             <p style={ubuntuStyle} className="text-sm text-gray-600 leading-loose uppercase font-bold tracking-tighter">
               We operate at the intersection of logic and imagination. Our white-space philosophy ensures every pixel serves a purpose, creating digital artifacts that are both beautiful and bulletproof.
             </p>
             <button style={ubuntuStyle} className="text-[10px] tracking-[0.5em] border-b border-black pb-2 hover:text-gray-400 hover:border-gray-400 transition-all uppercase">
               Discover_Protocol
             </button>
          </div>
        </div>

      </div>
      
      {/* Decorative Footer Element */}
      {/* <footer className="mt-40 border-t border-black/5 pt-10 text-center opacity-20">
         <span style={ubuntuStyle} className="text-[8px] tracking-[1.5em] uppercase">
           Studio_Siners // White_System_v4.0
         </span>
      </footer> */}
    </section>
  );
}