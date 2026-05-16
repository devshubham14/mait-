import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CinematicLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2800); // 2s delay + 0.8s animation

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
    >
      {/* Purple glow backdrop */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-transparent to-pink-600/20 blur-3xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Animated circles background */}
          <div className="relative mx-auto mb-12 h-20 w-20">
            <motion.div
              className="absolute inset-0 rounded-full border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-pink-500/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-2 rounded-full border border-pink-500/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
            </motion.div>
          </div>

          {/* Main heading */}
          <motion.h1
            className="font-display text-4xl md:text-5xl tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            TANUSIYA CHOUDHURY
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-4 text-sm md:text-base tracking-widest text-gray-300 uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Singer • Dancer • Guitarist • Creator
          </motion.p>

          {/* Animated line */}
          <motion.div
            className="mx-auto mt-8 h-px w-16 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          />

          {/* Loading indicator */}
          <motion.div
            className="mt-8 flex justify-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="h-1 w-1 rounded-full bg-purple-400"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Fade out text at bottom */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <motion.p
          className="text-xs text-gray-400 tracking-[0.2em] uppercase"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Entering the journey...
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
