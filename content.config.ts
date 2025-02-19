import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({ 
    loader: glob({ pattern: "**/*.md", base: "/blogs" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string().optional(),
        cover: image().optional(),
        coverAlt: z.string().optional(),
        pubDate: z.date(),
    })
 });

export const collections = { blog };