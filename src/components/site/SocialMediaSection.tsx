import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { ExternalLink, Music, Camera, Zap } from "lucide-react";

export function SocialMediaSection() {
  const platforms = [
    {
      name: "Instagram",
      handle: "@tanusiyachoudhury_14",
      count: "700+ Followers",
      description: "Main creative space. Stories, reels, and daily moments.",
      url: "https://instagram.com/tanusiyachoudhury_14",
      icon: Camera,
      gradient: "from-purple-500 to-pink-500",
      color: "text-purple-400",
    },
    {
      name: "UGC Creator",
      handle: "@thetsccreator_",
      count: "Growing Creator Account",
      description: "User-Generated Content and brand collaborations.",
      url: "https://instagram.com/thetsccreator_",
      icon: Zap,
      gradient: "from-pink-500 to-rose-500",
      color: "text-pink-400",
    },
    {
      name: "YouTube",
      handle: "The TSCverse",
      count: "220+ Subscribers",
      description: "80+ videos of performances, covers, and vlogs.",
      url: "https://youtube.com/@thetsverse",
      icon: Music,
      gradient: "from-red-500 to-pink-500",
      color: "text-red-400",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative px-4 py-20 sm:px-6 md:py-32 lg:py-44">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-bl from-pink-600/20 to-transparent blur-3xl opacity-40"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-t from-purple-600/20 to-transparent blur-3xl opacity-40"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">— Connect With Me</p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight md:text-6xl">
            Follow the{" "}
            <span className="font-serif italic text-muted-foreground/70">
              creative journey.
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Connect across platforms to stay updated with performances, vlogs, behind-the-scenes content, and creative collaborations.
          </p>
        </Reveal>

        <motion.div
          className="mt-12 sm:mt-20 grid gap-4 sm:gap-6 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {platforms.map((platform, i) => {
            const Icon = platform.icon;
            return (
              <motion.div
                key={platform.name}
                variants={itemVariants}
                className="group relative"
              >
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-8 backdrop-blur-md transition-all duration-500 hover:border-white/30 hover:bg-white/12 cursor-pointer">
                    {/* Animated gradient background on hover */}
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-5`} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon with glow */}
                      <motion.div
                        className={`inline-flex rounded-lg bg-gradient-to-br ${platform.gradient} p-4 text-white shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Icon size={24} />
                      </motion.div>

                      {/* Platform name */}
                      <h3 className="mt-6 font-display text-2xl tracking-tight text-white">
                        {platform.name}
                      </h3>

                      {/* Handle */}
                      <p className={`mt-2 text-sm font-semibold ${platform.color}`}>
                        {platform.handle}
                      </p>

                      {/* Follower count */}
                      <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                        {platform.count}
                      </p>

                      {/* Description */}
                      <p className="mt-4 font-serif italic text-muted-foreground leading-relaxed">
                        {platform.description}
                      </p>

                      {/* CTA with icon */}
                      <motion.div
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-white transition-colors"
                        whileHover={{ gap: "12px" }}
                      >
                        Visit
                        <motion.div
                          whileHover={{ x: 4 }}
                          transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                          <ExternalLink size={14} />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Shine effect on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                      }}
                    />

                    {/* Border glow on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        boxShadow: `inset 0 0 20px rgba(168,85,247,0.2)`,
                      }}
                    />
                  </div>
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <Reveal delay={0.4}>
          <motion.div className="mt-20 text-center">
            <motion.p
              className="text-muted-foreground mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Ready to collaborate? Let's create something amazing together.
            </motion.p>
            <motion.a
              href="mailto:hello@tanusiyachoudhury.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 font-medium text-white shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
