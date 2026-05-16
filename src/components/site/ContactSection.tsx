import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { Mail, Phone, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send to a backend or email service
    console.log("Form submitted:", formState);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@tanusiyachoudhury.com",
      href: "mailto:hello@tanusiyachoudhury.com",
      description: "For collaborations & inquiries",
    },
    {
      icon: Phone,
      label: "Business Contact",
      value: "8700916217",
      href: "tel:8700916217",
      description: "For professional opportunities",
    },
    {
      icon: MessageSquare,
      label: "Social Media",
      value: "DM on Instagram",
      href: "https://instagram.com/tanusiyachoudhury_14",
      description: "Quick questions & ideas",
    },
  ];

  return (
    <section className="relative px-4 py-20 sm:px-6 md:py-32 lg:py-44">
      {/* Dark background with glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-purple-600/10 via-black to-pink-600/10"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl opacity-40"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="mx-auto max-w-5xl relative z-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground text-center">
            — Let's Connect
          </p>
          <h2 className="mt-4 max-w-3xl mx-auto font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight text-center md:text-6xl">
            Ready for{" "}
            <span className="font-serif italic text-muted-foreground/70">collaboration?</span>
          </h2>
          <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-center text-base sm:text-lg text-muted-foreground leading-relaxed">
            Whether it's a brand partnership, performance opportunity, or just to say hello — I'd
            love to hear from you.
          </p>
        </Reveal>

        {/* Contact methods grid */}
        <motion.div
          className="mt-12 sm:mt-16 grid gap-4 sm:gap-6 md:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        >
          {contactMethods.map((method, i) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-6 backdrop-blur-md transition-all duration-500 hover:border-purple-500/30 hover:bg-white/12">
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-purple-600/10" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      className="inline-flex rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-3 text-white"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Icon size={20} />
                    </motion.div>
                    <h3 className="mt-4 font-semibold text-white">{method.label}</h3>
                    <p className="mt-2 font-mono text-sm text-purple-400 break-all">
                      {method.value}
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">{method.description}</p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Contact form */}
        <Reveal delay={0.3}>
          <motion.div
            className="mt-12 sm:mt-20 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-6 sm:p-8 md:p-12 backdrop-blur-md"
            whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
          >
            {/* Hover gradient background */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-pink-600/5 to-purple-600/5" />
            </div>

            <div className="relative z-10">
              <h3 className="font-display text-2xl sm:text-3xl tracking-tight text-white mb-2">
                Send a message
              </h3>
              <p className="text-xs sm:text-base text-muted-foreground mb-6 sm:mb-8">
                Fill in the form below and I'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-xs sm:text-sm font-medium text-white mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 sm:px-4 py-2.5 sm:py-3 text-white placeholder:text-muted-foreground focus:border-purple-500/50 focus:bg-white/10 focus:outline-none transition backdrop-blur-sm text-sm"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                >
                  <label className="block text-xs sm:text-sm font-medium text-white mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 sm:px-4 py-2.5 sm:py-3 text-white placeholder:text-muted-foreground focus:border-purple-500/50 focus:bg-white/10 focus:outline-none transition backdrop-blur-sm text-sm"
                    placeholder="your@email.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-xs sm:text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 sm:px-4 py-2.5 sm:py-3 text-white placeholder:text-muted-foreground focus:border-purple-500/50 focus:bg-white/10 focus:outline-none transition backdrop-blur-sm resize-none text-sm"
                    placeholder="Tell me about your collaboration idea..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-6 sm:px-8 py-2.5 sm:py-3 font-medium text-sm sm:text-base text-white shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                >
                  <motion.div
                    className="flex items-center justify-center gap-2"
                    animate={submitted ? { x: 0 } : { x: 0 }}
                  >
                    {submitted ? (
                      <>
                        <span>✓ Message sent!</span>
                      </>
                    ) : (
                      <>
                        Send Message
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <Send size={16} />
                        </motion.div>
                      </>
                    )}
                  </motion.div>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
