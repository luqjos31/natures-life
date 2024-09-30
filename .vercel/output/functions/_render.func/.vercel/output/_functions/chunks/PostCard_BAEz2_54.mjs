import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderTransition, d as renderComponent, e as createAstro } from './astro/server_Bb6plhSS.mjs';
import 'kleur/colors';
import { $ as $$Link } from './MainLayout_1tz4kbwX.mjs';
/* empty css                            */

const $$Astro = createAstro();
const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { frontmatter, tagType } = Astro2.props;
  const { title, date, author, image, image2, description, category } = frontmatter.data;
  const { slug } = Astro2.params;
  return renderTemplate`<!-- <pre>{ JSON.stringify(frontmatter,null,2)}</pre> -->${maybeRenderHead()}<article class="card mt-8"> <div class="card card-compact flex flex-row lg:flex-col shadow-xl p-0"> <!--


    <small class="bg-blue-700 rounded">
      <a
        href={\`/category/\${slugify(category)}/\`}
        class="text-white bg-yellow-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-2 py-2 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-600 focus:outline-none dark:focus:ring-blue-800 mt-4"
        >{category}</a
      >
    </small>

   --> <div class="ml-auto mr-auto mt-3 flex-shrink-0 p-4 transition hover:scale-110"> <a${addAttribute(`/blog/${frontmatter.slug}`, "href")} aria-hidden="true" tabindex="-1"> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} class="object-contain object-center h-40 lg:h-52 md:h-28"${addAttribute(renderTransition($$result, "syetdpr7", "", `img-${slug}`), "data-astro-transition-scope")}> </a> </div> <div class="card-body p-8 flex-grow-1"> <h2 class="card-title"> <a${addAttribute(`/blog/${frontmatter.slug}`, "href")} class="hover:text-primary font-bold text-center">${title}</a> </h2> <h3>${description}</h3> <div class="flex items-center"> <!-- sm --> <div class="rating rating-sm"> <input type="radio" name="rating-6" class="mask mask-star-2 bg-warning" checked="checked"> <input type="radio" name="rating-6" class="mask mask-star-2 bg-warning" checked="checked"> <input type="radio" name="rating-6" class="mask mask-star-2 bg-warning" checked="checked"> <input type="radio" name="rating-6" class="mask mask-star-2 bg-warning" checked="checked"> <input type="radio" name="rating-6" class="mask mask-star-2 bg-warning" checked="checked"> </div> <p class="ml-5 ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
4.99
</p> </div> <!-- <small>
        by <a href={\`/author/\${slugify(author)}/\`}>{author}</a> - {
          formatDate(date.toDateString())
        }
      </small> --> <!--  <p class="my-4">{description}</p>--> <div class="card-actions justify-end text-white-light"> ${renderComponent($$result, "Link", $$Link, { "href": `/blog/${frontmatter.slug}`, "isFilled": true, "text": "Leer Post", "style": "secondary" })} </div> </div> </div> <!-- <a href={\`/blog/\${frontmatter.slug}\`} aria-hidden="true" tabindex="-1">
      <img class="mt-2" src={image.src} alt={image.alt} width="200" />
    </a> --> </article>`;
}, "/home/jose/astro-projects/natures-&-life/src/components/PostCard.astro", "self");

export { $$PostCard as $ };
