<script lang="ts">
	import { type IPublication } from '$lib';
	import { t } from '$lib/translations';

	let { authors, year, venue, url, title }: IPublication = $props();
	const stringAuthors = authors.join(' and ');
</script>

<div class="publication" vocab="https://schema.org/" typeof="ScholarlyArticle">
	<div>
		<span>{$t('publication.title')}:</span>
		<span
			><a property="url" href={url} target="_blank"><span property="name">{title}</span></a></span
		>
	</div>
	<div>
		<span>{$t('publication.authors')}:</span> <span>{stringAuthors}</span>
		{#each authors as author}
			<meta property="author" content={author} />
		{/each}
	</div>
	<div>
		<span>{$t('publication.year')}:</span>
		<span><meta property="datePublished" content="{year.toFixed(0)}-01-01" />{year}</span>
	</div>
	<div><span>{$t('publication.venue')}:</span> <span property="isPartOf">{venue}</span></div>
</div>

<style>
	.publication {
		display: flex;
		flex-direction: column;
		margin-bottom: 1vh;
		border-bottom: solid 1px;
	}
</style>
