import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify: false,
    cssCodeSplit: false,
    base: "evaluation_sass",
  },
});