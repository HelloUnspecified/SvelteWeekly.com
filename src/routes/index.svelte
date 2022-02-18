
<script>
	import Seo from '$components/Seo.svelte';
	import seoMetaTags from '$utils/seo/metaTags';	

	const metaTags = ((
		title = 'TEMPLATE'
	) => ({
		title,
		tags: seoMetaTags({
			title,
			description:
				'TEMPLATE'
		})
	}))();
</script>

<Seo title={metaTags.title} tags={metaTags.tags} />

<div>Hello World</div>