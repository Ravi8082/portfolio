"use client";

import { SectionHeading } from "./section-heading";
import {
  Code2,
  Globe,
  Database,
  Layers,
  Wrench,
  Monitor,
} from "lucide-react";
import type { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface SkillCategory {
  icon: ReactNode;
  title: string;
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: <Code2 size={22} />,
    title: "Languages",
    skills: [
      { name: "Core Java", level: 90 },
      { name: "Advanced Java", level: 85 },
      { name: "C/C++", level: 70 },
    ],
  },
  {
    icon: <Layers size={22} />,
    title: "Frameworks",
    skills: [
      { name: "Spring Boot", level: 88 },
      { name: "Spring MVC", level: 82 },
      { name: "Hibernate", level: 80 },
    ],
  },
  {
    icon: <Globe size={22} />,
    title: "Web Technologies",
    skills: [
      { name: "React", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "JSP/Servlets", level: 78 },
      { name: "JavaFX", level: 75 },
    ],
  },
  {
    icon: <Database size={22} />,
    title: "Databases",
    skills: [
      { name: "MySQL", level: 88 },
      { name: "JDBC", level: 85 },
      { name: "Hibernate ORM", level: 80 },
    ],
  },
  {
    icon: <Wrench size={22} />,
    title: "Tools",
    skills: [
      { name: "Maven", level: 82 },
      { name: "Apache Tomcat", level: 78 },
      { name: "Git", level: 80 },
    ],
  },
  {
    icon: <Monitor size={22} />,
    title: "IDE",
    skills: [
      { name: "Eclipse", level: 85 },
      { name: "IntelliJ IDEA", level: 88 },
    ],
  },
];

function SkillCard({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`${isVisible ? "animate-reveal" : "opacity-0"}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="hover-lift glow-border group h-full rounded-xl bg-card p-6 transition-all hover:border-primary/40">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
            {category.icon}
          </div>
          <h3 className="font-semibold text-foreground">{category.title}</h3>
        </div>
        <div className="flex flex-col gap-3.5">
          {category.skills.map((skill) => (
            <div key={skill.name}>
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {skill.name}
                </span>
                <span className="font-mono text-xs text-primary">
                  {skill.level}%
                </span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-1000 ease-out"
                  style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SkillsSection() {
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <div ref={ref} className={isVisible ? "animate-reveal" : "opacity-0"}>
          <SectionHeading
            label="Technical Skills"
            title="Technologies I Work With"
            description="Focused on Java ecosystem and modern web development tools"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <SkillCard key={category.title} category={category} index={i} />
          ))}
        </div>

        {/* Soft skills */}
        <div className="mt-10">
          <div className="glass-card rounded-xl p-6">
            <h3 className="mb-5 text-center font-semibold text-foreground">
              Soft Skills
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                "Problem-solving",
                "Communication",
                "Adaptability",
                "Time Management",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm text-primary transition-all hover:border-primary/40 hover:bg-primary/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
