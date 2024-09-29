/** @type {import('tailwindcss').Config} */
module.exports = {
		daisyui:{
		themes:["night","corporate"]
	},
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	
		colors:{
			"blue-light": "#00B7FF",
			"green-dark": "#003300",
			"purple-light": "#5D7A98",
			"white-light": "#D6F4FF",
			"purple-nature": "#610C9F"
		}
		,
		extend: {
		fontFamily:{
			body:["Roboto"],
			sans: [
        '"Inter var", sans-serif',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ],

		}
		,	
			backgroundImage :{
			"gradient1": "url('/images/mesh-gradient.png')",
			"gradient2": "url('/images/mesh-gradient-2.png')",
			"gradient-purple":"linear-gradient(to right top, #1f115a, #1f1156, #1f1153, #1f114f, #1f114c, #25114b, #2a1249, #2f1248, #391349, #431549, #4c174a, #54194a);",
			"leaf-image": "url('/images/hojas-verdes-purpuras.jpg')",
			"leaf-image-opacity": "url('/images/hojas-verdes-purpuras-opacity-2.jpg')",
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
    require("daisyui")
],
}
