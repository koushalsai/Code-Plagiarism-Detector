import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  // Set project root to the client directory
  root: fileURLToPath(new URL("./client", import.meta.url)),

  plugins: [
    react(),
    // Add any other plugins you need here
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./client/src", import.meta.url)),
      "@shared": fileURLToPath(new URL("./shared", import.meta.url)),
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },

  optimizeDeps: {
    include: ["lucide-react"],
  },

  build: {
    outDir: fileURLToPath(new URL("./dist/public", import.meta.url)), // Output goes to dist/public
    emptyOutDir: true,
  },
});
