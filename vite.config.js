import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [eslint()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/_main.scss" as *;`,
      },
    },
  },
});
