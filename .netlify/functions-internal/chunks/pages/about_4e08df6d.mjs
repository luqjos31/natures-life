/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_07e878bc.mjs';
import 'clsx';
import { $ as $$Link, a as $$MainLayout } from './404_a1a2ee06.mjs';
import 'html-escaper';
import 'svgo';

const $$Astro = createAstro("https://astro-blog-cip.netlify.app");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "About", "description": "About description", "robots": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="bg-gradient2 flex mx-auto my-4 gap-5 max-w-3xl mt-8 p-8" aria-label="About Me"><div><img class="block mx-auto" src="/images/logo-removebg.png" alt="logo-natures-life"></div><div class="content"><!-- <h1 class="text-3xl font-bold dark:text-purple-light">Nature's Life</h1> --><p class="text-secondary-content pt-3 my-6">
En Nature's Llife, nos dedicamos a la venta de productos naturales
        online con las mejores materias primas del mercado. Nuestras hierbas
        naturales son seleccionadas cuidadosamente para garantizar su máxima
        calidad y eficacia.
</p><p class="text-secondary-content pt-3 my-6">
Con un tratamiento comprobado para sanar las enfermedades. Nuestros
        expertos en herbolaria han trabajado durante años para desarrollar
        fórmulas efectivas que puedan ayudar a las personas a mejorar su salud.
</p><p class="text-secondary-content pt-3 my-6">
Nature's Life es la opción perfecta para ti. Nuestros productos son
        seguros, eficaces y asequibles.
</p><p class="text-secondary-content pt-3 my-6">
Prueba nuestros productos hoy mismo y descubre la diferencia que pueden
        hacer en tu salud.
</p></div><div>${renderComponent($$result2, "Link", $$Link, { "href": "mailto:chris@codingpublic.dev", "style": "primary", "isFilled": true, "text": "Cot\xE1ctanos" })}</div></section>` })}`;
}, "/home/jose/astro-projects/natures-&-life/src/pages/about.astro", void 0);

const $$file = "/home/jose/astro-projects/natures-&-life/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
