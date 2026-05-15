import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Play, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-portrait.jpg";
import danceImg from "@/assets/dance.jpg";
import guitarImg from "@/assets/guitar.jpg";
import singImg from "@/assets/singing.jpg";
import stageImg from "@/assets/stage.jpg";
import portraitImg from "@/assets/portrait-2.jpg";
import { Particles } from "@/components/site/Particles";
import { Reveal } from "@/components/site/Reveal";
import { PageTransition } from "@/components/site/PageTransition";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Luna Aria — Every dream has a rhythm" },
      { name: "description", content: "The cinematic homepage of Luna Aria, a singer, dancer and guitarist building a story one performance at a time." },
      { property: "og:title", content: "Luna Aria — Every dream has a rhythm" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Home() {
  return (
    <PageTransition>
      <Hero />
      <Intro />
      <FeaturedMoments />
      <Growth />
      <CinematicQuote />
      <Reels />
      <CTA />
    </PageTransition>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[700px] w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luna Aria on stage"
          width={1536}
          height={1920}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/40" />
      </motion.div>

      <Particles count={40} />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 pt-32 md:justify-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] backdrop-blur-md"
        >
          <Sparkles size={12} className="text-primary" />
          A cinematic portfolio
        </motion.p>
        <h1 className="font-display text-[12vw] leading-[0.9] tracking-tight md:text-[7.5rem] lg:text-[9rem]">
          {"Every dream".split(" ").map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mr-4 inline-block"
            >
              {w}
            </motion.span>
          ))}
          <br />
          <motion.span
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif italic text-glow bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
          >
            has a rhythm.
          </motion.span>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-8 max-w-xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          From silent beginnings to unforgettable stages — this is the story of a girl
          who turned her heartbeat into a melody.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Link
            to="/journey"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_0_40px_-5px_var(--glow)] transition hover:shadow-[0_0_60px_-5px_var(--glow-pink)]"
          >
            Explore Journey →
          </Link>
          <Link
            to="/talents"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm backdrop-blur-md transition hover:border-primary/50 hover:bg-white/10"
          >
            <Play size={14} /> Watch Moments
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-white/10 px-7 py-3.5 text-sm text-muted-foreground transition hover:border-white/30 hover:text-foreground"
          >
            Work With Me
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted-foreground"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function Intro() {
  const roles = [
    { t: "Singer", img: singImg, line: "Voice as a confession." },
    { t: "Dancer", img: danceImg, line: "Body as a brushstroke." },
    { t: "Guitarist", img: guitarImg, line: "Strings as a heartbeat." },
    { t: "Performer", img: stageImg, line: "Stage as a sanctuary." },
    { t: "Creator", img: portraitImg, line: "Lens as a diary." },
    { t: "Artist", img: heroImg, line: "Life as the canvas." },
  ];
  return (
    <section className="relative px-6 py-32 md:py-44">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">— Introduction</p>
          <h2 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
            Six worlds.{" "}
            <span className="font-serif italic text-muted-foreground/80">One story.</span>
          </h2>
        </Reveal>
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((r, i) => (
            <Reveal key={r.t} delay={i * 0.07}>
              <article className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/5">
                <img
                  src={r.img}
                  alt={r.t}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-accent/0 transition-opacity duration-700 group-hover:from-primary/10 group-hover:to-accent/20" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-primary/80">0{i + 1}</p>
                  <h3 className="mt-2 font-display text-3xl tracking-tight">{r.t}</h3>
                  <p className="mt-1 font-serif text-sm italic text-muted-foreground">{r.line}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedMoments() {
  const moments = [
    { y: "2023", t: "First viral moment", d: "A guitar cover that reached 2M hearts overnight.", img: guitarImg },
    { y: "2024", t: "Sold-out showcase", d: "Performed live to a full crowd at The Velvet Hall.", img: stageImg },
    { y: "2025", t: "First brand campaign", d: "Featured artist for a global fashion house.", img: portraitImg },
  ];
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <h2 className="max-w-3xl font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
              Moments that <span className="font-serif italic">shaped</span> the story.
            </h2>
            <Link to="/journey" className="hidden whitespace-nowrap text-sm text-muted-foreground hover:text-foreground md:block">
              View timeline →
            </Link>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {moments.map((m, i) => (
            <Reveal key={m.t} delay={i * 0.1}>
              <article className="group glass relative overflow-hidden rounded-3xl p-6 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_30px_80px_-20px_var(--glow)]">
                <div className="aspect-video overflow-hidden rounded-xl">
                  <img src={m.img} alt={m.t} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <p className="mt-6 font-serif text-sm italic text-primary">{m.y}</p>
                <h3 className="mt-1 font-display text-2xl tracking-tight">{m.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{m.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Growth() {
  const stats = [
    { n: "1.2M+", l: "Followers" },
    { n: "48M", l: "Monthly reach" },
    { n: "120+", l: "Performances" },
    { n: "27", l: "Brand collabs" },
  ];
  return (
    <section className="relative px-6 py-32">
      <div className="ambient-glow pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">— Growth</p>
          <h2 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
            An audience built on <span className="font-serif italic">honesty.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08}>
              <div className="bg-background/80 p-10">
                <p className="bg-gradient-to-br from-primary via-accent to-primary bg-clip-text font-display text-5xl text-transparent md:text-6xl">
                  {s.n}
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CinematicQuote() {
  return (
    <section className="relative px-6 py-44">
      <div className="ambient-glow pointer-events-none absolute inset-0 opacity-60" />
      <Reveal>
        <blockquote className="relative mx-auto max-w-5xl text-center">
          <p className="font-serif text-4xl italic leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-8xl">
            "I don't perform.
            <br />I let the silence
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              speak through me.
            </span>"
          </p>
          <p className="mt-10 text-xs uppercase tracking-[0.4em] text-muted-foreground">
            — Luna Aria
          </p>
        </blockquote>
      </Reveal>
    </section>
  );
}

function Reels() {
  const reels = [danceImg, singImg, guitarImg, stageImg, backstageOrPortrait(), portraitImg];
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-end justify-between">
            <h2 className="font-display text-5xl tracking-tight md:text-6xl">Featured reels</h2>
            <p className="text-sm text-muted-foreground">Hover to feel</p>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {reels.map((src, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="group relative aspect-[9/16] overflow-hidden rounded-2xl">
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-background/40 transition-opacity group-hover:bg-background/10" />
                <div className="absolute inset-0 grid place-items-center opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-white/20 backdrop-blur-md">
                    <Play size={16} fill="currentColor" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
function backstageOrPortrait() { return portraitImg; }

function CTA() {
  return (
    <section className="relative px-6 py-32">
      <Reveal>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-card via-background to-card p-12 text-center md:p-20">
          <div className="ambient-glow pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Collaborations</p>
            <h2 className="mt-6 font-display text-5xl leading-[1] tracking-tight md:text-7xl">
              Bring your brand into <span className="font-serif italic">the frame.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              I partner with brands who believe in storytelling that lingers.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-sm font-medium text-primary-foreground shadow-[0_0_60px_-10px_var(--glow)]"
            >
              Start the conversation →
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
