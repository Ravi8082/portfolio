"use client";

import React from "react"

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  MapPin,
  Clock,
  Loader2,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <main className="relative min-h-screen px-6 py-12">
      {/* Background effects */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(199 89% 48%) 1px, transparent 1px), linear-gradient(90deg, hsl(199 89% 48%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="pointer-events-none absolute top-1/4 left-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Back button */}
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>

        {/* Page heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">
            Get In Touch
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            {"Let's Work Together"}
          </h1>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground">
            Have a project in mind or want to discuss an opportunity? Fill out
            the form below and I will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact info sidebar */}
          <div className="flex flex-col gap-5 lg:col-span-2">
            {/* Info card */}
            <div className="glow-border rounded-2xl bg-card p-6">
              <h3 className="mb-6 text-lg font-bold text-foreground">
                Contact Information
              </h3>
              <div className="flex flex-col gap-5">
                <a
                  href="mailto:palravi1093@gmail.com"
                  className="group flex items-center gap-4 text-muted-foreground transition-colors hover:text-primary"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm text-foreground">palravi1093@gmail.com</p>
                  </div>
                </a>
                <a
                  href="tel:8052696360"
                  className="group flex items-center gap-4 text-muted-foreground transition-colors hover:text-primary"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm text-foreground">8052696360</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm text-foreground">India</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Response Time</p>
                    <p className="text-sm text-foreground">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="glow-border rounded-2xl bg-card p-6">
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                Connect With Me
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/ravi-pal-6067042b6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary text-muted-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/Ravi8082"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary text-muted-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:palravi1093@gmail.com"
                  className="group flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary text-muted-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glow-border rounded-2xl bg-card p-6 lg:p-8"
            >
              <h3 className="mb-6 text-lg font-bold text-foreground">
                Send a Message
              </h3>

              {status === "success" && (
                <div className="mb-6 flex items-center gap-3 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3">
                  <CheckCircle2 size={18} className="flex-shrink-0 text-green-400" />
                  <p className="text-sm text-green-400">
                    Message sent successfully! I will get back to you soon.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3">
                  <AlertCircle size={18} className="flex-shrink-0 text-red-400" />
                  <p className="text-sm text-red-400">{errorMsg}</p>
                </div>
              )}

              <div className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Your Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Ravi Pal"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Your Email <span className="text-primary">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="palravi1093@gmail.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Project discussion, Job opportunity, etc."
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full resize-none rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Hi Ravi, I'd like to discuss a project opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
