"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ItemsSimple() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const mockItems = [
    {
      id: 1,
      name: "DOG STUDIO CLONE",
      description: "A high-end creative portfolio clone featuring advanced 3D web technologies. It showcases an interactive 3D animal model with custom Matcap shaders that transition smoothly based on user interaction.",
      price: "299.99",
      image: "https://i.postimg.cc/wjqNjskP/react-dog-1-14-2026-12-08-17-PM.png",
      category: "Creative_Tech",
      year: "2026",
      tech: ["React", "Three.js", "GLSL"],
      approach: "Utilizing custom Matcap shaders and R3F for seamless 3D performance."
    },
    {
      id: 2,
      name: "B2B-Asset Verse",
      description: "AssetVerse is a B2B web application that helps organizations efficiently manage physical assets. It enables companies to track assignments, reducing loss and improving transparency.",
      price: "449.99",
      image: "https://i.postimg.cc/zG40bjPn/ASSET-VERSE-Mozilla-Firefox-12-27-2025-9-27-24-PM.png",
      category: "B2B_SaaS",
      year: "2025",
      tech: ["Next.js", "PostgreSQL", "Tailwind"],
      approach: "Architecting a multi-tenant database structure for enterprise scalability."
    },
    {
      id: 3,
      name: "Creative Studio",
      description: "A visually bold and experimental creative studio portfolio focused on high-impact layouts, kinetic typography, and modern digital aesthetics.",
      price: "399.99",
      image: "https://i.postimg.cc/76tChBKv/(70-Reacting-to-21-Design-Portfolios-in-22-Minutes-You-Tube-Mozilla-Firefox-1-11-2026-4-00-31-PM.png",
      category: "Digital_Design",
      year: "2026",
      tech: ["Framer Motion", "React", "GSAP"],
      approach: "Experimental typography and interaction-led layout transitions."
    }
  ];

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://server-1-1-6g3a.onrender.com/items");
        if (!response.ok) throw new Error("NETWORK_RESPONSE_FAILURE");
        const data = await response.json();
        
        // Normalize the data - ensure each item has an 'id' field
        const normalizedData = data.map(item => ({
          ...item,
          id: item.id || item._id // Use _id if id doesn't exist
        }));
        
        setItems(normalizedData);
      } catch (err) {
        console.error("Fetch Error:", err);
        // Use mock data as fallback
        setItems(mockItems);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center">
        <div className="text-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-t border-blue-600 rounded-full mx-auto mb-6"
          ></motion.div>
          <p className="text-white text-[10px] tracking-[0.6em] uppercase animate-pulse">Initializing_Sync_Protocol</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center text-white">
        <div className="text-center border border-red-900/30 p-12 bg-red-900/5">
          <h2 className="text-4xl font-bold tracking-tighter text-red-600 mb-4 uppercase">System_Error</h2>
          <p className="text-xs tracking-widest text-gray-500 mb-8 uppercase">{error}</p>
          <button onClick={() => window.location.reload()} className="text-[10px] underline tracking-[0.5em] uppercase">Re-attempt_Sync</button>
        </div>
      </div>
    );
  }

  return (
    <main style={{ fontFamily: "'Pirata One', system-ui", fontWeight: "400", fontStyle: "normal" }} 
          className="bg-[#080808] text-white selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 w-full p-8 z-50 flex justify-between items-baseline mix-blend-difference pointer-events-none">
        <Link href="/" className="text-[10px] tracking-[0.5em] hover:line-through transition-all uppercase pointer-events-auto">Home_Root</Link>
        <div className="text-[8px] tracking-[0.4em] opacity-40 uppercase">Active_Node: Catalog_MXXVI</div>
      </nav>

      {/* Projects List */}
      <div className="relative">
        {items.map((item, index) => (
          <ProjectSection key={item.id || index} item={item} index={index} />
        ))}
      </div>

      {/* Footer Section */}
      <footer className="h-[60vh] flex flex-col items-center justify-center border-t border-white/5 relative overflow-hidden">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.03 }}
          className="text-[25vw] font-bold select-none tracking-tighter absolute"
        >
          END_SYS
        </motion.h2>
        <div className="relative z-10 text-center">
          <p className="text-[10px] tracking-[1em] text-gray-600 mb-8 uppercase">End of Directory</p>
          <Link href="/" className="group flex items-center gap-6">
            <span className="w-12 h-[1px] bg-white/20 group-hover:w-24 transition-all duration-500"></span>
            <span className="text-xs tracking-[1em] group-hover:text-blue-500 transition-colors uppercase italic">Return_to_Nexus</span>
          </Link>
        </div>
      </footer>
    </main>
  );
}

