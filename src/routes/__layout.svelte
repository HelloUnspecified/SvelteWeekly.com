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

	Sentry.init({
		dsn: logging.dsn,
		release: config.version,
		environment: logging.environment,
		debug: false,
		attachStacktrace: true,
		integrations: [new Integrations.BrowserTracing()]
	});
	
	Sentry.configureScope((scope) => {
		scope.setTag('correlationId', correlationId);
	});
	
</script>

<script>
	import { onMount, setContext } from 'svelte';
	import { navigating, session, page } from '$app/stores';

	import Preloading from '$components/preloading.svelte';

	function copy(e) {
		const selection = document.getSelection();
		const appededString = `${selection.toString()}\r\n\nRead more at: ${$page.url.href}.`;

		e.clipboardData.setData('text/plain', appededString);
	}
</script>

<div on:copy|preventDefault={copy}>
	{#if $navigating}
		<Preloading />
	{/if}

	<slot />
</div>

<style>
	
</style>
