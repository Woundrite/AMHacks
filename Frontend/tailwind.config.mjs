// tailwind.config.cjs
const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		// ...
		// make sure it's pointing to the ROOT node_module
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./public/index.html",
		"./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	darkMode: "class",
	plugins: [heroui()]
}