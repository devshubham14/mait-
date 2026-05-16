import { createFileRoute } from "@tanstack/react-router";
import { Download, Heart, Sparkles, Users } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageTransition } from "@/components/site/PageTransition";
import portraitImg from "@/assets/portrait-2.jpg";

export const Route = createFileRoute("/collaborations")({
  component: Collabs,
  head: () => ({
    meta: [
      { title: "Collaborations & Media Kit — Tanusiya Choudhury" },
      {
        name: "description",
        content:
          "Brand collaborations, audience analytics, and the media kit for creator and performer Tanusiya Choudhury.",
      },
      { property: "og:title", content: "Work with Tanusiya Choudhury" },
    ],
    links: [{ rel: "canonical", href: "/collaborations" }],
  }),
});

const brands = [
  { n: "Velvet Fashion", c: "Seasonal campaign" },
  { n: "Echo Studios", c: "Music production" },
  { n: "Zenith Tech", c: "Brand ambassador" },
  { n: "Aurora Acoustics", c: "Product feature" },
  { n: "Indie Nights Festival", c: "Performer" },
  { n: "Muse Records", c: "Artist partnership" },
];

const demographics = [
  { l: "18 — 24", v: 42 },
  { l: "25 — 34", v: 31 },
  { l: "35 — 44", v: 18 },
  { l: "45+", v: 9 },
];

const reach = [
  { l: "Engagement rate", v: "8.4%" },
  { l: "Monthly reach", v: "48M" },
  { l: "Story completion", v: "82%" },
  { l: "Save rate", v: "14%" },
];

function Collabs() {
  return (
    <PageTransition>
      <section className="relative px-6 pb-16 pt-40 md:pt-52">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-primary">For Brands & Partners</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-4xl sm:text-6xl leading-[0.95] tracking-tight md:text-[8rem]">
              The <span className="font-serif italic">media kit.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
              A growing community of creative, discerning listeners who connect deeply with
              authentic artistry. Below — the brands we've partnered with, the metrics, and what
              makes collaboration special.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stat strip */}
      <section className="relative px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {reach.map((r, i) => (
            <Reveal key={r.l} delay={i * 0.06}>
              <div className="bg-background/80 p-8">
                <p className="bg-gradient-to-br from-primary to-accent bg-clip-text font-display text-4xl text-transparent md:text-5xl">
                  {r.v}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {r.l}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Brand collaborations */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight md:text-6xl">
              Brand <span className="font-serif italic">collaborations.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((b, i) => (
              <Reveal key={b.n} delay={i * 0.06}>
                <div className="group glass overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{b.c}</p>
                  <p className="mt-3 font-display text-3xl tracking-tight">{b.n}</p>
                  <div className="mt-6 h-px w-12 bg-gradient-to-r from-primary to-transparent transition-all group-hover:w-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Demographics */}
      <section className="relative px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="glass rounded-3xl p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Audience demographics
              </p>
              <h3 className="mt-4 font-display text-3xl">Who's tuning in.</h3>
              <div className="mt-8 space-y-5">
                {demographics.map((d) => (
                  <div key={d.l}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span>{d.l}</span>
                      <span className="text-muted-foreground">{d.v}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent shadow-[0_0_20px_var(--glow)]"
                        style={{ width: `${d.v}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid h-full gap-6">
              {[
                { I: Heart, t: "Audience trust", d: "Comments read like letters." },
                {
                  I: Sparkles,
                  t: "Authentic storytelling",
                  d: "Every campaign feels like a film.",
                },
                { I: Users, t: "Engagement", d: "8.4% — three times the industry average." },
              ].map(({ I, t, d }) => (
                <div key={t} className="glass flex gap-4 rounded-2xl p-6">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 text-primary">
                    <I size={18} />
                  </div>
                  <div>
                    <p className="font-display text-lg">{t}</p>
                    <p className="text-sm text-muted-foreground">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Media kit CTA */}
      <section className="relative px-6 py-24">
        <Reveal>
          <div className="mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-card/50 p-8 md:grid-cols-[1.2fr_1fr] md:p-14">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-primary">Media Kit · 2026</p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl leading-[1.05] tracking-tight md:text-6xl">
                The full deck. <span className="font-serif italic">One PDF.</span>
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Collaboration rates, audience analytics, case studies, and everything you need to
                know about partnering with Tanusiya.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-medium text-primary-foreground"
                >
                  <Download size={14} /> Download media kit
                </a>
                <a
                  href="/contact"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm hover:border-primary/50"
                >
                  Pitch a campaign
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <img src={portraitImg} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
