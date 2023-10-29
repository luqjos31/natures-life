/** @type {import('tailwindcss').Config} */
module.exports = {
	daisyui: {
    themes: ["light"],
  },
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors:{
			"blue-light": "#00B7FF",
			"green-dark": "#003300",
			"purple-light": "#5D7A98",
			"white-light": "#D6F4FF",
		}
		,
		extend: {
			backgroundImage :{
			"gradient1": "url('./images/mesh-gradient.png')",
			"gradient2": "url('./images/mesh-gradient-2.png')",
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	
		require("daisyui")


],
}
