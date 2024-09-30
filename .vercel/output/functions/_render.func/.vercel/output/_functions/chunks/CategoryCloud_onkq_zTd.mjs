import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, e as createAstro } from './astro/server_Bb6plhSS.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCollection } from './_astro_content_kqV58uhg.mjs';
import { f as formatBlogPostsCollections, s as slugify } from './utils_CRpJiEzF.mjs';
/* empty css                          */

const $$Astro = createAstro();
const $$CategoryCloud = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CategoryCloud;
  const allPosts = await getCollection("blog");
  const formattedPosts = formatBlogPostsCollections(allPosts);
  const allCategories = formattedPosts.map((cat) => cat.data.category.toLowerCase()).flat();
  const processedCats = allCategories.reduce((acc, category) => {
    const value = acc[category] || 0;
    return { ...acc, [category]: value + 1 };
  }, {});
  const { showCount } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="grid grid-cols-3" data-astro-cid-gmzsvtte> ${Object.entries(processedCats).map(([key, val]) => renderTemplate`<li class="inline-grid text-center" data-astro-cid-gmzsvtte> <a class="hover:text-primary focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-base px-5 py-2.5 mr-2 mb-2 mt-2 focus:outline-none dark:focus:ring-blue-800"${addAttribute(`/category/${slugify(key)}/`, "href")} data-astro-cid-gmzsvtte> ${key} ${showCount && `(${val})`} </a> </li>`)} </ul> `;
}, "/home/jose/astro-projects/natures-&-life/src/components/CategoryCloud.astro", void 0);

export { $$CategoryCloud as $ };
