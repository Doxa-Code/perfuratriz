/// <reference types="vitest/config" />
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "node",
    cache: false,
    reporters: [
      "default",
      ["junit", { outputFile: "test-results/junit.xml" }],
    ],
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov", "json-summary"],
      reportsDirectory: "coverage",
      exclude: [
        "node_modules/",
        "test/",
        "src/**/*.test.ts",
        "src/**/*.spec.ts",
      ],
    },
  },
});
