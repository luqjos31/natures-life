/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, g as addAttribute, h as renderComponent, u as unescapeHTML, F as Fragment, i as renderHead, m as maybeRenderHead, s as spreadAttributes, j as renderSlot } from '../astro_07e878bc.mjs';
import 'clsx';
import { optimize } from 'svgo';

const title = "My Astro Blog";
const description = "My musings about the Astro framework";
const image = {
	src: "/images/image-default.jpg",
	alt: "My Astro Blog"
};
const siteData = {
	title: title,
	description: description,
	image: image
};

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", { timeZone: "UTC" });
}

function formatBlogPostsCollections(posts,{

filterOutDrafts = true,
filterOutFuturePosts =true,
sortByDate = true,
limit = undefined

} ={}){


const filteredPosts = posts.reduce((acc,post) => {

  // Replace frontmatter by .data

  const {date,draft} = post.data;
  //filterOutDrafts if true
  if(filterOutDrafts && draft) return acc

  // filterOutFuturePosts if true
  if (filterOutFuturePosts && new Date(date) > new Date ())
  return acc

  // add post to acc
  acc.push(post);

  return acc
},[]);

// sort by date or randomize

if (sortByDate)
{
filteredPosts.sort((a,b) => new Date (b.data.date)- new Date(a.data.date));

}
else {
filteredPosts.sort(() => Math.random() - 0.5);
}

// limit if number is passed

if (typeof limit === "number")
return filteredPosts.slice(0,limit)

return filteredPosts;



}

function jsonLDGenerator({ type, post, url }) {
  if (type === 'post') {
    return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${url}"
        },
        "headline": "${post.title}",
        "description": "${post.description}",
        "image": "${post.image.src}",
        "author": {
          "@type": "Person",
          "name": "${post.author}",
          "url": "/author/${slugify(post.author)}"
        },
        "datePublished": "${post.date}"
      }
    </script>`;
  }
  return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "${siteData.title}",
      "url": "${"https://astro-blog-cip.netlify.app"}"
      }
    </script>`;
}

