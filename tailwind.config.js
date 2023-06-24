/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'orchid': '#7F867B',
				'orchid-dark': '#40433e',
				'coffee-white': '#AF9F8C',
				'coffee': '#585046',
				'coffee-dark': '#23201c',
				'pale': '#E3E4E0',
			}
		}
	},
	plugins: []
};
