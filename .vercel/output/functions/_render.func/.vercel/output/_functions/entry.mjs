import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Dj8FQrYz.mjs';
import { manifest } from './manifest_CEcijTVe.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/author/_---author_.astro.mjs');
const _page4 = () => import('./pages/blog/page/_---page_.astro.mjs');
const _page5 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page6 = () => import('./pages/category/_category_.astro.mjs');
const _page7 = () => import('./pages/contact.astro.mjs');
const _page8 = () => import('./pages/rss.xml.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/author/[...author].astro", _page3],
    ["src/pages/blog/page/[...page].astro", _page4],
    ["src/pages/blog/[...slug].astro", _page5],
    ["src/pages/category/[category].astro", _page6],
    ["src/pages/contact.astro", _page7],
    ["src/pages/rss.xml.js", _page8],
    ["src/pages/index.astro", _page9]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "bdba0ed1-f25e-428f-9253-47bb2e996353",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
