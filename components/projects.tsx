"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
      // github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 2,
      title: "AI Content Generator",
      description:
        "An AI-powered application that generates content based on user prompts using OpenAI's GPT models.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "OpenAI API", "Express", "PostgreSQL"],
      // github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 3,
      title: "Real-time Chat Application",
      description:
        "A real-time messaging platform with features like user authentication, message encryption, and file sharing.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Firebase", "WebSockets", "Tailwind CSS", "Redux"],
      // github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 4,
      title: "Task Management Dashboard",
      description:
        "A comprehensive task management system with Kanban boards, task assignments, and progress tracking.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Vue.js", "Express", "MongoDB", "Docker", "JWT"],
      // github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      description:
        "A mobile application for tracking workouts, nutrition, and health metrics with data visualization.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React Native", "GraphQL", "Node.js", "MongoDB", "D3.js"],
      // github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 6,
      title: "Weather Forecast App",
      description:
        "A weather application that provides real-time forecasts, alerts, and historical weather data.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Redux", "Weather API", "Chart.js", "Geolocation"],
      // github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-2 text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
          My Projects
        </h2>
        <p className="text-muted-foreground">Some of my recent work</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Card className="h-full overflow-hidden bg-background/50 backdrop-blur-sm border-border/50 hover:border-indigo-500/50 transition-all duration-300">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={`${
                    project.image
                      ? basePath + project.image
                      : basePath + "/placeholder.svg"
                  }`}
                  alt={project.title}
                  fill
                  className={`object-cover transition-transform duration-500 ${
                    hoveredId === project.id ? "scale-110" : "scale-100"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                    hoveredId === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {/* <Button
                    size="sm"
                    variant="outline"
                    className="bg-background/20 backdrop-blur-sm"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button> */}
                  <Button
                    size="sm"
                    className="bg-indigo-600 hover:bg-indigo-700"
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-indigo-500/10 to-blue-600/10 text-indigo-500 dark:text-indigo-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
