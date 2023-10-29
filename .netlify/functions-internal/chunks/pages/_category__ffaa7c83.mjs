/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, g as addAttribute } from '../astro_07e878bc.mjs';
import { s as slugify, f as formatBlogPostsCollections, a as $$MainLayout } from './404_a1a2ee06.mjs';
import { g as getCollection, $ as $$PostCard } from './__3e38c182.mjs';
import 'clsx';
import 'html-escaper';
import 'svgo';
import '@astrojs/internal-helpers/path';

const $$Astro = createAstro("https://astro-blog-cip.netlify.app");
async function getStaticPaths() {
  return [
    {
      params: { category: slugify("Reference Docs") },
      props: { name: "Reference Docs" }
    },
    {
      params: { category: slugify("General") },
      props: { name: "General" }
    },
    {
      params: { category: slugify("CSS") },
      props: { name: "CSS" }
    },
    {
      params: { category: slugify("Astro") },
      props: { name: "Astro" }
    }
  ];
}
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { category } = Astro2.params;
  const { name } = Astro2.props;
  const allPosts = await getCollection("blog");
  const formattedPosts = formatBlogPostsCollections(allPosts, {
    sortByDate: true,
    filterOutDrafts: false
  });
  const catPost = formattedPosts.filter(
    (post) => slugify(post.data.category) === category
  );
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": name }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class=""${addAttribute(`Posts about ${name}`, "aria-label")}><h1 class="ml-14 mt-4 text-5xl font-extrabold dark:text-white">
Post about <span>${name}</span></h1><div class="mt-4 p-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">${catPost.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "frontmatter": post, "tagType": "h2" })}`)}</div></section>` })}`;
}, "/home/jose/astro-projects/natures-&-life/src/pages/category/[category].astro", void 0);

const $$file = "/home/jose/astro-projects/natures-&-life/src/pages/category/[category].astro";
const $$url = "/category/[category]";

export { $$category as default, $$file as file, getStaticPaths, $$url as url };
