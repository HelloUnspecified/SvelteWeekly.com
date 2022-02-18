
<script>
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