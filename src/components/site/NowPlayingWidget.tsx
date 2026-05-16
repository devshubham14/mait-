import { motion } from "framer-motion";
import { Music } from "lucide-react";

export function NowPlayingWidget() {
  return (
    <motion.div
      className="hidden md:fixed md:bottom-6 md:right-6 z-40 pointer-events-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ y: -5 }}
    >
      <div className="group relative overflow-hidden rounded-lg sm:rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-3 sm:p-4 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.2)]"> 
        {/* Animated background gradient */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 blur-xl" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-3">
            {/* Animated music icon */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-2"
            >
              <Music size={14} className="sm:w-4 sm:h-4 text-purple-300" />
            </motion.div>

            {/* Text content */}
            <div>
              <motion.p
                className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                🎵 Now Playing
              </motion.p>
              <motion.p
                className="mt-1 text-xs sm:text-sm font-light text-gray-400 max-w-[120px] sm:max-w-[180px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Midnight thoughts & guitar strings
              </motion.p>
            </div>
          </div>

          {/* Pulse animation indicator */}
          <motion.div
            className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/5"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-purple-400 to-pink-400"
              animate={{ x: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: "30%" }}
            />
          </motion.div>
        </div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-lg sm:rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            boxShadow: "inset 0 0 20px rgba(168,85,247,0.1)",
          }}
        />
      </div>
    </motion.div>
  );
}
