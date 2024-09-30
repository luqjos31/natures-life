/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bb6plhSS.mjs';
import 'kleur/colors';
import { $ as $$Link, a as $$MainLayout } from '../chunks/MainLayout_1tz4kbwX.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "About", "description": "About description", "robots": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex mx-auto my-4 gap-5 max-w-3xl mt-8 p-8" aria-label="About Me"> <!--
    <div>
      <img
        class="block mx-auto"
        src="/images/logo-removebg.png"
        alt="logo-natures-life"
      />
    </div>
  --> <div class="content"> <!-- <h1 class="text-3xl font-bold dark:text-purple-light">Nature's Life</h1> --> <p class="text-xl pt-3 my-6">
En Nature's Llife, nos dedicamos a la venta de productos naturales
        online con las mejores materias primas del mercado. Nuestras hierbas
        naturales son seleccionadas cuidadosamente para garantizar su máxima
        calidad y eficacia.
</p> <p class="text-xl pt-3 my-6">
Con un tratamiento comprobado para sanar las enfermedades. Nuestros
        expertos en herbolaria han trabajado durante años para desarrollar
        fórmulas efectivas que puedan ayudar a las personas a mejorar su salud.
</p> <p class="text-xl pt-3 my-6">
Nature's Life es la opción perfecta para ti. Nuestros productos son
        seguros, eficaces y asequibles.
</p> <p class="text-xl pt-3 my-6">
Prueba nuestros productos hoy mismo y descubre la diferencia que pueden
        hacer en tu salud.
</p> <div class="card-actions justify-center text-white-light"> ${renderComponent($$result2, "Link", $$Link, { "href": "mailto:chris@codingpublic.dev", "style": "primary", "isFilled": true, "text": "Cot\xE1ctanos" })} </div> </div> </section> ` })}`;
}, "/home/jose/astro-projects/natures-&-life/src/pages/about.astro", void 0);

const $$file = "/home/jose/astro-projects/natures-&-life/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
