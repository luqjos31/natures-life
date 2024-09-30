import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bb6plhSS.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>La <strong>Chancapiedra</strong>, también conocida como quiebrapiedra, es una planta medicinal tradicionalmente utilizada para tratar problemas renales y hepáticos. Sus propiedades diuréticas y depurativas la convierten en un excelente aliado para mantener tu organismo limpio y saludable.</p>\n<p><strong>¿Cómo funciona?</strong></p>\n<p><strong>Protege el hígado:</strong> La Chancapiedra ayuda a proteger las células del hígado de daños causados por toxinas y sustancias nocivas.<br>\n<strong>Facilita la eliminación de cálculos renales:</strong> Sus propiedades diuréticas favorecen la eliminación de cálculos renales y previenen su formación.<br>\n<strong>Mejora la función renal:</strong> Estimula la función renal, ayudando a eliminar los desechos del organismo.<br>\n<strong>Propiedades antiinflamatorias:</strong> Reduce la inflamación en el tracto urinario, aliviando el dolor y la irritación.<br>\n<strong>Acción antioxidante:</strong> Neutraliza los radicales libres, protegiendo las células del daño oxidativo.</p>\n<p><strong>Beneficios adicionales:</strong></p>\n<p><strong>Mejora la digestión:</strong> Favorece la producción de bilis, mejorando la digestión de las grasas.<br>\n<strong>Regula los niveles de azúcar en sangre:</strong> Puede ayudar a controlar los niveles de glucosa en sangre.\n<strong>Fortalece el sistema inmunológico:</strong> Contribuye a fortalecer las defensas naturales del organismo.</p>\n<p><strong>¿Para quién es este producto?</strong></p>\n<p>Nuestro suplemento de Chancapiedra está especialmente indicado para personas que desean:</p>\n<ul>\n<li>Mejorar la salud renal</li>\n<li>Prevenir la formación de cálculos renales</li>\n<li>Desintoxicar el hígado</li>\n<li>Mejorar la digestión</li>\n<li>Fortalecer su sistema inmunológico</li>\n</ul>\n<p><strong>¿Por qué elegir nuestro suplemento de Chancapiedra?</strong></p>\n<p><strong>Alta calidad:</strong> Elaborado con Chancapiedra de origen natural y cultivada de forma sostenible.<br>\n<strong>Estandarizado:</strong> Nuestro producto garantiza una concentración constante de los principios activos.<br>\n<strong>Fácil de tomar:</strong> Disponible en cápsulas para una fácil ingesta.</p>\n<p><strong>Modo de empleo:</strong></p>\n<p>Tomar 3 cápsulas al día, preferiblemente antes de las comidas.</p>\n<p><strong>Importante:</strong></p>\n<p>Aunque la <strong>Chancapiedra</strong> es un producto natural, es recomendable consultar a un profesional de la salud antes de comenzar cualquier nuevo tratamiento, especialmente si estás embarazada, lactando o tienes alguna condición médica.\nLos resultados pueden variar de una persona a otra.</p>";

				const frontmatter = {"title":"Chancapiedra","date":"2023-12-28T00:00:00.000Z","author":"José Lúquez","image":{"src":"/images/envase-productos/capsulas/chancapiedra-caps.png","alt":"name-salvaje-capsulas"},"description":"Tu aliado natural para la salud renal y hepática","draft":false,"category":"Capsulas"};
				const file = "/home/jose/astro-projects/natures-&-life/src/content/blog/chancapiedra-caps.md";
				const url = undefined;
				function rawContent() {
					return "\nLa **Chancapiedra**, también conocida como quiebrapiedra, es una planta medicinal tradicionalmente utilizada para tratar problemas renales y hepáticos. Sus propiedades diuréticas y depurativas la convierten en un excelente aliado para mantener tu organismo limpio y saludable.\n\n**¿Cómo funciona?**\n\n**Protege el hígado:** La Chancapiedra ayuda a proteger las células del hígado de daños causados por toxinas y sustancias nocivas.   \n**Facilita la eliminación de cálculos renales:** Sus propiedades diuréticas favorecen la eliminación de cálculos renales y previenen su formación.   \n**Mejora la función renal:** Estimula la función renal, ayudando a eliminar los desechos del organismo.   \n**Propiedades antiinflamatorias:** Reduce la inflamación en el tracto urinario, aliviando el dolor y la irritación.   \n**Acción antioxidante:** Neutraliza los radicales libres, protegiendo las células del daño oxidativo.   \n\n**Beneficios adicionales:**\n\n**Mejora la digestión:** Favorece la producción de bilis, mejorando la digestión de las grasas.   \n**Regula los niveles de azúcar en sangre:** Puede ayudar a controlar los niveles de glucosa en sangre.\n**Fortalece el sistema inmunológico:** Contribuye a fortalecer las defensas naturales del organismo.   \n\n**¿Para quién es este producto?**\n\nNuestro suplemento de Chancapiedra está especialmente indicado para personas que desean:\n\n- Mejorar la salud renal\n- Prevenir la formación de cálculos renales\n- Desintoxicar el hígado\n- Mejorar la digestión\n- Fortalecer su sistema inmunológico\n\n**¿Por qué elegir nuestro suplemento de Chancapiedra?**\n\n**Alta calidad:** Elaborado con Chancapiedra de origen natural y cultivada de forma sostenible.   \n**Estandarizado:** Nuestro producto garantiza una concentración constante de los principios activos.   \n**Fácil de tomar:** Disponible en cápsulas para una fácil ingesta.   \n\n**Modo de empleo:**\n\nTomar 3 cápsulas al día, preferiblemente antes de las comidas.\n\n**Importante:**\n\nAunque la **Chancapiedra** es un producto natural, es recomendable consultar a un profesional de la salud antes de comenzar cualquier nuevo tratamiento, especialmente si estás embarazada, lactando o tienes alguna condición médica.\nLos resultados pueden variar de una persona a otra.";
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
