"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Database,
  Globe,
  Palette,
  Server,
  Smartphone,
  Terminal,
  Layers,
  GitBranch,
  Cpu,
  Users,
  Cloud,
  Settings
} from "lucide-react";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Skills() {
  const skillCategories = [
    {
      name: "AI/ML",
      icon: <Cpu className="h-6 w-6" />,
      skills: [
        "Generative AI",
        "LLMs (GPT, Claude)",
        "LangChain",
        "AutoGen",
        "NeMo Guardrails",
        "Prompt Engineering",
        "MLflow",
        "Hugging Face"
      ]
    },
    {
      name: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: [
        "Python",
        "Flask",
        "FastAPI",
        "REST APIs",
        "RAG Pipelines",
        "Vector Search (FAISS)"
      ]
    },
    {
      name: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        "Azure OpenAI",
        "AWS Bedrock",
        "GCP Vertex AI",
        "CI/CD (GitLab, Jenkins)",
        "Kubernetes",
        "Docker"
      ]
    },
    {
      name: "Frontend",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        "HTML",
        "CSS",
        "React (basic)",
        "Voice UIs",
        "Flask/Jinja Templates"
      ]
    },
    {
      name: "Version Control",
      icon: <GitBranch className="h-6 w-6" />,
      skills: ["Git", "GitHub", "GitLab", "Code Reviews"]
    },
    {
      name: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "Java", "SQL", "HTML/CSS"]
    },
    {
      name: "MLOps",
      icon: <Settings className="h-6 w-6" />,
      skills: [
        "MLflow",
        "LLMOps",
        "Monitoring Pipelines",
        "Scalable Inference",
        "Data Privacy Compliance"
      ]
    },
    {
      name: "Architecture",
      icon: <Layers className="h-6 w-6" />,
      skills: [
        "LLM System Design",
        "Agentic AI Workflows",
        "API Architecture",
        "Responsible AI"
      ]
    },
    {
      name: "Soft Skills",
      icon: <Users className="h-6 w-6" />,
      skills: [
        "Quick RFP Analysis",
        "Solution Storyboarding",
        "Stakeholder Communication",
        "Rapid Prototyping"
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-2 text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
          My Skills
        </h2>
        <p className="text-muted-foreground">
          Technologies and tools I work with
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-indigo-500/50 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-2 rounded-full bg-gradient-to-br from-indigo-500/20 to-blue-600/20 text-indigo-500 dark:text-indigo-400">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold">{category.name}</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {category.skills.map(skill => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
