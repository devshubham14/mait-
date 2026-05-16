import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

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
        scrolled ? "py-3" : "py-6"
      }`}
      style={{
        background: scrolled
          ? "linear-gradient(to bottom, rgba(10,7,18,0.7), rgba(10,7,18,0.3))"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      {/* Subtle border glow on scroll */}
      {scrolled && (
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      )}

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Premium Artist Logo */}
        <Link to="/" className="group flex items-center gap-2">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="relative inline-block font-display text-lg font-bold tracking-tight">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-30 rounded-full" />

              {/* Main text */}
              <span className="relative bg-gradient-to-r from-purple-300 via-white to-pink-300 bg-clip-text text-transparent">
                TANUSIYA
              </span>

              {/* Divider */}
              <span className="mx-2 text-xs text-purple-400/60">•</span>

              {/* Subtitle */}
              <span className="relative text-xs font-light text-gray-300 tracking-[0.15em] uppercase">
                Artist
              </span>
            </span>
          </motion.div>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="group relative px-3 py-2 text-xs sm:text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
                {/* Animated underline */}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block"
        >
          <Link
            to="/contact"
            className="relative group rounded-full border border-white/15 bg-gradient-to-br from-white/10 to-white/5 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-purple-400/50 hover:from-white/15 hover:to-white/10"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl" />

            <span className="relative">Work with me</span>

            {/* Animated gradient border */}
            <motion.div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent)",
              }}
            />
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-white/10 bg-white/5 p-2 md:hidden backdrop-blur-md transition-all hover:border-purple-400/50 hover:bg-white/10"
          aria-label="Menu"
          whileTap={{ scale: 0.9 }}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          className="mx-4 sm:mx-6 mt-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4 sm:p-6 backdrop-blur-2xl md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col gap-3 sm:gap-4">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block font-display text-lg sm:text-xl tracking-tight transition-colors hover:text-purple-400"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
