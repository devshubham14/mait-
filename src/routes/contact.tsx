import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Youtube, Music2, Mail, Send } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Particles } from "@/components/site/Particles";
import { PageTransition } from "@/components/site/PageTransition";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Tanusiya Choudhury" },
      { name: "description", content: "Inquire about collaborations, performances, and media opportunities with Tanusiya Choudhury." },
      { property: "og:title", content: "Contact Tanusiya Choudhury" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  const [type, setType] = useState<"collab" | "booking">("collab");
  const [sent, setSent] = useState(false);
  return (
    <PageTransition>
      <section className="relative px-6 pb-16 pt-40 md:pt-52">
        <Particles count={35} />
        <div className="mx-auto max-w-6xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Let's create together</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight md:text-[9rem]">
              Send a <span className="font-serif italic">message.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Collaboration inquiries, performance bookings, brand partnerships, or just to say hello.
              Every message is read and responded to with care.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8 md:p-10"
            >
              <div className="ambient-glow pointer-events-none absolute inset-0 opacity-30" />
              <div className="relative">
                <div className="mb-8 flex flex-col sm:inline-flex sm:flex-row rounded-2xl sm:rounded-full border border-white/10 bg-white/5 p-1 gap-1">
                  {(["collab", "booking"] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setType(t)}
                      className={`rounded-xl sm:rounded-full px-3 sm:px-5 py-2 text-[10px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.2em] transition ${
                        type === t ? "bg-gradient-to-r from-primary to-accent text-primary-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {t === "collab" ? "Collaboration" : "Event Booking"}
                    </button>
                  ))}
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Your name" name="name" />
                  <Field label="Email" name="email" type="email" />
                  <Field label={type === "collab" ? "Brand / Company" : "Venue / Event"} name="org" />
                  <Field label={type === "collab" ? "Budget range" : "Event date"} name="meta" />
                </div>
                <div className="mt-5">
                  <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Tell me everything</label>
                  <textarea
                    rows={5}
                    placeholder="The vision, the vibe, the audience…"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-background/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:shadow-[0_0_30px_-10px_var(--glow)]"
                  />
                </div>
                <button
                  type="submit"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_0_40px_-5px_var(--glow)] transition hover:shadow-[0_0_60px_-5px_var(--glow-pink)]"
                >
                  {sent ? "Sent — talk soon ✦" : (<>Send the letter <Send size={14} className="transition-transform group-hover:translate-x-1" /></>)}
                </button>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="space-y-4">
              <div className="glass rounded-3xl p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Direct line</p>
                <a href="mailto:hello@tanusiyachoudhury.com" className="mt-3 flex items-center gap-2 sm:gap-3 font-display text-sm sm:text-xl lg:text-2xl break-all">
                  <Mail size={18} className="text-primary shrink-0" /> hello@tanusiyachoudhury.com
                </a>
              </div>
              <div className="glass rounded-3xl p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Follow the journey</p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { I: Instagram, l: "Instagram", h: "@tanusiyachoudhury" },
                    { I: Youtube, l: "YouTube", h: "@TanusiyaChoudhury" },
                    { I: Music2, l: "Spotify", h: "Tanusiya Choudhury" },
                    { I: Music2, l: "TikTok", h: "@tanusiyac" },
                  ].map(({ I, l, h }) => (
                    <a key={l} href="#" className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-4 transition hover:border-primary/40 hover:bg-primary/10">
                      <I size={16} className="text-primary" />
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{l}</p>
                        <p className="text-sm">{h}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="glass rounded-3xl p-6">
                <p className="font-serif text-xl italic leading-relaxed">"Every great collaboration starts with a conversation and a shared vision."</p>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <input
        type={type}
        name={name}
        className="mt-2 w-full rounded-xl border border-white/10 bg-background/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:shadow-[0_0_30px_-10px_var(--glow)]"
      />
    </label>
  );
}
