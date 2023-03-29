import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue()],
  site: 'https://notenentwickler.com',
  server: { port: 3000},
  //output: 'server'
});