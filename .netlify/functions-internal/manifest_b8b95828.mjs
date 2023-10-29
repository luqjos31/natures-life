import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_07e878bc.mjs';
import 'clsx';
import 'mime';
import { compile } from 'path-to-regexp';
import 'html-escaper';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"console.log(\"in the nav\");const e=document.querySelectorAll(\"[data-navLink]\");e.forEach(t=>{t.getAttribute(\"href\")===window.location.pathname&&t.setAttribute(\"aria-current\",\"page\")});\n"}],"styles":[{"type":"external","src":"/_astro/about.ecdb9afb.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"console.log(\"in the nav\");const e=document.querySelectorAll(\"[data-navLink]\");e.forEach(t=>{t.getAttribute(\"href\")===window.location.pathname&&t.setAttribute(\"aria-current\",\"page\")});\n"}],"styles":[{"type":"external","src":"/_astro/about.ecdb9afb.css"}],"routeData":{"route":"/category/[category]","type":"page","pattern":"^\\/category\\/([^/]+?)\\/?$","segments":[[{"content":"category","dynamic":false,"spread":false}],[{"content":"category","dynamic":true,"spread":false}]],"params":["category"],"component":"src/pages/category/[category].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"console.log(\"in the nav\");const e=document.querySelectorAll(\"[data-navLink]\");e.forEach(t=>{t.getAttribute(\"href\")===window.location.pathname&&t.setAttribute(\"aria-current\",\"page\")});\n"}],"styles":[{"type":"external","src":"/_astro/about.ecdb9afb.css"}],"routeData":{"route":"/author/[...author]","type":"page","pattern":"^\\/author(?:\\/(.*?))?\\/?$","segments":[[{"content":"author","dynamic":false,"spread":false}],[{"content":"...author","dynamic":true,"spread":true}]],"params":["...author"],"component":"src/pages/author/[...author].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"console.log(\"in the nav\");const e=document.querySelectorAll(\"[data-navLink]\");e.forEach(t=>{t.getAttribute(\"href\")===window.location.pathname&&t.setAttribute(\"aria-current\",\"page\")});\n"}],"styles":[{"type":"external","src":"/_astro/about.ecdb9afb.css"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"console.log(\"in the nav\");const e=document.querySelectorAll(\"[data-navLink]\");e.forEach(t=>{t.getAttribute(\"href\")===window.location.pathname&&t.setAttribute(\"aria-current\",\"page\")});\n"}],"styles":[{"type":"external","src":"/_astro/about.ecdb9afb.css"}],"routeData":{"route":"/blog/page/[...page]","type":"page","pattern":"^\\/blog\\/page(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"page","dynamic":false,"spread":false}],[{"content":"...page","dynamic":true,"spread":true}]],"params":["...page"],"component":"src/pages/blog/page/[...page].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"console.log(\"in the nav\");const e=document.querySelectorAll(\"[data-navLink]\");e.forEach(t=>{t.getAttribute(\"href\")===window.location.pathname&&t.setAttribute(\"aria-current\",\"page\")});\n"}],"styles":[{"type":"external","src":"/_astro/about.ecdb9afb.css"},{"type":"inline","content":"h2{margin-left:0!important;font-size:2rem!important}p{margin-bottom:2rem!important;color:#fff}ul{list-style-type:square!important;margin-bottom:2rem!important}.h2{margin-left:3.5rem;margin-top:1rem;font-size:2.25rem;line-height:2.5rem;font-weight:800}@media (prefers-color-scheme: dark){.h2{--tw-text-opacity: 1;color:rgb(214 244 255 / var(--tw-text-opacity))}}\n"}],"routeData":{"route":"/blog/[...slug]","type":"page","pattern":"^\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/blog/[...slug].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"console.log(\"in the nav\");const e=document.querySelectorAll(\"[data-navLink]\");e.forEach(t=>{t.getAttribute(\"href\")===window.location.pathname&&t.setAttribute(\"aria-current\",\"page\")});\n"}],"styles":[{"type":"external","src":"/_astro/about.ecdb9afb.css"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://astro-blog-cip.netlify.app","base":"/","compressHTML":true,"componentMetadata":[["/home/jose/astro-projects/natures-&-life/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["/home/jose/astro-projects/natures-&-life/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/jose/astro-projects/natures-&-life/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/home/jose/astro-projects/natures-&-life/src/pages/author/[...author].astro",{"propagation":"in-tree","containsHead":true}],["/home/jose/astro-projects/natures-&-life/src/pages/blog/page/[...page].astro",{"propagation":"in-tree","containsHead":true}],["/home/jose/astro-projects/natures-&-life/src/pages/category/[category].astro",{"propagation":"in-tree","containsHead":true}],["/home/jose/astro-projects/natures-&-life/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/jose/astro-projects/natures-&-life/src/components/CategoryCloud.astro",{"propagation":"in-tree","containsHead":false}],["/home/jose/astro-projects/natures-&-life/src/layouts/BlogPostLayout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/author/[...author]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/page/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/category/[category]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/jose/astro-projects/natures-&-life/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/blog/page/[...page].astro":"chunks/pages/__965770cb.mjs","/src/pages/blog/[...slug].astro":"chunks/pages/__680f7a0d.mjs","/src/pages/category/[category].astro":"chunks/pages/_category__ffaa7c83.mjs","/src/pages/about.astro":"chunks/pages/about_4e08df6d.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_6529fdbe.mjs","/src/pages/index.astro":"chunks/pages/index_986175ba.mjs","/src/pages/rss.xml.js":"chunks/pages/rss_fb9c2f58.mjs","\u0000@astrojs-manifest":"manifest_b8b95828.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_7a82752e.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_15d05305.mjs","\u0000@astro-page:src/pages/category/[category]@_@astro":"chunks/_category__77f70dbb.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss_93ef687a.mjs","\u0000@astro-page:src/pages/author/[...author]@_@astro":"chunks/_.._36f69b97.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_1fae9298.mjs","\u0000@astro-page:src/pages/blog/page/[...page]@_@astro":"chunks/_.._9c38767f.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"chunks/_.._0adb722d.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_d5fad696.mjs","/home/jose/astro-projects/natures-&-life/src/content/blog/post-1.md?astroContentCollectionEntry=true":"chunks/post-1_886a3543.mjs","/home/jose/astro-projects/natures-&-life/src/content/blog/post-2.md?astroContentCollectionEntry=true":"chunks/post-2_2a8e11df.mjs","/home/jose/astro-projects/natures-&-life/src/content/blog/post-3.md?astroContentCollectionEntry=true":"chunks/post-3_560efbbf.mjs","/home/jose/astro-projects/natures-&-life/src/content/blog/post-4.md?astroContentCollectionEntry=true":"chunks/post-4_c9780bc9.mjs","/home/jose/astro-projects/natures-&-life/src/content/blog/post-5.md?astroContentCollectionEntry=true":"chunks/post-5_18f0c9ec.mjs","/home/jose/astro-projects/natures-&-life/src/content/blog/post-6.md?astroContentCollectionEntry=true":"chunks/post-6_ba5c7fa1.mjs","/home/jose/astro-projects/natures-&-life/src/content/blog/post-1.md?astroPropagatedAssets":"chunks/post-1_6f2125ba.mjs","/home/jose/astro-projects/natures-&-life/src/content/blog/post-2.md?astroPropagatedAssets":"chunks/post-2_3548a884.mjs","/home/jose/astro-projects/natures-&-life/src/content/blog/post-3.md?astroPropagatedAssets":"chunks/post-3_97aac6b4.mjs","/home/jose/astro-projects/natures-&-life/src/content/blog/post-4.md?astroPropagatedAssets":"chunks/post-4_3d9796b2.mjs","/home/jose/astro-projects/natures-&-life/src/content/blog/post-5.md?astroPropagatedAssets":"chunks/post-5_54f670f9.mjs","/home/jose/astro-projects/natures-&-life/src/content/blog/post-6.md?astroPropagatedAssets":"chunks/post-6_9b838817.mjs","/home/jose/astro-projects/natures-&-life/src/content/blog/post-1.md":"chunks/post-1_7c4fbc18.mjs","/home/jose/astro-projects/natures-&-life/src/content/blog/post-2.md":"chunks/post-2_a9bac0b2.mjs","/home/jose/astro-projects/natures-&-life/src/content/blog/post-3.md":"chunks/post-3_226c3008.mjs","/home/jose/astro-projects/natures-&-life/src/content/blog/post-4.md":"chunks/post-4_d2e8e64f.mjs","/home/jose/astro-projects/natures-&-life/src/content/blog/post-5.md":"chunks/post-5_73c70d7d.mjs","/home/jose/astro-projects/natures-&-life/src/content/blog/post-6.md":"chunks/post-6_aa45d74c.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.fe08d609.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/about.ecdb9afb.css","/images/favicon.svg","/images/logo-removebg.png","/images/mesh-gradient-2.png","/images/mesh-gradient-3.png","/images/mesh-gradient-4.png","/images/mesh-gradient.png","/rss/styles.xsl","/images/envase-productos/centella-asiatica.png","/images/envase-productos/diabet-forte.png","/images/envase-productos/envase-productos-natures-&-life-2.svg","/images/envase-productos/envase-productos-natures-&-life.svg","/images/envase-productos/ginkgo-biloba.png","/images/envase-productos/lochita.png","/images/envase-productos/logo.jpg","/images/envase-productos/name-salvaje.png","/images/envase-productos/photo_2023-10-28_09-29-26.jpg","/images/envase-productos/saw-palmetto.png"]});

export { manifest };
