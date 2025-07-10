"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-2 text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
          About Me
        </h2>
        <p className="text-muted-foreground">Get to know me better</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-background/50 backdrop-blur-sm border-border/50">
          <CardContent className="p-6">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <motion.div variants={item}>
                <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-600 dark:from-indigo-400 dark:to-blue-500">
                  My Background
                </h3>
                <p className="text-muted-foreground">
                  At TCS, I build AI-powered enterprise solutions, optimize
                  inference pipelines, and deploy responsible AI frameworks to
                  drive efficiency, scalability, and innovation in modern
                  software applications.
                </p>
              </motion.div>
            </motion.div>
          </CardContent>
        </Card>

        <Card className="bg-background/50 backdrop-blur-sm border-border/50">
          <CardContent className="p-6">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <motion.div variants={item}>
                <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-600 dark:from-indigo-400 dark:to-blue-500">
                  My Approach
                </h3>
                <p className="text-muted-foreground">
                  I take a ground-up approach to problem-solving, analyzing
                  challenges from multiple angles to uncover diverse solutions.
                  While I'm still growing in experience, I thrive on tackling
                  complex problems and continuously refining my skills.
                </p>
              </motion.div>
            </motion.div>
          </CardContent>
        </Card>

        <Card className="bg-background/50 backdrop-blur-sm border-border/50">
          <CardContent className="p-6">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <motion.div variants={item}>
                <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-600 dark:from-indigo-400 dark:to-blue-500">
                  When I'm Not Coding
                </h3>
                <p className="text-muted-foreground">
                  I enjoy traveling, playing cricket, cooking, and reading about
                  businesses, startups, and spirituality. Exploring new places
                  and ideas keeps me inspired and constantly learning.
                </p>
              </motion.div>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
