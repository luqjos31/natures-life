/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, e as createAstro, m as maybeRenderHead } from '../chunks/astro/server_Bb6plhSS.mjs';
import 'kleur/colors';
import { $ as $$Link, a as $$MainLayout } from '../chunks/MainLayout_1tz4kbwX.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="block mx-auto my-4 gap-5 max-w-3xl mt-8 p-8" aria-label="About Me"> <div> <img class="block mx-auto" src="/images/logo-removebg.png" alt="logo-natures-life"> </div> <div class="content"> <!-- <h1 class="text-6xl font-bold dark:text-white-light my-8">
        Nature's Life
      </h1> --> <p class="text-xl pt-3 my-6">
En <strong>Nature's Llife</strong>, nos dedicamos a la venta de
        productos naturales online con las mejores materias primas del mercado.
        Nuestras hierbas naturales son seleccionadas cuidadosamente para
        garantizar su máxima calidad y eficacia.
</p> </div> <p class="text-xl pt-3 my-6">
Con un tratamiento comprobado para sanar las enfermedades. Nuestros
      expertos en herbolaria han trabajado durante años para desarrollar
      fórmulas efectivas que puedan ayudar a las personas a mejorar su salud.
</p> <p class="text-xl pt-3 my-6"> <strong> Nature's Life</strong> es la opción perfecta para ti. Nuestros
      productos son seguros, eficaces y asequibles.
</p> <div> <img src="/images/manos-hierba-molida-ai.gif" alt="manos-hierba-molida"> </div> <p class="text-xl pt-3 my-6">
El producto final es un reflejo del trabajo arduo de cada día. Podrás
      evidenciar la calidad de los productos en el momento de adquirirlos y
      consumirlos, pero primero tendrás que ver la variedad de presentaciones
      que tenemos actualmente.
</p> <div class="card-actions mt-4 justify-center text-white-light"> ${renderComponent($$result2, "Link", $$Link, { "href": "/category/capsulas", "style": "primary", "isFilled": true, "text": "Ir a Productos" })} </div> <!--
    <h2 class="text-center my-4 pt-8 text-5xl font-extrabold">Nature's Life</h2>
    <p class="text-2xl pt-3 my-6 font-light">
      La mejor calidad en productos naturales!
    </p>

    <div>
      <Link
        href="mailto:chris@codingpublic.dev"
        style="primary"
        isFilled={true}
        text="Suscríbete"
      />
    </div>

 --> </section>   ` })}`;
}, "/home/jose/astro-projects/natures-&-life/src/pages/index.astro", void 0);

const $$file = "/home/jose/astro-projects/natures-&-life/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
