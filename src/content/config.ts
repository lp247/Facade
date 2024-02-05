import {z, defineCollection, reference} from "astro:content";

const project = defineCollection({
    type: "content",
    schema: z.object({
        name: z.string(),
        headline: z.string(),
        summary: z.string(),
        techs: z.array(reference("tech")),
        github: z.optional(z.string().url()),
        webpage: z.optional(z.string().url()),
        year: z.number(),
        status: z.enum(["In Progress", "Finished", "On Hold", "Planned"])
    })
});

const tech = defineCollection({
    type: "data",
    schema: z.object({
        name: z.string(),
        description: z.string(),
        website: z.optional(z.string().url()),
        github: z.optional(z.string().url()),
        wikipedia: z.optional(z.string().url())
    })
});

const job = defineCollection({
    type: "content",
    schema: z.object({
        company: z.string(),
        location: z.string(),
        jobDescription: z.string(),
        startDate: z.date(),
        endDate: z.nullable(z.date()),
        techs: z.array(reference("tech"))
    })
});

const socials = defineCollection({
    type: "data",
    schema: z.object({
        name: z.string(),
        link: z.string().url(),
        svgLogo: z.object({
            d: z.string(),
            viewBox: z.string(),
        }),
    }),
});

export const collections = {project, tech, job, socials};
