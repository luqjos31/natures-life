/** @type {import('tailwindcss').Config} */
module.exports = {
		daisyui:{
		themes:["corporate"]
	},
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	
		colors:{
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
