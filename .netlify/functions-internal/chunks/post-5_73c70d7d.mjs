import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_07e878bc.mjs';
import 'clsx';
import 'html-escaper';

const html = "<p>Ñame Salvaje es tu respuesta natural para el equilibrio hormonal. Estas cápsulas alivian los síntomas de la menopausia y el síndrome premenstrual de forma suave y efectiva. A diferencia de los productos farmacéuticos que a menudo vienen con efectos secundarios no deseados, Ñame Salvaje ofrece una solución libre de riesgos para las mujeres que buscan comodidad en sus cambios hormonales.</p>";

				const frontmatter = {"title":"Equilibrio hormonal con Ñame Salvaje","date":"2023-10-28T00:00:00.000Z","author":"José Lúquez","image":{"src":"/images/envase-productos/name-salvaje.png","alt":"name-salvaje"},"description":"Ñame Salvaje es tu respuesta natural para el equilibrio hormonal","draft":false,"category":"Nuevo"};
				const file = "/home/jose/astro-projects/natures-&-life/src/content/blog/post-5.md";
				const url = undefined;
				function rawContent() {
					return "Ñame Salvaje es tu respuesta natural para el equilibrio hormonal. Estas cápsulas alivian los síntomas de la menopausia y el síndrome premenstrual de forma suave y efectiva. A diferencia de los productos farmacéuticos que a menudo vienen con efectos secundarios no deseados, Ñame Salvaje ofrece una solución libre de riesgos para las mujeres que buscan comodidad en sus cambios hormonales.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
