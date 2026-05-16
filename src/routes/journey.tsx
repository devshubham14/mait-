import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/site/Reveal";
import { Particles } from "@/components/site/Particles";
import { PageTransition } from "@/components/site/PageTransition";

export const Route = createFileRoute("/journey")({
  component: Journey,
  head: () => ({
    meta: [
      { title: "Journey — Luna Aria" },
      {
        name: "description",
        content:
          "An interactive cinematic timeline of Luna Aria's journey from her first dance class to a growing artist identity.",
      },
      { property: "og:title", content: "The Journey of Luna Aria" },
    ],
    links: [{ rel: "canonical", href: "/journey" }],
  }),
});

const milestones = [
  {
    y: "2012",
    t: "First dance class",
    d: "A studio with mirrors, ribbons of light, a child who refused to leave.",
  },
  {
    y: "2015",
    t: "Started singing",
    d: "Sang into a hairbrush. Then a karaoke mic. Then everything changed.",
  },
  {
    y: "2017",
    t: "Learned guitar",
    d: "Six strings, blistered fingers, a song written in one rainy afternoon.",
  },
  {
    y: "2019",
    t: "First stage performance",
    d: "A school auditorium. Three hundred faces. One unforgettable trembling note.",
  },
  {
    y: "2021",
    t: "Started social media",
    d: "Began sharing covers from a bedroom drenched in fairy lights.",
  },
  {
    y: "2023",
    t: "First viral content",
    d: "A 47-second clip. Two million hearts. The world finally tuned in.",
  },
  {
    y: "2025",
    t: "First paid collaboration",
    d: "Featured artist for a global fashion house — and many more after.",
  },
  {
    y: "2026",
    t: "Growing artist identity",
    d: "Touring intimate venues. Writing the debut record. The chapter ahead.",
  },
];

const stats = [
  { l: "Followers", values: [12, 45, 180, 520, 1200] },
  { l: "Performances", values: [3, 12, 28, 67, 124] },
  { l: "Brand collabs", values: [0, 1, 4, 12, 27] },
];

function Journey() {
  return (
    <PageTransition>
      <section className="relative px-6 pb-24 pt-40 md:pt-52">
        <Particles count={30} />
        <div className="relative mx-auto max-w-6xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-primary">2012 — present</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 font-display text-4xl sm:text-6xl leading-[0.95] tracking-tight md:text-[9rem]">
              The <span className="font-serif italic">journey</span> so far.
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
              Scroll through the moments that built the artist — each one still glowing.
            </p>
          </Reveal>
        </div>
      </section>

      <Timeline />

      <section className="relative px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight md:text-6xl">
              Growth in numbers
            </h2>
            <p className="mt-3 text-muted-foreground">
              A constellation of small, persistent steps.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {stats.map((s, i) => (
              <Reveal key={s.l} delay={i * 0.1}>
                <Graph label={s.l} values={s.values} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.3"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative px-6 py-24">
      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-6 top-0 h-full w-px bg-white/5 md:left-1/2">
          <motion.div
            style={{ height: lineHeight }}
            className="absolute inset-x-0 top-0 w-px bg-gradient-to-b from-primary via-accent to-transparent shadow-[0_0_20px_var(--glow)]"
          />
        </div>
        <div className="space-y-24">
          {milestones.map((m, i) => (
            <Reveal key={m.y} delay={i * 0.05}>
              <div
                className={`relative pl-16 md:grid md:grid-cols-2 md:gap-12 md:pl-0 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
              >
                <div className={`md:text-${i % 2 ? "left md:pl-12" : "right md:pr-12"}`}>
                  <p className="font-serif text-5xl sm:text-7xl italic text-primary md:text-8xl">
                    {m.y}
                  </p>
                </div>
                <div className={`mt-2 md:mt-6 ${i % 2 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <h3 className="font-display text-2xl tracking-tight md:text-3xl">{m.t}</h3>
                  <p className="mt-2 max-w-md text-muted-foreground md:inline-block">{m.d}</p>
                </div>
                <div className="absolute left-[18px] top-2 h-3 w-3 rounded-full bg-accent shadow-[0_0_30px_var(--glow-pink)] md:left-1/2 md:-translate-x-1/2 md:top-8" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Graph({ label, values }: { label: string; values: number[] }) {
  const max = Math.max(...values);
  const points = values
    .map((v, i) => `${(i / (values.length - 1)) * 100},${100 - (v / max) * 90}`)
    .join(" ");
  return (
    <div className="glass relative overflow-hidden rounded-3xl p-8">
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{label}</p>
      <p className="mt-4 font-display text-3xl sm:text-5xl tracking-tight">
        {values[values.length - 1]}
        {label === "Followers" ? "K+" : ""}
      </p>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="mt-8 h-32 w-full">
        <defs>
          <linearGradient id={`g-${label}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.78 0.18 320)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="oklch(0.78 0.18 320)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.polyline
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
          fill="none"
          stroke="oklch(0.78 0.18 320)"
          strokeWidth="0.8"
          strokeLinecap="round"
          points={points}
        />
        <polygon fill={`url(#g-${label})`} points={`0,100 ${points} 100,100`} />
      </svg>
      <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
        <span>2021</span>
        <span>2022</span>
        <span>2023</span>
        <span>2024</span>
        <span>2025</span>
      </div>
    </div>
  );
}
