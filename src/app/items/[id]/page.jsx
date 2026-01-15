"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ItemDetails() {
  const params = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const mockItems = [
    {
      id: 1,
      _id: "6968a9c66913c4ba1efbadca",
      name: "DOG STUDIO CLONE",
      description: "A high-end creative portfolio clone featuring advanced 3D web technologies. It showcases an interactive 3D animal model with custom Matcap shaders that transition smoothly based on user interaction.",
      price: "299.99",
      image: "https://i.postimg.cc/wjqNjskP/react-dog-1-14-2026-12-08-17-PM.png",
      category: "CREATIVE_TECH",
      year: "2026",
      tech: ["React", "Three.js", "GLSL", "GSAP"],
      approach: "Utilizing custom Matcap shaders and R3F for seamless 3D performance."
    },
    {
      id: 2,
      _id: "6968a9c66913c4ba1efbadcb",
      name: "B2B-ASSET VERSE",
      description: "AssetVerse is a B2B web application that helps organizations efficiently manage physical assets. It enables companies to track assignments, reducing loss and improving transparency.",
      price: "449.99",
      image: "https://i.postimg.cc/zG40bjPn/ASSET-VERSE-Mozilla-Firefox-12-27-2025-9-27-24-PM.png",
      category: "B2B_SAAS",
      year: "2025",
      tech: ["Next.js", "PostgreSQL", "Tailwind", "Prisma"],
      approach: "Architecting a multi-tenant database structure for enterprise scalability."
    },
    {
      id: 3,
      _id: "6968a9c66913c4ba1efbadcc",
      name: "CREATIVE STUDIO",
      description: "A visually bold and experimental creative studio portfolio focused on high-impact layouts, kinetic typography, and modern digital aesthetics.",
      price: "399.99",
      image: "https://i.postimg.cc/76tChBKv/(70-Reacting-to-21-Design-Portfolios-in-22-Minutes-You-Tube-Mozilla-Firefox-1-11-2026-4-00-31-PM.png",
      category: "DIGITAL_DESIGN",
      year: "2026",
      tech: ["Framer Motion", "React", "GSAP", "Next.js"],
      approach: "Experimental typography and interaction-led layout transitions."
    }
  ];

  useEffect(() => {
    const fetchItem = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`https://server-1-1-6g3a.onrender.com/items/${params.id}`);
        
        if (!response.ok) {
          throw new Error("NODE_CONNECTION_FAILED");
        }

        const data = await response.json();
        
        if (data) {
          setItem({
            ...data,
            id: data.id || data._id
          });
        }
      } catch (err) {
        console.error("Sync Error:", err);
        // Use mock data as fallback
        const foundItem = mockItems.find(item => 
          item.id === parseInt(params.id) || item._id === params.id
        );
        if (foundItem) {
          setItem(foundItem);
        } else {
          setError("ITEM_NOT_FOUND");
        }
      } finally {
        setLoading(false);
      }
    };

    if (params.id) fetchItem();
  }, [params.id]);

  if (loading) return (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-[1px] bg-blue-600 animate-pulse mx-auto mb-4"></div>
        <span className="text-[10px] tracking-[0.8em] text-gray-500 uppercase italic">Decrypting_Node_{params.id}</span>
      </div>
    </div>
  );

  if (error || !item) return (
    <div className="min-h-screen bg-[#080808] flex flex-col items-center justify-center text-white">
      <h2 className="text-xl mb-6 font-mono tracking-tighter text-red-600 uppercase italic underline underline-offset-8 decoration-red-900/50">
        PROTOCOL_ERROR: {error}
      </h2>
      <button 
        onClick={() => window.location.reload()} 
        className="text-[10px] tracking-[0.5em] uppercase border-b border-white/20 pb-2 hover:border-blue-500 transition-all"
      >
        Re-initiate_Connection
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#080808] text-white pt-32 pb-20 selection:bg-blue-600 selection:text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-12 border-b border-white/5 pb-8 flex justify-between items-end">
          <Link href="/items" className="text-[10px] tracking-[0.4em] text-gray-500 hover:text-white transition-all uppercase italic">
            ← Return_to_Directory
          </Link>
          <span className="text-[9px] text-gray-800 font-mono hidden md:block uppercase tracking-widest italic">
            ID_REF: {item._id || item.id}
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-20 items-start">
          
          {/* Visual Node */}
          <div className="lg:col-span-7">
            <div className="relative aspect-video w-full overflow-hidden bg-white/5 border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                priority
              />
            </div>
            
            <div className="mt-16 grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="text-[10px] tracking-[0.4em] text-blue-600 uppercase font-bold italic">Tech_Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {item.tech?.map((t, i) => (
                    <span key={i} className="text-[9px] px-3 py-1 bg-white/5 border border-white/10 tracking-widest uppercase">{t}</span>
                  ))}
                </div>
              </div>
              <div className="space-y-4 border-l border-white/5 pl-8">
                <h4 className="text-[10px] tracking-[0.4em] text-gray-600 uppercase font-bold italic">Architecture_Node</h4>
                <p className="text-sm text-gray-400 leading-relaxed font-light uppercase tracking-tight italic">
                  {item.approach}
                </p>
              </div>
            </div>
          </div>

          {/* Configuration Node */}
          <aside className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <span className="text-[10px] tracking-[0.8em] text-gray-600 uppercase block font-bold">
                YEAR_REF_{item.year}
              </span>
              <h1 
                style={{ fontFamily: "'Pirata One', system-ui", fontWeight: "400" }}
                className="text-6xl md:text-8xl leading-none uppercase tracking-tighter"
              >
                {item.name}
              </h1>
              <div className="text-5xl font-mono tracking-tighter text-blue-500 py-6 border-y border-white/5">
              </div>
              <p 
                style={{ fontFamily: '"Ubuntu Sans", sans-serif', fontWeight: "400" }}
                className="text-gray-400 text-sm leading-relaxed uppercase tracking-wider font-bold"
              >
                {item.description}
              </p>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-white text-black py-6 text-xs tracking-[0.6em] font-bold hover:bg-blue-600 hover:text-white transition-all uppercase">
                Acquire_Access
              </button>
              <div className="pt-10 space-y-6">
                <h5 className="text-[9px] tracking-[0.4em] text-gray-700 uppercase italic underline underline-offset-8">Specifications</h5>
                <div className="space-y-3 font-mono text-[10px]">
                   <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-gray-600">CATEGORY</span>
                      <span className="text-blue-400">{item.category}</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-gray-600">DEPLOYMENT</span>
                      <span>Cloud_Native</span>
                   </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
