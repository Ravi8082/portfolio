"use client";

import { SectionHeading } from "./section-heading";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function ExperienceSection() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal(0.05);
  const { ref: cardRef, isVisible: cardVisible } = useScrollReveal(0.1);

  return (
    <section id="experience" className="relative px-6 py-24">
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <div ref={headRef} className={headVisible ? "animate-reveal" : "opacity-0"}>
          <SectionHeading
            label="Work Experience"
            title="Professional Journey"
            description="Hands-on experience building real-world applications"
          />
        </div>

        <div className="mx-auto max-w-3xl">
          {/* Timeline */}
          <div className="relative border-l-2 border-primary/20 pl-8">
            {/* Animated dot */}
            <div className="absolute -left-[9px] top-0 h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-30" />
              <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-primary bg-background" />
            </div>

            <div
              ref={cardRef}
              className={`${cardVisible ? "animate-reveal" : "opacity-0"}`}
            >
              <div className="hover-lift glow-border rounded-xl bg-card p-6 lg:p-8">
                <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <Briefcase size={18} className="text-primary" />
                      <h3 className="text-lg font-bold text-foreground">
                        Java Development Intern
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-primary">
                      Netparam Technologies Pvt. Ltd.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar size={13} className="text-primary/70" />
                      <span>May 2024 - Aug 2024</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin size={13} className="text-primary/70" />
                      <span>India</span>
                    </div>
                  </div>
                </div>

                <ul className="mb-5 flex flex-col gap-2.5 text-sm leading-relaxed text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="mt-1.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Worked on Core/Advanced Java for backend development with JDBC for MySQL CRUD operations
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Built GUI-based desktop applications using JavaFX
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Handled HTTP requests with Servlets and assisted in Spring Boot projects
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Created REST APIs and implemented MVC architecture patterns
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Core Java",
                    "Advanced Java",
                    "JDBC",
                    "JavaFX",
                    "Servlets",
                    "Spring Boot",
                    "REST APIs",
                    "MVC",
                    "MySQL",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-xs text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
