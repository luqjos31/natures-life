import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_07e878bc.mjs';
import 'clsx';
import 'html-escaper';

const html = "<p>La centella asiática es una hierba medicinal que se ha utilizado durante siglos en la medicina tradicional china y ayurvédica. Sus beneficios para la salud incluyen:</p>\n<p>Curación de heridas: La centella asiática contiene compuestos que promueven la cicatrización de heridas y la regeneración de la piel.\nMejora de la circulación: La centella asiática ayuda a mejorar la circulación sanguínea, lo que puede ayudar a reducir la hinchazón y el dolor.\nCombate la celulitis: La centella asiática ayuda a reducir la apariencia de la celulitis al aumentar la producción de colágeno y elastina.\nPor qué ingerirla en vez de usar productos farmacéuticos:</p>\n<p>La centella asiática es un suplemento natural que es seguro y eficaz para la mayoría de las personas. No tiene los mismos efectos secundarios que los medicamentos farmacéuticos, como la hinchazón, las náuseas y los vómitos.</p>";

				const frontmatter = {"title":"Maravillosa Centella Asiática para la piel y la mente","date":"2023-10-28T00:00:00.000Z","author":"José Lúquez","image":{"src":"/images/envase-productos/centella-asiatica.png","alt":"centella-asiatica"},"description":"La centella asiática es una hierba medicinal que se ha utilizado durante siglos en la medicina tradicional china y ayurvédica.","draft":false,"category":"Nuevo"};
				const file = "/home/jose/astro-projects/natures-&-life/src/content/blog/post-1.md";
				const url = undefined;
				function rawContent() {
					return "\nLa centella asiática es una hierba medicinal que se ha utilizado durante siglos en la medicina tradicional china y ayurvédica. Sus beneficios para la salud incluyen:\n\nCuración de heridas: La centella asiática contiene compuestos que promueven la cicatrización de heridas y la regeneración de la piel.\nMejora de la circulación: La centella asiática ayuda a mejorar la circulación sanguínea, lo que puede ayudar a reducir la hinchazón y el dolor.\nCombate la celulitis: La centella asiática ayuda a reducir la apariencia de la celulitis al aumentar la producción de colágeno y elastina.\nPor qué ingerirla en vez de usar productos farmacéuticos:\n\nLa centella asiática es un suplemento natural que es seguro y eficaz para la mayoría de las personas. No tiene los mismos efectos secundarios que los medicamentos farmacéuticos, como la hinchazón, las náuseas y los vómitos.";
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
