import { motion } from "framer-motion";
import { Instagram, Youtube, Mail, Heart } from "lucide-react";

export function PremiumFooter() {
  const socials = [
    {
      icon: Instagram,
      href: "https://instagram.com/tanusiyachoudhury_14",
      label: "Instagram",
    },
    {
      icon: Youtube,
      href: "https://youtube.com/@thetsverse",
      label: "YouTube",
    },
    {
      icon: Mail,
      href: "mailto:hello@tanusiyachoudhury.com",
      label: "Email",
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
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-black pointer-events-none" />

      {/* Ambient glow */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 via-transparent to-pink-600/10 blur-3xl" />
      </motion.div>

      <div className="relative z-10">
        {/* Main content section */}
        <div className="px-4 py-16 sm:px-6 sm:py-20 md:py-32">
          <div className="mx-auto max-w-5xl">
            {/* Inspirational quote */}
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="flex items-center justify-center mb-4 sm:mb-6"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart size={20} className="text-pink-400" />
              </motion.div>
              <blockquote className="max-w-3xl mx-auto">
                <motion.p
                  className="font-serif italic text-xl sm:text-2xl md:text-3xl leading-[1.4] text-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  "Thank you for being part of the journey."
                </motion.p>
                <motion.p
                  className="mt-3 sm:mt-4 text-xs uppercase tracking-widest text-muted-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  — Tanusiya Choudhury
                </motion.p>
              </blockquote>
            </motion.div>

            {/* Divider */}
            <motion.div
              className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-10 sm:mb-12"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />

            {/* Social links */}
            <motion.div
              className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    className="group relative"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="rounded-full border border-white/10 bg-white/5 p-2.5 sm:p-3 transition-all duration-300 hover:border-purple-500/50 hover:bg-white/10 backdrop-blur-sm">
                      <Icon
                        size={18}
                        className="sm:w-5 sm:h-5 text-muted-foreground group-hover:text-purple-400 transition"
                      />
                    </div>

                    {/* Hover glow */}
                    <motion.div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        boxShadow: "0 0 20px rgba(168,85,247,0.3)",
                      }}
                    />

                    {/* Tooltip */}
                    <motion.span
                      className="absolute top-full mt-2 text-xs text-muted-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0, y: -10 }}
                      whileHover={{ opacity: 1, y: 5 }}
                    >
                      {social.label}
                    </motion.span>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Contact info */}
            <motion.div
              className="text-center text-xs sm:text-sm text-muted-foreground space-y-1.5 sm:space-y-2 mb-10 sm:mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p>hello@tanusiyachoudhury.com</p>
              <p>8700916217</p>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="border-t border-white/5 px-4 sm:px-6 py-6 sm:py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-muted-foreground text-center md:text-left">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                © {new Date().getFullYear()} Tanusiya Choudhury. All stories reserved.
              </motion.p>

              <motion.div
                className="flex items-center justify-center gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <span>Crafted with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart size={12} className="text-pink-400" />
                </motion.div>
                <span>in Odia & Delhi</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
