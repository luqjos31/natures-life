import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_07e878bc.mjs';
import 'clsx';
import 'html-escaper';

const html = "<p>Lochita es una planta medicinal que se ha utilizado durante siglos en la medicina tradicional mexicana para tratar los problemas de la próstata. Sus beneficios para la salud incluyen:</p>\n<p>Alivio de los problemas de la próstata: Lochita ayuda a reducir la inflamación de la próstata, lo que puede aliviar los síntomas como la micción frecuente, el dolor al orinar y la dificultad para orinar.\nMejora de la salud sexual: Lochita ayuda a mejorar la función sexual en los hombres.\nPor qué ingerirla en vez de usar productos farmacéuticos:</p>\n<p>Lochita es un suplemento natural que es seguro y eficaz para la mayoría de los hombres. No tiene los mismos efectos secundarios que los medicamentos farmacéuticos para la próstata, como la impotencia, la disminución de la libido y la infertilidad.</p>";

				const frontmatter = {"title":"La Lochita alta en energía y vitalidad","date":"2023-10-28T00:00:00.000Z","author":"José Lúquez","image":{"src":"/images/envase-productos/lochita.png","alt":"lochita"},"description":"Lochita es tu tónico natural que impulsa tu energía y vitalidad","draft":false,"category":"Nuevo"};
				const file = "/home/jose/astro-projects/natures-&-life/src/content/blog/post-4.md";
				const url = undefined;
				function rawContent() {
					return "Lochita es una planta medicinal que se ha utilizado durante siglos en la medicina tradicional mexicana para tratar los problemas de la próstata. Sus beneficios para la salud incluyen:\n\nAlivio de los problemas de la próstata: Lochita ayuda a reducir la inflamación de la próstata, lo que puede aliviar los síntomas como la micción frecuente, el dolor al orinar y la dificultad para orinar.\nMejora de la salud sexual: Lochita ayuda a mejorar la función sexual en los hombres.\nPor qué ingerirla en vez de usar productos farmacéuticos:\n\nLochita es un suplemento natural que es seguro y eficaz para la mayoría de los hombres. No tiene los mismos efectos secundarios que los medicamentos farmacéuticos para la próstata, como la impotencia, la disminución de la libido y la infertilidad.";
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
