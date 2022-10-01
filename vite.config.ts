/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  base: '/anemone/',
  build: {
    assetsInlineLimit: 0,
  },
});
