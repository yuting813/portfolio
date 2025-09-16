import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "/protfolix/" : "/", // dev 用根目錄、prod 用子路徑
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    // minify: "terser",
  },
}));
