"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";
import TechStack from "./TechStack";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <AnimatedBackground />

      <div className="mx-auto max-w-6xl px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-lg font-medium text-cyan-400"
        >
          Hello 👋 I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl font-extrabold tracking-tight text-white md:text-8xl"
        >
          Nishtha Vatsa
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-6 text-2xl font-semibold text-slate-200 md:text-3xl"
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400"
        >
          I build scalable full-stack applications powered by AI,
          crafting seamless user experiences with React, Next.js,
          Node.js, Express.js, MongoDB and modern cloud technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 flex flex-col justify-center gap-5 sm:flex-row"
        >
         <Button asChild>
  <a href="#projects">
    Explore Projects
  </a>
</Button>

          <Button
            size="lg"
            variant="outline"
            className="gap-2 rounded-full px-8 border-slate-600 bg-transparent text-white hover:bg-slate-800"
          >
            Download Resume
            <Download size={18} />
          </Button>
        </motion.div>

        <TechStack />

      </div>
    </section>
  );
}