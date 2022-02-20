/* eslint-disable global-require */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			og: ['Roboto']
		},

		extend: {
			colors: {
				'this-offWhite': '#F7F7F7',
				'this-grey': '#353535',

				'svelte-blue': '#40B3FF',
				'svelte-orange': '#FF3E00',
				'svelte-gray': '#676778'
			}
		}
	},

	variants: {
		extend: {
			fontWeight: ['hover', 'focus']
		}
	},

	plugins: [
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio')
	]
};
