import swc from "@vitejs/plugin-react-swc";
import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [swc(), AutoImport({ imports: ["vitest"], dts: true })],
  test: {
    include: [
      "__tests__/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,mjsx,cjsx,tsx}",
    ],
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
    globals: true,
  },
});
