import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { formatBlogPostsCollections } from '../js/utils';

 export async function GET(context) {
   const allPosts = await getCollection('blog');

const formattedPosts = formatBlogPostsCollections(allPosts, {
  sortByDate: true,
  filterOutDrafts: false,
});

   return rss({
      // ex. use your stylesheet from "public/rss/styles.xsl"
     stylesheet: '/rss/styles.xsl',
     title: 'Natures Life',
     description: 'Productos naturales al siguiente nivel',
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