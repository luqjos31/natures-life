import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_07e878bc.mjs';
import 'clsx';
import 'html-escaper';

const html = "<p>Diabet forte es un suplemento natural que ayuda a controlar la diabetes de forma segura y eficaz. Sus ingredientes incluyen:</p>\n<p>Glucosamina: La glucosamina ayuda a mantener la salud de las células beta del páncreas, que producen insulina.\nL-carnitina: La L-carnitina ayuda a transportar la glucosa a las células, donde se puede utilizar como energía.\nCromo: El cromo ayuda a mejorar la sensibilidad a la insulina.\nPor qué ingerirlo en vez de usar productos farmacéuticos:</p>\n<p>Diabet forte es un suplemento natural que no tiene los mismos efectos secundarios que los medicamentos farmacéuticos para la diabetes, como la hipoglucemia, el aumento de peso y la retención de líquidos.</p>";

				const frontmatter = {"title":"Control Natural de la Diabetes con Diabet Forte","date":"2023-10-28T00:00:00.000Z","author":"José Lúquez","image":{"src":"/images/envase-productos/diabet-forte.png","alt":"diabet-forte"},"description":"Diabet forte es un suplemento natural que ayuda a controlar la diabetes de forma segura y eficaz.","draft":false,"category":"Nuevo"};
				const file = "/home/jose/astro-projects/natures-&-life/src/content/blog/post-2.md";
				const url = undefined;
				function rawContent() {
					return "Diabet forte es un suplemento natural que ayuda a controlar la diabetes de forma segura y eficaz. Sus ingredientes incluyen:\n\nGlucosamina: La glucosamina ayuda a mantener la salud de las células beta del páncreas, que producen insulina.\nL-carnitina: La L-carnitina ayuda a transportar la glucosa a las células, donde se puede utilizar como energía.\nCromo: El cromo ayuda a mejorar la sensibilidad a la insulina.\nPor qué ingerirlo en vez de usar productos farmacéuticos:\n\nDiabet forte es un suplemento natural que no tiene los mismos efectos secundarios que los medicamentos farmacéuticos para la diabetes, como la hipoglucemia, el aumento de peso y la retención de líquidos.\n";
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
