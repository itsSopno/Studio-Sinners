"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { FiLogOut, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  const navLinks = [
    { name: "WORKS", href: "/items" },
    { name: "STUDIO", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "CONTACT", href: "/contact" },
  ];

  useEffect(() => {
    // Initial entrance animation
    gsap.fromTo(navRef.current, 
      { y: -20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, ease: "expo.out", delay: 0.5 }
    );
  }, []);

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' });
  };

  return (
    <>
      <header 
        ref={navRef}
     style={{
    fontFamily: '"Ubuntu Sans", sans-serif',
    fontOpticalSizing: "auto",
    fontStyle: "normal",
    fontVariationSettings: '"wdth" 100',
  }} className="fixed top-0 left-0 w-full z-[100] px-6 py-8 md:px-12 flex justify-between items-center mix-blend-difference text-white"  >
        {/* Brand Logo */}
        <Link href="/" className="group flex flex-col">
          <span className="text-sm font-bold tracking-[0.5em] leading-none uppercase">Studio</span>
          <span className="text-sm font-bold tracking-[0.5em] leading-none uppercase text-gray-500 group-hover:text-white transition-colors">Siners</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[10px] tracking-[0.4em] uppercase transition-all duration-300 hover:opacity-50 ${
                pathname === link.href ? "line-through decoration-white/50" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {session ? (
            <div className="flex items-center gap-6 border-l border-white/20 pl-8">
              <Link href="/add-item" className="text-[9px] tracking-[0.3em] opacity-40 hover:opacity-100 uppercase transition-opacity">Add_Work</Link>
              <button onClick={handleLogout} className="text-white opacity-40 hover:opacity-100 transition-opacity">
                <FiLogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <Link 
              href="/login"
              className="text-[10px] tracking-[0.4em] border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all uppercase"
            >
              Access_System
            </Link>
          )}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </header>

      {/* Fullscreen Mobile Menu */}
      <div className={`fixed inset-0 bg-[#080808] z-[90] flex flex-col justify-center items-center transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="flex flex-col space-y-8 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-4xl font-bold tracking-tighter uppercase hover:text-gray-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          {!session && (
            <Link 
              href="/login" 
              onClick={() => setIsOpen(false)}
              className="text-xs tracking-[1em] opacity-50 uppercase pt-10"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;