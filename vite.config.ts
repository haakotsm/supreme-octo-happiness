import swc from "@vitejs/plugin-react-swc";
import path from "node:path";
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
  resolve: {
    alias: {
      "@": path.resolve(__dirname + "/src"),
      "@tests": path.resolve(__dirname + "/__tests__"),
      "@mocks": path.resolve(__dirname + "/mocks"),
      "@utils": path.resolve(__dirname + "/src/utils"),
      "@hooks": path.resolve(__dirname + "/src/hooks"),
      "@components": path.resolve(__dirname + "/src/components"),
      "@pages": path.resolve(__dirname + "/src/pages"),
      "@styles": path.resolve(__dirname + "/src/styles"),
      "@types": path.resolve(__dirname + "/src/types"),
    },
  },
});
