"use client";

import { ReactLenis } from 'lenis/react';

export default function SmoothScroll({ children }) {
  const options = {
    duration: 1.5,
    lerp: 0.1,
    smoothWheel: true,
    // মোবাইলের জন্য প্রিমিয়াম স্মুথনেস
    touchMultiplier: 2,
    infinite: false,
  };

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}