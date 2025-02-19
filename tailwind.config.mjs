/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'selector',
	theme: {
		extend: {
			typography: () => ({
				DEFAULT: {
					css: {
						"blockquote p:first-of-type::before": {
							content: 'none'
						},
						'blockquote p:last-of-type::after': {
							content: 'none',
						},
						'blockquote': {
							fontStyle: 'normal',
						},
					}
				},
			})
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
