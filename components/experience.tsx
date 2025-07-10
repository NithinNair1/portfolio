"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      position: "Systems Engineer | AI and Data Unit",
      company: "Tata Consultancy Services (TCS)",
      location: "Pune, India",
      period: "2023 - Present",
      description:
        "Architected and scaled Generative & Agentic AI backends using Python, Azure OpenAI, and Hugging Face. Designed and delivered POCs for government and enterprise clients—ranging from LLM-based chatbots to voice agents—presented at industry events. Integrated NVIDIA NeMo-Guardrails to enforce Responsible AI checks. Built high-performance inference pipelines with FAISS and AWS Bedrock, reducing latency by 40% and boosting throughput by over 75%. Collaborated cross-functionally with software, DevOps, and domain teams to integrate AI into production environments using GitLab, Jenkins, and Kubernetes."
    },
    {
      position: "Data Analytics Intern",
      company: "Tata Consultancy Services (TCS)",
      location: "Pune, India",
      period: "Jan 2023 - May 2023",
      description:
        "Worked on data engineering and ETL frameworks in the BFSI unit. Gained hands-on experience with data warehousing concepts, Snowflake, and collaborative development within a highly professional enterprise environment."
    },
    {
      position: "Digital Intern",
      company: "SP&IR Cell",
      location: "Remote",
      period: "Aug 2021 - Feb 2022",
      description:
        "Managed digital media content creation and video editing for institutional promotions."
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-2 text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
          Work Experience
        </h2>
        <p className="text-muted-foreground">My professional journey</p>
      </motion.div>

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-background/50 backdrop-blur-sm border-border/50 hover:border-indigo-500/50 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-indigo-500 dark:text-indigo-400">
                      <Briefcase className="h-5 w-5" />
                      <span className="font-medium">{experience.position}</span>
                    </div>
                    <h3 className="text-lg font-semibold">
                      {experience.company}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{experience.period}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <p>{experience.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
