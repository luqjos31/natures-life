import { defineConfig } from 'astro/config';
//import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-blog-cip.netlify.app',
  integrations: [sitemap(), tailwind()]
});