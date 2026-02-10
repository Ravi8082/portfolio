"use client";

import { SectionHeading } from "./section-heading";
import { GraduationCap, Award, BookOpen, Trophy } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function EducationSection() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal(0.05);
  const { ref: card1Ref, isVisible: card1Visible } = useScrollReveal(0.1);
  const { ref: card2Ref, isVisible: card2Visible } = useScrollReveal(0.1);

  return (
    <section id="education" className="relative px-6 py-24">
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <div ref={headRef} className={headVisible ? "animate-reveal" : "opacity-0"}>
          <SectionHeading label="Education" title="Academic Background" />
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Degree */}
          <div
            ref={card1Ref}
            className={`${card1Visible ? "animate-reveal" : "opacity-0"}`}
          >
            <div className="hover-lift glow-border group h-full rounded-xl bg-card p-6 lg:p-8">
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">BCA</h3>
                  <p className="text-xs text-muted-foreground">
                    Bachelor of Computer Applications
                  </p>
                </div>
              </div>
              <p className="mb-3 text-sm font-medium text-primary">
                Mewar University
              </p>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Focused on computer science fundamentals, programming, database
                management, and software engineering principles.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5">
                  <BookOpen size={13} className="text-muted-foreground" />
                  <span className="font-mono text-xs text-secondary-foreground">
                    2022 - 2025
                  </span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5">
                  <Trophy size={13} className="text-primary" />
                  <span className="font-mono text-xs text-primary">
                    CGPA: 7.56
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Certification */}
          <div
            ref={card2Ref}
            className={`${card2Visible ? "animate-reveal" : "opacity-0"}`}
            style={{ animationDelay: "0.15s" }}
          >
            <div className="hover-lift glow-border group h-full rounded-xl bg-card p-6 lg:p-8">
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Award size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    Java Fullstack
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Professional Certification
                  </p>
                </div>
              </div>
              <p className="mb-3 text-sm font-medium text-primary">
                Certified by Itvedant
              </p>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Comprehensive certification covering Java, Spring Boot, React,
                MySQL, REST APIs, and fullstack web application development.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5">
                  <Award size={13} className="text-muted-foreground" />
                  <span className="font-mono text-xs text-secondary-foreground">
                    Verified Certificate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
