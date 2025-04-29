/// <reference types="vitest" />
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    cache: false,
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
