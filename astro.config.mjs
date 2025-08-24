// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'de'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [react(), partytown({
    config: {
      forward: ['gtag']
    }
  })],
  vite: {
    plugins: [tailwindcss()]
  }
});