import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Particles } from "@/components/site/Particles";
import { PageTransition } from "@/components/site/PageTransition";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  component: Testimonials,
  head: () => ({
    meta: [
      { title: "Voices — Testimonials of Luna Aria" },
      { name: "description", content: "What audiences, brands and collaborators say about working with Luna Aria." },
      { property: "og:title", content: "Voices — Luna Aria" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
});

const quotes = [
  { q: "Luna's voice doesn't ask for attention — it earns it. Within ten seconds, the room rearranged itself around her.", a: "Editorial Director, Maison Verre", r: "Brand" },
  { q: "Working with Luna was the easiest brief we've ever shipped. She understood the campaign before we did.", a: "Creative Lead, Aurora Audio", r: "Brand" },
  { q: "I cried at the bridge. I'm not even sure why. Just: thank you for that song.", a: "Aria, listener from Lisbon", r: "Fan" },
  { q: "She brings the kind of presence you can't direct. You just press record and stay out of the way.", a: "Director, Velvet Hall", r: "Collab" },
  { q: "Honest, prepared, generous. Three things I rarely get from a single artist.", a: "Tour Manager, North Strings", r: "Collab" },
  { q: "Her covers got me through chemo. That's the truest sentence I've ever sent a stranger.", a: "Listener from Toronto", r: "Fan" },
  { q: "Luna's audience converts because they trust her. The numbers were simply the proof.", a: "Performance Marketing, Soft Static", r: "Brand" },
  { q: "First-take vocals. Of the song she'd never seen. We were stunned.", a: "Engineer, Studio 9", r: "Collab" },
];

function Testimonials() {
  return (
    <PageTransition>
      <section className="relative px-6 pb-16 pt-40 md:pt-52">
        <Particles count={20} />
        <div className="mx-auto max-w-6xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-primary">In their words</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-6xl leading-[0.95] tracking-tight md:text-[8rem]">
              <span className="font-serif italic">Voices</span> from the room.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Marquee strip */}
      <section className="relative my-12 overflow-hidden border-y border-white/5 py-8">
        <div className="flex animate-marquee whitespace-nowrap gap-16 [animation-duration:60s]">
          {[...quotes, ...quotes].map((t, i) => (
            <span key={i} className="font-serif text-2xl italic text-muted-foreground">
              "{t.q.split(".")[0]}." <span className="ml-3 not-italic text-primary/70">— {t.a}</span>
            </span>
          ))}
        </div>
      </section>

      <section className="relative px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((t, i) => (
            <Reveal key={i} delay={(i % 6) * 0.06}>
              <article
                className="glass group relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_30px_80px_-20px_var(--glow)]"
                style={{ transform: `translateY(${(i % 3) * 12}px)` }}
              >
                <div className="ambient-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-40" />
                <div className="relative">
                  <Quote size={28} className="text-primary/60" />
                  <p className="mt-5 font-serif text-lg italic leading-relaxed text-foreground">"{t.q}"</p>
                  <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-5">
                    <p className="text-sm text-muted-foreground">{t.a}</p>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary/80">{t.r}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
