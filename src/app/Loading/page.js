"use client";

import { motion } from "framer-motion";

export default function Loading() {
  const dotVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex space-x-3">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            variants={dotVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: index * 0.15 }}
            className="w-5 h-5 bg-blue-600 rounded-full"
          />
        ))}
      </div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="mt-8 text-xl font-bold text-gray-800 tracking-tighter"
      >
        L O A D I N G
      </motion.h2>

      <p className="text-gray-400 text-sm mt-2">
        অপেক্ষা করুন, পেজটি লোড হচ্ছে...
      </p>
    </div>
  );
}
