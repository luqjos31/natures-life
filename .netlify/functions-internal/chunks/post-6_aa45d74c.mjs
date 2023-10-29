import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_07e878bc.mjs';
import 'clsx';
import 'html-escaper';

const html = "<p>Saw palmetto es un árbol medicinal que se ha utilizado durante siglos en la medicina tradicional nativa americana para tratar los problemas de la próstata. Sus beneficios para la salud incluyen:</p>\n<p>Reducción de la inflamación: Saw palmetto ayuda a reducir la inflamación de la próstata, lo que puede aliviar los síntomas como la micción frecuente, el dolor al orinar y la dificultad para orinar.\nMejora de la salud sexual: Saw palmetto ayuda a mejorar la función sexual en los hombres.\nPor qué ingerirla en vez de usar productos farmacéuticos:</p>\n<p>Saw palmetto es un suplemento natural que es seguro y eficaz para la mayoría de los hombres. No tiene los mismos efectos secundarios que los medicamentos farmacéutico</p>";

				const frontmatter = {"title":"Salud de la próstata con Saw Palmetto Natural","date":"2023-10-28T00:00:00.000Z","author":"José Lúquez","image":{"src":"/images/envase-productos/saw-palmetto.png","alt":"saw-palmetto"},"description":"Saw Palmetto es la solución natural para mantener la salud de la próstata","draft":false,"category":"Nuevo"};
				const file = "/home/jose/astro-projects/natures-&-life/src/content/blog/post-6.md";
				const url = undefined;
				function rawContent() {
					return "\nSaw palmetto es un árbol medicinal que se ha utilizado durante siglos en la medicina tradicional nativa americana para tratar los problemas de la próstata. Sus beneficios para la salud incluyen:\n\nReducción de la inflamación: Saw palmetto ayuda a reducir la inflamación de la próstata, lo que puede aliviar los síntomas como la micción frecuente, el dolor al orinar y la dificultad para orinar.\nMejora de la salud sexual: Saw palmetto ayuda a mejorar la función sexual en los hombres.\nPor qué ingerirla en vez de usar productos farmacéuticos:\n\nSaw palmetto es un suplemento natural que es seguro y eficaz para la mayoría de los hombres. No tiene los mismos efectos secundarios que los medicamentos farmacéutico\n";
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
