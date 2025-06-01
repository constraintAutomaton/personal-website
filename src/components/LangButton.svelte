<script lang="ts">
	import { getCachedLang, loadTranslations, setCachedLang } from '$lib';
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	const defaultColor = 'white';
	const activatedColor = 'rgb(130, 124, 124)';

	let frenchBtnColor = $state(defaultColor);
	let englishBtnColor = $state(defaultColor);
	onMount(() => {
		const lang = getCachedLang();
		if (lang === 'fr') {
			frenchBtnColor = activatedColor;
			englishBtnColor = defaultColor;
		}

		if (lang === 'en') {
			englishBtnColor = activatedColor;
			frenchBtnColor = defaultColor;
		}
	});
	async function setFrench(): Promise<void> {
		await loadTranslations('fr', page.url.pathname);
		setCachedLang('fr');
		frenchBtnColor = activatedColor;
		englishBtnColor = defaultColor;
	}

	async function setEnglish(): Promise<void> {
		await loadTranslations('en', page.url.pathname);
		setCachedLang('en');
		englishBtnColor = activatedColor;
		frenchBtnColor = defaultColor;
	}
</script>

<div>
	<button onclick={setFrench} style="background-color: {frenchBtnColor};">Fr</button><button
		onclick={setEnglish}
		style="background-color: {englishBtnColor};">En</button
	>
</div>

<style>
	div {
		position: fixed;
		top: 10px;
		left: 10px;
		opacity: 0.2;
	}

	div:hover {
		opacity: 1;
	}

	button {
		border: solid 1px;
		font-size: 1.3em;
		background-color: gainsboro;
	}
</style>
