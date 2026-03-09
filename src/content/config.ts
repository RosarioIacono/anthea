// src/content/config.ts
//
// This defines the schema (expected fields) for blog posts.
// Astro uses Zod for validation — if a .md file is missing
// a required field like `title` or `pubDate`, the build will
// error with a helpful message rather than silently failing.

import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),       // coerce handles both Date and string formats
    author: z.string().default('Anthea'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
