import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bb6plhSS.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><strong>Daflonx</strong> es un complemento alimenticio que combina los beneficios de tres plantas medicinales: castaño de indias, escoba de carnicero y ginkgo biloba. Esta sinergia de ingredientes naturales lo convierte en una solución eficaz para mejorar la circulación sanguínea, especialmente en las piernas.</p>\n<p><strong>¿Cómo funciona?</strong></p>\n<p><strong>Mejora la circulación:</strong> Los flavonoides presentes en estas plantas fortalecen las paredes de las venas y capilares, mejorando la circulación sanguínea y reduciendo la sensación de pesadez en las piernas.<br>\n<strong>Reduce la inflamación:</strong> Ayuda a disminuir la inflamación en las venas, aliviando el dolor y la hinchazón.<br>\n<strong>Protege los vasos sanguíneos:</strong> Actúa como antioxidante, protegiendo los vasos sanguíneos del daño causado por los radicales libres.<br>\n<strong>Alivia los síntomas de la insuficiencia venosa:</strong> Reduce la aparición de varices, arañitas y otros síntomas asociados a la insuficiencia venosa crónica.</p>\n<p><strong>Beneficios adicionales:</strong></p>\n<p><strong>Mejora la memoria y la concentración:</strong> El ginkgo biloba contribuye a mejorar la función cognitiva.<br>\n<strong>Reduce la fatiga:</strong> Al mejorar la circulación, aumenta el aporte de oxígeno a los tejidos, reduciendo la sensación de fatiga.</p>\n<p><strong>¿Para quién es este producto?</strong></p>\n<p><strong>Daflonx</strong> está especialmente indicado para personas que sufren de:</p>\n<ul>\n<li>Varices</li>\n<li>Arañitas</li>\n<li>Hinchazón de piernas</li>\n<li>Sensación de pesadez en las piernas</li>\n<li>Piernas cansadas</li>\n<li>Insuficiencia venosa crónica</li>\n</ul>\n<p><strong>¿Por qué elegir Daflonx?</strong></p>\n<p><strong>Combinación sinérgica:</strong> La combinación de castaño de indias, escoba de carnicero y ginkgo biloba ofrece una acción completa sobre la circulación venosa.<br>\n<strong>Alta calidad:</strong> Elaborado con ingredientes naturales de primera calidad, sin aditivos artificiales.<br>\n<strong>Fácil de tomar:</strong> Disponible en diferentes presentaciones (cápsulas, comprimidos) para adaptarse a tus preferencias.<br>\n<strong>Modo de empleo:</strong></p>\n<p>Seguir las indicaciones del fabricante.</p>\n<p><strong>Importante:</strong></p>\n<p>Aunque <strong>Daflonx</strong> es un producto natural, es recomendable consultar a un profesional de la salud antes de comenzar cualquier nuevo tratamiento, especialmente si estás embarazada, lactando o tienes alguna condición médica.\nLos resultados pueden variar de una persona a otra.</p>\n<p><strong>¡Descubre la sensación de piernas ligeras y descansadas con Daflonx!</strong></p>";

				const frontmatter = {"title":"Daflonx","date":"2023-12-25T00:00:00.000Z","author":"José Lúquez","image":{"src":"/images/envase-productos/capsulas/daflonx-caps.png","alt":"daflonx-capsulas"},"description":"Tu aliado para mejorar la circulación y el tratamiento de varices","draft":false,"category":"Capsulas"};
				const file = "/home/jose/astro-projects/natures-&-life/src/content/blog/daflonx-caps.md";
				const url = undefined;
				function rawContent() {
					return "\n**Daflonx** es un complemento alimenticio que combina los beneficios de tres plantas medicinales: castaño de indias, escoba de carnicero y ginkgo biloba. Esta sinergia de ingredientes naturales lo convierte en una solución eficaz para mejorar la circulación sanguínea, especialmente en las piernas.\n\n**¿Cómo funciona?**\n\n**Mejora la circulación:** Los flavonoides presentes en estas plantas fortalecen las paredes de las venas y capilares, mejorando la circulación sanguínea y reduciendo la sensación de pesadez en las piernas.   \n**Reduce la inflamación:** Ayuda a disminuir la inflamación en las venas, aliviando el dolor y la hinchazón.   \n**Protege los vasos sanguíneos:** Actúa como antioxidante, protegiendo los vasos sanguíneos del daño causado por los radicales libres.   \n**Alivia los síntomas de la insuficiencia venosa:** Reduce la aparición de varices, arañitas y otros síntomas asociados a la insuficiencia venosa crónica.   \n\n**Beneficios adicionales:**\n\n**Mejora la memoria y la concentración:** El ginkgo biloba contribuye a mejorar la función cognitiva.   \n**Reduce la fatiga:** Al mejorar la circulación, aumenta el aporte de oxígeno a los tejidos, reduciendo la sensación de fatiga.   \n\n**¿Para quién es este producto?**\n\n**Daflonx** está especialmente indicado para personas que sufren de:\n\n- Varices\n- Arañitas\n- Hinchazón de piernas\n- Sensación de pesadez en las piernas\n- Piernas cansadas\n- Insuficiencia venosa crónica\n\n**¿Por qué elegir Daflonx?**\n\n**Combinación sinérgica:** La combinación de castaño de indias, escoba de carnicero y ginkgo biloba ofrece una acción completa sobre la circulación venosa.   \n**Alta calidad:** Elaborado con ingredientes naturales de primera calidad, sin aditivos artificiales.   \n**Fácil de tomar:** Disponible en diferentes presentaciones (cápsulas, comprimidos) para adaptarse a tus preferencias.   \n**Modo de empleo:**   \n\nSeguir las indicaciones del fabricante.\n\n**Importante:**\n\nAunque **Daflonx** es un producto natural, es recomendable consultar a un profesional de la salud antes de comenzar cualquier nuevo tratamiento, especialmente si estás embarazada, lactando o tienes alguna condición médica.\nLos resultados pueden variar de una persona a otra.\n\n**¡Descubre la sensación de piernas ligeras y descansadas con Daflonx!**";
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