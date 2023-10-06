/** @type {import('tailwindcss').Config} */
module.exports = {
	daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	
		require("daisyui")


],
}
