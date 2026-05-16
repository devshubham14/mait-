import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import danceImg from "@/assets/dance.jpg";
import singImg from "@/assets/singing.jpg";
import guitarImg from "@/assets/guitar.jpg";
import stageImg from "@/assets/stage.jpg";
import studioImg from "@/assets/studio.jpg";
import backstageImg from "@/assets/backstage.jpg";
import portraitImg from "@/assets/portrait-2.jpg";
import childhoodImg from "@/assets/childhood.jpg";
import heroImg from "@/assets/hero-portrait.jpg";
import { Reveal } from "@/components/site/Reveal";
import { PageTransition } from "@/components/site/PageTransition";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
  head: () => ({
    meta: [
      { title: "Gallery — Tanusiya Choudhury" },
      {
        name: "description",
        content:
          "A cinematic gallery of performances, backstage moments, studio sessions, and lifestyle imagery from Tanusiya Choudhury's artistic journey.",
      },
      { property: "og:title", content: "Gallery — Tanusiya Choudhury" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

const items = [
  { src: heroImg, cat: "Performances", a: "tall" },
  { src: danceImg, cat: "Dance", a: "tall" },
  { src: stageImg, cat: "Performances", a: "wide" },
  { src: backstageImg, cat: "Backstage", a: "tall" },
  { src: guitarImg, cat: "Guitar Sessions", a: "tall" },
  { src: singImg, cat: "Studio Moments", a: "tall" },
  { src: studioImg, cat: "Studio Moments", a: "wide" },
  { src: portraitImg, cat: "Lifestyle", a: "tall" },
  { src: childhoodImg, cat: "Lifestyle", a: "tall" },
];
const categories = [
  "All",
  "Performances",
  "Dance",
  "Guitar Sessions",
  "Studio Moments",
  "Backstage",
  "Lifestyle",
];

function Gallery() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<string | null>(null);
  const visible = items.filter((i) => filter === "All" || i.cat === filter);
  return (
    <PageTransition>
      <section className="relative px-6 pb-12 pt-40 md:pt-52">
        <div className="mx-auto max-w-6xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Visual archive</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-4xl sm:text-6xl leading-[0.95] tracking-tight md:text-[8rem]">
              The <span className="font-serif italic">gallery.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto mb-10 flex max-w-7xl flex-wrap justify-center gap-2 px-6">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] transition ${
              filter === c
                ? "border-primary bg-primary/20 text-foreground shadow-[0_0_20px_var(--glow)]"
                : "border-white/10 bg-white/5 text-muted-foreground hover:border-white/30"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <section className="relative px-6 pb-32">
        <div className="mx-auto max-w-7xl columns-2 gap-4 md:columns-3 lg:columns-4">
          {visible.map((it, i) => (
            <Reveal key={i} delay={(i % 6) * 0.04}>
              <button
                onClick={() => setOpen(it.src)}
                className="group mb-4 block w-full overflow-hidden rounded-2xl border border-white/5 break-inside-avoid"
              >
                <img
                  src={it.src}
                  alt={it.cat}
                  loading="lazy"
                  className="h-auto w-full transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="relative -mt-12 bg-gradient-to-t from-background/90 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary">{it.cat}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-background/90 p-6 backdrop-blur-2xl"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              src={open}
              alt=""
              className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-[0_0_120px_-20px_var(--glow)]"
            />
            <button
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5"
            >
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
