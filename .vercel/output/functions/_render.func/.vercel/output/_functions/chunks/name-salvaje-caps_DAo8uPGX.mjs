import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bb6plhSS.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>El <strong>Ñame salvaje</strong>, también conocido como dioscorea, es un tubérculo ancestral que ha sido utilizado durante siglos en diversas culturas por sus propiedades medicinales y nutricionales. Conocido por su sabor ligeramente dulce y su textura harinosa, el ñame salvaje ofrece una amplia gama de beneficios para la salud.</p>\n<p><strong>¿Cómo funciona?</strong></p>\n<p><strong>Fuente de energía:</strong> El ñame salvaje es rico en carbohidratos complejos, que proporcionan energía de liberación lenta, ideal para mantener los niveles de energía estables durante todo el día.<br>\n<strong>Alto contenido de fibra:</strong> La fibra contenida en el ñame salvaje favorece la digestión, previene el estreñimiento y ayuda a mantener un peso saludable.<br>\n<strong>Rica en nutrientes:</strong> El ñame salvaje es una buena fuente de vitaminas del complejo B, vitamina C, minerales como potasio y magnesio, y antioxidantes, que contribuyen a fortalecer el sistema inmunológico y proteger las células del daño.</p>\n<p><strong>Beneficios adicionales:</strong></p>\n<p><strong>Salud cardiovascular:</strong> El potasio presente en el ñame salvaje ayuda a regular la presión arterial y reduce el riesgo de enfermedades cardiovasculares.<br>\n<strong>Salud digestiva:</strong> La fibra soluble del ñame salvaje favorece el crecimiento de bacterias beneficiosas en el intestino, mejorando la salud digestiva.<br>\n<strong>Control de la glucemia:</strong> El índice glucémico moderado del ñame salvaje lo hace adecuado para personas con diabetes, ya que ayuda a controlar los niveles de azúcar en sangre.<br>\n<strong>Propiedades antiinflamatorias:</strong> Algunos compuestos presentes en el ñame salvaje tienen propiedades antiinflamatorias, lo que puede ayudar a reducir la inflamación en el cuerpo.</p>\n<p><strong>¿Para quién es este producto?</strong></p>\n<p>El <strong>ñame salvaje</strong> es adecuado para personas que buscan:</p>\n<ul>\n<li>Aumentar su energía de forma natural.</li>\n<li>Mejorar su digestión y prevenir el estreñimiento.</li>\n<li>Fortalecer su sistema inmunológico.</li>\n<li>Controlar sus niveles de azúcar en sangre.</li>\n<li>Reducir la inflamación en el cuerpo.</li>\n</ul>\n<p><strong>¿Por qué elegir el ñame salvaje?</strong></p>\n<p><strong>Natural y sostenible:</strong> El ñame salvaje es un alimento natural y sostenible, cultivado de forma tradicional en muchas regiones.<br>\n<strong>Versátil:</strong> Se puede consumir de diversas formas, tanto en platos salados como dulces.<br>\n<strong>Sabor delicioso:</strong> Su sabor ligeramente dulce y su textura harinosa lo hacen muy agradable al paladar.</p>\n<p><strong>¡Descubre los beneficios del ñame salvaje y añade este superalimento a tu dieta!</strong></p>";

				const frontmatter = {"title":"Ñame Salvaje","date":"2023-12-16T00:00:00.000Z","author":"José Lúquez","image":{"src":"/images/envase-productos/capsulas/name-salvaje-caps.png","alt":"name-salvaje-capsulas"},"description":"Ñame Salvaje es tu respuesta natural para el equilibrio hormonal","draft":false,"category":"Capsulas"};
				const file = "/home/jose/astro-projects/natures-&-life/src/content/blog/name-salvaje-caps.md";
				const url = undefined;
				function rawContent() {
					return "El **Ñame salvaje**, también conocido como dioscorea, es un tubérculo ancestral que ha sido utilizado durante siglos en diversas culturas por sus propiedades medicinales y nutricionales. Conocido por su sabor ligeramente dulce y su textura harinosa, el ñame salvaje ofrece una amplia gama de beneficios para la salud.\n\n**¿Cómo funciona?**\n\n**Fuente de energía:** El ñame salvaje es rico en carbohidratos complejos, que proporcionan energía de liberación lenta, ideal para mantener los niveles de energía estables durante todo el día.   \n**Alto contenido de fibra:** La fibra contenida en el ñame salvaje favorece la digestión, previene el estreñimiento y ayuda a mantener un peso saludable.   \n**Rica en nutrientes:** El ñame salvaje es una buena fuente de vitaminas del complejo B, vitamina C, minerales como potasio y magnesio, y antioxidantes, que contribuyen a fortalecer el sistema inmunológico y proteger las células del daño.   \n\n**Beneficios adicionales:**\n\n**Salud cardiovascular:** El potasio presente en el ñame salvaje ayuda a regular la presión arterial y reduce el riesgo de enfermedades cardiovasculares.   \n**Salud digestiva:** La fibra soluble del ñame salvaje favorece el crecimiento de bacterias beneficiosas en el intestino, mejorando la salud digestiva.   \n**Control de la glucemia:** El índice glucémico moderado del ñame salvaje lo hace adecuado para personas con diabetes, ya que ayuda a controlar los niveles de azúcar en sangre.   \n**Propiedades antiinflamatorias:** Algunos compuestos presentes en el ñame salvaje tienen propiedades antiinflamatorias, lo que puede ayudar a reducir la inflamación en el cuerpo.   \n\n**¿Para quién es este producto?**\n\nEl **ñame salvaje** es adecuado para personas que buscan:\n\n- Aumentar su energía de forma natural.\n- Mejorar su digestión y prevenir el estreñimiento.\n- Fortalecer su sistema inmunológico.\n- Controlar sus niveles de azúcar en sangre.\n- Reducir la inflamación en el cuerpo.\n\n**¿Por qué elegir el ñame salvaje?**\n\n**Natural y sostenible:** El ñame salvaje es un alimento natural y sostenible, cultivado de forma tradicional en muchas regiones.   \n**Versátil:** Se puede consumir de diversas formas, tanto en platos salados como dulces.   \n**Sabor delicioso:** Su sabor ligeramente dulce y su textura harinosa lo hacen muy agradable al paladar.   \n\n**¡Descubre los beneficios del ñame salvaje y añade este superalimento a tu dieta!**";
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