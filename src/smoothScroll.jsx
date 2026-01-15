"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }) {
  const lenisOptions = {
    lerp: 0.1,          
    duration: 1.2,     
    smoothWheel: true,  
    syncTouch: true,    
    touchInertiaMultiplier: 35,
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothTouch: true,  
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
