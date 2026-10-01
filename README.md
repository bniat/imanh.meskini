# imanh.meskini

Personal academic website of Iman Hasnaoui Meskini, built with [Astro](https://astro.build) on the
template of [javierparada.phd](https://github.com/otsobide/otsobide.github.io).

Live at <https://bniat.github.io/imanh.meskini/>.

## Development

```sh
npm install
npm run dev      # http://localhost:4321/imanh.meskini/
npm run build    # static output in dist/
npm run check    # type-check .astro and .ts files
```

## Content

- `src/data/site.ts`: name, description, contact, social links (ORCID, Scholar, LinkedIn… go in
  `socials`), navigation, and `cv`: the path of a PDF CV in `public/` (e.g. `/pdf/cv.pdf`); the
  download buttons stay hidden while it is `null`.
- `src/data/cv.ts`: CV sections (experience, education, awards, certifications, languages,
  research interests), shown on /cv in that order. Institution logos live in `src/assets/logos/`.
- `src/content/publications/*.md`: one file per publication (schema in `src/content.config.ts`).
  `type` is `journal`, `conference`, `national-conference` or `magazine`. Add `doi`, `url` or `pdf`
  to make the title and cover clickable. Covers/logos live in `src/assets/publications/`; square
  images are shown as logos and portrait ones as journal covers.
- `src/content/activities/*.md`: one file per activity (research stay, award, talk, conference…):
  `date` (`YYYY-MM-DD`, or `YYYY-MM` if the day doesn't matter), optional `endDate` for multi-day
  events, `category`, `summary` (one line for the home page), `location`, `links`, related
  `publications` (file names without `.md`), optional `image`; the body is the detailed text.
- `src/data/authors.ts`: how Iman appears in author lists (in bold) and ORCID iDs of co-authors.
- `src/assets/profile.jpg` (or `.png`/`.webp`): profile photo on the home page. Until there is
  one, a monogram with the initials is shown instead.

## Deployment

There is no custom domain: the site is a GitHub Pages project site served under
`/imanh.meskini/` (`site` and `base` in `astro.config.mjs`). Every push to `main` builds it with
GitHub Actions (`.github/workflows/deploy.yml`) and deploys `dist/` to Pages. For a custom domain
later, set `SITE_URL` and `BASE_PATH=/` in the build step and configure the domain in the repo's
Pages settings.

The share image `public/og.png` is rendered from `scripts/og-image.html` with
`npm run og:image` (needs a local Chrome/Chromium).
