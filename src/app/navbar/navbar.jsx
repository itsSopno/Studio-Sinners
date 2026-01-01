"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const buttonRef = useRef(null);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const tl = gsap.timeline();

    // ১. পুরো নেভবারটি ওপর থেকে স্লাইড হয়ে আসবে এবং হালকা স্বচ্ছ হবে
    tl.fromTo(navRef.current, 
      { y: -100, opacity: 0 }, 
      { y: 20, opacity: 1, duration: 1, ease: "expo.out" }
    );

    // ২. লোগো অ্যানিমেশন (Scale এবং Fade)
    tl.fromTo(logoRef.current, 
      { scale: 0.8, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }, 
      "-=0.6"
    );

    // ৩. লিঙ্কগুলো একে একে বাউন্স করে আসবে
    tl.fromTo(linksRef.current, 
      { y: 15, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
      "-=0.4"
    );

    // ৪. গেট স্টার্টেড বাটন অ্যানিমেশন
    tl.fromTo(buttonRef.current, 
      { x: 20, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 0.5 }, 
      "-=0.5"
    );
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center z-50">
      <nav 
        ref={navRef} 
        className="w-[90%] max-w-6xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-2xl"
      >
        <div className="px-8 h-16 flex justify-between items-center">
          
          {/* Logo - Gradient Text */}
          <div ref={logoRef} className="text-2xl font-black bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent uppercase tracking-tighter">
            <Link href="/">Creative</Link>
          </div>

          {/* Desktop Links with Animated Underline */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                ref={(el) => (linksRef.current[index] = el)}
                className={`relative text-sm font-bold uppercase tracking-widest transition-all duration-300 group ${
                  pathname === link.href ? "text-blue-400" : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
                {/* Hover Underline Effect */}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-blue-400 transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </Link>
            ))}
          </div>

          {/* Action Button - Glow Effect */}
          <button 
            ref={buttonRef}
            className="hidden md:block bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] active:scale-95"
          >
            Get Started
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;