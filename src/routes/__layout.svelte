<script context="module">
	import '../app.css';
	import 'lazysizes';

	import { browser } from '$app/env';
	import { v4 as uuidv4 } from 'uuid';
	import { dev } from '$app/env';
	import * as Sentry from '@sentry/browser';
	import { Integrations } from '@sentry/tracing';
	import lodash from 'lodash';
	import config from '$utils/config';

	// Sentry.init({
	// 	dsn: logging.dsn,
	// 	release: config.version,
	// 	environment: logging.environment,
	// 	debug: false,
	// 	attachStacktrace: true,
	// 	integrations: [new Integrations.BrowserTracing()]
	// });

	// Sentry.configureScope((scope) => {
	// 	scope.setTag('correlationId', correlationId);
	// });
</script>

<script>
	import { navigating, page } from '$app/stores';
	import Preloading from '$components/preloading.svelte';
	import Footer from '$components/Footer.svelte';
	import NavBar from '$components/NavBar.svelte';

	function copy(e) {
		const selection = document.getSelection();
		const appededString = `${selection.toString()}\r\n\nRead more at: ${$page.url.href}.`;

		e.clipboardData.setData('text/plain', appededString);
	}
</script>

<main on:copy|preventDefault={copy}>
	{#if $navigating}
		<Preloading />
	{/if}

	<div class="flex min-h-screen flex-col">
		<NavBar />

		<section class="flex-grow">
			<slot />
		</section>

		<Footer />
	</div>
</main>

<style>
	:global(a) {
		@apply text-gray-400;
	}
	:global(a:hover) {
		@apply text-svelte-blue;
		@apply font-medium;
	}
</style>
