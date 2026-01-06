"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { selfData } from "@/constant";

import { quentine, mono } from "@/app/fonts";

export const Hero = () => {
  const ref = useRef(null);


  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-start px-6 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent pointer-events-none" />


      <div className="max-w-full sm:max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          className="max-w-4xl space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Readability layer */}
          <div className="inline-block rounded-3xl bg-background/40 backdrop-blur-md border border-white/10 p-6 md:p-8 shadow-2xl">
            <div className="space-y-6">
              <motion.h1
                className={`${quentine.className} text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.65)]`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                {selfData.name}
              </motion.h1>

              <motion.p
                className={`${mono.className} text-lg md:text-xl text-white/80 tracking-widest drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                {selfData.roles[0]}
              </motion.p>

              <motion.p
                className="text-base md:text-lg max-w-2xl leading-relaxed text-white/85 drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                {selfData.bio}
              </motion.p>
            </div>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="relative group overflow-hidden btn-primary shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/resume">
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-30"
                      style={{ background: "var(--glass-shimmer)" }}
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                    <span className="relative z-10 font-medium">View Resume</span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
