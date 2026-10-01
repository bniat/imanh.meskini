import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/*
 * Entries are addressed by file name (the collection id), e.g. "2025-ijis-digital-twin-communities":
 * it is the anchor on /publications and /activities, and how activities refer to papers.
 */

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: ({ image }) =>
    z.object({
      type: z.enum(['journal', 'conference', 'national-conference', 'magazine']),
      title: z.string(),
      /** English translation when the original title is in another language. */
      titleEn: z.string().optional(),
      authors: z.array(z.string()),
      venue: z.string(),
      details: z.string().optional(),
      year: z.number(),
      abbr: z.string().optional(),
      /** Journal cover, or conference/publisher logo (square images are shown as logos). */
      cover: image().optional(),
      jcr: z
        .object({
          quartile: z.string(),
          impactFactor: z.number(),
        })
        .optional(),
      doi: z.string().optional(),
      pdf: z.string().optional(),
      url: z.url().optional(),
      /** Conference or journal website. */
      venueUrl: z.url().optional(),
      /** Source code repository. */
      code: z.url().optional(),
      selected: z.boolean().default(false),
    }),
});

export const collections = { publications };
