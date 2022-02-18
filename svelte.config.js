import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

const dev = process.env.NODE_ENV === 'development' ? true : false;
console.log('process.env.NODE_ENV', dev);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	kit: {
		trailingSlash: 'never',
		serviceWorker: {
			register: false
		},
		vite: {
			build: {
				sourcemap: true
			},
			resolve: {
				alias: {
					$components: resolve('src/_components'),
					$elements: resolve('src/_elements'),
					$utils: resolve('src/_utils')
				}
			}
		},
		adapter: adapter()
	},
	preprocess: !dev
		? [
				preprocess({
					postcss: true,
					preserve: ['ld+json']
				})
		  ]
		: [
				preprocess({
					preserve: ['ld+json']
				})
		  ]
};

export default config;
