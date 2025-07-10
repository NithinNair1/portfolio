"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "B.Tech in Electronics and Telecommunication Engineering",
      institution: "JSPM’s Rajarshi Shahu College of Engineering",
      location: "Pune, India",
      period: "2019 - 2023",
      description:
        "Graduated with a CGPA of 9.67. Built foundational skills in engineering while exploring applied AI through projects and internships."
    },
    {
      degree: "Senior Secondary (12th CBSE)",
      institution: "GG International School",
      location: "Pune, India",
      period: "2018 - 2019",
      description:
        "Achieved 91% with a focus on Physics, Chemistry, and Mathematics (PCM)."
    },
    {
      degree: "Secondary (10th CBSE)",
      institution: "GG International School",
      location: "Pune, India",
      period: "2016 - 2017",
      description:
        "Scored a perfect 10 CGPA with distinction in core academic subjects."
    }
  ];

  return (
    <section id="education" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-2 text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
          Education
        </h2>
        <p className="text-muted-foreground">My academic background</p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-400 via-purple-500 to-blue-600 dark:from-indigo-300 dark:via-purple-400 dark:to-blue-500 transform -translate-x-1/2 md:block hidden"></div>

        <div className="space-y-12">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative md:grid md:grid-cols-2 md:gap-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-indigo-500 dark:bg-indigo-400 transform -translate-x-1/2 z-10 hidden md:block">
                <div className="absolute inset-0.5 rounded-full bg-background animate-pulse"></div>
              </div>

              {/* Content */}
              <div
                className={`md:col-span-1 ${
                  index % 2 === 0
                    ? "md:text-right md:pr-12"
                    : "md:col-start-2 md:pl-12"
                }`}
              >
                <Card className="bg-background/50 backdrop-blur-sm border-border/50 hover:border-indigo-500/50 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2 text-indigo-500 dark:text-indigo-400">
                      <GraduationCap className="h-5 w-5" />
                      <span className="font-medium">{item.degree}</span>
                    </div>
                    <h3 className="text-lg font-semibold">
                      {item.institution}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {item.location}
                    </p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>{item.period}</span>
                    </div>
                    <p className="text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
