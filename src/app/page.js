"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import About from "./about-two/page";
import Privacy from "./privacy/page";
import StudioSection from "./studio/page";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div style={{ 
  fontFamily: "'Pirata One', system-ui", 
  fontWeight: "400", 
  fontStyle: "normal" 
}} className="min-h-screen bg-[#080808] text-white selection:bg-white selection:text-black font-sans">
      
      {/* Header Overlay */}
      <nav className="fixed top-0 w-full p-8 z-50 flex justify-between items-center mix-blend-difference">
        {/* <span className="text-xs tracking-[0.5em] font-bold">STUDIO_SINERS</span> */}
        {/* <Link href="/contact" className="text-[10px] tracking-[0.2em] border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all">
          START_A_PROJECT
        </Link> */}
      </nav>

      {/* Hero Section: High Impact Typography */}
      <section className="relative h-screen flex flex-col justify-center px-6 md:px-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-bold tracking-tighter opacity-10">
            CREATIVE
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <span className="text-[10px] tracking-[0.8em] text-gray-500 uppercase mb-4 block">
            Strategic Digital Laboratory
          </span>
          <h1 className="text-6xl md:text-[12vw] font-bold leading-[0.85] tracking-tighter uppercase mb-8">
            Building <br />
            <span className="text-transparent border-t-white border-b-white border-y-[1px] text-outline">Digital</span> <br />
            Legacies
          </h1>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <p style={{
    fontFamily: '"Ubuntu Sans", sans-serif',
    fontOpticalSizing: "auto",
    fontStyle: "normal",
    fontVariationSettings: '"wdth" 100',
  }} className="text-sm text-gray-400 max-w-sm leading-relaxed tracking-wide  font-bold uppercase">
              We engineer high-performance web experiences that bridge the gap between human emotion and digital precision.
            </p>
            <Link href="/items" className="group flex items-center gap-4 text-xs tracking-[0.4em] uppercase">
              View_Case_Studies
              <span className="w-12 h-[1px] bg-white group-hover:w-20 transition-all duration-500"></span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 md:px-20 border-t border-white/5">
        <div className="grid md:grid-cols-12 gap-10">
          <motion.div {...fadeInUp} className="md:col-span-4">
            <h2 className="text-[10px] tracking-[0.5em] text-gray-600 uppercase mb-10 italic">Our_Methodology</h2>
          </motion.div>
          <motion.div {...fadeInUp} className="md:col-span-8">
            <h3 className="text-3xl md:text-5xl font-light leading-tight uppercase tracking-tighter">
              We don't just build websites. We architect <span style={{
    fontFamily: '"Ubuntu Sans", sans-serif',
    fontOpticalSizing: "auto",
    fontStyle: "normal",
    fontVariationSettings: '"wdth" 100',
  }} className="text-gray-500 font-bold uppercase">scalable ecosystems</span> that empower brands to dominate their digital landscape.
            </h3>
          </motion.div>
        </div>
      </section>

      {/* Services: Minimalist Cards */}
      <section className="py-20 px-6 md:px-20 bg-white text-black">
        <motion.div {...fadeInUp} className="mb-20">
          <h2 className="text-[10px] tracking-[0.5em] uppercase font-bold">Expertise_Systems</h2>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-1 border-t border-black/10"
        >
          {[
            { title: "Brand Identity", desc: "Crafting visual languages that resonate with authority." },
            { title: "Experience Design", desc: "User-centric interfaces optimized for conversion and emotion." },
            { title: "System Architecture", desc: "Robust, scalable tech stacks using Next.js and Cloud infrastructures." }
          ].map((service, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              className="p-10 border-b border-black/10 md:border-r last:border-r-0 hover:bg-gray-50 transition-colors group"
            >
              <span className="text-[10px] font-bold mb-10 block opacity-30">0{index + 1}</span>
              <h4 className="text-2xl font-bold uppercase tracking-tighter mb-4 group-hover:translate-x-2 transition-transform">{service.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
<section>
  <About></About>
</section>
<section>
  <StudioSection></StudioSection>
</section>
      {/* Stats: The Proof */}
      <section>
        <Privacy></Privacy>
      </section>
      <section className="py-32 px-6 md:px-20 bg-[#080808]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Projects Delivered", value: "140+" },
            { label: "Performance Score", value: "99/100" },
            { label: "Global Partners", value: "12" },
            { label: "Retention Rate", value: "95%" }
          ].map((stat, i) => (
            <motion.div key={i} {...fadeInUp}>
              <div className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">{stat.value}</div>
              <div className="text-[9px] tracking-[0.3em] text-gray-500 uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="pt-40 pb-20 px-6 md:px-20 border-t border-white/5">
        <div className="text-center mb-40">
          <motion.div {...fadeInUp}>
            <h2 className="text-[12vw] font-bold tracking-tighter uppercase leading-none mb-10">
              Let's_Sync
            </h2>
            <Link href="/contact" className="text-xl md:text-2xl underline decoration-white/20 hover:decoration-white transition-all underline-offset-8">
              hello@studio-siners.com
            </Link>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="space-y-4">
            <p className="text-[10px] tracking-[0.5em] text-gray-600">ESTD 2026 // DHAKA</p>
            <div className="flex gap-6 text-[9px] tracking-widest text-gray-400">
              <a href="#" className="hover:text-white transition-colors uppercase">Instagram</a>
              <a href="#" className="hover:text-white transition-colors uppercase">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors uppercase">Behance</a>
            </div>
          </div>
          <div className="text-[9px] text-gray-700 tracking-[0.5em]">
            &copy; STUDIO_SINERS_MXXVI
          </div>
        </div>
      </footer>
    </div>
  );
}