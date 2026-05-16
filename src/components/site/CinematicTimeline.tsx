import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { Sparkles } from "lucide-react";

export function CinematicTimeline() {
  const milestones = [
    {
      year: "2010",
      title: "Discovering Dance",
      description: "First footsteps into rhythm and movement.",
      icon: "🎭",
    },
    {
      year: "2012",
      title: "Learning Singing",
      description: "Voice finding its first pure note.",
      icon: "🎤",
    },
    {
      year: "2014",
      title: "First Guitar",
      description: "Fingers learning to speak through strings.",
      icon: "🎸",
    },
    {
      year: "2020",
      title: "Orchestra Winner",
      description: "State Level Orchestra Achievement",
      icon: "🏆",
    },
    {
      year: "2021",
      title: "Social Media Journey",
      description: "Taking stories to the digital stage.",
      icon: "📱",
    },
    {
      year: "2023",
      title: "First Collaborations",
      description: "Creating magic with fellow artists.",
      icon: "✨",
    },
    {
      year: "2025",
      title: "Growing Audience",
      description: "Building a community of dreamers.",
      icon: "👥",
    },
  ];

  return (
    <section className="relative px-4 py-20 sm:px-6 md:py-32 lg:py-44">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute left-0 top-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-purple-600/20 to-transparent blur-3xl opacity-30"
          animate={{
            x: [-100, 0, -100],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-0 bottom-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-l from-pink-600/20 to-transparent blur-3xl opacity-30"
          animate={{
            x: [100, 0, 100],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">— The Journey</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight md:text-6xl">
            A timeline of{" "}
            <span className="font-serif italic text-muted-foreground/70">becoming.</span>
          </h2>
        </Reveal>

        <div className="mt-12 sm:mt-20 space-y-8 sm:space-y-12">
          {milestones.map((milestone, i) => (
            <Reveal key={milestone.year} delay={i * 0.08}>
              <motion.div
                className="group relative"
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="flex items-start gap-3 sm:gap-6 md:gap-10">
                  {/* Timeline point */}
                  <div className="relative flex flex-col items-center flex-shrink-0">
                    {/* Line to next */}
                    {i !== milestones.length - 1 && (
                      <div className="absolute top-16 sm:top-20 md:top-24 left-1/2 -translate-x-1/2 w-0.5 h-24 sm:h-32 md:h-40 bg-gradient-to-b from-purple-500/50 to-pink-500/50 opacity-30" />
                    )}

                    {/* Dot with glow */}
                    <motion.div
                      className="relative z-10"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-purple-500/50 bg-gradient-to-br from-purple-600/30 to-pink-600/30 flex items-center justify-center text-lg sm:text-xl backdrop-blur-sm flex-shrink-0">
                        {milestone.icon}
                      </div>

                      {/* Pulse glow */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-purple-400/20"
                        animate={{
                          scale: [1, 1.4, 1.6],
                          opacity: [0.8, 0.4, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 pt-1 sm:pt-2 pb-6 sm:pb-8">
                    <motion.div
                      className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-4 sm:p-6 backdrop-blur-md transition-all duration-500 hover:border-purple-500/30 hover:bg-white/12 group"
                      whileHover={{ y: -4 }}
                    >
                      {/* Hover gradient background */}
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-purple-600/10" />
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <motion.p
                          className="text-xs sm:text-sm font-semibold uppercase tracking-wider sm:tracking-widest text-purple-400"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                        >
                          {milestone.year}
                        </motion.p>
                        <h3 className="mt-2 sm:mt-3 font-display text-lg sm:text-2xl tracking-tight text-white">
                          {milestone.title}
                        </h3>
                        <p className="mt-1 sm:mt-2 font-serif italic text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>

                      {/* Shine effect on hover */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}

          {/* Final message */}
          <Reveal delay={milestones.length * 0.08 + 0.1}>
            <motion.div className="mt-12 text-center">
              <motion.div
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-md"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles size={16} className="text-purple-400" />
                <p className="text-sm text-muted-foreground">
                  The journey continues...
                </p>
              </motion.div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
