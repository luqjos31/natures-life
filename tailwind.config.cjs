/** @type {import('tailwindcss').Config} */
module.exports = {
		daisyui:{
		themes:["corporate"]
	},
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	
		colors:{
			"white-gray":"#FBD288",
			"green-light":"#C6EBC5",
			"blue-light": "#00B7FF",
			"green-dark": "#003300",
			"purple-light": "#7A1CAC",
			"white-light": "#D6F4FF",
			"purple-nature": "#610C9F",
			"purple-dark":"#32012F",
	     	"gradientPurple": "linear-gradient(to right top, #2e073f, #400a44, #520e49, #64134c, #751a4f)",
		}
		,
		extend: {
		fontFamily:{
			body:[""],
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
			"leaf-image": "url('/images/hojas-verdes-purpuras.jpg')",
			"leaf-image-opacity": "url('/images/hojas-brillo-00.webp')",
			"gradientGreen":"linear-gradient(to right top, #051937, #003052, #00485b, #005e4d, #00712d);",
			"gradient-light": "linear-gradient(to right top, #dacbd9, #e1d7e3, #e8e3ec, #f1eff4, #fbfbfb);",
	"gradient-yellow":" linear-gradient(to right, #ff9100, #ffac00, #ffc800, #fde300, #f4ff00);"
		}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
    require("daisyui")
],
}
