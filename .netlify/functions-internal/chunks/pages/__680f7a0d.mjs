/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as renderComponent, j as renderSlot } from '../astro_07e878bc.mjs';
import 'clsx';
/* empty css                            */import { g as getCollection } from './__3e38c182.mjs';
import { s as slugify, b as formatDate, f as formatBlogPostsCollections, a as $$MainLayout } from './404_a1a2ee06.mjs';
import 'html-escaper';
import '@astrojs/internal-helpers/path';
import 'svgo';

const $$Astro$4 = createAstro("https://astro-blog-cip.netlify.app");
const $$PostHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$PostHeader;
  const { title, date, category, author, image, image2 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header><div class="mt-4"><small class="block text-center"><a${addAttribute(`/category/${slugify(category)}/`, "href")} class="text-white bg-slate-950 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-2 py-2 mr-2 mb-2 dark:bg-black dark:hover:bg-slate-950 focus:outline-none dark:focus:ring-blue-800 mt-4">${category}</a></small><h1 class="text-4xl font-bold dark:text-white text-center mt-4">${title}</h1><p class="text-center">
by <a${addAttribute(`/author/${slugify(author)}/`, "href")}>${author}</a> - ${formatDate(date)}</p></div><img class="mt-4 mx-auto"${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")}></header>`;
}, "/home/jose/astro-projects/natures-&-life/src/components/PostHeader.astro", void 0);

const $$Astro$3 = createAstro("https://astro-blog-cip.netlify.app");
const $$CategoryCloud = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CategoryCloud;
  const allPosts = await getCollection("blog");
  const formattedPosts = formatBlogPostsCollections(allPosts);
  const allCategories = formattedPosts.map((cat) => cat.data.category.toLowerCase()).flat();
  console.log(allCategories);
  const processedCats = allCategories.reduce((acc, category) => {
    const value = acc[category] || 0;
    return { ...acc, [category]: value + 1 };
  }, {});
  const { showCount } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="">${Object.entries(processedCats).map(([key, val]) => renderTemplate`<li class="inline-flex"><a class="ext-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"${addAttribute(`/category/${slugify(key)}/`, "href")}>${key}${showCount && `(${val})`}</a></li>`)}</ul>`;
}, "/home/jose/astro-projects/natures-&-life/src/components/CategoryCloud.astro", void 0);

const $$Astro$2 = createAstro("https://astro-blog-cip.netlify.app");
const $$RelatedPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$RelatedPosts;
  const { relatedPosts } = Astro2.props;
  return renderTemplate`${relatedPosts.map((post) => renderTemplate`${maybeRenderHead()}<div class="post"><h3 class="text-2xl font-bold dark:text-white"><a class="link text-blue-light"${addAttribute(`/blog/${post.slug}`, "href")}>${post.data.title}</a></h3><small><a${addAttribute(`/author/${slugify(post.data.author)}/`, "href")}>${post.data.author}</a>${" "}
- ${formatDate(post.data.date)}</small></div>`)}`;
}, "/home/jose/astro-projects/natures-&-life/src/components/RelatedPosts.astro", void 0);

const $$Astro$1 = createAstro("https://astro-blog-cip.netlify.app");
const $$BlogPostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPostLayout;
  const allPosts = await getCollection("blog");
  const formattedPosts = formatBlogPostsCollections(allPosts, {
    sortByDate: false
  });
  const { frontmatter, url } = Astro2.props;
  const { title, description, date, category, image, image2, author } = frontmatter;
  const relatedPosts = formattedPosts.filter(
    (post) => post.data.category.toLowerCase() === category.toLowerCase() && post.data.title !== title
  );
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "description": description, "image": image, "frontmatter": frontmatter, "robots": frontmatter.robots }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PostHeader", $$PostHeader, { "title": title, "description": description, "date": date, "category": category, "image": image, "image2": image2, "author": author })}${maybeRenderHead()}<div class="mx-auto"><div class="mt-4 p-8 grid grid-cols-1 gap-6 md:grid-cols-3"><div class="mt-4 w-full col-span-2">${renderSlot($$result2, $$slots["default"])}</div><div class="sidebar w-full"><aside class="container" aria-label="Blog Categories"><h2 class="text-3xl font-bold dark:text-white-light mt-4">
Categorías
</h2>${renderComponent($$result2, "CategoryCloud", $$CategoryCloud, {})}</aside>${relatedPosts.length > 0 && renderTemplate`<aside class="container" aria-label="Related posts"><h2 class="text-3xl font-bold dark:text-white-light mt-4 ml-6">
Related Posts
</h2>${renderComponent($$result2, "RelatedPosts", $$RelatedPosts, { "relatedPosts": relatedPosts })}</aside>`}</div></div></div>` })}`;
}, "/home/jose/astro-projects/natures-&-life/src/layouts/BlogPostLayout.astro", void 0);

const $$Astro = createAstro("https://astro-blog-cip.netlify.app");
async function getStaticPaths() {
  const allPosts = await getCollection("blog");
  const formattedPosts = formatBlogPostsCollections(allPosts);
  return formattedPosts.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "BlogPostLayout", $$BlogPostLayout, { "frontmatter": entry.data }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Content", Content, { "class:list": "prose prose-slate" })}` })}`;
}, "/home/jose/astro-projects/natures-&-life/src/pages/blog/[...slug].astro", void 0);

const $$file = "/home/jose/astro-projects/natures-&-life/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

export { $$ as default, $$file as file, getStaticPaths, $$url as url };
