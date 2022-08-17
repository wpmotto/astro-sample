import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	site: 'https://example.com',
	integrations: [
		mdx(),
		sitemap(),
		preact(),
		tailwind(),
	],
});
