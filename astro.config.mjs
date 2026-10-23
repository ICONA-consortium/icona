import { defineConfig } from 'astro/config';
// GitHub Pages project repo: SITE_URL=https://icona-consortium.github.io BASE_PATH=/icona
// GitHub Pages special root repo: SITE_URL=https://icona-consortium.github.io BASE_PATH=/
export default defineConfig({
  site: process.env.SITE_URL || 'https://icona-consortium.github.io',
  base: process.env.BASE_PATH || '/icona',
  output: 'static'
});
