import { defineConfig } from 'astro/config';
// GitHub Pages project repo: SITE_URL=https://YOUR-ORG.github.io BASE_PATH=/icona-website
// GitHub Pages special root repo: SITE_URL=https://YOUR-ORG.github.io BASE_PATH=/
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.github.io',
  base: process.env.BASE_PATH || '/icona-website',
  output: 'static'
});
