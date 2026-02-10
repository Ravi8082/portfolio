"use client";

import Link from "next/link";
import { ArrowRight, Mail, Download } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function CTASection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="relative px-6 py-24">
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="mx-auto max-w-4xl">
        <div
          ref={ref}
          className={`${isVisible ? "animate-reveal" : "opacity-0"}`}
        >
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-primary/5 p-10 text-center lg:p-16">
            {/* Decorative glows */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-primary/10 blur-[100px]" />

            <div className="relative z-10">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Mail size={28} className="text-primary" />
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
                Interested in Working Together?
              </h2>
              <p className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-muted-foreground">
                I am currently open to new opportunities. Whether you have a project
                in mind or just want to say hello, I would love to hear from you.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:brightness-110"
                >
                  Get In Touch
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <a
                  href="/images/RaviPal-Resume.pdf"
                  download="RaviPal-Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-8 py-3.5 text-sm font-semibold text-primary transition-all hover:border-primary hover:bg-primary/10"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
