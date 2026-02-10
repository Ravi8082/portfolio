import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 font-mono text-lg font-bold tracking-tight text-primary"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-black text-primary-foreground">
            RP
          </span>
          Ravi Pal
        </Link>

        {/* Social links */}
        <div className="flex items-center gap-3">
          <a
            href="mailto:palravi1093@gmail.com"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://github.com/Ravi8082"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/ravi-pal-6067042b6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>

        {/* Divider */}
        <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Copyright */}
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
          Made with <Heart size={14} className="text-primary" /> by Ravi Pal
        </p>
      </div>
    </footer>
  );
}
