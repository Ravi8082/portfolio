"use client";

import Image from "next/image";
import { SectionHeading } from "./section-heading";
import { ExternalLink, Github } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link?: string;
  github?: string;
  color: string;
}

const projects: Project[] = [
  {
    title: "Unity Trust Bank",
    description:
      "Secure digital banking web app with user/admin roles. UPI payments, loan management, ATM requests, and ledger-based transactions with automated EMI processing.",
    image: "/images/project-banking.jpg",
    tech: ["Spring Boot", "React", "JWT", "MySQL", "Spring Security","Email Verification"],
    github: "https://github.com/Ravi8082",
    color: "from-cyan-500/20 to-blue-600/20",
  },
  {
    title: "Hotel Management System",
    description:
      "Real-time room booking/cancellation, service management, secure customer access, and admin panel for managing rooms, users, bookings, and hotel operations.",
    image: "/images/project-hotel.jpg",
    tech: ["Spring Boot", "React", "JWT", "RBAC", "MySQL", "Hibernate","Email Verification"],
    github: "https://github.com/Ravi8082",
    color: "from-emerald-500/20 to-teal-600/20",
  },
  {
    title: "Blood Donation System",
    description:
      "Role-based access for User/Admin/Hospital, donor registration, blood search, hospital request management, and admin verification with Email OTP security.",
    image: "/images/project-blood.jpg",
    tech: ["Spring Boot", "Spring Security", "React", "MySQL", "Email OTP"],
    github: "https://github.com/Ravi8082",
    color: "from-red-500/20 to-rose-600/20",
  },
  {
    title: "Office Dashboard",
    description:
      "Full-stack Office Dashboard with employee/admin roles, OTP-based login, secure CRUD operations via JDBC/Hibernate, and reusable UI components.",
    image: "/images/project-office.jpg",
    tech: ["Spring Boot", "React", "JWT", "RBAC", "MySQL", "JDBC","Email Verification"],
    github: "https://github.com/Ravi8082",
    color: "from-amber-500/20 to-orange-600/20",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`${isVisible ? "animate-reveal" : "opacity-0"}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="card-tilt group overflow-hidden rounded-2xl border border-border bg-card">
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${project.color} via-transparent to-transparent opacity-60`} />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

          {/* Overlay buttons */}
          <div className="absolute right-3 top-3 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {project.github && (
              <a
                href={project.github}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label={`GitHub - ${project.title}`}
              >
                <Github size={16} />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label={`Live demo - ${project.title}`}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="mb-2 text-lg font-bold text-foreground">
            {project.title}
          </h3>
          <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-xs text-primary"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <div ref={ref} className={isVisible ? "animate-reveal" : "opacity-0"}>
          <SectionHeading
            label="Featured Projects"
            title="What I Have Built"
            description="Full-stack applications showcasing Java backend expertise and React frontends"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
