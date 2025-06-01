<script lang="ts">
	import Publication from './Publication.svelte';
	import Header from '../../components/Header.svelte';
	import { onMount } from 'svelte';
	import { generatePublication, type IPublication } from '$lib';
	import { t } from '$lib/translations';
	import bibtex from '../../../resume/works.bib?raw';

	let publicationEntries: IPublication[] = $state([]);

	onMount(async () => {
		publicationEntries = generatePublication(bibtex);
	});
</script>

<Header />

<noscript class="publication-block">
	<p>
		{@html $t('publication.noscript')}
	</p>
	<div vocab="http://www.w3.org/2000/01/rdf-schema#" typeof="Resource">
		<meta property="seeAlso" resource="/publication.ttl" />
	</div>
</noscript>

<div class="publication-block">
	{#each publicationEntries as publication}
		<Publication {...publication} />
	{/each}
</div>

<p class="text-footer">
	{@html $t('publication.foot')}
</p>

<style>
	.text-footer {
		margin-left: 5vw;
	}
	.publication-block {
		margin-top: 5vh;
		display: flex;
		flex-direction: column;
		align-self: center;
	}

	:global(body) {
		display: flex;
		flex-direction: column;
		align-self: center;
		justify-content: center;
		font-family: 'Courier New';
	}
</style>
