import rss from '@astrojs/rss';
import { g as getCollection } from './__3e38c182.mjs';
import { f as formatBlogPostsCollections } from './404_a1a2ee06.mjs';
/* empty css                           */import '../astro_07e878bc.mjs';
import 'clsx';
import 'html-escaper';
import '@astrojs/internal-helpers/path';
import 'svgo';

async function GET(context) {
   const allPosts = await getCollection('blog');

const formattedPosts = formatBlogPostsCollections(allPosts, {
  sortByDate: true,
  filterOutDrafts: false,
});

   return rss({
      // ex. use your stylesheet from "public/rss/styles.xsl"
     stylesheet: '/rss/styles.xsl',
     title: 'Astro blog',
     description: 'A humble Astronaut’s guide to the stars',
     site: context.site,
     items: formattedPosts.map((post) => ({
       title: post.data.title,
       pubDate: post.data.date,
       description: post.data.description,
       author: post.data.author,
      //  customData: post.data.customData,
       // Compute RSS link from post `slug`
       // This example assumes all posts are rendered as `/blog/[slug]` routes
       link: `./blog/${post.slug}/`,
     })),
   });
 }

export { GET };
