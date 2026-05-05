// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://code-pioneers.github.io',
  base: '/tvd-elektro',
  vite: {
    plugins: [tailwindcss()],
  },
});