const $$Astro$a = createAstro("https://astro-blog-cip.netlify.app");
const $$Seo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Seo;
  const {
    title,
    description,
    url = Astro2.url,
    image,
    frontmatter,
    robots
  } = Astro2.props;
  const jsonLD = jsonLDGenerator({
    type: frontmatter ? "post" : "website",
    post: frontmatter,
    url
  });
  return renderTemplate`<!-- SEO --><link rel="canonical"${addAttribute(url, "href")}><!-- Open Graph --><meta property="og:site_name" content="My Astro Blog"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(url, "content")}><meta property="og:image"${addAttribute(image?.src || siteData.image.src, "content")}><meta property="og:image:url"${addAttribute(image?.src || siteData.image.src, "content")}><meta property="og:image:secure_url"${addAttribute(image?.src || siteData.image.src, "content")}><meta property="og:image:type" content="image/jpeg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="600"><meta property="og:image:alt"${addAttribute(image?.alt || siteData.image.alt, "content")}><!-- Twitter --><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image"${addAttribute(image?.src || siteData.image.src, "content")}><meta name="twitter:image:alt"${addAttribute(title, "content")}><meta name="twitter:domain"${addAttribute("https://astro-blog-cip.netlify.app", "content")}>${robots && renderTemplate`<meta name="robots" content="noindex, nofollow">`}<!-- JSON LD -->${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(jsonLD)}` })}`;
}, "/home/jose/astro-projects/natures-&-life/src/components/Seo.astro", void 0);

const $$Astro$9 = createAstro("https://astro-blog-cip.netlify.app");
const $$MainHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$MainHead;
  const { title, description, image, frontmatter, robots } = Astro2.props;
  return renderTemplate`<head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}>${renderComponent($$result, "Seo", $$Seo, { "title": title, "description": description, "url": Astro2.url, "image": image, "frontmatter": frontmatter, "robots": robots })}${renderHead()}</head>`;
}, "/home/jose/astro-projects/natures-&-life/src/layouts/MainHead.astro", void 0);

const __vite_glob_1_0 = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r\n<svg width=\"800px\" height=\"800px\" viewBox=\"0 0 1024 1024\" class=\"icon\"  version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M326.5625 301.0625l-1.21875-93.28125c-0.1875-14.25 11.34375-25.875 25.59375-25.875h322.125c14.15625 0 25.59375 11.4375 25.59375 25.59375v93.1875h-65.625v-53.15625H391.53125l0.65625 52.78125-65.625 0.75z\" fill=\"#8E6620\" /><path d=\"M404.09375 335.75h-91.59375c-1.59375 0-3-1.3125-3-3v-30.1875c0-1.59375 1.3125-3 3-3h91.59375c1.59375 0 3 1.3125 3 3v30.1875c0 1.6875-1.40625 3-3 3zM711.40625 335.75h-91.125c-1.78125 0-3.1875-1.40625-3.1875-3.1875V302.9375c0-1.78125 1.40625-3.1875 3.1875-3.1875h91.125c1.78125 0 3.1875 1.40625 3.1875 3.1875v29.625c0.09375 1.78125-1.40625 3.1875-3.1875 3.1875z\" fill=\"#FFB000\" /><path d=\"M862.90625 932.1875H162.96875c-38.71875 0-70.125-31.40625-70.125-70.125V402.3125c0-38.71875 31.40625-70.125 70.125-70.125h699.84375c38.71875 0 70.125 31.40625 70.125 70.125v459.75c0.09375 38.71875-31.3125 70.125-70.03125 70.125z\" fill=\"#8E6620\" /><path d=\"M234.575 332.298125l75-0.215625 1.726875 599.34375-75 0.215625zM714.670625 332.298125l75-0.215625 1.726875 599.34375-75 0.215625z\" fill=\"#FFB000\" /></svg>";

const __vite_glob_1_1 = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 128 128\">\n    <path d=\"M50.4 78.5a75.1 75.1 0 0 0-28.5 6.9l24.2-65.7c.7-2 1.9-3.2 3.4-3.2h29c1.5 0 2.7 1.2 3.4 3.2l24.2 65.7s-11.6-7-28.5-7L67 45.5c-.4-1.7-1.6-2.8-2.9-2.8-1.3 0-2.5 1.1-2.9 2.7L50.4 78.5Zm-1.1 28.2Zm-4.2-20.2c-2 6.6-.6 15.8 4.2 20.2a17.5 17.5 0 0 1 .2-.7 5.5 5.5 0 0 1 5.7-4.5c2.8.1 4.3 1.5 4.7 4.7.2 1.1.2 2.3.2 3.5v.4c0 2.7.7 5.2 2.2 7.4a13 13 0 0 0 5.7 4.9v-.3l-.2-.3c-1.8-5.6-.5-9.5 4.4-12.8l1.5-1a73 73 0 0 0 3.2-2.2 16 16 0 0 0 6.8-11.4c.3-2 .1-4-.6-6l-.8.6-1.6 1a37 37 0 0 1-22.4 2.7c-5-.7-9.7-2-13.2-6.2Z\" />\n    <style>\n        path { fill: #000; }\n        @media (prefers-color-scheme: dark) {\n            path { fill: #FFF; }\n        }\n    </style>\n</svg>\n";

const SPRITESHEET_NAMESPACE = `astroicon`;

const baseURL = "https://api.astroicon.dev/v1/";
const requests = /* @__PURE__ */ new Map();
const fetchCache = /* @__PURE__ */ new Map();
async function get(pack, name) {
  const url = new URL(`./${pack}/${name}`, baseURL).toString();
  if (requests.has(url)) {
    return await requests.get(url);
  }
  if (fetchCache.has(url)) {
    return fetchCache.get(url);
  }
  let request = async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(await res.text());
    }
    const contentType = res.headers.get("Content-Type");
    if (!contentType.includes("svg")) {
      throw new Error(`[astro-icon] Unable to load "${name}" because it did not resolve to an SVG!

