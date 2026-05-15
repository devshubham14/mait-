import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/journey", label: "Journey" },
  { to: "/talents", label: "Talents" },
  { to: "/collaborations", label: "Collabs" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Voices" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-2xl" : "py-6"
      }`}
      style={{
        background: scrolled
          ? "linear-gradient(to bottom, color-mix(in oklab, var(--background) 70%, transparent), transparent)"
          : "transparent",
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link to="/" className="group flex items-center gap-2">
          <span className="relative font-display text-xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              LUNA
            </span>
            <span className="ml-1 text-xs text-muted-foreground">/ ARIA</span>
          </span>
        </Link>
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="group relative text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="hidden rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm backdrop-blur-md transition hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_30px_-5px_var(--glow)] lg:inline-flex"
        >
          Work with me
        </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-white/10 bg-white/5 p-2 lg:hidden"
          aria-label="Menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open && (
        <div className="mx-6 mt-4 rounded-2xl border border-white/10 bg-background/90 p-6 backdrop-blur-2xl lg:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl tracking-tight"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