const ProjectSection = ({ item, index }) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center py-40 px-6 md:px-20 border-b border-white/5 overflow-hidden">
      
      {/* Background Floating Index */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] select-none">
        <span className="text-[50vw] leading-none font-bold italic">0{index + 1}</span>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 relative z-10 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:col-span-5 flex flex-col"
        >
          <div className="mb-12">
            <span className="text-[10px] tracking-[0.8em] text-blue-600 uppercase mb-6 block font-bold italic">ENTRY_NODE_0{index + 1}</span>
            <h2 className="text-6xl md:text-8xl font-normal leading-[0.85] uppercase tracking-tighter mb-8">
              {item.name}
            </h2>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-1.5 bg-white/5 border border-white/10 text-[9px] uppercase tracking-widest">{item.year || "2026"}</span>
              <span className="px-4 py-1.5 bg-white/5 border border-white/10 text-[9px] uppercase tracking-widest text-blue-400">{item.category}</span>
            </div>
          </div>

          <div className="space-y-10">
            <p style={{ fontFamily: '"Ubuntu Sans", sans-serif', fontWeight: "300" }} 
               className="text-lg text-gray-400 leading-relaxed max-w-sm uppercase italic opacity-80">
              {item.description}
            </p>
            <div className="flex items-baseline gap-8">
             
               <Link href={`/items/${item.id}`} className="group flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase">
                 <span className="underline underline-offset-8 decoration-white/10 group-hover:decoration-blue-500 transition-all">Expand_Specs</span>
                 <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">→</span>
               </Link>
            </div>
          </div>
        </motion.div>

        {/* Right Asset View */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="lg:col-span-7 group relative"
        >
          <Link href={`/items/${item.id}`} className="block overflow-hidden relative shadow-[0_0_100px_rgba(0,0,0,1)] bg-[#111] aspect-[16/10] cursor-pointer">
             <motion.div
               whileHover={{ scale: 1.02 }}
               transition={{ duration: 1.5 }}
               className="w-full h-full relative"
             >
               <Image 
                 src={item.image} 
                 alt={item.name} 
                 fill
                 className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
               />
             </motion.div>
             
             {/* Tech Overlay */}
             <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent flex gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                {item.tech?.map((t, i) => (
                  <span key={i} className="text-[8px] uppercase tracking-[0.3em] font-mono text-blue-400">{t}</span>
                ))}
             </div>
          </Link>
        </motion.div>
      </div>

      {/* Technical Footnote */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="w-full max-w-6xl mt-24 pt-12 border-t border-white/5 grid md:grid-cols-2 gap-12"
      >
        <div>
          <h4 className="text-[9px] tracking-[0.4em] text-gray-700 mb-6 uppercase italic font-bold">Engineering_Insight</h4>
          <p style={{ fontFamily: '"Ubuntu Sans", sans-serif' }} className="text-2xl font-light text-gray-400 tracking-tighter uppercase leading-tight">
            {item.approach || "Optimized architecture for next-generation digital delivery."}
          </p>
        </div>
        <div className="flex flex-col justify-end items-end opacity-20">
           <span className="text-[8px] tracking-[1em] uppercase font-mono italic">Studio_Siners_Engine_V4</span>
        </div>
      </motion.div>
    </section>
  );
};