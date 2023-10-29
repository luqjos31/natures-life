/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as renderComponent, A as AstroError, k as UnknownContentCollectionError, l as renderUniqueStylesheet, n as renderScriptElement, o as createHeadAndContent, u as unescapeHTML } from '../astro_07e878bc.mjs';
import { s as slugify, $ as $$Link, f as formatBlogPostsCollections, a as $$MainLayout } from './404_a1a2ee06.mjs';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import 'clsx';

const $$Astro$1 = createAstro("https://astro-blog-cip.netlify.app");
const $$PostCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { frontmatter, tagType } = Astro2.props;
  const { title, date, author, image, image2, description, category } = frontmatter.data;
  return renderTemplate`<!-- <pre>{ JSON.stringify(frontmatter,null,2)}</pre> -->${maybeRenderHead()}<article class="card mt-8"><small class=""><a${addAttribute(`/category/${slugify(category)}/`, "href")} class="text-white bg-yellow-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-2 py-2 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-600 focus:outline-none dark:focus:ring-blue-800 mt-4">${category}</a></small><div class="card card-compact bg-white-light shadow-xl p-4"><figure><a${addAttribute(`/blog/${frontmatter.slug}`, "href")} aria-hidden="true" tabindex="-1"><img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} width="200"></a></figure><div class="card-body p-8"><h2 class="card-title dark:green-dark"><a${addAttribute(`/blog/${frontmatter.slug}`, "href")} class="hover:text-primary">${title}</a></h2><!-- <small>
        by <a href={\`/author/\${slugify(author)}/\`}>{author}</a> - {
          formatDate(date.toDateString())
        }
      </small> --><p class="my-4">${description}</p><div class="card-actions justify-end">${renderComponent($$result, "Link", $$Link, { "href": `/blog/${frontmatter.slug}`, "isFilled": true, "text": "Leer Post", "style": "secondary" })}</div></div></div><!-- <a href={\`/blog/\${frontmatter.slug}\`} aria-hidden="true" tabindex="-1">
      <img class="mt-2" src={image.src} alt={image.alt} width="200" />
    </a> --></article>`;
}, "/home/jose/astro-projects/natures-&-life/src/components/PostCard.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} \u2192 ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/post-1.md": () => import('../post-1_886a3543.mjs'),"/src/content/blog/post-2.md": () => import('../post-2_2a8e11df.mjs'),"/src/content/blog/post-3.md": () => import('../post-3_560efbbf.mjs'),"/src/content/blog/post-4.md": () => import('../post-4_c9780bc9.mjs'),"/src/content/blog/post-5.md": () => import('../post-5_18f0c9ec.mjs'),"/src/content/blog/post-6.md": () => import('../post-6_ba5c7fa1.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"post-1":"/src/content/blog/post-1.md","post-2":"/src/content/blog/post-2.md","post-3":"/src/content/blog/post-3.md","post-4":"/src/content/blog/post-4.md","post-5":"/src/content/blog/post-5.md","post-6":"/src/content/blog/post-6.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/post-1.md": () => import('../post-1_6f2125ba.mjs'),"/src/content/blog/post-2.md": () => import('../post-2_3548a884.mjs'),"/src/content/blog/post-3.md": () => import('../post-3_97aac6b4.mjs'),"/src/content/blog/post-4.md": () => import('../post-4_3d9796b2.mjs'),"/src/content/blog/post-5.md": () => import('../post-5_54f670f9.mjs'),"/src/content/blog/post-6.md": () => import('../post-6_9b838817.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro = createAstro("https://astro-blog-cip.netlify.app");
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
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": authorName }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class=""${addAttribute(`Posts by ${authorName}`, "aria-label")}><h1 class="ml-14 mt-4 text-5xl font-extrabold dark:text-white">
Post about <span>${authorName}</span></h1><div class="p-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">${posts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "frontmatter": post, "tagType": "h2" })}`)}</div></section>` })}`;
}, "/home/jose/astro-projects/natures-&-life/src/pages/author/[...author].astro", void 0);

const $$file = "/home/jose/astro-projects/natures-&-life/src/pages/author/[...author].astro";
const $$url = "/author/[...author]";

const ____author_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$PostCard as $, ____author_ as _, getCollection as g };
