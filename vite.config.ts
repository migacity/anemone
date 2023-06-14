/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  base: './',
  build: {
    assetsInlineLimit: 0,
  },
  assetsInclude: [
    '**/*.m4a',
  ],
});
