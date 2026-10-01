// @ts-check
import { defineConfig } from 'astro/config';

// No custom domain: deployed as a GitHub Pages project site at
// https://bniat.github.io/imanh.meskini/. SITE_URL / BASE_PATH can override these
// (e.g. for a custom domain later: SITE_URL=https://example.com BASE_PATH=/).
const site = process.env.SITE_URL ?? 'https://bniat.github.io';
const base = process.env.BASE_PATH ?? '/imanh.meskini';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
});
