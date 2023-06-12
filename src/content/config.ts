import {z, defineCollection, reference} from "astro:content";

const project = defineCollection({
    type: "content",
    schema: z.object({
        name: z.string(),
        summary: z.string(),
        techs: z.array(reference("tech")),
        githubLink: z.nullable(z.string().url())
    })
});

const tech = defineCollection({
    type: "data",
    schema: z.object({
        name: z.string(),
        description: z.string(),
        link: z.string().url()
    })
});

const job = defineCollection({
    type: "data",
    schema: z.object({
        company: z.string(),
        jobDescription: z.string(),
        startDate: z.string().datetime(),
        endDate: z.nullable(z.string().datetime()),
        tasks: z.array(z.string()),
        techs: z.array(reference("tech"))
    })
});

export const collections = {project, tech, job};
