import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Reveal } from "./Reveal";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !inView) {
        setInView(true);
      }
    });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [inView]);

  useEffect(() => {
    if (!inView) return;

    let current = 0;
    const increment = Math.ceil(end / 50);
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <p ref={ref} className="bg-gradient-to-br from-purple-400 via-pink-400 to-purple-500 bg-clip-text font-display text-5xl md:text-6xl text-transparent">
      {count}
      {suffix}
    </p>
  );
}

export function CreatorStatistics() {
  const stats = [
    {
      number: 700,
      suffix: "+",
      label: "Instagram Followers",
      description: "@tanusiyachoudhury_14",
      icon: "📸",
    },
    {
      number: 220,
      suffix: "+",
      label: "YouTube Subscribers",
      description: "The TSCverse",
      icon: "🎬",
    },
    {
      number: 80,
      suffix: "+",
      label: "Videos Created",
      description: "Stories worth sharing",
      icon: "🎥",
    },
    {
      number: 1,
      suffix: "x",
      label: "State Orchestra Winner",
      description: "Achievement unlocked",
      icon: "🏆",
    },
  ];

  return (
    <section className="relative px-4 py-20 sm:px-6 md:py-32 lg:py-44">
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-purple-600/10 via-transparent to-pink-600/10 blur-3xl opacity-50"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">— By The Numbers</p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight md:text-6xl">
            A creator{" "}
            <span className="font-serif italic text-muted-foreground/70">built on connection.</span>
          </h2>
        </Reveal>

        <div className="mt-12 sm:mt-20 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <motion.div
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-4 sm:p-8 backdrop-blur-md transition-all duration-500 hover:border-purple-500/30 hover:bg-white/12"
                whileHover={{ y: -8 }}
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-purple-600/10" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="text-2xl sm:text-3xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  >
                    {stat.icon}
                  </motion.div>

                  {/* Counter */}
                  <motion.div
                    className="mt-4 sm:mt-6"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </motion.div>

                  {/* Label */}
                  <motion.p
                    className="mt-2 sm:mt-3 font-semibold text-white text-xs sm:text-base"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    {stat.label}
                  </motion.p>

                  {/* Description */}
                  <motion.p
                    className="mt-1 sm:mt-2 font-serif italic text-muted-foreground text-xs"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    {stat.description}
                  </motion.p>
                </div>

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)",
                  }}
                />

                {/* Floating glow on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                  whileHover={{ opacity: [0, 0.2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10 blur-lg" />
                </motion.div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Bottom inspiring text */}
        <Reveal delay={0.5}>
          <motion.div className="mt-12 sm:mt-20 text-center">
            <motion.p
              className="max-w-3xl mx-auto font-serif italic text-base sm:text-lg text-muted-foreground leading-relaxed px-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              "Every number represents a connection, a moment shared, a story resonated. Thank you for being part of this journey."
            </motion.p>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
