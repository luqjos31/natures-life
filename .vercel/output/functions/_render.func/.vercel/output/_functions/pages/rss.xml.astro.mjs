import rss from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_kqV58uhg.mjs';
import { f as formatBlogPostsCollections } from '../chunks/utils_CRpJiEzF.mjs';
export { renderers } from '../renderers.mjs';

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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
