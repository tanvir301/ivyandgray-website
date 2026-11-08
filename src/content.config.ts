import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const md = (folder: string) => glob({ pattern: "**/*.md", base: `./src/content/${folder}` });

// One file per package, shown on the Services page and as a tile on the home page (`summary` is the tile text).
// Its photo is src/assets/packages/<file name>.jpg (or .png/.webp).
const packages = defineCollection({
  loader: md("packages"),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    summary: z.string(),
    // Whole dollars. Leave it out to show "Custom quote".
    startingPrice: z.number().optional(),
    includes: z.array(z.string()).default([]),
    // Optional list of the individual events a package covers, e.g. each function of the wedding week.
    functions: z.array(z.object({ name: z.string(), text: z.string() })).default([]),
  }),
});

// One file per gallery. Its photos are every image in src/assets/portfolio/<file name>/.
const portfolio = defineCollection({
  loader: md("portfolio"),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    description: z.string(),
  }),
});

const faq = defineCollection({
  loader: md("faq"),
  schema: z.object({
    question: z.string(),
    order: z.number(),
  }),
});

const testimonials = defineCollection({
  loader: md("testimonials"),
  schema: z.object({
    name: z.string(),
    event: z.string().optional(),
    // Set to false once it's a real quote you have permission to use.
    draft: z.boolean().default(false),
  }),
});

export const collections = { packages, portfolio, faq, testimonials };
