import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({ 
    loader: glob({ pattern: "**/*.md", base: "./blog" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string().optional(),
        cover: image().optional(),
        coverAlt: z.string().optional(),
        pubDate: z.string().date(),
        draft: z.boolean().optional(),
    })
 });

 const project = defineCollection({ 
    loader: glob({ pattern: "**/*.md", base: "./project" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string().optional(),
        employer: z.string().optional(),
        teamsize: z.number().optional(),
        cover: image().optional(),
        technologies: z.array(z.string()).optional(),
        coverAlt: z.string().optional(),
        projectDate: z.string().date(),
        projectSpan: z.string(),
        draft: z.boolean().optional(),
    })
 });

export const collections = { blog, project };