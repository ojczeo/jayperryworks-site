<!--
	sources = [
		{
			format: (STRING: file format)
			default: (BOOLEAN: is it the default format?)
			sizes: [
				{
					path: (STRING: path to file)
					size: (NUMBER or STRING: width of image)
				}
			]
		}
	]
-->

<script>
	export let sources = '',
		alt = '',
		border = false,
		contain = false,
		cover = false

	$: borderClass = border ? 'border border-solid' : ''

	let classes = ''
	export { classes as class }

	$: defaultFormat = sources.find(source => source.default)
	$: defaultSrc = defaultFormat.sizes[0].path

	function enhancedFormat (sources) {
		return sources.filter(source => !source.default)
	}

	// generate a srcset string
	function srcset (sizes) {
		return sizes.map((source) => {
			return source.size
				? `${source.path} ${source.size}w`
				: source.path
		})
	}
</script>

<style type="text/scss">
	picture {
		display: inline-block;
		max-width: 100%;
		overflow: hidden;
	}

	img {
		object-fit: scale-down;
		width: 100%;
		height: 100%;
	}

	.contain {
		object-fit: contain;
	}

	.cover {
		object-fit: cover;
	}
</style>

<picture
	class="{borderClass} {classes}"
>
	{#each enhancedFormat(sources) as source}
		<source
			srcset="{srcset(source.sizes)}"
			type="image/{source.format}"
		>
	{/each}
	<img
		src="{defaultSrc}"
		srcset="{srcset(defaultFormat.sizes.slice(1))}"
		{alt}
		class:contain
		class:cover
	>
</picture>
