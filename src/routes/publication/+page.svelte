<script lang="ts">
	import Publication from './Publication.svelte';
	import Header from '../../components/Header.svelte';
	import { onMount } from 'svelte';
	import { parseBibtex } from '@dataset.sh/bibtex-parser';
	import { type IPublication } from '$lib';
	import { t } from '$lib/translations';
	import bibtex from '../../../resume/works.bib?raw';

	let publicationEntries: IPublication[] = $state([]);

	onMount(async () => {
		const entries = parseBibtex(bibtex);
		for (const entry of entries) {
			if (entry.author === undefined) {
				throw new Error(`author is missing in ${entry}`);
			}

			if (entry.year === undefined) {
				throw new Error(`year is missing in ${entry}`);
			}
			if (entry.url === undefined) {
				throw new Error(`url is missing in ${entry}`);
			}
			if (entry.title === undefined) {
				throw new Error(`title is missing in ${entry}`);
			}
			let venue: string | undefined = undefined;
			if ('type' in entry && entry.type === 'article') {
				venue = entry.journal;
			}
			if ('type' in entry && entry.type === 'inproceedings') {
				venue = entry.booktitle;
			}
			if (venue === undefined) {
				throw new Error(`venue is missing in ${entry}`);
			}
			const publication: IPublication = {
				authors: entry.author,
				year: entry.year,
				url: entry.url,
				title: entry.title,
				venue
			};
			publicationEntries.push(publication);
		}
	});
</script>

<Header />
<div class="publication-block">
	{#each publicationEntries as publication}
		<Publication {...publication} />
	{/each}
</div>

<p class="text-footer">
	{@html $t('publication.foot')}
</p>

<style>
    .text-footer{
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
