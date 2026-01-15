"use client";

import { motion } from "framer-motion";

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <section style={{ 
  fontFamily: "'Pirata One', system-ui", 
  fontWeight: "400", 
  fontStyle: "normal" 
}} className="bg-white text-black py-32 px-6 md:px-20 overflow-hidden relative selection:bg-black selection:text-white">
      
      {/* Background Decorative Text */}
      <div className="absolute top-10 right-[-5%] text-[15vw] font-bold text-gray-50 opacity-[0.03] select-none pointer-events-none">
        SINERS
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Large Branding */}
          <motion.div {...fadeInUp}>
            <span className="text-[10px] tracking-[0.6em] text-gray-400 uppercase mb-8 block font-bold italic underline underline-offset-8 decoration-black/10">
              Agency_Manifesto
            </span>
            <h2 className="text-6xl md:text-8xl font-bold leading-[0.85] tracking-tighter uppercase mb-10">
              Defining <br />
              Digital <br />
              <span className="italic font-light">Authority.</span>
            </h2>
            
            <div className="w-20 h-[1px] bg-black mb-10"></div>
            
            <p style={{
    fontFamily: '"Ubuntu Sans", sans-serif',
    fontOpticalSizing: "auto",
    fontStyle: "normal",
    fontVariationSettings: '"wdth" 100',
  }} className="text-xl md:text-2xl text-gray-500  font-bold uppercase font-light leading-relaxed max-w-md italic">
              "We don't just build interfaces; we architect digital legacies for brands that refuse to be ordinary."
            </p>
          </motion.div>

          {/* Right Side: Detailed Content */}
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-12 mt-10 lg:mt-32"
          >
            <div>
              <h3 className="text-xs tracking-[0.4em] font-bold uppercase mb-6 text-black border-l-2 border-black pl-4">
                Our_Strategy
              </h3>
              <p style={{
    fontFamily: '"Ubuntu Sans", sans-serif',
    fontOpticalSizing: "auto",
    fontStyle: "normal",
    fontVariationSettings: '"wdth" 100',
  }} className="text-gray-600 leading-loose text-sm md:text-base font-bold uppercase">
                Studio Siners operates at the intersection of brutalist design and high-performance engineering. 
                Based in Dhaka, we service a global clientele, delivering bespoke web ecosystems that 
                prioritize speed, security, and uncompromising visual impact. Our approach is reductive—we strip 
                away the noise to let your brand's core message resonate with clarity.
              </p>
            </div>

            {/* Statistics or Pillars */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-black/5">
              <div>
                <span className="text-4xl font-bold tracking-tighter block">MXXVI</span>
                <span className="text-[9px] tracking-[0.3em] text-gray-400 uppercase font-bold">Current_Era</span>
              </div>
              <div>
                <span className="text-4xl font-bold tracking-tighter block">99.9%</span>
                <span className="text-[9px] tracking-[0.3em] text-gray-400 uppercase font-bold">Uptime_Efficiency</span>
              </div>
            </div>

            <div className="pt-6">
               <button className="group flex items-center gap-4">
                  <span  style={{
    fontFamily: '"Ubuntu Sans", sans-serif',
    fontOpticalSizing: "auto",
    fontStyle: "normal",
    fontVariationSettings: '"wdth" 100',
  }} className="text-[10px] tracking-[0.5em] font-bold uppercase group-hover:pr-4 transition-all">
                    Explore_Our_Workflow
                  </span>
                  <div className="w-10 h-[1px] bg-black group-hover:w-20 transition-all duration-500"></div>
               </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Subtle Signature */}
      <div className="mt-32 text-center opacity-10">
         <span className="text-[8px] tracking-[1.5em] uppercase font-mono">Precision // Purpose // Power</span>
      </div>
    </section>
  );
}