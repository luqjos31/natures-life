// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      date: z.date(),
      description: z.string(),
      message: z.string(),
      author: z.string(),
      image: z.object({
        src: z.string(),
        alt: z.string()
      }),
      // tags: z.array(z.string()),
        category:z.string(),
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  blog: postsCollection,
};