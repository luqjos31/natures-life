/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_07e878bc.mjs';
import 'clsx';
import { f as formatBlogPostsCollections, $ as $$Link, a as $$MainLayout } from './404_a1a2ee06.mjs';
import { g as getCollection, $ as $$PostCard } from './__3e38c182.mjs';
import 'html-escaper';
import 'svgo';
import '@astrojs/internal-helpers/path';

const $$Astro = createAstro("https://astro-blog-cip.netlify.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await getCollection("blog");
  const formattedPosts = formatBlogPostsCollections(allPosts, {
    sortByDate: true,
    filterOutDrafts: false
  });
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="block mx-auto my-4 gap-5 max-w-3xl mt-8 p-8" aria-label="About Me"><div><img class="block mx-auto" src="/images/logo-removebg.png" alt="logo-natures-life"></div><div class="content"><!-- <h1 class="text-6xl font-bold dark:text-white-light my-8">
        Nature's Life
      </h1> --><p class="text-2xl text-secondary-content pt-3 my-6">
En Nature's Llife, nos dedicamos a la venta de productos naturales
        online con las mejores materias primas del mercado. Nuestras hierbas
        naturales son seleccionadas cuidadosamente para garantizar su máxima
        calidad y eficacia.
</p><p class="text-2xl text-secondary-content pt-3 my-6">
Con un tratamiento comprobado para sanar las enfermedades. Nuestros
        expertos en herbolaria han trabajado durante años para desarrollar
        fórmulas efectivas que puedan ayudar a las personas a mejorar su salud.
</p><p class="text-2xl text-secondary-content pt-3 my-6">
Nature's Life es la opción perfecta para ti. Nuestros productos son
        seguros, eficaces y asequibles.
</p><p class="text-2xl text-secondary-content pt-3 my-6">
Prueba nuestros productos hoy mismo y descubre la diferencia que pueden
        hacer en tu salud.
</p><h2 class="text-center my-4 pt-8 text-5xl font-extrabold dark:text-white-light">
Nature's Life
</h2><p class="text-2xl text-secondary-content pt-3 my-6">
La mejor calidad en productos naturales!
</p></div><div>${renderComponent($$result2, "Link", $$Link, { "href": "mailto:chris@codingpublic.dev", "style": "primary", "isFilled": true, "text": "Suscr\xEDbete" })}</div></section><section class="" aria-label="New Blog Posts"><h2 class="text-center mt-4 pt-8 text-5xl font-extrabold dark:text-white-light">
Nuestro Productos
</h2><!-- <div class="flex flex-wrap justify-evenly p-8"> --><div class="mt-4 p-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">${formattedPosts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "frontmatter": post, "tagType": "h3" })}`)}</div></section>` })}`;
}, "/home/jose/astro-projects/natures-&-life/src/pages/index.astro", void 0);

const $$file = "/home/jose/astro-projects/natures-&-life/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
