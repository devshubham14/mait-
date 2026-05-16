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
import { CinematicTimeline } from "@/components/site/CinematicTimeline";
import { CreatorStatistics } from "@/components/site/CreatorStatistics";
import { SocialMediaSection } from "@/components/site/SocialMediaSection";
import { ContactSection } from "@/components/site/ContactSection";
import { NowPlayingWidget } from "@/components/site/NowPlayingWidget";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Tanusiya Choudhury — Singer, Dancer, Creator" },
      {
        name: "description",
        content:
          "Tanusiya Choudhury - Official artist portfolio. Singer, dancer, guitarist, and creator. State Level Orchestra Winner.",
      },
      { property: "og:title", content: "Tanusiya Choudhury — A Cinematic Creator Journey" },
      {
        property: "og:description",
        content: "Turning emotions into melodies, movement, and memories.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Home() {
  return (
    <PageTransition>
      <Hero />
      <NowPlayingWidget />
      <FeaturedMoments />
      <CinematicTimeline />
      <CreatorStatistics />
      <Growth />
      <CinematicQuote />
      <Reels />
      <SocialMediaSection />
      <ContactSection />
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
          alt="Tanusiya Choudhury on stage"
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
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24 md:pb-24 md:pt-32 md:justify-center"
      >
        <h1 className="font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-[7.5rem] lg:text-[9rem]">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            TANUSIYA
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="block font-serif italic text-glow bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
          >
            CHOUDHURY
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-3 inline-flex w-fit max-w-[95vw] flex-wrap items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[9px] uppercase tracking-[0.1em] backdrop-blur-md sm:mt-4 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.2em]"
        >
          Singer • Dancer • Guitarist • Creator
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-4 max-w-xl text-balance font-serif text-sm italic leading-relaxed text-muted-foreground sm:text-base md:mt-8 lg:text-xl"
        >
          "Turning emotions into melodies, movement, and memories."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:flex-wrap sm:gap-4 md:mt-10"
        >
          <Link
            to="/journey"
            className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-center text-sm font-medium text-primary-foreground shadow-[0_0_40px_-5px_var(--glow)] transition hover:shadow-[0_0_60px_-5px_var(--glow-pink)]"
          >
            Explore Journey →
          </Link>
          <Link
            to="/talents"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm backdrop-blur-md transition hover:border-primary/50 hover:bg-white/10"
          >
            <Play size={14} className="shrink-0" /> Watch Moments
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto rounded-full border border-white/10 px-6 py-3 text-center text-sm text-muted-foreground transition hover:border-white/30 hover:text-foreground"
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

function FeaturedMoments() {
  const moments = [
    {
      y: "2020",
      t: "State Orchestra Winner",
      d: "Achieved state level recognition in classical music.",
      img: guitarImg,
    },
    {
      y: "2023",
      t: "Creator Journey Begins",
      d: "Started sharing performances across social platforms.",
      img: stageImg,
    },
    {
      y: "2025",
      t: "Brand Collaborations",
      d: "Partnering with beauty, fashion and lifestyle brands.",
      img: portraitImg,
    },
  ];
  return (
    <section className="relative px-4 py-20 sm:px-6 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-4 items-start justify-between sm:flex-row sm:items-end sm:gap-6">
            <h2 className="max-w-3xl font-display text-3xl sm:text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Milestones that <span className="font-serif italic">matter.</span>
            </h2>
            <Link
              to="/journey"
              className="hidden whitespace-nowrap text-xs sm:text-sm text-muted-foreground hover:text-foreground md:block"
            >
              Full timeline →
            </Link>
          </div>
        </Reveal>
        <div className="mt-10 sm:mt-12 md:mt-16 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {moments.map((m, i) => (
            <Reveal key={m.t} delay={i * 0.1}>
              <article className="group glass relative overflow-hidden rounded-2xl sm:rounded-3xl p-4 sm:p-6 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_30px_80px_-20px_var(--glow)]">
                <div className="aspect-video overflow-hidden rounded-lg sm:rounded-xl">
                  <img
                    src={m.img}
                    alt={m.t}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <p className="mt-3 sm:mt-6 font-serif text-xs sm:text-sm italic text-primary">
                  {m.y}
                </p>
                <h3 className="mt-1 font-display text-lg sm:text-2xl tracking-tight">{m.t}</h3>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground">{m.d}</p>
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
    { n: "700+", l: "Instagram Followers" },
    { n: "220+", l: "YouTube Subscribers" },
    { n: "80+", l: "Videos Created" },
    { n: "1x", l: "State Orchestra Winner" },
  ];
  return (
    <section className="relative px-4 py-20 sm:px-6 sm:py-24 md:py-32 overflow-hidden">
      <div className="ambient-glow pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            — By The Numbers
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl sm:text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Growing through <span className="font-serif italic">authentic connection.</span>
          </h2>
        </Reveal>
        <div className="mt-10 sm:mt-12 md:mt-16 grid gap-px overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08}>
              <div className="bg-background/80 p-4 sm:p-6 md:p-10">
                <p className="bg-gradient-to-br from-primary via-accent to-primary bg-clip-text font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-transparent">
                  {s.n}
                </p>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {s.l}
                </p>
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
    <section className="relative px-4 py-20 sm:px-6 sm:py-32 md:py-44 overflow-hidden">
      <div className="ambient-glow pointer-events-none absolute inset-0 opacity-60" />
      <Reveal>
        <blockquote className="relative mx-auto max-w-5xl text-center">
          <p className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-7xl italic leading-[1.1] tracking-tight text-foreground">
            "I don't just perform.
            <br />I
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              create moments that linger.
            </span>
            "
          </p>
          <p className="mt-6 sm:mt-8 md:mt-10 text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-muted-foreground">
            — Tanusiya Choudhury
          </p>
        </blockquote>
      </Reveal>
    </section>
  );
}

function Reels() {
  const reels = [danceImg, singImg, guitarImg, stageImg, backstageOrPortrait(), portraitImg];
  return (
    <section className="relative px-4 py-20 sm:px-6 sm:py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-2 items-start justify-between sm:flex-row sm:items-end sm:gap-4">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
              Featured reels
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">Hover to feel</p>
          </div>
        </Reveal>
        <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-6">
          {reels.map((src, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="group relative aspect-[9/16] overflow-hidden rounded-xl sm:rounded-2xl">
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/40 transition-opacity group-hover:bg-background/10" />
                <div className="absolute inset-0 grid place-items-center opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="grid h-10 sm:h-12 w-10 sm:w-12 place-items-center rounded-full bg-white/20 backdrop-blur-md">
                    <Play size={14} fill="currentColor" className="sm:w-4 sm:h-4" />
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
function backstageOrPortrait() {
  return portraitImg;
}

function CTA() {
  return (
    <section className="relative px-4 py-20 sm:px-6 sm:py-24 md:py-32 overflow-hidden">
      <Reveal>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl sm:rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-card via-background to-card p-6 sm:p-10 md:p-20 text-center">
          <div className="ambient-glow pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-primary">
              Let's Collaborate
            </p>
            <h2 className="mt-4 sm:mt-6 font-display text-2xl sm:text-3xl md:text-5xl lg:text-7xl leading-[1] tracking-tight">
              Bring your vision to <span className="font-serif italic">the frame.</span>
            </h2>
            <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-xs sm:text-base text-muted-foreground">
              I partner with brands and creators who believe in storytelling that touches hearts and
              minds.
            </p>
            <Link
              to="/contact"
              className="mt-6 sm:mt-8 md:mt-10 inline-flex rounded-full bg-gradient-to-r from-primary to-accent px-5 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm font-medium text-primary-foreground shadow-[0_0_60px_-10px_var(--glow)]"
            >
              Start the conversation →
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
