import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_b8b95828.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_07e878bc.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_7a82752e.mjs');
const _page1  = () => import('./chunks/index_15d05305.mjs');
const _page2  = () => import('./chunks/_category__77f70dbb.mjs');
const _page3  = () => import('./chunks/rss_93ef687a.mjs');
const _page4  = () => import('./chunks/_.._36f69b97.mjs');
const _page5  = () => import('./chunks/about_1fae9298.mjs');
const _page6  = () => import('./chunks/_.._9c38767f.mjs');
const _page7  = () => import('./chunks/_.._0adb722d.mjs');
const _page8  = () => import('./chunks/404_d5fad696.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/category/[category].astro", _page2],["src/pages/rss.xml.js", _page3],["src/pages/author/[...author].astro", _page4],["src/pages/about.astro", _page5],["src/pages/blog/page/[...page].astro", _page6],["src/pages/blog/[...slug].astro", _page7],["src/pages/404.astro", _page8]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
