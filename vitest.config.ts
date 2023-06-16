import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  root: "src",
  test: {
    globals: true,
    css: true,
    environment: "jsdom",
    setupFiles: ["./tests/setupVitest.ts"]
  }
});
