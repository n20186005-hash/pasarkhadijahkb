import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Tetapkan domain produksi di SATU tempat ini sahaja. Biarkan kosong sebelum domain tersedia.
const SITE = '';
const site = SITE.trim() || undefined;

export default defineConfig({
  site,
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
