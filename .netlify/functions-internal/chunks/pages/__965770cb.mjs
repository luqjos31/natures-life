/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as renderComponent, F as Fragment } from '../astro_07e878bc.mjs';
import 'clsx';
import { f as formatBlogPostsCollections, a as $$MainLayout } from './404_a1a2ee06.mjs';
import { g as getCollection, $ as $$PostCard } from './__3e38c182.mjs';
import 'html-escaper';
import 'svgo';
import '@astrojs/internal-helpers/path';

const $$Astro$1 = createAstro("https://astro-blog-cip.netlify.app");
const $$Pagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { prevUrl, nextUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Blog pages"><div class="flex justify-center pb-8"><!-- Previous Button -->${prevUrl && renderTemplate`<a${addAttribute(prevUrl, "href")} class="flex items-center px-4 h-10 mr-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><svg class="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"></path></svg>
Previous
</a>`}${nextUrl && renderTemplate`<a${addAttribute(nextUrl, "href")} class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
Next
<svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg></a>`}</div></nav><!-- <nav aria-label="Blog pages">
  {
  prevUrl && (<Link
  text = "Previous",
  href={prevUrl},
  style="primary",
  borderVisible = {true},
  isFilled = {false},
  icon={{
    name : "heroicons-outline:arrow-sm-left",
    side: "left"
  }}
  />)}
  {
  nextUrl && (<Link
  text = "Next",
  href={nextUrl},
  style="primary",
  borderVisible = {true},
  isFilled = {false},
  icon={{
    name : "heroicons-outline:arrow-sm-right",
    side: "right"
  }}
  />)}
</nav> -->`;
}, "/home/jose/astro-projects/natures-&-life/src/components/Pagination.astro", void 0);

const $$Astro = createAstro("https://astro-blog-cip.netlify.app");
async function getStaticPaths({ paginate }) {
  const allPosts = await getCollection("blog");
  const formattedPosts = formatBlogPostsCollections(allPosts, {
    sortByDate: true,
    filterOutDrafts: false
  });
  return paginate(formattedPosts, {
    pageSize: 3
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="" aria-label="New Blog Posts"><h2 class="text-center mt-4 pt-8 text-5xl font-extrabold dark:text-white">
New Blog Posts
</h2><div class="mt-4 p-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">${page.data.map((post) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "PostCard", $$PostCard, { "frontmatter": post, "tagType": "h3" })}` })}`)}</div>${renderComponent($$result2, "Pagination", $$Pagination, { "nextUrl": page.url.next, "prevUrl": page.url.prev })}<!-- <h1>Page {page.currentPage}</h1>
    <ul>
      {page.data.map(({ title }) => <li>title</li>)}
    </ul>
    {page.url.prev ? <a href={page.url.prev}>Previous</a> : null}
    {page.url.next ? <a href={page.url.next}>Next</a> : null} --></section>` })}`;
}, "/home/jose/astro-projects/natures-&-life/src/pages/blog/page/[...page].astro", void 0);

const $$file = "/home/jose/astro-projects/natures-&-life/src/pages/blog/page/[...page].astro";
const $$url = "/blog/page/[...page]";

export { $$ as default, $$file as file, getStaticPaths, $$url as url };
