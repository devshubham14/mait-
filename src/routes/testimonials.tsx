import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Particles } from "@/components/site/Particles";
import { PageTransition } from "@/components/site/PageTransition";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  component: Testimonials,
  head: () => ({
    meta: [
      { title: "Voices — Testimonials of Tanusiya Choudhury" },
      {
        name: "description",
        content:
          "What audiences, brands, and collaborators say about Tanusiya Choudhury's artistry and performances.",
      },
      { property: "og:title", content: "Voices — Tanusiya Choudhury" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
});

const quotes = [
  {
    q: "Tanusiya's performances are a masterclass in vulnerability. The audience doesn't just watch — they feel.",
    a: "Event Curator, Mumbai Performing Arts",
    r: "Brand",
  },
  {
    q: "Her ability to seamlessly blend dancing, singing, and guitar-playing in a single performance is rare. She's a complete artist.",
    a: "Music Producer, Echo Studios",
    r: "Collab",
  },
  {
    q: "Watched her cover and had to sit down. The guitar work, the vocals, the authenticity. Absolute magic.",
    a: "Rahul, listener from Delhi",
    r: "Fan",
  },
  {
    q: "She doesn't perform FOR the camera. She performs WITH the camera. That's what made our campaign so powerful.",
    a: "Creative Director, Velvet Fashion",
    r: "Brand",
  },
  {
    q: "Tanusiya brings a professionalism that's rare for her age. Prepared, collaborative, authentic. A dream to work with.",
    a: "Festival Organizer, Indie Nights",
    r: "Collab",
  },
  {
    q: "Your song helped me through my toughest year. The fact that you created it in your bedroom makes it even more special.",
    a: "Priya, listener from Bangalore",
    r: "Fan",
  },
  {
    q: "The engagement rates on her content are phenomenal, but what's more important is the loyalty. Her audience trusts her completely.",
    a: "Digital Marketing, Zenith Brands",
    r: "Brand",
  },
  {
    q: "Working with Tanusiya on our latest campaign was effortless. She understood our vision immediately and elevated it.",
    a: "Campaign Manager, Aurora Tech",
    r: "Collab",
  },
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
            <h1 className="mt-6 font-display text-4xl sm:text-6xl leading-[0.95] tracking-tight md:text-[8rem]">
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
              "{t.q.split(".")[0]}."{" "}
              <span className="ml-3 not-italic text-primary/70">— {t.a}</span>
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
                  <p className="mt-5 font-serif text-lg italic leading-relaxed text-foreground">
                    "{t.q}"
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-5">
                    <p className="text-sm text-muted-foreground">{t.a}</p>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary/80">
                      {t.r}
                    </span>
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
