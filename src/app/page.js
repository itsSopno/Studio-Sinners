"use client";

import Image from "next/image";
import Pagi from "./Pgae1/pagi";
import { motion } from "framer-motion";

export default function Home() {
    
  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}   
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"
      >
        <main className="flex h-auto w-full  flex-col items-center justify-between  sm:items-start rounded-tr-4xl rounded-tl-4xl">
          
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={100}
              height={20}
              priority
            />
          </motion.div>

          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              To get started, edit the page.js file.
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Looking for a starting point or more instructions? Head over to{" "}
              <a
                href="https://vercel.com/templates?framework=next.js"
                className="font-medium text-zinc-950 dark:text-zinc-50 underline decoration-blue-500 underline-offset-4"
              >
                Templates
              </a>{" "}
              or the{" "}
              <a
                href="https://nextjs.org/learn"
                className="font-medium text-zinc-950 dark:text-zinc-50 underline decoration-blue-500 underline-offset-4"
              >
                Learning
              </a>{" "}
              center.
            </p>
          </div>

          {/* Buttons Animation */}
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <motion.a
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}   
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-black text-white px-5 transition-colors hover:bg-[#383838] dark:bg-white dark:text-black dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://vercel.com/new"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={16}
                height={16}
              />
              Deploy Now
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </motion.a>
          </div>
        </main>
      </motion.div>

     
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }}
      >
        <Pagi />
      </motion.div>
    </>
  );
}