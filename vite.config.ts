import react from "@vitejs/plugin-react";
import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), AutoImport({ imports: ["vitest"], dts: true })],
  test: {
    include: [
      "__tests__/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,mjsx,cjsx,tsx}",
    ],
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
    globals: true,
  },
});