Recieved the following "Content-Type":
${contentType}`);
    }
    const svg = await res.text();
    fetchCache.set(url, svg);
    requests.delete(url);
    return svg;
  };
  let promise = request();
  requests.set(url, promise);
  return await promise;
}

const splitAttrsTokenizer = /([a-z0-9_\:\-]*)\s*?=\s*?(['"]?)(.*?)\2\s+/gim;
const domParserTokenizer = /(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!\[CDATA\[)([\s\S]*?)(\]\]>))/gm;
const splitAttrs = (str) => {
  let res = {};
  let token;
  if (str) {
    splitAttrsTokenizer.lastIndex = 0;
    str = " " + (str || "") + " ";
    while (token = splitAttrsTokenizer.exec(str)) {
      res[token[1]] = token[3];
    }
  }
  return res;
};
function optimizeSvg(contents, name, options) {
  return optimize(contents, {
    plugins: [
      "removeDoctype",
      "removeXMLProcInst",
      "removeComments",
      "removeMetadata",
      "removeXMLNS",
      "removeEditorsNSData",
      "cleanupAttrs",
      "minifyStyles",
      "convertStyleToAttrs",
      {
        name: "cleanupIDs",
        params: { prefix: `${SPRITESHEET_NAMESPACE}:${name}` }
      },
      "removeRasterImages",
      "removeUselessDefs",
      "cleanupNumericValues",
      "cleanupListOfValues",
      "convertColors",
      "removeUnknownsAndDefaults",
      "removeNonInheritableGroupAttrs",
      "removeUselessStrokeAndFill",
      "removeViewBox",
      "cleanupEnableBackground",
      "removeHiddenElems",
      "removeEmptyText",
      "convertShapeToPath",
      "moveElemsAttrsToGroup",
      "moveGroupAttrsToElems",
      "collapseGroups",
      "convertPathData",
      "convertTransform",
      "removeEmptyAttrs",
      "removeEmptyContainers",
      "mergePaths",
      "removeUnusedNS",
      "sortAttrs",
      "removeTitle",
      "removeDesc",
      "removeDimensions",
      "removeStyleElement",
      "removeScriptElement"
    ]
  }).data;
}
const preprocessCache = /* @__PURE__ */ new Map();
function preprocess(contents, name, { optimize }) {
  if (preprocessCache.has(contents)) {
    return preprocessCache.get(contents);
  }
  if (optimize) {
    contents = optimizeSvg(contents, name);
  }
  domParserTokenizer.lastIndex = 0;
  let result = contents;
  let token;
  if (contents) {
    while (token = domParserTokenizer.exec(contents)) {
      const tag = token[2];
      if (tag === "svg") {
        const attrs = splitAttrs(token[3]);
        result = contents.slice(domParserTokenizer.lastIndex).replace(/<\/svg>/gim, "").trim();
        const value = { innerHTML: result, defaultProps: attrs };
        preprocessCache.set(contents, value);
        return value;
      }
    }
  }
}
function normalizeProps(inputProps) {
  const size = inputProps.size;
  delete inputProps.size;
  const w = inputProps.width ?? size;
  const h = inputProps.height ?? size;
  const width = w ? toAttributeSize(w) : void 0;
  const height = h ? toAttributeSize(h) : void 0;
  return { ...inputProps, width, height };
}
const toAttributeSize = (size) => String(size).replace(/(?<=[0-9])x$/, "em");
async function load(name, inputProps, optimize) {
  const key = name;
  if (!name) {
    throw new Error("<Icon> requires a name!");
  }
  let svg = "";
  let filepath = "";
  if (name.includes(":")) {
    const [pack, ..._name] = name.split(":");
    name = _name.join(":");
    filepath = `/src/icons/${pack}`;
    let get$1;
    try {
      const files = /* #__PURE__ */ Object.assign({

});
      const keys = Object.fromEntries(
        Object.keys(files).map((key2) => [key2.replace(/\.[cm]?[jt]s$/, ""), key2])
      );
      if (!(filepath in keys)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const mod = files[keys[filepath]];
      if (typeof mod.default !== "function") {
        throw new Error(
          `[astro-icon] "${filepath}" did not export a default function!`
        );
      }
      get$1 = mod.default;
    } catch (e) {
    }
    if (typeof get$1 === "undefined") {
      get$1 = get.bind(null, pack);
    }
    const contents = await get$1(name, inputProps);
    if (!contents) {
      throw new Error(
        `<Icon pack="${pack}" name="${name}" /> did not return an icon!`
      );
    }
    if (!/<svg/gim.test(contents)) {
      throw new Error(
        `Unable to process "<Icon pack="${pack}" name="${name}" />" because an SVG string was not returned!

Recieved the following content:
${contents}`
      );
    }
    svg = contents;
  } else {
    filepath = `/src/icons/${name}.svg`;
    try {
      const files = /* #__PURE__ */ Object.assign({"/src/icons/business.svg": __vite_glob_1_0,"/src/icons/logomark.svg": __vite_glob_1_1});
      if (!(filepath in files)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const contents = files[filepath];
      if (!/<svg/gim.test(contents)) {
        throw new Error(
          `Unable to process "${filepath}" because it is not an SVG!

