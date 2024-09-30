/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, e as createAstro, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_Bb6plhSS.mjs';
import 'kleur/colors';
import { a as $$MainLayout } from '../../chunks/MainLayout_1tz4kbwX.mjs';
import { $ as $$PostCard } from '../../chunks/PostCard_BAEz2_54.mjs';
import { f as formatBlogPostsCollections, s as slugify } from '../../chunks/utils_CRpJiEzF.mjs';
import { g as getCollection } from '../../chunks/_astro_content_kqV58uhg.mjs';
import { $ as $$CategoryCloud } from '../../chunks/CategoryCloud_onkq_zTd.mjs';
/* empty css                                         */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
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
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": name, "data-astro-cid-l6gs42ny": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CategoryCloud", $$CategoryCloud, { "data-astro-cid-l6gs42ny": true })} ${maybeRenderHead()}<section class=""${addAttribute(`Posts about ${name}`, "aria-label")} data-astro-cid-l6gs42ny> <h1 class="ml-14 mt-4 text-5xl font-extrabold dark:text-white" data-astro-cid-l6gs42ny> <span data-astro-cid-l6gs42ny>${category}</span> </h1> <div class="mt-4 p-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3" data-astro-cid-l6gs42ny> ${catPost.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "frontmatter": post, "tagType": "h2", "data-astro-cid-l6gs42ny": true })}`)} </div> </section>  ` })}`;
}, "/home/jose/astro-projects/natures-&-life/src/pages/category/[category].astro", void 0);

const $$file = "/home/jose/astro-projects/natures-&-life/src/pages/category/[category].astro";
const $$url = "/category/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
