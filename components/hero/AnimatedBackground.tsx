"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#020617]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#ffffff 1px,transparent 1px),
            linear-gradient(to bottom,#ffffff 1px,transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Blue Blob */}
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-10 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[130px]"
      />

      {/* Purple Blob */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 120, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-10 bottom-10 h-96 w-96 rounded-full bg-violet-600/20 blur-[130px]"
      />
    </div>
  );
}