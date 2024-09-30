/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bb6plhSS.mjs';
import 'kleur/colors';
import { $ as $$Link, a as $$MainLayout } from '../chunks/MainLayout_1tz4kbwX.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Not Found", "description": "Not Found description" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container notfound" aria-label="Not Found"> <!-- 
    <img
      src="/images/curso-de-bobinado-de-motores-electricos-y-electricidad-industrial.jpeg"
      alt="motor-ac"
      width="200"
    />
  --> <div class="content"> <h1 class="h1">Not Found</h1> ${renderComponent($$result2, "Link", $$Link, { "href": "mailto:chris@codingpublic.dev", "style": "primary", "text": "Contact me" })} </div> </section> ` })}`;
}, "/home/jose/astro-projects/natures-&-life/src/pages/404.astro", void 0);

const $$file = "/home/jose/astro-projects/natures-&-life/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
