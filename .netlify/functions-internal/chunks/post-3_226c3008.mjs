import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_07e878bc.mjs';
import 'clsx';
import 'html-escaper';

const html = "<p>El Ginkgo Biloba es conocido por su capacidad para mejorar la función cerebral y la memoria. Estas cápsulas contienen extracto de la hoja de Ginkgo, aumentando la circulación sanguínea en tu cerebro y mejorando la concentración y la memoria. Elige este suplemento natural en lugar de productos farmacéuticos que a menudo vienen con efectos secundarios y riesgos para la salud.</p>";

				const frontmatter = {"title":"Con Ginkgo Biloba potencia tu mente y memoria","date":"2023-10-28T00:00:00.000Z","author":"José Lúquez","image":{"src":"/images/envase-productos/ginkgo-biloba.png","alt":"ginkgo-biloba"},"description":"El Ginkgo Biloba es conocido por su capacidad para mejorar la función cerebral y la memoria.","draft":false,"category":"Nuevo"};
				const file = "/home/jose/astro-projects/natures-&-life/src/content/blog/post-3.md";
				const url = undefined;
				function rawContent() {
					return "El Ginkgo Biloba es conocido por su capacidad para mejorar la función cerebral y la memoria. Estas cápsulas contienen extracto de la hoja de Ginkgo, aumentando la circulación sanguínea en tu cerebro y mejorando la concentración y la memoria. Elige este suplemento natural en lugar de productos farmacéuticos que a menudo vienen con efectos secundarios y riesgos para la salud.\n";
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
