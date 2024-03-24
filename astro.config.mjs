import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import netlify from "@astrojs/netlify";
import alpinejs from "@astrojs/alpinejs";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://statosphere.netlify.app',
  integrations: [mdx(), sitemap(), alpinejs(), tailwind()],
  output: "server",
  adapter: netlify()
});