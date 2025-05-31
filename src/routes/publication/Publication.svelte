<script lang="ts">
	import { type IPublication } from '$lib';
	let { authors, year, venue, url, title }: IPublication = $props();
	const stringAuthors = authors.join(' and ');
</script>

<div class="publication" vocab="https://schema.org/" typeof="ScholarlyArticle">
	<div><span>Title:</span> <span><a property="url" href="{url}" target="_blank"><span property="name">{title}</span></a></span></div>
	<div><span>Author:</span> <span property="author">{stringAuthors}</span></div>
	<div><span>Year:</span> <span><meta property="datePublished" content="{year.toFixed(0)}-01-01" />{year}</span></div>
	<div><span>Venue:</span> <span property="isPartOf">{venue}</span></div>
</div>


<style>
	.publication {
		display: flex;
		flex-direction: column;
		margin-bottom: 1vh;
		border-bottom: solid 1px;
	}
</style>
