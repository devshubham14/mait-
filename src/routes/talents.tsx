import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Play, Mic, Music2, Disc3 } from "lucide-react";
import danceImg from "@/assets/dance.jpg";
import singImg from "@/assets/singing.jpg";
import guitarImg from "@/assets/guitar.jpg";
import stageImg from "@/assets/stage.jpg";
import studioImg from "@/assets/studio.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Particles } from "@/components/site/Particles";
import { PageTransition } from "@/components/site/PageTransition";

export const Route = createFileRoute("/talents")({
  component: Talents,
  head: () => ({
    meta: [
      { title: "Talents — Luna Aria" },
      { name: "description", content: "Dance, singing, and guitar — three disciplines, one cinematic voice." },
      { property: "og:title", content: "The Talents of Luna Aria" },
    ],
    links: [{ rel: "canonical", href: "/talents" }],
  }),
});

function Talents() {
  return (
    <PageTransition>
      <section className="relative px-6 pb-16 pt-40 md:pt-52">
        <Particles count={20} />
        <div className="mx-auto max-w-6xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Three disciplines, one voice</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 font-display text-6xl leading-[0.95] tracking-tight md:text-[8rem]">
              The <span className="font-serif italic">craft.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <TalentSection
        icon={<Disc3 size={20} />}
        eyebrow="01 — Dance"
        title="Body as a brushstroke."
        body="Contemporary, jazz, lyrical — every choreography is a sentence the body finishes for the music. Movement is where she stops thinking and starts feeling."
        img={danceImg}
      />
      <TalentSection
        icon={<Mic size={20} />}
        eyebrow="02 — Singing"
        title="Voice as a confession."
        body="A warm, smoky alto with a top range that breaks like glass and heals like a hum. Recorded analog, mixed with patience."
        img={singImg}
        reverse
        audio
      />
      <TalentSection
        icon={<Music2 size={20} />}
        eyebrow="03 — Guitar"
        title="Strings as a heartbeat."
        body="Acoustic fingerpicking with a soft folk core. Built her first songs alone in a room lit only by streetlight."
        img={guitarImg}
      />

      <section className="relative px-6 py-32">
        <Reveal>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10">
            <img src={stageImg} alt="Live performance" loading="lazy" className="h-[60vh] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-12">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">— Performances</p>
              <h2 className="mt-3 font-display text-5xl leading-[1] tracking-tight md:text-7xl">Live, in the room with you.</h2>
              <p className="mt-4 max-w-xl text-muted-foreground">120+ shows across intimate venues, festivals, and brand activations.</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 grid max-w-7xl gap-4 sm:grid-cols-2 md:grid-cols-4">
            {[stageImg, studioImg, danceImg, singImg].map((src, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden rounded-2xl">
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60 transition-opacity group-hover:opacity-30" />
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}

function TalentSection({
  icon, eyebrow, title, body, img, reverse, audio,
}: {
  icon: React.ReactNode; eyebrow: string; title: string; body: string; img: string; reverse?: boolean; audio?: boolean;
}) {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-20">
        <Reveal y={60} className={reverse ? "md:order-2" : ""}>
          <div className="group relative overflow-hidden rounded-3xl border border-white/10">
            <img src={img} alt={title} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            <button aria-label="Play" className="absolute bottom-6 right-6 grid h-14 w-14 place-items-center rounded-full bg-white/10 backdrop-blur-md transition hover:bg-primary/40">
              <Play size={18} fill="currentColor" />
            </button>
          </div>
        </Reveal>
        <Reveal y={60} delay={0.1}>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-primary">
              {icon} {eyebrow}
            </div>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
              {title.split(" ").slice(0, -1).join(" ")} <span className="font-serif italic">{title.split(" ").slice(-1)}</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{body}</p>
            {audio && <AudioWave />}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AudioWave() {
  return (
    <div className="mt-10 glass rounded-2xl p-5">
      <div className="flex items-center gap-4">
        <button className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
          <Play size={14} fill="currentColor" />
        </button>
        <div className="flex flex-1 items-center gap-1">
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.span
              key={i}
              animate={{ scaleY: [0.3, Math.random() * 1 + 0.3, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.04, ease: "easeInOut" }}
              className="h-8 w-0.5 origin-center rounded-full bg-gradient-to-t from-primary to-accent"
            />
          ))}
        </div>
        <span className="text-xs text-muted-foreground">2:14</span>
      </div>
    </div>
  );
}
