import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  root: "src",
  test: {
    globals: true,
    css: true,
    environment: "jsdom",
    setupFiles: ["./tests/setupVitest.ts"],
    coverage: {
      provider: "v8"
    }
  },
  plugins: [react()]
});