Recieved the following content:
${contents}`
        );
      }
      svg = contents;
    } catch (e) {
      throw new Error(
        `[astro-icon] Unable to load "${filepath}". Does the file exist?`
      );
    }
  }
  const { innerHTML, defaultProps } = preprocess(svg, key, { optimize });
  if (!innerHTML.trim()) {
    throw new Error(`Unable to parse "${filepath}"!`);
  }
  return {
    innerHTML,
    props: { ...defaultProps, ...normalizeProps(inputProps) }
  };
}

const $$Astro$8 = createAstro("https://astro-blog-cip.netlify.app");
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Icon;
  let { name, pack, title, optimize = true, class: className, ...inputProps } = Astro2.props;
  let props = {};
  if (pack) {
    name = `${pack}:${name}`;
  }
  let innerHTML = "";
  try {
    const svg = await load(name, { ...inputProps, class: className }, optimize);
    innerHTML = svg.innerHTML;
    props = svg.props;
  } catch (e) {
    {
      throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
    }
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(name, "astro-icon")}>${unescapeHTML((title ? `<title>${title}</title>` : "") + innerHTML)}</svg>`;
}, "/home/jose/astro-projects/natures-&-life/node_modules/astro-icon/lib/Icon.astro", void 0);

const sprites = /* @__PURE__ */ new WeakMap();
function trackSprite(request, name) {
  let currentSet = sprites.get(request);
  if (!currentSet) {
    currentSet = /* @__PURE__ */ new Set([name]);
  } else {
    currentSet.add(name);
  }
  sprites.set(request, currentSet);
}
const warned = /* @__PURE__ */ new Set();
async function getUsedSprites(request) {
  const currentSet = sprites.get(request);
  if (currentSet) {
    return Array.from(currentSet);
  }
  if (!warned.has(request)) {
    const { pathname } = new URL(request.url);
    console.log(`[astro-icon] No sprites found while rendering "${pathname}"`);
    warned.add(request);
  }
  return [];
}

const $$Astro$7 = createAstro("https://astro-blog-cip.netlify.app");
const $$Spritesheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Spritesheet;
  const { optimize = true, style, ...props } = Astro2.props;
  const names = await getUsedSprites(Astro2.request);
  const icons = await Promise.all(names.map((name) => {
    return load(name, {}, optimize).then((res) => ({ ...res, name })).catch((e) => {
      {
        throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
      }
    });
  }));
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(`position: absolute; width: 0; height: 0; overflow: hidden; ${style ?? ""}`.trim(), "style")}${spreadAttributes({ "aria-hidden": true, ...props })} astro-icon-spritesheet>${icons.map((icon) => renderTemplate`<symbol${spreadAttributes(icon.props)}${addAttribute(`${SPRITESHEET_NAMESPACE}:${icon.name}`, "id")}>${unescapeHTML(icon.innerHTML)}</symbol>`)}</svg>`;
}, "/home/jose/astro-projects/natures-&-life/node_modules/astro-icon/lib/Spritesheet.astro", void 0);

const $$Astro$6 = createAstro("https://astro-blog-cip.netlify.app");
const $$SpriteProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SpriteProvider;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}${renderComponent($$result, "Spritesheet", $$Spritesheet, {})}`;
}, "/home/jose/astro-projects/natures-&-life/node_modules/astro-icon/lib/SpriteProvider.astro", void 0);

const $$Astro$5 = createAstro("https://astro-blog-cip.netlify.app");
const $$Sprite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Sprite;
  let { name, pack, title, class: className, x, y, ...inputProps } = Astro2.props;
  const props = normalizeProps(inputProps);
  if (pack) {
    name = `${pack}:${name}`;
  }
  const href = `#${SPRITESHEET_NAMESPACE}:${name}`;
  trackSprite(Astro2.request, name);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")}${addAttribute(name, "astro-icon")}>${title ? renderTemplate`<title>${title}</title>` : ""}<use${spreadAttributes({ "xlink:href": href, width: props.width, height: props.height, x, y })}></use></svg>`;
}, "/home/jose/astro-projects/natures-&-life/node_modules/astro-icon/lib/Sprite.astro", void 0);

