import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import childhoodImg from "@/assets/childhood.jpg";
import danceImg from "@/assets/dance.jpg";
import singImg from "@/assets/singing.jpg";
import guitarImg from "@/assets/guitar.jpg";
import stageImg from "@/assets/stage.jpg";
import portraitImg from "@/assets/portrait-2.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Particles } from "@/components/site/Particles";
import { PageTransition } from "@/components/site/PageTransition";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Luna Aria" },
      { name: "description", content: "A documentary chapter about Luna Aria — childhood dreams, the discovery of music and dance, and the artist she became." },
      { property: "og:title", content: "About Luna Aria" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const chapters = [
  {
    n: "01", title: "Childhood Dreams", img: childhoodImg,
    body: "Before stages, before screens — there was a small living room, a borrowed cassette, and a girl who twirled until the world blurred. Music was the only language that felt true."
  },
  {
    n: "02", title: "Discovering Music & Dance", img: danceImg,
    body: "At nine, a dance teacher told her she moved like a question. At eleven, she answered it on her first stage. The microphone followed at thirteen. The guitar — at fifteen, in a thunderstorm."
  },
  {
    n: "03", title: "Struggles & Growth", img: singImg,
    body: "Doors closed. Auditions ended in silence. She kept singing into them anyway. Every 'no' tightened a string until the sound finally rang true."
  },
  {
    n: "04", title: "Transformation", img: guitarImg,
    body: "The girl who whispered into mirrors started recording her own songs. Each upload an act of trust. The internet listened — quietly at first, and then all at once."
  },
  {
    n: "05", title: "Present Day", img: portraitImg,
    body: "Today she writes, performs, and films from a tiny studio drenched in pink light. The dream hasn't changed shape — just scale. The next chapter begins on the next stage."
  },
];

function About() {
  return (
    <PageTransition>
      <section className="relative px-6 pb-24 pt-40 md:pt-52">
        <Particles count={25} />
        <div className="relative mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-primary">A documentary in five chapters</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 font-display text-6xl leading-[0.95] tracking-tight md:text-[8rem]">
              The girl who became
              <br />
              <span className="font-serif italic text-glow bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                a frequency.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
              This isn't a biography. It's a film, paused between heartbeats — the small,
              cinematic moments that shaped a singer, dancer, and storyteller.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6">
        <div className="relative mx-auto max-w-7xl">
          {chapters.map((c, i) => (
            <Chapter key={c.n} chapter={c} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      <section className="relative px-6 py-32">
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Future</p>
            <h2 className="mt-6 font-serif text-4xl italic leading-[1.05] md:text-7xl">
              "The story is still being written —
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                and you are part of it now."
              </span>
            </h2>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}

function Chapter({ chapter, reverse }: { chapter: typeof chapters[0]; reverse: boolean }) {
  return (
    <div className="grid items-center gap-12 py-24 md:grid-cols-2 md:gap-20">
      <Reveal y={60} className={reverse ? "md:order-2" : ""}>
        <div className="group relative overflow-hidden rounded-3xl border border-white/10">
          <motion.img
            src={chapter.img}
            alt={chapter.title}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.2 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
        </div>
      </Reveal>
      <Reveal y={60} delay={0.1}>
        <div>
          <p className="font-serif text-6xl italic text-primary/70">{chapter.n}</p>
          <h3 className="mt-4 font-display text-4xl tracking-tight md:text-6xl">{chapter.title}</h3>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{chapter.body}</p>
        </div>
      </Reveal>
    </div>
  );
}
