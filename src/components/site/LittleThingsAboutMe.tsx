import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { Music, Film, Zap, Heart, Guitar, Star } from "lucide-react";

export function LittleThingsAboutMe() {
  const things = [
    {
      title: "Favorite midnight song",
      content: "Weightless moments by the window",
      icon: Music,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Comfort movie",
      content: "Any film that feels like a dream",
      icon: Film,
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "Dream performance stage",
      content: "Intimate venues with honest crowds",
      icon: Zap,
      color: "from-purple-400 to-purple-500",
    },
    {
      title: "Favorite lyric",
      content: '"Everything changes, yet I remain myself"',
      icon: Heart,
      color: "from-pink-400 to-pink-500",
    },
    {
      title: "First guitar memory",
      content: "Hands too small, heart too full, spirit alive",
      icon: Guitar,
      color: "from-purple-600 to-pink-500",
    },
    {
      title: "Favorite artist",
      content: "Anyone who feels before they perform",
      icon: Star,
      color: "from-yellow-400 to-pink-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative px-4 py-20 sm:px-6 md:py-32 lg:py-44">
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            — Personal Notes
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Little things{" "}
            <span className="font-serif italic text-muted-foreground/70">that say everything.</span>
          </h2>
        </Reveal>

        <motion.div
          className="mt-12 sm:mt-20 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {things.map((thing, i) => {
            const Icon = thing.icon;
            return (
              <motion.div key={thing.title} variants={itemVariants} className="group relative">
                <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-8 backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:bg-white/12">
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${thing.color} opacity-5`}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className={`inline-flex rounded-lg bg-gradient-to-br ${thing.color} p-3 text-white shadow-lg`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Icon size={20} />
                    </motion.div>

                    {/* Title */}
                    <h3 className="mt-6 font-display text-lg tracking-tight text-white">
                      {thing.title}
                    </h3>

                    {/* Content */}
                    <p className="mt-3 font-serif italic text-muted-foreground leading-relaxed">
                      {thing.content}
                    </p>
                  </div>

                  {/* Floating particles on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                    initial={false}
                    whileHover={{
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 rounded-full bg-gradient-to-b ${thing.color}`}
                        initial={{
                          x: Math.random() * 100,
                          y: Math.random() * 100,
                          opacity: 0,
                        }}
                        animate={{
                          y: -50,
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.2,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
