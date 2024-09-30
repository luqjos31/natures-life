/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, e as createAstro, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_Bb6plhSS.mjs';
import 'kleur/colors';
import { a as $$MainLayout } from '../../chunks/MainLayout_1tz4kbwX.mjs';
import { $ as $$PostCard } from '../../chunks/PostCard_BAEz2_54.mjs';
import { f as formatBlogPostsCollections, s as slugify } from '../../chunks/utils_CRpJiEzF.mjs';
import { g as getCollection } from '../../chunks/_astro_content_kqV58uhg.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const allPosts = await getCollection("blog");
  const formattedPosts = formatBlogPostsCollections(allPosts, {
    filterOutDrafts: false,
    sortByDate: true
  });
  const allAuthors = [
    ...new Set(formattedPosts.map((post) => post.data.author).flat())
  ];
  return allAuthors.map((author) => {
    const authorPosts = formattedPosts.filter(
      (post) => post.data.author === author
    );
    return {
      params: { author: slugify(author) },
      props: { authorName: author, posts: authorPosts }
    };
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { posts, authorName } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": authorName }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class=""${addAttribute(`Posts by ${authorName}`, "aria-label")}> <h1 class="ml-14 mt-4 text-5xl font-extrabold dark:text-white">
Post about <span>${authorName}</span> </h1> <div class="p-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "frontmatter": post, "tagType": "h2" })}`)} </div> </section> ` })}`;
}, "/home/jose/astro-projects/natures-&-life/src/pages/author/[...author].astro", void 0);

const $$file = "/home/jose/astro-projects/natures-&-life/src/pages/author/[...author].astro";
const $$url = "/author/[...author]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
