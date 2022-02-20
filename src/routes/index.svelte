<script>
	import seoMetaTags from '$utils/seo/metaTags';

	import Seo from '$components/Seo.svelte';
	import Revue from '$components/Revue.svelte';
	import Testimonials from '$components/Testimonials.svelte';
	import TrustedBy from '$components/TrustedBy.svelte';

	import Hero from './_root/Hero.svelte';

	const metaTags = ((title = 'Welcome to Svelte Weekly') => ({
		title,
		tags: seoMetaTags({
			title,
			description:
				'Svelte Weekly is your weekly digest of all things happening in the world of Svelte.'
		})
	}))();
</script>

<Seo title={metaTags.title} tags={metaTags.tags} />

<main>
	<!-- <Hero /> -->
	<div class="my-36">
		<Revue />
	</div>
	<!-- <Testimonials />
	<TrustedBy /> -->
</main>
