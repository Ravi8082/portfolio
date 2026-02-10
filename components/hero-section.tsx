"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";

const roles = [
  "Java Fullstack Developer",
  "Spring Boot Engineer",
  "Backend Developer",
  "React Developer",
];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayed === current) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayed(
        isDeleting
          ? current.slice(0, displayed.length - 1)
          : current.slice(0, displayed.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(199 89% 48%) 1px, transparent 1px), linear-gradient(90deg, hsl(199 89% 48%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Multiple radial glows */}
      <div className="pointer-events-none absolute top-1/3 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-20">
        {/* Profile image - circular with animated ring */}
        <div className="flex-shrink-0">
          <div className="relative">
            {/* Animated spinning ring */}
            <div className="animate-ring-spin absolute -inset-3 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, transparent, hsl(199 89% 48%), transparent, hsl(199 89% 48% / 0.3), transparent)",
              }}
            />
            {/* Dark fill behind the image */}
            <div className="absolute -inset-2 rounded-full bg-background" />
            {/* Image container */}
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-2 border-primary/30 lg:h-72 lg:w-72">
              <Image
                src="/images/ravi.jpg"
                alt="Ravi Pal - Java Fullstack Developer"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Dark gradient overlay at bottom to blend with theme */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
            {/* Status badge */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full border border-primary/30 bg-card px-4 py-1.5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                <span className="text-xs font-medium text-foreground">Open to Work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">
            Certified by Itvedant
          </p>
          <h1 className="mb-2 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            <span className="text-shimmer text-balance">Ravi Pal</span>
          </h1>
          <div className="mb-6 flex h-10 items-center">
            <span className="font-mono text-lg text-primary md:text-2xl">
              {displayed}
            </span>
            <span className="ml-0.5 inline-block h-6 w-0.5 animate-pulse bg-primary md:h-7" />
          </div>
          <p className="mb-8 max-w-lg text-base leading-relaxed text-muted-foreground">
            BCA student with practical experience in Core/Advanced Java, JDBC,
            JavaFX, Servlets, and Spring Boot, focused on building reliable and
            scalable applications with modern Java tools and frameworks.
          </p>

          {/* Social links */}
          <div className="mb-8 flex items-center gap-3">
            <a
              href="mailto:palravi1093@gmail.com"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://github.com/Ravi8082"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ravi-pal-6067042b6"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:brightness-110"
            >
              View Projects
              <ArrowDown size={16} />
            </a>
            <a
              href="/images/RaviPal-Resume.pdf"
              download="RaviPal-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-7 py-3 text-sm font-semibold text-primary transition-all hover:border-primary hover:bg-primary/10"
            >
              <Download size={16} />
              Download Resume
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:text-primary"
            >
              Contact Me
            </Link>
          </div>

          {/* Quick stats */}
          <div className="mt-10 flex items-center gap-8">
            <div className="text-center lg:text-left">
              <p className="stat-glow text-2xl font-bold">4+</p>
              <p className="text-xs text-muted-foreground">Projects</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-center lg:text-left">
              <p className="stat-glow text-2xl font-bold">3+</p>
              <p className="text-xs text-muted-foreground">Months Exp</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-center lg:text-left">
              <p className="stat-glow text-2xl font-bold">6+</p>
              <p className="text-xs text-muted-foreground">Technologies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#skills" className="flex flex-col items-center gap-2" aria-label="Scroll down">
          <span className="text-xs text-muted-foreground">Scroll Down</span>
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-primary/30 p-1">
            <div className="h-2 w-1 animate-bounce rounded-full bg-primary" />
          </div>
        </a>
      </div>
    </section>
  );
}
