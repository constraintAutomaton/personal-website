<script lang="ts">
	import { type IPublication } from '$lib';
	let { authors, year, venue, url, title }: IPublication = $props();
	const stringAuthors = authors.join(' and ');
</script>

<div class="publication">
	<div><span>Title:</span> <span><a href={url} target="_blank">{title}</a></span></div>
	<div><span>Author:</span> <span>{stringAuthors}</span></div>
	<div><span>Year:</span> <span>{year}</span></div>
	<div><span>Venue:</span> <span>{venue}</span></div>
</div>

<style>
	.publication {
		display: flex;
		flex-direction: column;
		margin-bottom: 1vh;
		border-bottom: solid 1px;
	}
</style>