Object.assign($$Sprite, { Provider: $$SpriteProvider });

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro("https://astro-blog-cip.netlify.app");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate(_a || (_a = __template(["", '<footer class="footer footer-center p-6 bg-white-light text-base-content rounded"><nav class="grid grid-flow-col gap-4"><a class="link link-hover">Acerca de</a><a class="link link-hover">Contacto</a><!-- <a class="link link-hover">Jobs</a>\n    <a class="link link-hover">Press kit</a> --></nav><nav><div class="grid grid-flow-col gap-4"><a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a><a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a><a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a></div></nav><a href="/rss.xml">\nSuscribe to RSS\n', '</a><aside><p>Copyright \xA9 2023 - All right reserved by ACME Industries Ltd</p></aside></footer><!-- <script>\n  document.querySelector("#copyright").textContent = new Date()\n    .getFullYear()\n    .toString();\n<\/script> -->'])), maybeRenderHead(), renderComponent($$result, "Icon", $$Icon, { "name": "tabler:rss", "width": "20", "height": "20" }));
}, "/home/jose/astro-projects/natures-&-life/src/components/Footer.astro", void 0);

const $$Astro$3 = createAstro("https://astro-blog-cip.netlify.app");
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Link;
  const {
    text,
    href,
    style,
    icon,
    isFilled = false,
    borderVisible = false,
    classes,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(["", []], "class:list")}${spreadAttributes(rest)}>${icon && icon.side === "left" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon.name, "height": "24", "width": "24" })}`}<!-- <span class={style}> {text}</span> --><div class="my-4"><span${addAttribute(isFilled ? "text-white bg-blue-light hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 dark:bg-slate-900 dark:hover:bg- focus:outline-none dark:focus:ring-blue-800" : "text-white-light focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-8 py-2.5 mr-2 mb-2 focus:outline-none dark:focus:ring-blue-800", "class")}>${text}</span></div>${icon && icon.side === "right" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon.name, "height": "24", "width": "24" })}`}</a>`;
}, "/home/jose/astro-projects/natures-&-life/src/components/Link.astro", void 0);

const navData = [
  {
    name: "Acerca",
    path: "/about/",
  },
  { name: "Blog", path: "/blog/page/" },
];

const $$Astro$2 = createAstro("https://astro-blog-cip.netlify.app");
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Primary"><div class="navbar flex"${addAttribute({}, "style")}><a href="/" class="logomark" aria-label="Go home"><img src="/images/logo-removebg.png" width="100"></a><ul class="pt-4 ml-auto">${navData.map((item) => renderTemplate`${renderComponent($$result, "Link", $$Link, { "text": item.name, "href": item.path, "style": "primary", "isFilled": false, "borderVisible": false })}`)}</ul></div><div class="max-w-8xl mx-auto px-4"><hr class="border-skin-line border-purple-light" aria-hidden="true"></div></nav>`;
}, "/home/jose/astro-projects/natures-&-life/src/components/Nav.astro", void 0);

const $$Astro$1 = createAstro("https://astro-blog-cip.netlify.app");
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const {
    title = "My Astro Blog",
    description = "My musings about the Astro framework",
    image,
    frontmatter,
    robots
  } = Astro2.props;
  return renderTemplate`<html lang="en" data-theme="light">${renderComponent($$result, "MainHead", $$MainHead, { "title": title, "description": description, "image": image, "frontmatter": frontmatter, "robots": robots })}${maybeRenderHead()}<body class="bg-gradient2">${renderComponent($$result, "Nav", $$Nav, {})}<main>${renderSlot($$result, $$slots["default"])}</main>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "/home/jose/astro-projects/natures-&-life/src/layouts/MainLayout.astro", void 0);

const $$Astro = createAstro("https://astro-blog-cip.netlify.app");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "About", "description": "About description" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<p>My about page content, wrapped in a layout!</p><section class="container about" aria-label="About Me"><img src="/images/curso-de-bobinado-de-motores-electricos-y-electricidad-industrial.jpeg" alt="motor-ac" width="200"><div class="content"><h1 class="h1">My blog</h1><p> lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40 lorem40</p>${renderComponent($$result2, "Link", $$Link, { "href": "mailto:chris@codingpublic.dev", "style": "primary", "text": "Contact me" })}</div></section>` })}`;
}, "/home/jose/astro-projects/natures-&-life/src/pages/404.astro", void 0);

const $$file = "/home/jose/astro-projects/natures-&-life/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Link as $, _404 as _, $$MainLayout as a, formatDate as b, formatBlogPostsCollections as f, slugify as s };
