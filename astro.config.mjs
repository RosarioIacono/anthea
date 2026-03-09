// astro.config.mjs
// Astro's config is minimal — we just register the Tailwind integration.
// If you later add React components (e.g. for an interactive trial form),
// you'd add @astrojs/react here too.

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://anthea.netlify.app', // update once you have a custom domain
  integrations: [tailwind()],
});
