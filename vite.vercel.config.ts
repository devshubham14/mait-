// vite.vercel.config.ts
// Plain SPA build for Vercel — no TanStack Start SSR, no Cloudflare plugin.
// Used exclusively via vercel.json buildCommand.

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  // The SPA entry point — TanStack Router runs entirely client-side in this mode.
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
