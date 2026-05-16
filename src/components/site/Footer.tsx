import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Music2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5 px-6 py-20">
      <div className="ambient-glow pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <h3 className="font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Let's create
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent italic">
                something cinematic.
              </span>
            </h3>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm backdrop-blur-md transition hover:border-primary/50 hover:bg-primary/10"
            >
              Start a conversation →
            </Link>
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Explore</p>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/journey" className="hover:text-primary">
                  Journey
                </Link>
              </li>
              <li>
                <Link to="/talents" className="hover:text-primary">
                  Talents
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-primary">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Find me</p>
            <div className="flex gap-3">
              {[
                { I: Instagram, label: "Instagram" },
                { I: Youtube, label: "YouTube" },
                { I: Music2, label: "Spotify" },
              ].map(({ I, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:border-primary/50 hover:text-primary"
                >
                  <I size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Luna Aria. Crafted with feeling.</p>
          <p>Singer · Dancer · Guitarist · Storyteller</p>
        </div>
      </div>
    </footer>
  );
}
