"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Hi, I'm{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-700 dark:from-indigo-300 dark:via-purple-400 dark:to-blue-500 glow-text">
                  Nithin Nair
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
                Software Developer | AI Engineer
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-md">
              I transform enterprise applications with AI, building scalable,
              responsible, and high-performance solutions through intelligent
              automation and innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="/resume_nithin_genai_developer.pdf"
                  download="/resume_nithin_genai_developer.pdf"
                >
                  Download CV <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-500/20 dark:border-indigo-400/20 glow-border">
            {/* 1) This wrapper just takes 100% of the circle. */}
            <div className="absolute inset-0 overflow-hidden">
              {/* 2) This inner div is what we actually zoom & shift */}
              <div className="relative w-full h-full transform scale-[1.1] origin-top -translate-y-2">
                <Image
                  src="/image_portfolio.png"
                  alt="Nithin Nair"
                  fill // still use fill so image covers this inner div
                  className="object-cover object-top transform scale-90"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
